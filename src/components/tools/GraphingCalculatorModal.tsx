import React, { useState, useEffect, useRef } from 'react';
import { X, Calculator, Plus, Trash2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface GraphingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FunctionItem {
  id: string;
  expr: string;
  color: string;
}

export const GraphingCalculatorModal: React.FC<GraphingCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'graph' | 'calc'>('graph');
  const [calcInput, setCalcInput] = useState<string>('');
  const [calcResult, setCalcResult] = useState<string>('');
  
  // Graphing state
  const [functions, setFunctions] = useState<FunctionItem[]>([
    { id: '1', expr: 'x^2 - 4', color: '#2563eb' },
    { id: '2', expr: '2*x + 1', color: '#dc2626' }
  ]);
  const [scale, setScale] = useState<number>(30); // pixels per unit
  const [originOffset, setOriginOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Parse simple expressions like "2*x - 3", "x^2", "sin(x)", etc.
  const evaluateFunction = (expr: string, x: number): number | null => {
    try {
      // sanitize and replace common syntax
      let clean = expr
        .replace(/\^/g, '**')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/sqrt/g, 'Math.sqrt')
        .replace(/abs/g, 'Math.abs')
        .replace(/pi/gi, 'Math.PI')
        .replace(/e/g, 'Math.E');

      // Add multiplication between coefficient and x: e.g. 2x -> 2*x
      clean = clean.replace(/(\d)x/g, '$1*x');
      clean = clean.replace(/(\d)\(/g, '$1*(');
      clean = clean.replace(/\)x/g, ')*x');

      // evaluate with Function constructor safely in controlled scope
      const fn = new Function('x', `return ${clean};`);
      const val = fn(x);
      if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
        return val;
      }
      return null;
    } catch {
      return null;
    }
  };

  // Redraw canvas
  useEffect(() => {
    if (!isOpen || activeTab !== 'graph') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2 + originOffset.x;
    const centerY = height / 2 + originOffset.y;

    // Clear background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#f1f5f9';

    const xMin = -centerX / scale;
    const xMax = (width - centerX) / scale;
    const yMin = -(height - centerY) / scale;
    const yMax = centerY / scale;

    // Light grid lines
    ctx.beginPath();
    for (let x = Math.floor(xMin); x <= Math.ceil(xMax); x++) {
      const px = centerX + x * scale;
      ctx.moveTo(px, 0);
      ctx.lineTo(px, height);
    }
    for (let y = Math.floor(yMin); y <= Math.ceil(yMax); y++) {
      const py = centerY - y * scale;
      ctx.moveTo(0, py);
      ctx.lineTo(width, py);
    }
    ctx.stroke();

    // Draw main axes
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    // X-axis
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    // Y-axis
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Numbers on axes
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    for (let x = Math.floor(xMin); x <= Math.ceil(xMax); x++) {
      if (x === 0) continue;
      const px = centerX + x * scale;
      ctx.fillText(x.toString(), px, centerY + 4);
    }
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let y = Math.floor(yMin); y <= Math.ceil(yMax); y++) {
      if (y === 0) continue;
      const py = centerY - y * scale;
      ctx.fillText(y.toString(), centerX - 4, py);
    }

    // Plot each function
    functions.forEach(f => {
      if (!f.expr.trim()) return;
      ctx.strokeStyle = f.color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      let isDrawing = false;
      const pixelStep = 2; // sample every 2px for smoothness

      for (let px = 0; px <= width; px += pixelStep) {
        const x = (px - centerX) / scale;
        const y = evaluateFunction(f.expr, x);

        if (y !== null) {
          const py = centerY - y * scale;
          if (py >= -100 && py <= height + 100) {
            if (!isDrawing) {
              ctx.moveTo(px, py);
              isDrawing = true;
            } else {
              ctx.lineTo(px, py);
            }
          } else {
            isDrawing = false;
          }
        } else {
          isDrawing = false;
        }
      }
      ctx.stroke();
    });
  }, [isOpen, activeTab, functions, scale, originOffset]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - originOffset.x, y: e.clientY - originOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    setOriginOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const addFunction = () => {
    const colors = ['#2563eb', '#dc2626', '#16a34a', '#9333ea', '#ea580c'];
    const nextColor = colors[functions.length % colors.length];
    setFunctions([...functions, { id: Date.now().toString(), expr: '', color: nextColor }]);
  };

  const removeFunction = (id: string) => {
    setFunctions(functions.filter(f => f.id !== id));
  };

  const updateFunctionExpr = (id: string, expr: string) => {
    setFunctions(functions.map(f => f.id === id ? { ...f, expr } : f));
  };

  // Scientific calculator evaluation
  const handleCalcButton = (val: string) => {
    if (val === 'C') {
      setCalcInput('');
      setCalcResult('');
    } else if (val === 'DEL') {
      setCalcInput(prev => prev.slice(0, -1));
    } else if (val === '=') {
      try {
        let sanitized = calcInput
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/\^/g, '**')
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/sqrt\(/g, 'Math.sqrt(')
          .replace(/π/g, 'Math.PI')
          .replace(/e/g, 'Math.E');

        // evaluate safely
        const res = new Function(`return ${sanitized};`)();
        if (typeof res === 'number') {
          // format nicely
          const formatted = Math.round(res * 1e8) / 1e8;
          setCalcResult(formatted.toString());
        } else {
          setCalcResult('Error');
        }
      } catch {
        setCalcResult('Error');
      }
    } else {
      setCalcInput(prev => prev + val);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col border border-gray-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="calc-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 id="calc-title" className="text-base font-bold tracking-wide">
                Digital SAT Graphing & Scientific Calculator
              </h2>
              <span className="text-xs text-slate-300">Desmos-compatible graphing tool</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-800 p-1 rounded-lg text-xs">
              <button
                onClick={() => setActiveTab('graph')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  activeTab === 'graph' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Graphing Plotter
              </button>
              <button
                onClick={() => setActiveTab('calc')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  activeTab === 'calc' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Scientific Calc
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close calculator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        {activeTab === 'graph' ? (
          <div className="flex flex-col md:flex-row flex-1 min-h-[500px] overflow-hidden">
            {/* Left sidebar: Function inputs */}
            <div className="w-full md:w-80 border-r border-gray-200 bg-gray-50 p-4 flex flex-col gap-3 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Functions</span>
                <button
                  onClick={addFunction}
                  className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200 hover:bg-blue-100 font-medium"
                >
                  <Plus className="w-3.5 h-3.5" /> Add $y=f(x)$
                </button>
              </div>

              <div className="space-y-2">
                {functions.map((f, index) => (
                  <div key={f.id} className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold" style={{ color: f.color }}>
                        y{index + 1} =
                      </span>
                      {functions.length > 1 && (
                        <button
                          onClick={() => removeFunction(f.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={f.expr}
                      onChange={(e) => updateFunctionExpr(f.id, e.target.value)}
                      placeholder="e.g. x^2 - 4 or 2x + 1"
                      className="w-full text-sm font-mono px-2 py-1 border border-gray-300 rounded focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>

              {/* Quick Math Shortcuts */}
              <div className="mt-auto pt-3 border-t border-gray-200 text-xs text-gray-500 space-y-1">
                <div className="font-medium text-gray-700">Supported Syntax:</div>
                <div className="font-mono bg-white p-2 rounded border border-gray-200 space-y-1">
                  <div>$x^2 \to$ <code className="text-blue-600 font-bold">x^2</code></div>
                  <div>$\sqrt&#123;x&#125; \to$ <code className="text-blue-600 font-bold">sqrt(x)</code></div>
                  <div>$\sin(x) \to$ <code className="text-blue-600 font-bold">sin(x)</code></div>
                  <div>$|x| \to$ <code className="text-blue-600 font-bold">abs(x)</code></div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Canvas Plotter */}
            <div className="flex-1 flex flex-col bg-white relative">
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 rounded-lg border border-gray-300 shadow-xs z-10">
                <button
                  onClick={() => setScale(s => Math.min(s * 1.3, 120))}
                  title="Zoom In"
                  className="p-1 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setScale(s => Math.max(s / 1.3, 10))}
                  title="Zoom Out"
                  className="p-1 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => { setScale(30); setOriginOffset({ x: 0, y: 0 }); }}
                  title="Reset View"
                  className="p-1 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 w-full h-full flex items-center justify-center p-2">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={460}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  className="w-full h-full border border-gray-100 cursor-grab active:cursor-grabbing rounded"
                />
              </div>
            </div>
          </div>
        ) : (
          /* Scientific Calculator View */
          <div className="p-6 max-w-xl mx-auto w-full flex flex-col gap-4">
            <div className="bg-slate-900 rounded-xl p-4 text-right shadow-inner">
              <div className="text-slate-400 text-xs font-mono h-5 overflow-x-auto">{calcInput || '0'}</div>
              <div className="text-white text-3xl font-bold font-mono tracking-wider overflow-x-auto">
                {calcResult || calcInput || '0'}
              </div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-5 gap-2 text-sm font-semibold">
              {['sin(', 'cos(', 'tan(', '(', ')',
                'sqrt(', '^', 'π', 'e', 'DEL',
                '7', '8', '9', '÷', 'C',
                '4', '5', '6', '×', '-',
                '1', '2', '3', '+', '=',
                '0', '.', '00'
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handleCalcButton(btn)}
                  className={`py-3 rounded-lg transition-colors shadow-2xs active:scale-95 ${
                    btn === '='
                      ? 'col-span-2 bg-blue-600 text-white hover:bg-blue-700 text-base font-bold'
                      : btn === 'C' || btn === 'DEL'
                      ? 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                      : ['÷', '×', '-', '+'].includes(btn)
                      ? 'bg-amber-100 text-amber-900 hover:bg-amber-200 font-bold'
                      : ['sin(', 'cos(', 'tan(', 'sqrt(', '^', 'π', 'e', '(', ')'].includes(btn)
                      ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 font-mono text-xs'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-100 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
          <span>Official Bluebook Calculator Spec (Graphing + Scientific)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 font-medium text-xs transition-colors"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
