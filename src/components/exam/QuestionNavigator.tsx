import React from 'react';
import { Bookmark, X } from 'lucide-react';
import { Question } from '../../types/exam';

interface QuestionNavigatorProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, string>;
  markedForReview: Record<string, boolean>;
  onSelectQuestion: (index: number) => void;
  sectionTitle: string;
  moduleNumber: number;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  isOpen,
  onClose,
  questions,
  currentQuestionIndex,
  answers,
  markedForReview,
  onSelectQuestion,
  sectionTitle,
  moduleNumber,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-2 sm:p-4 animate-fade-in">
      <div 
        className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col border border-gray-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nav-dialog-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white">
          <div>
            <h2 id="nav-dialog-title" className="text-sm sm:text-base font-bold">
              {sectionTitle} - Module {moduleNumber} Question Menu
            </h2>
            <span className="text-xs text-slate-300">
              Jump directly to any question or review your answered/unanswered items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close question menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 px-5 py-3 bg-slate-50 border-b border-gray-200 text-xs text-gray-700">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-sm border-2 border-blue-600 bg-blue-50 block"></span>
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-sm bg-slate-800 text-white block"></span>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-sm border border-dashed border-gray-400 bg-white block"></span>
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>For Review</span>
          </div>
        </div>

        {/* Grid of Questions */}
        <div className="p-5 overflow-y-auto bluebook-scrollbar">
          <div className="grid grid-cols-5 sm:grid-cols-9 gap-2.5">
            {questions.map((q, idx) => {
              const isCurrent = idx === currentQuestionIndex;
              const hasAnswer = Boolean(answers[q.id]?.toString().trim());
              const isMarked = Boolean(markedForReview[q.id]);

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(idx);
                    onClose();
                  }}
                  className={`relative h-12 rounded-lg flex flex-col items-center justify-center text-sm font-semibold transition-all border ${
                    isCurrent
                      ? 'border-2 border-blue-600 bg-blue-50 text-blue-900 shadow-sm'
                      : hasAnswer
                      ? 'bg-slate-800 text-white border-slate-900 hover:bg-slate-700'
                      : 'bg-white border-dashed border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-50'
                  }`}
                  aria-label={`Question ${idx + 1}, ${hasAnswer ? 'Answered' : 'Unanswered'}, ${isMarked ? 'Marked for review' : ''}`}
                >
                  {isMarked && (
                    <div className="absolute -top-1.5 -right-1 text-amber-500">
                      <Bookmark className="w-4 h-4 fill-amber-500" />
                    </div>
                  )}
                  <span>{idx + 1}</span>
                  {hasAnswer && !isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs text-gray-600">
          <div>
            Total: <strong>{questions.length}</strong> questions | Answered: {' '}
            <strong>
              {questions.filter(q => Boolean(answers[q.id]?.toString().trim())).length}
            </strong>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
          >
            Return to Test
          </button>
        </div>
      </div>
    </div>
  );
};
