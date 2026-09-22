import React, { useState } from 'react';
import { 
  Trophy, 
  Clock, 
  Flame, 
  Sparkles, 
  BookOpen, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Calculator, 
  Award,
  Zap,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { ExamMetadata, TestMode, ExamResult } from '../../types/exam';
import { ALL_EXAMS } from '../../data/exams';

interface ExamDashboardProps {
  onStartExam: (examId: string, mode: TestMode) => void;
  onViewResult: (examId: string) => void;
  savedResults: Record<string, ExamResult>;
  inProgressExams: Record<string, boolean>;
  onOpenReferenceSheet: () => void;
  onOpenCalculator: () => void;
}

export const ExamDashboard: React.FC<ExamDashboardProps> = ({
  onStartExam,
  onViewResult,
  savedResults,
  inProgressExams,
  onOpenReferenceSheet,
  onOpenCalculator,
}) => {
  const [selectedMode, setSelectedMode] = useState<TestMode>('timed');

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pb-16 bluebook-scrollbar">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-b border-slate-800 py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Digital SAT Bluebook Simulation • 1500+ Hard-Tier Series</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenCalculator}
                className="flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 transition-colors shadow-2xs"
              >
                <Calculator className="w-3.5 h-3.5 text-blue-400" />
                <span>Desmos Calculator</span>
              </button>
              <button
                onClick={onOpenReferenceSheet}
                className="flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 transition-colors shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Math Formulas</span>
              </button>
            </div>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Master the Hardest Digital SAT Questions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              4 comprehensive, full-length mock exams engineered specifically for students aiming for 1450–1600. Features deceptive traps, complex cross-text reasoning, nonlinear coordinate geometry, and real College Board Bluebook interface dynamics.
            </p>
          </div>

          {/* Test Mode Selector Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Select Testing Experience:
            </span>
            <div className="flex bg-slate-800/90 p-1 rounded-xl border border-slate-700 shadow-inner">
              <button
                onClick={() => setSelectedMode('timed')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedMode === 'timed'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Official Timed Simulation</span>
              </button>
              <button
                onClick={() => setSelectedMode('practice')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedMode === 'practice'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Untimed Practice Mode</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content: 4 Full Mock Exams Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_EXAMS.map((exam) => {
            const hasResult = Boolean(savedResults[exam.id]);
            const result = savedResults[exam.id];
            const isInProgress = Boolean(inProgressExams[exam.id]);

            return (
              <div
                key={exam.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top Badge Row */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      {exam.code}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        Target: {exam.targetScore}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {exam.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {exam.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {exam.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exam.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section & Metrics */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{exam.estimatedMinutes} mins (Standard Digital SAT)</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">{exam.totalQuestions}</strong> questions
                    </div>
                  </div>

                  {/* Previous Score display if completed */}
                  {hasResult && (
                    <div className="bg-slate-50 rounded-xl p-3 border border-gray-200 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-gray-500">Previous Score:</div>
                        <div className="text-lg font-mono font-bold text-slate-900">
                          {result.totalScore} / 1600
                        </div>
                      </div>
                      <button
                        onClick={() => onViewResult(exam.id)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                      >
                        <span>View Report</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onStartExam(exam.id, selectedMode)}
                      className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition-all active:scale-98 flex items-center justify-center gap-2 text-sm"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>{isInProgress ? 'Resume Exam' : hasResult ? 'Retake Exam' : 'Start Full Mock Exam'}</span>
                    </button>

                    {hasResult && (
                      <button
                        onClick={() => onViewResult(exam.id)}
                        className="py-3 px-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors text-sm"
                        title="View Score Report"
                      >
                        <Trophy className="w-4 h-4 text-amber-500" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SAT Prep Tips & Strategy Highlights */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>Digital SAT Hard-Module Strategy Guide</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            How to Excel on the Digital SAT Hard Tier (750+ Strategy)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200 space-y-1.5">
              <div className="font-bold text-gray-900">1. Master Desmos Tricks</div>
              <p>
                In the Digital SAT Math section, every question permits a graphing calculator. Use the built-in Desmos for instant system intersections, vertex maximums, and discriminant tests without algebraic fatigue.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200 space-y-1.5">
              <div className="font-bold text-gray-900">2. Trap Distractor Recognition</div>
              <p>
                On Reading & Writing Module 2, wrong answers often contain 90% true information but fail on a single subtle nuance (e.g., extreme wording or reversed causality). Always verify every word of the option.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200 space-y-1.5">
              <div className="font-bold text-gray-900">3. Zero Guessing Penalty</div>
              <p>
                There is no deduction for incorrect answers on the Digital SAT. Never leave a question blank! Use our Answer Eliminator (ABC tool) to narrow down choices and mark uncertain items for review.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
