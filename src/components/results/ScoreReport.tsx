import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  FileSearch, 
  BarChart3, 
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { ExamResult, ExamMetadata } from '../../types/exam';

interface ScoreReportProps {
  result: ExamResult;
  metadata: ExamMetadata;
  onReviewQuestions: () => void;
  onRetakeExam: () => void;
  onReturnHome: () => void;
}

export const ScoreReport: React.FC<ScoreReportProps> = ({
  result,
  metadata,
  onReviewQuestions,
  onRetakeExam,
  onReturnHome,
}) => {
  useEffect(() => {
    // Fire confetti for high scores!
    if (result.totalScore >= 1300) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [result.totalScore]);

  const minutesSpent = Math.floor(result.timeSpentSeconds / 60);
  const accuracyPercent = Math.round((result.totalCorrect / result.totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 bluebook-scrollbar">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onReturnHome}
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-white border border-gray-200 px-3.5 py-2 rounded-xl transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {metadata.code}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              {result.mode === 'timed' ? 'Official Timed Simulation' : 'Practice Mode'}
            </span>
          </div>
        </div>

        {/* Hero Score Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5" />
                <span>Official Scaled Score Report</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                {metadata.title}
              </h1>
              <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                {metadata.subtitle}
              </p>
              <div className="text-xs text-slate-400 pt-2">
                Completed on {result.date}
              </div>
            </div>

            {/* Big Scaled Score Dial */}
            <div className="flex flex-col items-center justify-center bg-slate-800/80 backdrop-blur-xs border border-slate-700/80 rounded-2xl p-6 px-10 shadow-inner text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                Total SAT Score
              </div>
              <div className="text-6xl md:text-7xl font-mono font-extrabold text-white tracking-tight">
                {result.totalScore}
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-1">
                out of 1600
              </div>
              
              <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-0.5 rounded-full text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>{result.percentile}th National Percentile</span>
              </div>
            </div>
          </div>

          {/* Section Score Split: RW vs Math */}
          <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Reading & Writing Score */}
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Section 1
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  Reading and Writing
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {result.rwCorrect} of {result.rwTotal} questions correct
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-mono font-bold text-white">
                  {result.rwScore}
                </div>
                <div className="text-[11px] text-slate-400">out of 800</div>
              </div>
            </div>

            {/* Math Score */}
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Section 2
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  Math Section
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {result.mathCorrect} of {result.mathTotal} questions correct
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-mono font-bold text-white">
                  {result.mathScore}
                </div>
                <div className="text-[11px] text-slate-400">out of 800</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-1">
            <div className="text-xs font-medium text-gray-500">Total Correct</div>
            <div className="text-2xl font-bold text-emerald-600 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-5 h-5" />
              <span>{result.totalCorrect}</span>
            </div>
            <div className="text-[11px] text-gray-400">out of {result.totalQuestions} questions</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-1">
            <div className="text-xs font-medium text-gray-500">Total Incorrect</div>
            <div className="text-2xl font-bold text-rose-600 flex items-center justify-center gap-1.5">
              <XCircle className="w-5 h-5" />
              <span>{result.totalQuestions - result.totalCorrect}</span>
            </div>
            <div className="text-[11px] text-gray-400">review mistakes below</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-1">
            <div className="text-xs font-medium text-gray-500">Overall Accuracy</div>
            <div className="text-2xl font-bold text-blue-600">
              {accuracyPercent}%
            </div>
            <div className="text-[11px] text-gray-400">raw success rate</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-1">
            <div className="text-xs font-medium text-gray-500">Time Spent</div>
            <div className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-1.5">
              <Clock className="w-5 h-5 text-gray-500" />
              <span>{minutesSpent}m</span>
            </div>
            <div className="text-[11px] text-gray-400">total test duration</div>
          </div>
        </div>

        {/* Domain-by-Domain Mastery Breakdown */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-2xs space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">
                Performance by Content Domain
              </h2>
            </div>
            <span className="text-xs text-gray-500">Digital SAT Skill Breakdown</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(result.domainBreakdown).map(([domain, stats]) => (
              <div key={domain} className="space-y-2 bg-slate-50/70 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-800">{domain}</span>
                  <span className="font-mono font-semibold text-gray-600">
                    {stats.correct}/{stats.total} ({stats.percentage}%)
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      stats.percentage >= 80
                        ? 'bg-emerald-500'
                        : stats.percentage >= 60
                        ? 'bg-blue-500'
                        : stats.percentage >= 40
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onReviewQuestions}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 text-sm"
          >
            <FileSearch className="w-4 h-4" />
            <span>Question-by-Question Solution Review</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onRetakeExam}
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold border border-gray-300 rounded-2xl shadow-2xs transition-all active:scale-98 flex items-center justify-center gap-2 text-sm"
          >
            <RotateCcw className="w-4 h-4 text-gray-500" />
            <span>Retake Exam</span>
          </button>
        </div>
      </div>
    </div>
  );
};
