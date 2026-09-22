import { Question, ExamResult, TestMode, DomainType } from '../types/exam';

export function calculateDigitalSATScore(
  examId: string,
  mode: TestMode,
  questions: Question[],
  answers: Record<string, string>,
  markedForReview: Record<string, boolean>,
  timeSpentSeconds: number
): ExamResult {
  let rwCorrect = 0;
  let rwTotal = 0;
  let mathCorrect = 0;
  let mathTotal = 0;

  const domainStats: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    const isRW = q.section === 'rw';
    if (isRW) {
      rwTotal++;
    } else {
      mathTotal++;
    }

    if (!domainStats[q.domain]) {
      domainStats[q.domain] = { total: 0, correct: 0 };
    }
    domainStats[q.domain].total++;

    const studentAns = (answers[q.id] || '').trim().toLowerCase();
    let isCorrect = false;

    if (q.type === 'multiple-choice') {
      isCorrect = studentAns === q.correctAnswer.toLowerCase();
    } else {
      // Grid-in: check exact string, or accepted alternatives
      const correctClean = q.correctAnswer.toLowerCase().trim();
      const accepted = (q.acceptedGridInAnswers || []).map(a => a.toLowerCase().trim());
      accepted.push(correctClean);

      // Check numeric equivalence (e.g. 0.75 == .75 == 3/4)
      const parseFractionOrDec = (s: string): number | null => {
        if (!s) return null;
        if (s.includes('/')) {
          const parts = s.split('/');
          if (parts.length === 2) {
            const num = parseFloat(parts[0]);
            const den = parseFloat(parts[1]);
            if (den !== 0) return num / den;
          }
        }
        const val = parseFloat(s);
        return isNaN(val) ? null : val;
      };

      const studentNum = parseFractionOrDec(studentAns);
      const isNumericMatch = accepted.some(acc => {
        if (acc === studentAns) return true;
        const accNum = parseFractionOrDec(acc);
        if (studentNum !== null && accNum !== null) {
          return Math.abs(studentNum - accNum) < 1e-4;
        }
        return false;
      });

      isCorrect = isNumericMatch;
    }

    if (isCorrect) {
      if (isRW) {
        rwCorrect++;
      } else {
        mathCorrect++;
      }
      domainStats[q.domain].correct++;
    }
  });

  // Calculate scaled scores using hard-tier curve
  // Digital SAT RW has 54 questions max, scaled 200 - 800
  const rwScore = calculateSectionScore(rwCorrect, rwTotal, 800, 200);
  // Digital SAT Math has 44 questions max, scaled 200 - 800
  const mathScore = calculateSectionScore(mathCorrect, mathTotal, 800, 200);

  const totalScore = rwScore + mathScore;
  const percentile = estimatePercentile(totalScore);

  const domainBreakdown: Record<string, { total: number; correct: number; percentage: number }> = {};
  Object.keys(domainStats).forEach((dom) => {
    const st = domainStats[dom];
    domainBreakdown[dom] = {
      total: st.total,
      correct: st.correct,
      percentage: st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0,
    };
  });

  return {
    id: `res-${Date.now()}`,
    examId,
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    mode,
    totalScore,
    rwScore,
    mathScore,
    percentile,
    totalCorrect: rwCorrect + mathCorrect,
    totalQuestions: questions.length,
    rwCorrect,
    rwTotal,
    mathCorrect,
    mathTotal,
    timeSpentSeconds,
    domainBreakdown,
    answers,
    markedForReview,
  };
}

function calculateSectionScore(correct: number, total: number, maxScore: number, minScore: number): number {
  if (total === 0) return minScore;
  const ratio = correct / total;
  
  // SAT curve is slightly non-linear:
  // At the top end (hard test curve), missing 1 question usually results in 790 or 800 depending on hardness.
  // We model this with a realistic sigmoid-like curve anchored between 200 and 800.
  let scaled: number;
  if (ratio >= 0.98) {
    scaled = maxScore; // Perfect or 1 wrong on hard tier can still yield 800
  } else if (ratio >= 0.90) {
    // 730 - 790
    scaled = 730 + Math.round(((ratio - 0.90) / 0.08) * 60);
  } else if (ratio >= 0.75) {
    // 640 - 720
    scaled = 640 + Math.round(((ratio - 0.75) / 0.15) * 80);
  } else if (ratio >= 0.50) {
    // 520 - 630
    scaled = 520 + Math.round(((ratio - 0.50) / 0.25) * 110);
  } else if (ratio >= 0.25) {
    // 380 - 510
    scaled = 380 + Math.round(((ratio - 0.25) / 0.25) * 130);
  } else {
    // 200 - 370
    scaled = minScore + Math.round((ratio / 0.25) * 170);
  }

  // Round to nearest 10 as official SAT scores always end in 0
  const rounded = Math.round(scaled / 10) * 10;
  return Math.min(Math.max(rounded, minScore), maxScore);
}

function estimatePercentile(score: number): number {
  if (score >= 1570) return 99.9;
  if (score >= 1530) return 99;
  if (score >= 1480) return 98;
  if (score >= 1430) return 96;
  if (score >= 1380) return 93;
  if (score >= 1330) return 89;
  if (score >= 1270) return 82;
  if (score >= 1200) return 74;
  if (score >= 1130) return 63;
  if (score >= 1050) return 49;
  if (score >= 980) return 37;
  return 20;
}
