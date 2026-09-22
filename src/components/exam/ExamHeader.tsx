import React, { useState } from 'react';
import { 
  Clock, 
  Eye, 
  EyeOff, 
  Calculator, 
  BookOpen, 
  Highlighter, 
  HelpCircle,
  FileText,
  ChevronDown
} from 'lucide-react';
import { SectionType } from '../../types/exam';

interface ExamHeaderProps {
  sectionType: SectionType;
  moduleNumber: 1 | 2;
  timeRemainingSeconds: number;
  isPracticeMode: boolean;
  onToggleCalculator: () => void;
  onToggleReferenceSheet: () => void;
  onToggleAnnotator: () => void;
  isAnnotatorActive: boolean;
  onExitExam: () => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  sectionType,
  moduleNumber,
  timeRemainingSeconds,
  isPracticeMode,
  onToggleCalculator,
  onToggleReferenceSheet,
  onToggleAnnotator,
  isAnnotatorActive,
  onExitExam,
}) => {
  const [isTimerHidden, setIsTimerHidden] = useState<boolean>(false);
  const [showDirections, setShowDirections] = useState<boolean>(false);

  const minutes = Math.floor(timeRemainingSeconds / 60);
  const seconds = timeRemainingSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const isLowTime = timeRemainingSeconds <= 300; // under 5 minutes

  const sectionName = sectionType === 'rw' ? 'Reading and Writing' : 'Math';

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 select-none sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Left: Section and Module Info */}
        <div className="flex items-center gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Section {sectionType === 'rw' ? '1' : '2'}
            </div>
            <div className="text-sm sm:text-base font-bold flex items-center gap-1.5 text-white">
              <span>{sectionName}</span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="text-blue-400 font-semibold">Module {moduleNumber}</span>
            </div>
          </div>

          <button
            onClick={() => setShowDirections(!showDirections)}
            className="hidden md:flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-2.5 py-1.5 rounded-md border border-slate-700 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Directions</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>

        {/* Center: Countdown Timer */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 bg-slate-800/90 px-3.5 py-1 rounded-full border border-slate-700 shadow-inner">
            <Clock className={`w-4 h-4 ${isLowTime ? 'text-rose-400 animate-pulse' : 'text-slate-400'}`} />
            
            {!isTimerHidden || isLowTime ? (
              <span className={`text-sm sm:text-base font-mono font-bold tracking-wider ${
                isLowTime ? 'text-rose-400' : 'text-white'
              }`}>
                {timeFormatted}
              </span>
            ) : (
              <span className="text-xs text-slate-400 italic">Timer Hidden</span>
            )}

            {!isLowTime && (
              <button
                onClick={() => setIsTimerHidden(!isTimerHidden)}
                className="text-xs text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors"
                title={isTimerHidden ? 'Show Timer' : 'Hide Timer'}
              >
                {isTimerHidden ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
          {isPracticeMode && (
            <span className="text-[10px] text-amber-300 font-medium tracking-wide mt-0.5">
              Practice Mode (Untimed)
            </span>
          )}
        </div>

        {/* Right: Tools & Actions */}
        <div className="flex items-center gap-2">
          {/* Annotator Button */}
          <button
            onClick={onToggleAnnotator}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
              isAnnotatorActive
                ? 'bg-amber-500 text-slate-900 border-amber-400'
                : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
            }`}
            title="Highlighter / Annotate"
          >
            <Highlighter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Annotate</span>
          </button>

          {/* Calculator Button (Math or Practice) */}
          {(sectionType === 'math' || isPracticeMode) && (
            <button
              onClick={onToggleCalculator}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Graphing & Scientific Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Calculator</span>
            </button>
          )}

          {/* Reference Sheet Button (Math or Practice) */}
          {(sectionType === 'math' || isPracticeMode) && (
            <button
              onClick={onToggleReferenceSheet}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Reference Formulas"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Reference</span>
            </button>
          )}

          {/* Exit / Save */}
          <button
            onClick={onExitExam}
            className="ml-2 text-xs text-slate-400 hover:text-rose-400 hover:underline px-2 py-1 transition-colors"
          >
            Exit Exam
          </button>
        </div>
      </div>

      {/* Directions Dropdown Drawer */}
      {showDirections && (
        <div className="bg-slate-800 border-t border-slate-700 px-6 py-4 text-xs text-slate-300 animate-slide-down">
          <div className="max-w-4xl mx-auto flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white text-sm mb-1">
                {sectionName} Directions
              </h3>
              {sectionType === 'rw' ? (
                <p className="leading-relaxed">
                  The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may also include a table or graph. Read each passage and question carefully, and then choose the best answer to the question based on the passage(s). All questions in this section are multiple-choice with four options. There is a single best answer for each question.
                </p>
              ) : (
                <p className="leading-relaxed">
                  The questions in this section address a number of important math skills. Use of a calculator is permitted for all questions. Unless a question indicates otherwise, all variables and expressions represent real numbers, figures provided are drawn to scale, all figures lie in a plane, and the domain of a given function f is the set of all real numbers x for which f(x) is a real number. For student-produced response questions, solve the problem and enter your answer as an integer, terminating decimal, or reduced fraction.
                </p>
              )}
            </div>
            <button
              onClick={() => setShowDirections(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
