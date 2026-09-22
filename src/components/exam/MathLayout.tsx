import React, { useState } from 'react';
import { Bookmark, Eye, EyeOff, Sparkles, Delete } from 'lucide-react';
import { Question } from '../../types/exam';
import { MathText } from '../common/MathText';

interface MathLayoutProps {
  question: Question;
  selectedAnswer: string;
  onSelectAnswer: (val: string) => void;
  isMarkedForReview: boolean;
  onToggleMarkForReview: () => void;
  eliminatedOptions: string[];
  onToggleEliminateOption: (option: string) => void;
  isPracticeMode: boolean;
}

export const MathLayout: React.FC<MathLayoutProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  isMarkedForReview,
  onToggleMarkForReview,
  eliminatedOptions,
  onToggleEliminateOption,
  isPracticeMode,
}) => {
  const [showPracticeExplanation, setShowPracticeExplanation] = useState<boolean>(false);
  const options: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  const isGridIn = question.type === 'grid-in';

  // Handle virtual keypad click for grid-in
  const handleKeypadPress = (char: string) => {
    if (char === 'DEL') {
      onSelectAnswer(selectedAnswer.slice(0, -1));
    } else if (char === 'CLEAR') {
      onSelectAnswer('');
    } else {
      // Limit to 6 characters (official Digital SAT grid-in length limit)
      if (selectedAnswer.length < 6) {
        onSelectAnswer(selectedAnswer + char);
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-white">
      {/* LEFT COLUMN: Problem Stimulus & Question */}
      <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col bg-slate-50/40">
        {/* Left Subheader */}
        <div className="px-6 py-2.5 bg-slate-100/80 border-b border-gray-200 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold uppercase tracking-wider text-slate-700">Math Problem</span>
            <span className="text-gray-300">•</span>
            <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-medium">
              {question.domain}
            </span>
          </div>

          <div className="text-[11px] text-gray-500 font-medium">
            {question.type === 'grid-in' ? 'Student-Produced Response' : 'Multiple Choice'}
          </div>
        </div>

        {/* Problem Content Container */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 bluebook-scrollbar space-y-6">
          {/* Question passage or setup context */}
          {question.passage && (
            <div className="text-gray-800 text-sm md:text-base leading-relaxed bg-white p-4 rounded-xl border border-gray-200 shadow-2xs font-serif">
              <MathText text={question.passage} />
            </div>
          )}

          {/* Optional Geometric Figure or Visual SVG */}
          {question.figure && (
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              {question.figure.title && (
                <div className="text-xs font-bold text-gray-600 mb-2">{question.figure.title}</div>
              )}
              {question.figure.svgContent && (
                <div
                  className="max-w-xs w-full flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: question.figure.svgContent }}
                />
              )}
              {question.figure.caption && (
                <div className="text-xs text-gray-500 italic mt-2 text-center">
                  {question.figure.caption}
                </div>
              )}
            </div>
          )}

          {/* Question Prompt */}
          <div className="text-gray-900 font-medium text-base md:text-lg leading-relaxed">
            <MathText text={question.prompt} />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Input Area (Options or Grid-In Keypad) */}
      <div className="w-full md:w-1/2 flex flex-col bg-white overflow-y-auto bluebook-scrollbar">
        {/* Right Subheader */}
        <div className="px-6 py-2.5 bg-slate-100/80 border-b border-gray-200 flex items-center justify-between text-xs text-gray-700">
          <div className="flex items-center gap-2 font-sans font-bold text-sm text-slate-800">
            <span className="w-6 h-6 rounded-md bg-slate-800 text-white flex items-center justify-center text-xs">
              {question.questionNumber}
            </span>
            <span className="text-gray-400 font-normal">|</span>
            <span className="text-xs font-semibold text-gray-600">{question.skill}</span>
          </div>

          <button
            onClick={onToggleMarkForReview}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all border ${
              isMarkedForReview
                ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-2xs'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isMarkedForReview ? 'fill-amber-600 text-amber-600' : 'text-gray-500'}`} />
            <span>Mark for Review</span>
          </button>
        </div>

        {/* Input Body */}
        <div className="p-6 md:p-8 space-y-6 flex-1">
          {/* MULTIPLE CHOICE MODE */}
          {!isGridIn && question.options && (
            <div className="space-y-3 font-sans">
              <div className="text-xs font-medium text-gray-500 mb-2">Select the best answer choice:</div>
              {options.map((opt) => {
                const optText = question.options?.[opt];
                if (!optText) return null;

                const isSelected = selectedAnswer === opt;
                const isEliminated = eliminatedOptions.includes(opt);

                return (
                  <div
                    key={opt}
                    className={`group relative flex items-start gap-3 p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/60 shadow-xs'
                        : isEliminated
                        ? 'border-gray-200 bg-gray-100/80 text-gray-400 line-through'
                        : 'border-gray-200 hover:border-gray-400 bg-white hover:bg-slate-50/50'
                    }`}
                    onClick={() => {
                      if (!isEliminated) {
                        onSelectAnswer(opt);
                      }
                    }}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600'
                          : isEliminated
                          ? 'bg-gray-200 text-gray-400 border-gray-300'
                          : 'bg-white text-gray-700 border-gray-300 group-hover:border-gray-500'
                      }`}
                    >
                      {opt}
                    </div>

                    <div className="flex-1 text-sm font-normal text-gray-800 pt-1 leading-relaxed">
                      <MathText text={optText} />
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleEliminateOption(opt);
                      }}
                      className={`shrink-0 p-1 rounded-md text-xs font-bold transition-colors ${
                        isEliminated
                          ? 'bg-slate-300 text-slate-800'
                          : 'text-gray-300 hover:text-gray-600 hover:bg-gray-100'
                      }`}
                      title={isEliminated ? 'Restore option' : 'Eliminate option'}
                    >
                      ABC
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* GRID-IN (STUDENT-PRODUCED RESPONSE) MODE */}
          {isGridIn && (
            <div className="space-y-5">
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 text-xs text-blue-900 leading-relaxed">
                <span className="font-bold">Student-Produced Response Guidelines:</span>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-blue-800">
                  <li>Enter your answer as an integer, decimal (e.g., 3.5), or fraction (e.g., 7/2).</li>
                  <li>Enter at most 5 or 6 characters including negative sign (-) or slash (/).</li>
                  <li>Do not include units or symbols ($ or %).</li>
                </ul>
              </div>

              {/* Answer Input Field */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Your Answer:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={selectedAnswer}
                    onChange={(e) => {
                      // Only allow valid grid-in characters: 0-9, ., /, -
                      const val = e.target.value.replace(/[^0-9./-]/g, '').slice(0, 6);
                      onSelectAnswer(val);
                    }}
                    placeholder="Enter value"
                    className="w-48 text-xl font-mono font-bold px-3 py-2 border-2 border-blue-600 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-400 bg-white shadow-inner"
                  />
                  {selectedAnswer && (
                    <button
                      onClick={() => onSelectAnswer('')}
                      className="text-xs text-rose-600 hover:underline px-2 py-1 font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Virtual On-Screen Digital SAT Keypad */}
              <div className="max-w-xs border border-gray-200 rounded-xl p-3 bg-slate-50 shadow-2xs">
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2 text-center">
                  Digital SAT Grid-In Keypad
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['7', '8', '9', '/',
                    '4', '5', '6', '.',
                    '1', '2', '3', '-',
                    '0', 'CLEAR', 'DEL'
                  ].map((k) => (
                    <button
                      key={k}
                      onClick={() => handleKeypadPress(k)}
                      className={`py-2 rounded-lg font-mono font-bold text-sm transition-all active:scale-95 border ${
                        k === 'CLEAR' || k === 'DEL'
                          ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100 col-span-1 text-xs'
                          : ['/', '.', '-'].includes(k)
                          ? 'bg-blue-100 text-blue-900 border-blue-200 hover:bg-blue-200'
                          : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                      } ${k === '0' ? 'col-span-2' : ''}`}
                    >
                      {k === 'DEL' ? <Delete className="w-4 h-4 mx-auto" /> : k}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Practice Mode Solution Reveal */}
          {isPracticeMode && (
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => setShowPracticeExplanation(!showPracticeExplanation)}
                className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
              >
                {showPracticeExplanation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showPracticeExplanation ? 'Hide Solution & Strategy' : 'Reveal Solution & Strategy'}</span>
              </button>

              {showPracticeExplanation && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-3 animate-fade-in text-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">
                      Correct Answer: {question.correctAnswer}
                    </span>
                    <span className="text-gray-500">• Difficulty: {question.difficulty}</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Step-by-Step Derivation:</h4>
                    <div className="leading-relaxed text-gray-700 space-y-2">
                      <MathText text={question.explanation} />
                    </div>
                  </div>

                  {question.distractorAnalysis && (
                    <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-2.5 space-y-1">
                      <h4 className="font-bold text-amber-900">Trap Distractor Breakdown:</h4>
                      {Object.entries(question.distractorAnalysis).map(([k, v]) => (
                        <div key={k} className="text-amber-950">
                          <strong>Choice {k}:</strong> <MathText text={v} />
                        </div>
                      ))}
                    </div>
                  )}

                  {question.strategyTip && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-blue-900">Desmos / Speed Strategy: </strong>
                        <span className="text-blue-950"><MathText text={question.strategyTip} /></span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
