import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { Question, ExamResult, ExamMetadata } from '../../types/exam';
import { MathText } from '../common/MathText';

interface QuestionReviewProps {
  questions: Question[];
  result: ExamResult;
  metadata: ExamMetadata;
  onBackToScore: () => void;
}

export const QuestionReview: React.FC<QuestionReviewProps> = ({
  questions,
  result,
  metadata,
  onBackToScore,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct' | 'marked'>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filter list
  const filteredQuestions = questions.filter((q) => {
    const studentAns = (result.answers[q.id] || '').trim().toLowerCase();
    const correctClean = q.correctAnswer.trim().toLowerCase();
    const isCorrect = q.type === 'multiple-choice'
      ? studentAns === correctClean
      : studentAns === correctClean || (q.acceptedGridInAnswers || []).map(a => a.toLowerCase()).includes(studentAns);

    const isMarked = Boolean(result.markedForReview[q.id]);

    if (filter === 'incorrect' && isCorrect) return false;
    if (filter === 'correct' && !isCorrect) return false;
    if (filter === 'marked' && !isMarked) return false;
    if (selectedDomain !== 'all' && q.domain !== selectedDomain) return false;

    return true;
  });

  const activeQuestion = filteredQuestions[currentIndex] || questions[0];
  const totalFiltered = filteredQuestions.length;

  // Question status
  const studentAns = (result.answers[activeQuestion?.id] || '').trim();
  const correctClean = activeQuestion?.correctAnswer.trim();
  const isCorrect = activeQuestion?.type === 'multiple-choice'
    ? studentAns.toLowerCase() === correctClean?.toLowerCase()
    : studentAns.toLowerCase() === correctClean?.toLowerCase() || (activeQuestion?.acceptedGridInAnswers || []).map(a => a.toLowerCase()).includes(studentAns.toLowerCase());

  const isMarked = Boolean(result.markedForReview[activeQuestion?.id]);

  const uniqueDomains = Array.from(new Set(questions.map((q) => q.domain)));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col bluebook-scrollbar">
      {/* Top Header */}
      <header className="bg-slate-900 text-white px-4 py-3 border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToScore}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Score Report</span>
            </button>
            <div className="hidden sm:block text-sm font-bold text-white">
              {metadata.title} — Detailed Solutions
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Score:</span>
            <span className="font-mono font-bold text-blue-400 text-sm">
              {result.totalScore} / 1600
            </span>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {(['all', 'incorrect', 'correct', 'marked'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setFilter(mode);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-lg font-semibold capitalize transition-all border ${
                  filter === mode
                    ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {mode === 'all' ? `All (${questions.length})` : mode}
              </button>
            ))}
          </div>

          {/* Domain Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="domain-filter" className="text-gray-500 font-medium">Domain:</label>
            <select
              id="domain-filter"
              value={selectedDomain}
              onChange={(e) => {
                setSelectedDomain(e.target.value);
                setCurrentIndex(0);
              }}
              className="px-2.5 py-1 rounded-lg border border-gray-300 bg-white text-gray-800 text-xs focus:ring-1 focus:ring-blue-500 font-medium"
            >
              <option value="all">All Domains</option>
              {uniqueDomains.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Review Body */}
      <div className="max-w-7xl mx-auto w-full flex-1 p-4 sm:p-6 flex flex-col md:flex-row gap-6">
        {/* Left Drawer / Question Selector List */}
        <div className="w-full md:w-64 bg-white rounded-2xl border border-gray-200 p-4 shadow-2xs flex flex-col h-auto md:max-h-[calc(100vh-160px)]">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
            Questions ({totalFiltered})
          </div>

          <div className="grid grid-cols-4 md:grid-cols-3 gap-2 overflow-y-auto bluebook-scrollbar p-1">
            {filteredQuestions.map((q, idx) => {
              const ans = (result.answers[q.id] || '').trim();
              const cor = q.correctAnswer.trim();
              const ok = q.type === 'multiple-choice'
                ? ans.toLowerCase() === cor.toLowerCase()
                : ans.toLowerCase() === cor.toLowerCase() || (q.acceptedGridInAnswers || []).map(a => a.toLowerCase()).includes(ans.toLowerCase());

              const isCur = idx === currentIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-10 rounded-lg flex items-center justify-center font-bold text-xs transition-all border relative ${
                    isCur
                      ? 'ring-2 ring-blue-600 font-extrabold shadow-sm'
                      : ''
                  } ${
                    ok
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                      : !ans
                      ? 'bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200'
                      : 'bg-rose-50 text-rose-800 border-rose-300 hover:bg-rose-100'
                  }`}
                >
                  <span>{q.questionNumber}</span>
                  {result.markedForReview[q.id] && (
                    <Bookmark className="w-2.5 h-2.5 fill-amber-500 text-amber-500 absolute top-1 right-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Detailed Question & Solution Breakdown */}
        {activeQuestion ? (
          <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-2xs space-y-6 overflow-y-auto bluebook-scrollbar">
            {/* Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                  {activeQuestion.questionNumber}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {activeQuestion.section === 'rw' ? 'Reading & Writing' : 'Math'} • Module {activeQuestion.module}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {activeQuestion.domain}
                </span>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-300">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect
                  </span>
                )}
                {isMarked && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                    <Bookmark className="w-3 h-3 fill-amber-700" /> Bookmarked
                  </span>
                )}
              </div>
            </div>

            {/* Passage if present */}
            {activeQuestion.passage && (
              <div className="p-5 bg-slate-50 rounded-xl border border-gray-200 text-sm font-serif leading-relaxed text-gray-800 whitespace-pre-line">
                <MathText text={activeQuestion.passage} />
              </div>
            )}

            {/* Prompt */}
            <div className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
              <MathText text={activeQuestion.prompt} />
            </div>

            {/* Answer Choices & Student Selection */}
            {activeQuestion.type === 'multiple-choice' && activeQuestion.options && (
              <div className="space-y-2.5">
                {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                  const optText = activeQuestion.options?.[opt];
                  if (!optText) return null;

                  const isCorrectChoice = opt.toLowerCase() === activeQuestion.correctAnswer.toLowerCase();
                  const isUserChoice = studentAns.toLowerCase() === opt.toLowerCase();

                  return (
                    <div
                      key={opt}
                      className={`p-3.5 rounded-xl border-2 flex items-start gap-3 text-sm transition-all ${
                        isCorrectChoice
                          ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium'
                          : isUserChoice && !isCorrectChoice
                          ? 'border-rose-500 bg-rose-50/70 text-rose-950'
                          : 'border-gray-200 bg-white text-gray-700'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                          isCorrectChoice
                            ? 'bg-emerald-600 text-white'
                            : isUserChoice
                            ? 'bg-rose-600 text-white'
                            : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                      >
                        {opt}
                      </div>

                      <div className="flex-1">
                        <MathText text={optText} />
                      </div>

                      {isCorrectChoice && (
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase shrink-0">
                          Correct Answer
                        </span>
                      )}
                      {isUserChoice && !isCorrectChoice && (
                        <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase shrink-0">
                          Your Choice
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Grid-In Response Breakdown */}
            {activeQuestion.type === 'grid-in' && (
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 space-y-2 text-sm">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-xs text-gray-500 font-semibold uppercase block">Your Input:</span>
                    <span className={`font-mono font-bold text-base ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {studentAns || '(blank)'}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-semibold uppercase block">Correct Answer:</span>
                    <span className="font-mono font-bold text-base text-emerald-700">
                      {activeQuestion.correctAnswer}
                    </span>
                  </div>
                  {activeQuestion.acceptedGridInAnswers && (
                    <div>
                      <span className="text-xs text-gray-500 font-semibold uppercase block">Accepted Forms:</span>
                      <span className="font-mono text-xs text-gray-700">
                        {activeQuestion.acceptedGridInAnswers.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step-by-Step Explanation */}
            <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-5 space-y-3 text-sm text-gray-800">
              <h3 className="font-bold text-blue-900 text-sm flex items-center gap-1.5">
                <span>Step-by-Step Solution:</span>
              </h3>
              <div className="leading-relaxed text-gray-700 space-y-2">
                <MathText text={activeQuestion.explanation} />
              </div>
            </div>

            {/* Distractor Trap Analysis */}
            {activeQuestion.distractorAnalysis && (
              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 space-y-2 text-sm text-gray-800">
                <h3 className="font-bold text-amber-900 text-sm">
                  Trap Distractor Analysis (Why Wrong Answers Fail):
                </h3>
                <div className="space-y-1.5 text-xs text-gray-700">
                  {Object.entries(activeQuestion.distractorAnalysis).map(([choice, explanation]) => (
                    <div key={choice} className="text-amber-950">
                      <strong>Option {choice}:</strong> <MathText text={explanation} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Elite Strategy Tip */}
            {activeQuestion.strategyTip && (
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 flex items-start gap-3 text-sm text-emerald-950">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm mb-1">
                    Hard SAT Strategy Tip:
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    <MathText text={activeQuestion.strategyTip} />
                  </p>
                </div>
              </div>
            )}

            {/* Footer Navigation within Filtered List */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <button
                onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
                disabled={currentIndex === 0}
                className={`flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors ${
                  currentIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>

              <span className="text-xs text-gray-500 font-medium">
                {currentIndex + 1} of {totalFiltered}
              </span>

              <button
                onClick={() => setCurrentIndex(i => Math.min(i + 1, totalFiltered - 1))}
                disabled={currentIndex >= totalFiltered - 1}
                className={`flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors ${
                  currentIndex >= totalFiltered - 1
                    ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-500 flex flex-col items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-3" />
            <div className="text-base font-bold text-gray-800">No questions match this filter!</div>
            <div className="text-xs text-gray-500 mt-1">Try switching filters or domains above.</div>
          </div>
        )}
      </div>
    </div>
  );
};
