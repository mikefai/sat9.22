import React from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

interface ExamFooterProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenNavigator: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  onReviewModule: () => void;
}

export const ExamFooter: React.FC<ExamFooterProps> = ({
  currentQuestionNumber,
  totalQuestions,
  onPrev,
  onNext,
  onOpenNavigator,
  isFirstQuestion,
  isLastQuestion,
  onReviewModule,
}) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 select-none py-2.5 px-4 sticky bottom-0 z-30 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Previous Button */}
        <div>
          <button
            onClick={onPrev}
            disabled={isFirstQuestion}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isFirstQuestion
                ? 'opacity-30 cursor-not-allowed text-slate-500'
                : 'bg-slate-800 text-white hover:bg-slate-700 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Center: Question Navigator Toggle */}
        <div>
          <button
            onClick={onOpenNavigator}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 hover:text-white transition-all shadow-inner"
          >
            <LayoutGrid className="w-4 h-4 text-blue-400" />
            <span>
              Question <strong className="text-white">{currentQuestionNumber}</strong> of{' '}
              {totalQuestions}
            </span>
            <span className="text-xs text-slate-400">▲</span>
          </button>
        </div>

        {/* Next or Review Button */}
        <div>
          {isLastQuestion ? (
            <button
              onClick={onReviewModule}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md active:scale-95"
            >
              <span>Review Module</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md active:scale-95"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
