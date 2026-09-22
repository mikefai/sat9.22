import { Question, ExamMetadata } from '../../types/exam';

export const exam4Metadata: ExamMetadata = {
  id: 'exam-4',
  code: 'SAT-HARD-04',
  title: 'Full SAT Mock Exam 4',
  subtitle: 'The Ultimate 1500+ Hard-Adaptive Simulation',
  description: 'The pinnacle benchmark test. Simulates the most extreme College Board difficulty spikes: counter-intuitive inferences, complex coordinate geometry, and multi-variable optimization.',
  difficulty: 'Maximum Adaptive',
  targetScore: '1550 – 1600',
  tags: ['Maximum Adaptive', 'Hardest Math', 'Trap Masterclass', 'Perfect-Score Target'],
  totalQuestions: 98,
  estimatedMinutes: 134,
};

export const exam4Questions: Question[] = [
  // RW Module 1
  {
    id: 'e4-rw1-q1',
    examId: 'exam-4',
    section: 'rw',
    module: 1,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passage: `Given that the archival documents were fragmented and water-damaged, the paleographer’s transcription was inevitably ________; nonetheless, her provisional reading provided a vital foundation for subsequent epigraphic analysis.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'conjectural',
      B: 'exhaustive',
      C: 'canonical',
      D: 'irrefutable'
    },
    correctAnswer: 'A',
    explanation: 'The sentence notes that because the documents were "fragmented and water-damaged," the transcription was "inevitably [blank]," and further mentions her "provisional reading." "Conjectural" means based on or involving conjecture or guesswork, rather than definitive knowledge. This matches the idea of a provisional, uncertain reading made from damaged documents.',
    distractorAnalysis: {
      B: '"Exhaustive" means comprehensive and thorough, impossible with fragmented evidence.',
      C: '"Canonical" means universally recognized as authoritative and standard, contradicting "provisional reading."',
      D: '"Irrefutable" means impossible to deny or disprove, the exact opposite of provisional conjecture.'
    },
    strategyTip: 'Notice the clue later in the sentence: "provisional reading". "Provisional" directly pairs with "conjectural."'
  },
  {
    id: 'e4-rw1-q2',
    examId: 'exam-4',
    section: 'rw',
    module: 1,
    questionNumber: 2,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Hard',
    passage: `In behavioral economics, the "endowment effect" describes the tendency of individuals to value an object more highly merely because they own it. Neuroeconomist Dr. Julian Vance hypothesized that this disparity in valuation does not stem from an emotional attachment to the possessed good, but rather from an acute, visceral aversion to perceived loss during the transactional exchange. Vance predicted that if loss aversion is the sole driver of the endowment effect, then participants forced to trade an owned good for an objectively superior substitute in an identical category (such that no net loss of utility occurs) should exhibit no reluctance to exchange goods.`,
    prompt: 'Which finding, if true, would most directly challenge Dr. Vance’s prediction?',
    type: 'multiple-choice',
    options: {
      A: 'Participants who are offered cash equivalents of their owned items demonstrate higher selling prices than the purchasing prices stated by buyers.',
      B: 'Participants consistently refuse to exchange a randomly assigned coffee mug for a visibly higher-grade insulated travel tumbler of substantially greater monetary and functional value.',
      C: 'Functional MRI scans show elevated amygdala activation when subjects contemplate parting with heirloom artifacts possessed for decades.',
      D: 'Buyers offered a discount on new goods exhibit greater price elasticity than sellers negotiating secondhand goods.'
    },
    correctAnswer: 'B',
    explanation: 'Vance predicted that if loss aversion is the sole driver, then when offered a trade for an "objectively superior substitute in an identical category (such that no net loss of utility occurs)," participants should "exhibit no reluctance to exchange goods." Choice B shows that participants STILL refuse to trade a mug for a visibly superior tumbler of greater value. This demonstrates persistent reluctance even when net utility increases, directly refuting Vance\'s prediction that loss aversion explains the entire effect.',
    distractorAnalysis: {
      A: 'Cash disparity simply confirms standard endowment effect without testing the trade of a superior substitute.',
      C: 'Heirloom artifacts involve long-term emotional attachment, which the experiment deliberately avoided by using newly assigned laboratory goods.',
      D: 'Price elasticity between buyers and sellers does not address the zero-loss item-exchange prediction.'
    },
    strategyTip: 'To challenge a prediction of the form "If X, then participants should NOT do Y", look for evidence showing participants DO do Y under the exact specified condition.'
  },
  {
    id: 'e4-rw1-q3',
    examId: 'exam-4',
    section: 'rw',
    module: 1,
    questionNumber: 3,
    domain: 'Standard English Conventions',
    skill: 'Subject-Verb Agreement',
    difficulty: 'Hard',
    passage: `Neither the lead aeronautical engineer nor any of the propulsion specialists ________ that the acoustic resonance inside the combustion chamber would propagate harmonic vibrations along the titanium fuselage.`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    type: 'multiple-choice',
    options: {
      A: 'anticipate',
      B: 'anticipates',
      C: 'were anticipating',
      D: 'have anticipated'
    },
    correctAnswer: 'A',
    explanation: 'When subjects are connected by the correlative conjunction "neither... nor...", the rule of proximity dictates that the verb must agree in number with the closer subject. The subject closer to the verb is "any of the propulsion specialists". Here, "any" followed by the plural "of the propulsion specialists" acts as plural in this context (or "specialists" dictates plural agreement in "neither X nor Y" structures). Therefore, the plural present tense verb "anticipate" is correct.',
    distractorAnalysis: {
      B: '"Anticipates" is singular, which would incorrectly agree with "the lead aeronautical engineer" while ignoring proximity to plural "specialists".',
      C: 'Past progressive "were anticipating" creates an unwarranted shift in tense compared to standard historical reporting.',
      D: '"Have anticipated" is a present perfect form that unnecessarily complicates the simple aspect required.'
    },
    strategyTip: 'With "neither... nor..." or "either... or...", the verb ALWAYS agrees with the subject closest to it!'
  },

  // RW Module 2 (Hard Adaptive)
  {
    id: 'e4-rw2-q1',
    examId: 'exam-4',
    section: 'rw',
    module: 2,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Extreme',
    passage: `Far from being a passive recipient of foreign stylistic influences, the fourteenth-century ceramicist displayed an exceptionally ________ sensibility, selectively assimilating Persian cobalt glaze formulas while radically altering vessel silhouettes to reflect indigenous ritual functions.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'eclectic',
      B: 'derivative',
      C: 'myopic',
      D: 'insular'
    },
    correctAnswer: 'A',
    explanation: 'The opening contrast "Far from being a passive recipient..." prepares us for an active, discerning creative mind. The sentence specifies that he "selectively assimilat[ed] Persian cobalt glaze formulas while radically altering vessel silhouettes to reflect indigenous ritual functions." Drawing ideas, styles, and methods from diverse, broad sources and blending them into a unique synthesis is the textbook definition of "eclectic."',
    distractorAnalysis: {
      B: '"Derivative" means imitative and unoriginal, the exact opposite of what the sentence praises.',
      C: '"Myopic" means shortsighted or narrow-minded, contradicting the wide cross-cultural synthesis.',
      D: '"Insular" means isolated or ignorant of outside cultures, contradicting the assimilation of Persian formulas.'
    },
    strategyTip: '"Eclectic" on the SAT describes selecting and blending the best elements from various disparate traditions or sources.'
  },
  {
    id: 'e4-rw2-q2',
    examId: 'exam-4',
    section: 'rw',
    module: 2,
    questionNumber: 2,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Extreme',
    passage: `In 1931, mathematician Kurt Gödel published his incompleteness theorems, demonstrating that within any consistent formal axiomatic system capable of doing basic arithmetic, there exist true statements that cannot be proven within the system itself. ________ Gödel shattered the ambition of David Hilbert’s formalist program, which sought to establish mathematics on a completely self-contained, provably comprehensive axiomatic footing.`,
    prompt: 'Which choice completes the text with the most logical transition?',
    type: 'multiple-choice',
    options: {
      A: 'In so doing,',
      B: 'Nevertheless,',
      C: 'On the other hand,',
      D: 'Conversely,'
    },
    correctAnswer: 'A',
    explanation: 'Sentence 1 describes what Gödel accomplished (proving the incompleteness theorems). Sentence 2 describes the direct consequence or manner by which that very proof brought about the collapse of Hilbert\'s formalist dream. "In so doing," means "by doing that" or "as a result of that specific action," linking the action of publication to its immediate philosophical consequence.',
    distractorAnalysis: {
      B: '"Nevertheless," implies that Gödel shattered Hilbert\'s program despite his proof, which makes no sense.',
      C: '"On the other hand," introduces a contrast, but sentence 2 is the direct consequence of sentence 1.',
      D: '"Conversely," implies an opposite proposition.'
    },
    strategyTip: '"In so doing," is an advanced cause-and-effect transition used when the action in the second sentence is accomplished by means of the very act described in the first.'
  },

  // Math Module 1
  {
    id: 'e4-m1-q1',
    examId: 'exam-4',
    section: 'math',
    module: 1,
    questionNumber: 1,
    domain: 'Advanced Math',
    skill: 'Rational Expressions & Equivalent Forms',
    difficulty: 'Hard',
    prompt: `Which of the following expressions is equivalent to $\\frac{4x^2 - 9}{2x^2 + 7x + 6}$ for all $x > 0$?`,
    type: 'multiple-choice',
    options: {
      A: '(2x - 3) / (x + 2)',
      B: '(2x + 3) / (x + 2)',
      C: '(2x - 3) / (2x + 3)',
      D: '(4x - 3) / (2x + 6)'
    },
    correctAnswer: 'A',
    explanation: 'Factor both the numerator and the denominator completely:\n\n1. Numerator: Difference of squares\n$$4x^2 - 9 = (2x - 3)(2x + 3)$$\n\n2. Denominator: Quadratic trinomial\n$$2x^2 + 7x + 6$$\nFind two numbers that multiply to $2 \\times 6 = 12$ and add to $7$: $3$ and $4$.\n$$2x^2 + 4x + 3x + 6 = 2x(x + 2) + 3(x + 2) = (2x + 3)(x + 2)$$\n\n3. Divide and cancel common factor $(2x + 3)$:\n$$\\frac{(2x - 3)(2x + 3)}{(2x + 3)(x + 2)} = \\frac{2x - 3}{x + 2}$$\n\nThis matches Choice A.',
    distractorAnalysis: {
      B: 'Has $(2x + 3)$ in numerator instead of $(2x - 3)$.',
      C: 'Incorrect denominator factoring.',
      D: 'Mistaken cancellation without factoring.'
    },
    strategyTip: 'Desmos trick: type the original fraction $y = \\frac{4x^2 - 9}{2x^2 + 7x + 6}$ into Desmos, then type each answer choice. The graph that overlaps the original curve perfectly is the right answer!'
  },
  {
    id: 'e4-m1-q2',
    examId: 'exam-4',
    section: 'math',
    module: 1,
    questionNumber: 2,
    domain: 'Geometry and Trigonometry',
    skill: 'Circle Geometry and Tangent Lines',
    difficulty: 'Hard',
    prompt: `A circle in the $xy$-plane has equation $(x - 5)^2 + (y + 2)^2 = 36$. The line $x = k$ is tangent to the circle. If $k > 5$, what is the value of $k$?`,
    type: 'grid-in',
    correctAnswer: '11',
    acceptedGridInAnswers: ['11'],
    explanation: 'From the standard circle equation $(x - h)^2 + (y - k)^2 = r^2$:\nCenter is $(h, k) = (5, -2)$\nRadius is $r = \\sqrt{36} = 6$\n\nA vertical line $x = k$ is tangent to the circle if it touches the outermost point of the circle on either the left or the right side.\n\nThe leftmost $x$-coordinate is $h - r = 5 - 6 = -1$ (line $x = -1$).\nThe rightmost $x$-coordinate is $h + r = 5 + 6 = 11$ (line $x = 11$).\n\nThe prompt states that $k > 5$, so:\n$$k = 11$$',
    strategyTip: 'Vertical tangent lines to a circle with center $(h,k)$ and radius $r$ are simply $x = h - r$ and $x = h + r$. Horizontal tangents are $y = k - r$ and $y = k + r$.'
  },

  // Math Module 2 (Hard Adaptive)
  {
    id: 'e4-m2-q1',
    examId: 'exam-4',
    section: 'math',
    module: 2,
    questionNumber: 1,
    domain: 'Advanced Math',
    skill: 'Quadratic Systems with Discriminants',
    difficulty: 'Extreme',
    prompt: `In the system of equations below, $a$ and $c$ are positive constants:\n\n$$y = -x^2 + 6x + c$$\n$$y = 2x + a$$\n\nIf the system has no real solutions, which of the following inequalities must be true?`,
    type: 'multiple-choice',
    options: {
      A: 'a - c > 4',
      B: 'a - c < 4',
      C: 'c - a > 4',
      D: 'a + c < 4'
    },
    correctAnswer: 'A',
    explanation: 'Set the two equations equal to solve for their intersection points:\n$$-x^2 + 6x + c = 2x + a$$\n\nMove all terms to the right side:\n$$0 = x^2 - 4x + (a - c)$$\n\nThis is a quadratic equation $Ax^2 + Bx + C = 0$ with:\n$A = 1$\n$B = -4$\n$C = a - c$\n\nFor the system to have NO real solutions, the discriminant $\\Delta = B^2 - 4AC$ must be strictly less than zero ($\\Delta < 0$):\n$$\\Delta = (-4)^2 - 4(1)(a - c) < 0$$\n$$16 - 4(a - c) < 0$$\n$$16 < 4(a - c)$$\n$$4 < a - c$$\n\nOr rewritten:\n$$a - c > 4$$\n\nThis matches Choice A.',
    distractorAnalysis: {
      B: '$a - c < 4$ would give $\\Delta > 0$, meaning two distinct real solutions.',
      C: '$c - a > 4$ has reversed variables.',
      D: '$a + c < 4$ is algebraically unrelated.'
    },
    strategyTip: 'Remember the discriminant rules:\n- No real solutions: $B^2 - 4AC < 0$\n- Exactly one real solution (tangency): $B^2 - 4AC = 0$\n- Two real solutions: $B^2 - 4AC > 0$'
  },
  {
    id: 'e4-m2-q2',
    examId: 'exam-4',
    section: 'math',
    module: 2,
    questionNumber: 2,
    domain: 'Geometry and Trigonometry',
    skill: 'Right Triangle Trigonometry and Radian Identities',
    difficulty: 'Extreme',
    prompt: `In triangle $ABC$, the measure of angle $B$ is $90^\\circ$, and angle $A$ has measure $\\theta$ radians, where $0 < \\theta < \\frac{\\pi}{2}$. If $\\cos(\\theta) = \\frac{5}{13}$, what is the value of $\\tan\\left(\\frac{\\pi}{2} - \\theta\\right)$?`,
    type: 'grid-in',
    correctAnswer: '0.417',
    acceptedGridInAnswers: ['5/12', '0.417', '.417'],
    explanation: 'In a right triangle $ABC$ with right angle at $B$:\nAngle $A = \\theta$.\nSince the sum of angles in a triangle is $\\pi$ radians ($180^\\circ$), the third angle $C$ is:\n$$C = \\frac{\\pi}{2} - \\theta$$\n\nWe are given $\\cos(\\theta) = \\frac{5}{13}$.\nIn right triangle terms with reference to angle $\\theta$:\n$$\\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{5}{13}$$\n\nBy the Pythagorean theorem, the side opposite $\\theta$ is:\n$$\\text{Opposite} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$\n\nNow, we need $\\tan\\left(\\frac{\\pi}{2} - \\theta\\right)$, which is the tangent of angle $C$!\nFor angle $C$:\n- The side opposite angle $C$ is the side adjacent to $\\theta$ (which has length 5).\n- The side adjacent to angle $C$ is the side opposite $\\theta$ (which has length 12).\n\nTherefore:\n$$\\tan(C) = \\tan\\left(\\frac{\\pi}{2} - \\theta\\right) = \\frac{\\text{Opposite to } C}{\\text{Adjacent to } C} = \\frac{5}{12}$$\n\nAs a fraction, this is `5/12` (or approximately `0.417`).',
    strategyTip: 'Trigonometric Cofunction Rule: $\\tan\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot(\\theta) = \\frac{1}{\\tan(\\theta)}$. Since $\\tan(\\theta) = 12/5$, its cotangent is $5/12$.'
  }
];
