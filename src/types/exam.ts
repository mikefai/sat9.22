export type SectionType = 'rw' | 'math';

export type RWDomain = 
  | 'Craft and Structure'
  | 'Information and Ideas'
  | 'Standard English Conventions'
  | 'Expression of Ideas';

export type MathDomain = 
  | 'Algebra'
  | 'Advanced Math'
  | 'Problem-Solving and Data Analysis'
  | 'Geometry and Trigonometry';

export type DomainType = RWDomain | MathDomain;

export type QuestionType = 'multiple-choice' | 'grid-in';

export type DifficultyLevel = 'Hard' | 'Extreme';

export interface DataFigure {
  type: 'table' | 'barchart' | 'scatter' | 'geometry' | 'svg';
  title?: string;
  headers?: string[];
  rows?: (string | number)[][];
  caption?: string;
  svgContent?: string;
}

export interface Question {
  id: string;
  examId: string;
  section: SectionType;
  module: 1 | 2;
  questionNumber: number;
  domain: DomainType;
  skill: string;
  difficulty: DifficultyLevel;
  passage?: string;
  figure?: DataFigure;
  prompt: string;
  type: QuestionType;
  options?: {
    A: string;
    B: string;
    C: string;
    D: string;
  } | null;
  correctAnswer: 'A' | 'B' | 'C' | 'D' | string;
  acceptedGridInAnswers?: string[] | null;
  explanation: string;
  distractorAnalysis?: {
    [key: string]: string;
  };
  strategyTip: string;
}

export interface ExamMetadata {
  id: string;
  title: string;
  code: string;
  subtitle: string;
  description: string;
  difficulty: 'Hard' | 'Very Hard' | 'Elite Challenger' | 'Maximum Adaptive';
  targetScore: string;
  tags: string[];
  totalQuestions: number;
  estimatedMinutes: number;
}

export type TestMode = 'timed' | 'practice';

export interface UserExamState {
  examId: string;
  currentSection: SectionType;
  currentModule: 1 | 2;
  currentQuestionIndex: number; // 0-based index within current section module
  answers: Record<string, string>; // questionId -> selected answer or grid-in text
  markedForReview: Record<string, boolean>; // questionId -> true/false
  eliminatedOptions: Record<string, string[]>; // questionId -> ['A', 'C']
  notes: Record<string, string>; // questionId -> student notes
  timeRemainingSeconds: number;
  status: 'not-started' | 'in-progress' | 'module-review' | 'break' | 'completed';
  startTime: number;
  endTime?: number;
  mode: TestMode;
}

export interface DomainScoreDetail {
  total: number;
  correct: number;
  percentage: number;
}

export interface ExamResult {
  id: string;
  examId: string;
  date: string;
  mode: TestMode;
  totalScore: number; // 400 - 1600
  rwScore: number;    // 200 - 800
  mathScore: number;  // 200 - 800
  percentile: number;
  totalCorrect: number;
  totalQuestions: number;
  rwCorrect: number;
  rwTotal: number;
  mathCorrect: number;
  mathTotal: number;
  timeSpentSeconds: number;
  domainBreakdown: Record<string, DomainScoreDetail>;
  answers: Record<string, string>;
  markedForReview: Record<string, boolean>;
}
