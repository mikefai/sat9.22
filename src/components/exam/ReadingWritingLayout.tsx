import React, { useState } from 'react';
import { Bookmark, Eye, EyeOff, Sparkles, SlidersHorizontal, Table } from 'lucide-react';
import { Question } from '../../types/exam';
import { MathText } from '../common/MathText';

interface ReadingWritingLayoutProps {
  question: Question;
  selectedAnswer: string;
  onSelectAnswer: (option: 'A' | 'B' | 'C' | 'D') => void;
  isMarkedForReview: boolean;
  onToggleMarkForReview: () => void;
  eliminatedOptions: string[];
  onToggleEliminateOption: (option: string) => void;
  isAnnotatorActive: boolean;
  isPracticeMode: boolean;
}

export const ReadingWritingLayout: React.FC<ReadingWritingLayoutProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  isMarkedForReview,
  onToggleMarkForReview,
  eliminatedOptions,
  onToggleEliminateOption,
  isAnnotatorActive,
  isPracticeMode,
}) => {
  const [showPracticeExplanation, setShowPracticeExplanation] = useState<boolean>(false);
  const [highlightColor, setHighlightColor] = useState<'yellow' | 'blue' | 'pink'>('yellow');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const options: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  return (
    <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-white">
      {/* LEFT COLUMN: Passage & Stimulus */}
      <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col bg-slate-50/50">
        {/* Left Column Subheader */}
        <div className="px-6 py-2.5 bg-slate-100/80 border-b border-gray-200 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold uppercase tracking-wider text-slate-700">Passage</span>
            <span className="text-gray-300">•</span>
            <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-medium">
              {question.domain}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFontSize(f => f === 'normal' ? 'large' : 'normal')}
              className="text-[11px] text-gray-600 hover:text-gray-900 bg-white border border-gray-200 px-2 py-0.5 rounded font-mono"
              title="Toggle Font Size"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>
          </div>
        </div>

        {/* Highlighter Toolbar if Active */}
        {isAnnotatorActive && (
          <div className="px-6 py-2 bg-amber-50 border-b border-amber-200 flex items-center justify-between text-xs animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-amber-900">Highlighter:</span>
              <button
                onClick={() => setHighlightColor('yellow')}
                className={`w-5 h-5 rounded-full bg-yellow-300 border-2 ${
                  highlightColor === 'yellow' ? 'border-slate-800 scale-110' : 'border-transparent'
                }`}
                title="Yellow highlight"
              />
              <button
                onClick={() => setHighlightColor('blue')}
                className={`w-5 h-5 rounded-full bg-sky-200 border-2 ${
                  highlightColor === 'blue' ? 'border-slate-800 scale-110' : 'border-transparent'
                }`}
                title="Blue highlight"
              />
              <button
                onClick={() => setHighlightColor('pink')}
                className={`w-5 h-5 rounded-full bg-pink-200 border-2 ${
                  highlightColor === 'pink' ? 'border-slate-800 scale-110' : 'border-transparent'
                }`}
                title="Pink highlight"
              />
            </div>
            <span className="text-[11px] text-amber-800 italic">Select text in the passage to highlight</span>
          </div>
        )}

        {/* Passage Content Container */}
        <div className={`p-6 md:p-8 overflow-y-auto flex-1 bluebook-scrollbar text-gray-800 leading-relaxed font-serif ${
          fontSize === 'large' ? 'text-lg leading-loose' : 'text-base leading-relaxed'
        }`}>
          {question.passage ? (
            <div className="whitespace-pre-line space-y-4">
              <MathText text={question.passage} />
            </div>
          ) : (
            <div className="text-gray-400 italic">No passage provided for this item.</div>
          )}

          {/* Optional Data Table or Figure */}
          {question.figure && question.figure.type === 'table' && question.figure.headers && (
            <div className="mt-6 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-2xs">
              {question.figure.title && (
                <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-gray-700 uppercase tracking-wide border-b border-gray-300">
                  {question.figure.title}
                </div>
              )}
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-300">
                    {question.figure.headers.map((h, i) => (
                      <th key={i} className="p-2.5 font-semibold text-gray-800 border-r border-gray-200 last:border-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {question.figure.rows?.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-gray-200 hover:bg-slate-50/50">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-2.5 border-r border-gray-200 last:border-0 font-sans">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Question Prompt & Options */}
      <div className="w-full md:w-1/2 flex flex-col bg-white overflow-y-auto bluebook-scrollbar">
        {/* Right Column Subheader: Question # and Mark for Review */}
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

        {/* Question Prompt */}
        <div className="p-6 md:p-8 space-y-6 flex-1">
          <div className="text-gray-900 font-medium text-base leading-snug">
            <MathText text={question.prompt} />
          </div>

          {/* Multiple Choice Options */}
          {question.options && (
            <div className="space-y-3 font-sans">
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
                    {/* Option letter bubble */}
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

                    {/* Option Text */}
                    <div className="flex-1 text-sm font-normal text-gray-800 pt-1 leading-relaxed">
                      <MathText text={optText} />
                    </div>

                    {/* Option Eliminator / Strikethrough toggle button */}
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
                      title={isEliminated ? 'Restore option' : 'Eliminate option (strikethrough)'}
                    >
                      ABC
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Practice Mode Instant Explanation */}
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
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Correct Answer: {question.correctAnswer}
                    </span>
                    <span className="text-gray-500">• Difficulty: {question.difficulty}</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Step-by-Step Explanation:</h4>
                    <p className="leading-relaxed text-gray-700">
                      <MathText text={question.explanation} />
                    </p>
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
                        <strong className="text-blue-900">Elite Strategy: </strong>
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
