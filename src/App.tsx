import React, { useState, useEffect } from 'react';
import { 
  Question, 
  ExamMetadata, 
  UserExamState, 
  ExamResult, 
  TestMode, 
  SectionType 
} from './types/exam';
import { 
  ALL_EXAMS, 
  getExamMetadata, 
  getExamQuestions, 
  getModuleQuestions 
} from './data/exams';
import { calculateDigitalSATScore } from './utils/scoring';

// Components
import { ExamDashboard } from './components/home/ExamDashboard';
import { ExamHeader } from './components/exam/ExamHeader';
import { ExamFooter } from './components/exam/ExamFooter';
import { ReadingWritingLayout } from './components/exam/ReadingWritingLayout';
import { MathLayout } from './components/exam/MathLayout';
import { QuestionNavigator } from './components/exam/QuestionNavigator';
import { ModuleReviewScreen } from './components/exam/ModuleReviewScreen';
import { BreakScreen } from './components/exam/BreakScreen';
import { ScoreReport } from './components/results/ScoreReport';
import { QuestionReview } from './components/results/QuestionReview';
import { GraphingCalculatorModal } from './components/tools/GraphingCalculatorModal';
import { ReferenceSheetModal } from './components/tools/ReferenceSheetModal';

type AppView = 'dashboard' | 'exam' | 'module-review' | 'break' | 'results' | 'review';

const STORAGE_RESULTS_KEY = 'sat_mock_results_v1';
const STORAGE_EXAM_STATE_KEY = 'sat_active_exam_state_v1';

export function App() {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [activeExamId, setActiveExamId] = useState<string>('exam-1');
  const [testMode, setTestMode] = useState<TestMode>('timed');

  // Exam Progress State
  const [sectionType, setSectionType] = useState<SectionType>('rw');
  const [moduleNumber, setModuleNumber] = useState<1 | 2>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, string[]>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(32 * 60);
  const [startTime, setStartTime] = useState<number>(Date.now());

  // Tools Modal State
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isReferenceSheetOpen, setIsReferenceSheetOpen] = useState<boolean>(false);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState<boolean>(false);
  const [isAnnotatorActive, setIsAnnotatorActive] = useState<boolean>(false);

  // Stored Results & In-Progress Tracks
  const [savedResults, setSavedResults] = useState<Record<string, ExamResult>>({});
  const [inProgressExams, setInProgressExams] = useState<Record<string, boolean>>({});

  // Active Result for Viewing
  const [activeResult, setActiveResult] = useState<ExamResult | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedRes = localStorage.getItem(STORAGE_RESULTS_KEY);
      if (savedRes) {
        setSavedResults(JSON.parse(savedRes));
      }

      const activeState = localStorage.getItem(STORAGE_EXAM_STATE_KEY);
      if (activeState) {
        const parsed: UserExamState = JSON.parse(activeState);
        setInProgressExams({ [parsed.examId]: true });
      }
    } catch {
      // ignore storage parsing error
    }
  }, []);

  // Timer Tick during active exam
  useEffect(() => {
    if (currentView !== 'exam') return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          // Time expired for this module: automatically move to module review
          setCurrentView('module-review');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentView]);

  // Current questions for active section and module
  const currentModuleQuestions = getModuleQuestions(activeExamId, sectionType, moduleNumber);
  const currentQuestion = currentModuleQuestions[currentQuestionIndex] || currentModuleQuestions[0];
  const activeMetadata = getExamMetadata(activeExamId) || ALL_EXAMS[0];

  // Handlers for Starting / Resuming Exam
  const handleStartExam = (examId: string, mode: TestMode) => {
    setActiveExamId(examId);
    setTestMode(mode);

    // Check if there is saved in-progress state for this exam
    const savedStateStr = localStorage.getItem(STORAGE_EXAM_STATE_KEY);
    if (savedStateStr) {
      try {
        const saved: UserExamState = JSON.parse(savedStateStr);
        if (saved.examId === examId) {
          setSectionType(saved.currentSection);
          setModuleNumber(saved.currentModule);
          setCurrentQuestionIndex(saved.currentQuestionIndex);
          setAnswers(saved.answers);
          setMarkedForReview(saved.markedForReview);
          setEliminatedOptions(saved.eliminatedOptions);
          setTimeRemainingSeconds(saved.timeRemainingSeconds);
          setStartTime(saved.startTime);
          setCurrentView('exam');
          return;
        }
      } catch {
        // fallback to new session
      }
    }

    // Start fresh exam: RW Module 1, 32 minutes (or 9999 mins if practice)
    setSectionType('rw');
    setModuleNumber(1);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setMarkedForReview({});
    setEliminatedOptions({});
    setTimeRemainingSeconds(mode === 'timed' ? 32 * 60 : 3600);
    setStartTime(Date.now());
    setCurrentView('exam');
    setInProgressExams((prev) => ({ ...prev, [examId]: true }));
  };

  // Save current progress to localStorage
  const persistState = () => {
    const state: UserExamState = {
      examId: activeExamId,
      currentSection: sectionType,
      currentModule: moduleNumber,
      currentQuestionIndex,
      answers,
      markedForReview,
      eliminatedOptions,
      notes: {},
      timeRemainingSeconds,
      status: 'in-progress',
      startTime,
      mode: testMode,
    };
    localStorage.setItem(STORAGE_EXAM_STATE_KEY, JSON.stringify(state));
  };

  useEffect(() => {
    if (currentView === 'exam' || currentView === 'module-review') {
      persistState();
    }
  }, [
    currentView,
    activeExamId,
    sectionType,
    moduleNumber,
    currentQuestionIndex,
    answers,
    markedForReview,
    eliminatedOptions,
    timeRemainingSeconds,
  ]);

  // Handle Answer Selection
  const handleSelectAnswer = (ans: string) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: ans }));
  };

  // Handle Mark for Review Toggle
  const handleToggleMarkForReview = () => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  // Handle Option Elimination (ABC cross out)
  const handleToggleEliminateOption = (opt: string) => {
    if (!currentQuestion) return;
    setEliminatedOptions((prev) => {
      const currentList = prev[currentQuestion.id] || [];
      if (currentList.includes(opt)) {
        return { ...prev, [currentQuestion.id]: currentList.filter((o) => o !== opt) };
      } else {
        return { ...prev, [currentQuestion.id]: [...currentList, opt] };
      }
    });
  };

  // Handle Next / Prev Navigation
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentModuleQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentView('module-review');
    }
  };

  // Handle Submitting Module
  const handleSubmitModule = () => {
    if (sectionType === 'rw') {
      if (moduleNumber === 1) {
        // Move to RW Module 2 (Hard Adaptive)
        setModuleNumber(2);
        setCurrentQuestionIndex(0);
        setTimeRemainingSeconds(testMode === 'timed' ? 32 * 60 : 3600);
        setCurrentView('exam');
      } else {
        // Completed RW Section: Proceed to 10-Minute Break!
        setCurrentView('break');
      }
    } else {
      // Section is Math
      if (moduleNumber === 1) {
        // Move to Math Module 2 (Hard Adaptive)
        setModuleNumber(2);
        setCurrentQuestionIndex(0);
        setTimeRemainingSeconds(testMode === 'timed' ? 35 * 60 : 3600);
        setCurrentView('exam');
      } else {
        // Completed entire exam! Calculate score and show results
        finishExam();
      }
    }
  };

  // Resume after break: Start Math Section Module 1
  const handleResumeAfterBreak = () => {
    setSectionType('math');
    setModuleNumber(1);
    setCurrentQuestionIndex(0);
    setTimeRemainingSeconds(testMode === 'timed' ? 35 * 60 : 3600);
    setCurrentView('exam');
  };

  // Finish exam & calculate final score
  const finishExam = () => {
    const allExamQuestions = getExamQuestions(activeExamId);
    const totalTime = Math.floor((Date.now() - startTime) / 1000);

    const result = calculateDigitalSATScore(
      activeExamId,
      testMode,
      allExamQuestions,
      answers,
      markedForReview,
      totalTime
    );

    // Save result to state & localStorage
    const updatedResults = { ...savedResults, [activeExamId]: result };
    setSavedResults(updatedResults);
    localStorage.setItem(STORAGE_RESULTS_KEY, JSON.stringify(updatedResults));

    // Clear active in-progress state
    localStorage.removeItem(STORAGE_EXAM_STATE_KEY);
    setInProgressExams((prev) => {
      const copy = { ...prev };
      delete copy[activeExamId];
      return copy;
    });

    setActiveResult(result);
    setCurrentView('results');
  };

  // View past score report
  const handleViewResult = (examId: string) => {
    const res = savedResults[examId];
    if (res) {
      setActiveExamId(examId);
      setActiveResult(res);
      setCurrentView('results');
    }
  };

  const handleExitExam = () => {
    if (window.confirm('Are you sure you want to exit to the dashboard? Your current progress has been saved.')) {
      setCurrentView('dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 1. DASHBOARD VIEW */}
      {currentView === 'dashboard' && (
        <ExamDashboard
          onStartExam={handleStartExam}
          onViewResult={handleViewResult}
          savedResults={savedResults}
          inProgressExams={inProgressExams}
          onOpenReferenceSheet={() => setIsReferenceSheetOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      )}

      {/* 2. ACTIVE EXAM TAKING VIEW */}
      {currentView === 'exam' && currentQuestion && (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <ExamHeader
            sectionType={sectionType}
            moduleNumber={moduleNumber}
            timeRemainingSeconds={timeRemainingSeconds}
            isPracticeMode={testMode === 'practice'}
            onToggleCalculator={() => setIsCalculatorOpen(true)}
            onToggleReferenceSheet={() => setIsReferenceSheetOpen(true)}
            onToggleAnnotator={() => setIsAnnotatorActive(!isAnnotatorActive)}
            isAnnotatorActive={isAnnotatorActive}
            onExitExam={handleExitExam}
          />

          {/* Body Section Layout */}
          {sectionType === 'rw' ? (
            <ReadingWritingLayout
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id] || ''}
              onSelectAnswer={handleSelectAnswer}
              isMarkedForReview={Boolean(markedForReview[currentQuestion.id])}
              onToggleMarkForReview={handleToggleMarkForReview}
              eliminatedOptions={eliminatedOptions[currentQuestion.id] || []}
              onToggleEliminateOption={handleToggleEliminateOption}
              isAnnotatorActive={isAnnotatorActive}
              isPracticeMode={testMode === 'practice'}
            />
          ) : (
            <MathLayout
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id] || ''}
              onSelectAnswer={handleSelectAnswer}
              isMarkedForReview={Boolean(markedForReview[currentQuestion.id])}
              onToggleMarkForReview={handleToggleMarkForReview}
              eliminatedOptions={eliminatedOptions[currentQuestion.id] || []}
              onToggleEliminateOption={handleToggleEliminateOption}
              isPracticeMode={testMode === 'practice'}
            />
          )}

          {/* Footer Navigation */}
          <ExamFooter
            currentQuestionNumber={currentQuestionIndex + 1}
            totalQuestions={currentModuleQuestions.length}
            onPrev={handlePrevQuestion}
            onNext={handleNextQuestion}
            onOpenNavigator={() => setIsNavigatorOpen(true)}
            isFirstQuestion={currentQuestionIndex === 0}
            isLastQuestion={currentQuestionIndex === currentModuleQuestions.length - 1}
            onReviewModule={() => setCurrentView('module-review')}
          />
        </div>
      )}

      {/* 3. END-OF-MODULE REVIEW SCREEN */}
      {currentView === 'module-review' && (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <ExamHeader
            sectionType={sectionType}
            moduleNumber={moduleNumber}
            timeRemainingSeconds={timeRemainingSeconds}
            isPracticeMode={testMode === 'practice'}
            onToggleCalculator={() => setIsCalculatorOpen(true)}
            onToggleReferenceSheet={() => setIsReferenceSheetOpen(true)}
            onToggleAnnotator={() => {}}
            isAnnotatorActive={false}
            onExitExam={handleExitExam}
          />

          <ModuleReviewScreen
            sectionType={sectionType}
            moduleNumber={moduleNumber}
            questions={currentModuleQuestions}
            answers={answers}
            markedForReview={markedForReview}
            onJumpToQuestion={(idx) => {
              setCurrentQuestionIndex(idx);
              setCurrentView('exam');
            }}
            onSubmitModule={handleSubmitModule}
            onBackToExam={() => setCurrentView('exam')}
          />
        </div>
      )}

      {/* 4. BREAK SCREEN (10 MINS) */}
      {currentView === 'break' && (
        <BreakScreen onResumeExam={handleResumeAfterBreak} />
      )}

      {/* 5. SCORE REPORT VIEW */}
      {currentView === 'results' && activeResult && (
        <ScoreReport
          result={activeResult}
          metadata={activeMetadata}
          onReviewQuestions={() => setCurrentView('review')}
          onRetakeExam={() => handleStartExam(activeExamId, testMode)}
          onReturnHome={() => setCurrentView('dashboard')}
        />
      )}

      {/* 6. QUESTION-BY-QUESTION REVIEW VIEW */}
      {currentView === 'review' && activeResult && (
        <QuestionReview
          questions={getExamQuestions(activeExamId)}
          result={activeResult}
          metadata={activeMetadata}
          onBackToScore={() => setCurrentView('results')}
        />
      )}

      {/* GLOBAL MODALS */}
      <QuestionNavigator
        isOpen={isNavigatorOpen}
        onClose={() => setIsNavigatorOpen(false)}
        questions={currentModuleQuestions}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
        markedForReview={markedForReview}
        onSelectQuestion={(idx) => setCurrentQuestionIndex(idx)}
        sectionTitle={sectionType === 'rw' ? 'Reading and Writing' : 'Math'}
        moduleNumber={moduleNumber}
      />

      <GraphingCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <ReferenceSheetModal
        isOpen={isReferenceSheetOpen}
        onClose={() => setIsReferenceSheetOpen(false)}
      />
    </div>
  );
}

export default App;
