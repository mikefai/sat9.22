import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { MathText } from '../common/MathText';

interface ReferenceSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceSheetModal: React.FC<ReferenceSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ref-sheet-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h2 id="ref-sheet-title" className="text-lg font-semibold tracking-wide">
              SAT Math Reference Sheet
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close reference sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-gray-800 bluebook-scrollbar text-sm">
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md text-amber-900 text-xs font-medium">
            This reference sheet provides formulas exactly as given in the official Digital SAT Bluebook exam application.
          </div>

          {/* Formulas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Circle Area & Circumference */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <svg className="w-20 h-20 text-blue-600 mb-2" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <line x1="50" y1="50" x2="88" y2="50" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="3" fill="#dc2626" />
                <text x="66" y="44" fontSize="13" fill="#dc2626" fontStyle="italic">r</text>
              </svg>
              <div className="font-semibold text-gray-900 mb-1">Circle</div>
              <div className="text-gray-700 space-y-1">
                <div><MathText text="$A = \pi r^2$" /></div>
                <div><MathText text="$C = 2\pi r$" /></div>
              </div>
            </div>

            {/* Rectangle Area */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <svg className="w-24 h-20 text-emerald-600 mb-2" viewBox="0 0 120 100">
                <rect x="15" y="20" width="90" height="55" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <text x="55" y="90" fontSize="13" fill="#374151" fontStyle="italic">w</text>
                <text x="5" y="52" fontSize="13" fill="#374151" fontStyle="italic">ℓ</text>
              </svg>
              <div className="font-semibold text-gray-900 mb-1">Rectangle</div>
              <div className="text-gray-700">
                <MathText text="$A = \ell w$" />
              </div>
            </div>

            {/* Triangle Area */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <svg className="w-24 h-20 text-indigo-600 mb-2" viewBox="0 0 120 100">
                <polygon points="20,80 100,80 60,20" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <line x1="60" y1="20" x2="60" y2="80" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="57" y="96" fontSize="13" fill="#374151" fontStyle="italic">b</text>
                <text x="64" y="55" fontSize="13" fill="#dc2626" fontStyle="italic">h</text>
              </svg>
              <div className="font-semibold text-gray-900 mb-1">Triangle</div>
              <div className="text-gray-700">
                <MathText text="$A = \frac{1}{2}bh$" />
              </div>
            </div>

            {/* Pythagorean Theorem */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <svg className="w-24 h-20 text-purple-600 mb-2" viewBox="0 0 120 100">
                <polygon points="25,80 95,80 25,25" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="25" y="70" width="10" height="10" fill="none" stroke="#6b7280" strokeWidth="1.5" />
                <text x="55" y="95" fontSize="13" fill="#374151" fontStyle="italic">a</text>
                <text x="12" y="55" fontSize="13" fill="#374151" fontStyle="italic">b</text>
                <text x="65" y="48" fontSize="13" fill="#374151" fontStyle="italic">c</text>
              </svg>
              <div className="font-semibold text-gray-900 mb-1">Pythagorean Theorem</div>
              <div className="text-gray-700">
                <MathText text="$c^2 = a^2 + b^2$" />
              </div>
            </div>

            {/* Special Right Triangle 30-60-90 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <svg className="w-24 h-20 text-amber-600 mb-2" viewBox="0 0 120 100">
                <polygon points="20,80 95,80 20,20" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <text x="50" y="95" fontSize="12" fill="#374151">x</text>
                <text x="5" y="50" fontSize="12" fill="#374151">x√3</text>
                <text x="65" y="45" fontSize="12" fill="#374151">2x</text>
                <text x="24" y="32" fontSize="11" fill="#dc2626">30°</text>
                <text x="75" y="76" fontSize="11" fill="#dc2626">60°</text>
              </svg>
              <div className="font-semibold text-gray-900 mb-1">Special Right Triangle</div>
              <div className="text-gray-700 text-xs">
                Sides opposite $30^\circ, 60^\circ, 90^\circ$ are $x, x\sqrt{3}, 2x$
              </div>
            </div>

            {/* Special Right Triangle 45-45-90 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <svg className="w-24 h-20 text-cyan-600 mb-2" viewBox="0 0 120 100">
                <polygon points="25,80 85,80 25,20" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <text x="50" y="95" fontSize="12" fill="#374151">s</text>
                <text x="12" y="55" fontSize="12" fill="#374151">s</text>
                <text x="60" y="45" fontSize="12" fill="#374151">s√2</text>
                <text x="28" y="32" fontSize="11" fill="#dc2626">45°</text>
                <text x="68" y="76" fontSize="11" fill="#dc2626">45°</text>
              </svg>
              <div className="font-semibold text-gray-900 mb-1">Special Right Triangle</div>
              <div className="text-gray-700 text-xs">
                Sides opposite $45^\circ, 45^\circ, 90^\circ$ are $s, s, s\sqrt{2}$
              </div>
            </div>

            {/* Rectangular Prism Volume */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <div className="font-semibold text-gray-900 mb-1">Rectangular Prism</div>
              <div className="text-gray-700 text-base">
                <MathText text="$V = \ell w h$" />
              </div>
            </div>

            {/* Cylinder Volume */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <div className="font-semibold text-gray-900 mb-1">Right Circular Cylinder</div>
              <div className="text-gray-700 text-base">
                <MathText text="$V = \pi r^2 h$" />
              </div>
            </div>

            {/* Sphere Volume */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <div className="font-semibold text-gray-900 mb-1">Sphere</div>
              <div className="text-gray-700 text-base">
                <MathText text="$V = \frac{4}{3} \pi r^3$" />
              </div>
            </div>

            {/* Cone Volume */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <div className="font-semibold text-gray-900 mb-1">Right Circular Cone</div>
              <div className="text-gray-700 text-base">
                <MathText text="$V = \frac{1}{3} \pi r^2 h$" />
              </div>
            </div>

            {/* Pyramid Volume */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center text-center">
              <div className="font-semibold text-gray-900 mb-1">Pyramid</div>
              <div className="text-gray-700 text-base">
                <MathText text="$V = \frac{1}{3} \ell w h$" />
              </div>
            </div>
          </div>

          {/* Key Facts and Angle Conversions */}
          <div className="bg-slate-100 rounded-lg p-4 border border-slate-300">
            <h3 className="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide">
              Official Key Test Information:
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm">
              <li>The number of degrees of arc in a circle is <strong className="text-gray-900">360</strong>.</li>
              <li>The number of radians of arc in a circle is <strong className="text-gray-900"><MathText text="$2\pi$" /></strong>.</li>
              <li>The sum of the measures in degrees of the angles of a triangle is <strong className="text-gray-900">180</strong>.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-100 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium text-sm"
          >
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
};
