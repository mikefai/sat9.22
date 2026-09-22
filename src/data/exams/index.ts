import { ExamMetadata, Question } from '../../types/exam';
import { exam1Metadata, exam1Questions } from './exam1';
import { exam2Metadata, exam2Questions } from './exam2';
import { exam3Metadata, exam3Questions } from './exam3';
import { exam4Metadata, exam4Questions } from './exam4';

export const ALL_EXAMS: ExamMetadata[] = [
  exam1Metadata,
  exam2Metadata,
  exam3Metadata,
  exam4Metadata,
];

const EXAM_QUESTIONS_MAP: Record<string, Question[]> = {
  'exam-1': exam1Questions,
  'exam-2': exam2Questions,
  'exam-3': exam3Questions,
  'exam-4': exam4Questions,
};

export function getExamMetadata(examId: string): ExamMetadata | undefined {
  return ALL_EXAMS.find((e) => e.id === examId);
}

export function getExamQuestions(examId: string): Question[] {
  return EXAM_QUESTIONS_MAP[examId] || [];
}

export function getModuleQuestions(
  examId: string,
  section: 'rw' | 'math',
  module: 1 | 2
): Question[] {
  const all = getExamQuestions(examId);
  return all.filter((q) => q.section === section && q.module === module);
}

export function getAllQuestions(): Question[] {
  return [
    ...exam1Questions,
    ...exam2Questions,
    ...exam3Questions,
    ...exam4Questions,
  ];
}
