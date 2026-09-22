import React from 'react';
import { Bookmark, AlertTriangle, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Question, SectionType } from '../../types/exam';

interface ModuleReviewScreenProps {
  sectionType: SectionType;
  moduleNumber: 1 | 2;
  questions: Question[];
  answers: Record<string, string>;
  markedForReview: Record<string, boolean>;
  onJumpToQuestion: (index: number) => void;
  onSubmitModule: () => void;
  onBackToExam: () => void;
}

export const ModuleReviewScreen: React.FC<ModuleReviewScreenProps> = ({
  sectionType,
  moduleNumber,
  questions,
  answers,
  markedForReview,
  onJumpToQuestion,
  onSubmitModule,
  onBackToExam,
}) => {
  const answeredCount = questions.filter(q => Boolean(answers[q.id]?.toString().trim())).length;
  const unansweredCount = questions.length - answeredCount;
  const markedCount = questions.filter(q => Boolean(markedForReview[q.id])).length;

  const sectionName = sectionType === 'rw' ? 'Reading and Writing' : 'Math';

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto bluebook-scrollbar">
      <div className="max-w-4xl mx-auto w-full p-6 md:p-10 space-y-8 flex-1">
        {/* Banner */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                End of {sectionName} - Module {moduleNumber}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 mt-2">
                Check Your Work
              </h1>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                Review your answers below. You can click on any question number to go back and check or change your response. Once you submit this module, you will not be able to return to these questions.
              </p>
            </div>
          </div>

          {/* Status summary badges */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="bg-slate-50 p-3 rounded-xl border border-gray-200 text-center">
              <div className="text-2xl font-bold text-slate-800">{answeredCount}</div>
              <div className="text-xs text-gray-500 font-medium">Answered</div>
            </div>
            
            <div className={`p-3 rounded-xl border text-center ${
              unansweredCount > 0 ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-gray-200'
            }`}>
              <div className={`text-2xl font-bold ${unansweredCount > 0 ? 'text-amber-700' : 'text-slate-800'}`}>
                {unansweredCount}
              </div>
              <div className="text-xs text-gray-500 font-medium">Unanswered</div>
            </div>

            <div className={`p-3 rounded-xl border text-center ${
              markedCount > 0 ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-gray-200'
            }`}>
              <div className={`text-2xl font-bold ${markedCount > 0 ? 'text-indigo-700' : 'text-slate-800'}`}>
                {markedCount}
              </div>
              <div className="text-xs text-gray-500 font-medium">For Review</div>
            </div>
          </div>

          {unansweredCount > 0 && (
            <div className="mt-4 flex items-center gap-2 text-xs text-amber-800 bg-amber-50/80 p-3 rounded-lg border border-amber-200">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>
                You have {unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}. On the Digital SAT, there is no guessing penalty—it is always to your advantage to answer every question!
              </span>
            </div>
          )}
        </div>

        {/* Question Grid */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-800">
              Questions ({questions.length} total)
            </h2>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-slate-800 block" /> Answered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded border border-dashed border-gray-400 block" /> Unanswered
              </span>
              <span className="flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> For Review
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-3 pt-2">
            {questions.map((q, idx) => {
              const hasAnswer = Boolean(answers[q.id]?.toString().trim());
              const isMarked = Boolean(markedForReview[q.id]);

              return (
                <button
                  key={q.id}
                  onClick={() => onJumpToQuestion(idx)}
                  className={`relative h-14 rounded-xl flex flex-col items-center justify-center font-bold text-sm transition-all border group ${
                    hasAnswer
                      ? 'bg-slate-800 text-white border-slate-900 hover:bg-slate-700 shadow-2xs'
                      : 'bg-white border-dashed border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {isMarked && (
                    <div className="absolute -top-1.5 -right-1 text-amber-500">
                      <Bookmark className="w-4 h-4 fill-amber-500" />
                    </div>
                  )}
                  <span>{idx + 1}</span>
                  {hasAnswer ? (
                    <span className="text-[10px] text-slate-300 font-mono font-normal">
                      {answers[q.id].length > 4 ? `${answers[q.id].slice(0, 3)}..` : answers[q.id]}
                    </span>
                  ) : (
                    <span className="text-[10px] text-gray-400 font-normal">empty</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={onBackToExam}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Test</span>
          </button>

          <button
            onClick={onSubmitModule}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Lock & Submit Module</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
