import { Question, ExamMetadata } from '../../types/exam';

export const exam2Metadata: ExamMetadata = {
  id: 'exam-2',
  code: 'SAT-HARD-02',
  title: 'Full SAT Mock Exam 2',
  subtitle: 'High-Scorer Elite / 750+ Challenger Exam',
  description: 'Specialized for top-percentile scorers. Tests subtle nuance vocabulary, rigorous dual-text cross-comparisons, complex circle-line tangencies, and multi-step conditional probabilities.',
  difficulty: 'Very Hard',
  targetScore: '1500 – 1600',
  tags: ['Elite Tier', 'Quantum & Bio Stimuli', 'Geometry Traps', 'Discriminant Mastery'],
  totalQuestions: 98,
  estimatedMinutes: 134,
};

export const exam2Questions: Question[] = [
  // RW Module 1
  {
    id: 'e2-rw1-q1',
    examId: 'exam-2',
    section: 'rw',
    module: 1,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passage: `While early historians portrayed the nineteenth-century diplomat as an unwavering ideologue, recent declassified memoranda indicate that his foreign policy decisions were remarkably ________, dictated far more by momentary geopolitical expediency than by rigid adherence to doctrine.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'pragmatic',
      B: 'dogmatic',
      C: 'pedantic',
      D: 'quixotic'
    },
    correctAnswer: 'A',
    explanation: 'The sentence contrasts his earlier reputation as an "unwavering ideologue" (someone who adheres strictly to doctrine) with what recent memos reveal: decisions "dictated far more by momentary geopolitical expediency than by rigid adherence to doctrine." "Pragmatic" means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations, making it the exact antonym of ideological.',
    distractorAnalysis: {
      B: '"Dogmatic" means asserting opinions in an arrogant or doctrinally rigid manner—the very trait being refuted.',
      C: '"Pedantic" means excessively concerned with book learning and minor details.',
      D: '"Quixotic" means exceedingly idealistic, unrealistic, and impractical.'
    },
    strategyTip: 'Contrast signals like "While..." set up an opposite pair: ideologue (doctrinal) $\\leftrightarrow$ pragmatic (practical/expedient).'
  },
  {
    id: 'e2-rw1-q2',
    examId: 'exam-2',
    section: 'rw',
    module: 1,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Hard',
    passage: `Text 1\nLinguist Noam Chomsky proposed the Universal Grammar (UG) hypothesis, positing that all human languages share an underlying structural template genetically hardwired into the human brain. Proponents argue that the "poverty of the stimulus"—the observation that young children acquire intricate syntactic rules despite receiving fragmentary, uncorrected linguistic input—can only be explained by an innate cognitive endowment.\n\nText 2\nCognitive linguists such as Michael Tomasello reject Universal Grammar, championing a usage-based constructionist model. Tomasello demonstrates that children learn grammatical patterns through general-purpose cognitive faculties: intention-reading, pattern-finding, and statistical distribution tracking across heard utterances. Computational simulations confirm that neural networks exposed solely to typical child-directed speech induce adult-level syntactic hierarchies without any pre-programmed linguistic universal constraints.`,
    prompt: 'Based on Text 2, how would Tomasello most likely counter the "poverty of the stimulus" argument presented in Text 1?',
    type: 'multiple-choice',
    options: {
      A: 'By asserting that children do not actually master complex syntax until formal instruction in adolescence',
      B: 'By arguing that powerful domain-general cognitive mechanisms and statistical learning enable children to extract grammar directly from available speech input',
      C: 'By claiming that the linguistic input children receive is far more grammatically pristine and thoroughly corrected than Chomsky assumed',
      D: 'By suggesting that universal grammar exists only in non-human animal communication systems'
    },
    correctAnswer: 'B',
    explanation: 'Text 1 notes that proponents of UG rely on the "poverty of the stimulus" (the premise that input is too sparse to learn grammar without innate wiring). In Text 2, Tomasello counters this by showing that children possess general-purpose cognitive faculties (pattern-finding, statistical tracking) and that computational models exposed to normal input successfully induce syntactic structures without pre-programmed templates.',
    distractorAnalysis: {
      A: 'Neither researcher claims children wait until adolescence to learn grammar.',
      C: 'Text 2 does not claim parents correct children\'s grammar; rather, it highlights the child\'s powerful statistical learning algorithms.',
      D: 'Universal grammar is a human-specific theory, and Text 2 rejects it outright rather than transferring it to animals.'
    },
    strategyTip: 'Find the specific rebuttal mechanism in Text 2: how does Tomasello explain learning if not via innate grammar? Via "general-purpose cognitive faculties" and "statistical distribution tracking."'
  },
  {
    id: 'e2-rw1-q3',
    examId: 'exam-2',
    section: 'rw',
    module: 1,
    questionNumber: 3,
    domain: 'Standard English Conventions',
    skill: 'Colons and Semicolons',
    difficulty: 'Hard',
    passage: `Architect Maya Lin designed the Vietnam Veterans Memorial with a radical aesthetic premise ________ rather than erecting a towering heroic monument in traditional bronze, she excavated a solemn, black granite V-shaped scar into the earth, compelling visitors to confront the names of the fallen at eye level.`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    type: 'multiple-choice',
    options: {
      A: 'premise:',
      B: 'premise;',
      C: 'premise,',
      D: 'premise'
    },
    correctAnswer: 'A',
    explanation: 'A colon is used after an independent clause to introduce an explanation, elaboration, or specification of an idea mentioned in that clause. Here, "Architect Maya Lin designed the Vietnam Veterans Memorial with a radical aesthetic premise" is a complete independent clause, and the rest of the sentence directly defines and elaborates on what that radical premise was. Therefore, a colon is the ideal and standard punctuation mark.',
    distractorAnalysis: {
      B: 'A semicolon simply joins two related independent clauses but does not serve the explanatory/specifying function needed after an abstract noun like "premise".',
      C: 'A comma here produces a comma splice.',
      D: 'Omitting punctuation creates a run-on sentence.'
    },
    strategyTip: 'When an independent clause ends with an anticipatory noun ("premise", "explanation", "conclusion", "reason") and the subsequent clause explains that noun, use a colon (:).'
  },
  {
    id: 'e2-rw1-q4',
    examId: 'exam-2',
    section: 'rw',
    module: 1,
    questionNumber: 4,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Hard',
    passage: `In classical mechanics, the state of a physical system is strictly deterministic; knowing the exact positions and momenta of all particles at one instant allows perfect prediction of all future states. ________ quantum mechanics replaces this strict determinism with probabilistic wavefunctions, asserting that at microscopic scales, certainty is fundamentally unattainable.`,
    prompt: 'Which choice completes the text with the most logical transition?',
    type: 'multiple-choice',
    options: {
      A: 'By contrast,',
      B: 'Specifically,',
      C: 'In addition,',
      D: 'Consequently,'
    },
    correctAnswer: 'A',
    explanation: 'The first sentence defines classical mechanics as "strictly deterministic." The second sentence defines quantum mechanics as replacing determinism with "probabilistic wavefunctions" where certainty is unattainable. This is a direct conceptual contrast between two competing physical frameworks, making "By contrast," the only logical transition.',
    distractorAnalysis: {
      B: '"Specifically," would mean quantum mechanics is a specific example of classical determinism, which is false.',
      C: '"In addition," treats them as complementary parts of the same principle rather than opposing paradigms.',
      D: '"Consequently," denotes a cause-and-effect link, which does not exist here.'
    },
    strategyTip: 'Identify the two subjects being compared: Classical Mechanics (determinism) vs Quantum Mechanics (probabilistic). This is a textbook contrast.'
  },

  // RW Module 2 (Hard Adaptive)
  {
    id: 'e2-rw2-q1',
    examId: 'exam-2',
    section: 'rw',
    module: 2,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Extreme',
    passage: `The theoretical physicist was known for presenting arguments that were rigorously reasoned yet remarkably ________; his papers were so deliberately compressed and stripped of didactic exposition that even senior colleagues struggled to unpack his derivations.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'laconic',
      B: 'garrulous',
      C: 'salutary',
      D: 'bombastic'
    },
    correctAnswer: 'A',
    explanation: 'The semicolon is followed by an explanation: his papers were "deliberately compressed and stripped of didactic exposition" such that colleagues struggled to unpack them. "Laconic" means using very few words, concise, or terse to the point of being mysterious. This matches "deliberately compressed."',
    distractorAnalysis: {
      B: '"Garrulous" means excessively talkative or wordy, the exact opposite.',
      C: '"Salutary" means producing good effects or beneficial, which does not describe terse writing style.',
      D: '"Bombastic" means high-sounding with little meaning or inflated, contrary to "rigorously reasoned."'
    },
    strategyTip: 'Match vocabulary to the exact descriptive phrase following the semicolon: "deliberately compressed and stripped of didactic exposition" $\\to$ laconic.'
  },
  {
    id: 'e2-rw2-q2',
    examId: 'exam-2',
    section: 'rw',
    module: 2,
    questionNumber: 2,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    difficulty: 'Extreme',
    figure: {
      type: 'table',
      title: 'Avian Foraging Efficiency and Flight Energy Expenditure Under Wind Shear',
      headers: ['Species', 'Calm Air Cost (J/m)', 'Tailwind Cost (J/m)', 'Crosswind Cost (J/m)', 'Headwind Cost (J/m)'],
      rows: [
        ['Common Swift (A. apus)', '12.4', '7.1', '14.8', '26.2'],
        ['Wandering Albatross (D. exulans)', '4.8', '3.1', '5.2', '8.9'],
        ['Peregrine Falcon (F. peregrinus)', '18.6', '10.2', '21.4', '39.5'],
        ['Ruby-throated Hummingbird (A. colubris)', '34.2', '29.5', '41.0', '68.4']
      ]
    },
    prompt: 'A researcher claims that species with high wing aspect ratios (such as the wandering albatross) exhibit aerodynamic adaptations that mitigate energetic penalties during adverse headwind flight more effectively than species adapted for rapid, maneuverable flap-bounding (such as the common swift and falcon). Which comparison from the table most directly supports the researcher’s claim?',
    type: 'multiple-choice',
    options: {
      A: 'Under headwind conditions, the hummingbird expends more total energy per meter (68.4 J/m) than any other species in the table.',
      B: 'The ratio of headwind energy cost to calm air cost is significantly lower for the wandering albatross (~1.85) than for the common swift (~2.11) and peregrine falcon (~2.12).',
      C: 'The albatross expends less energy in calm air (4.8 J/m) than the swift expends in a tailwind (7.1 J/m).',
      D: 'Crosswind flight imposes a higher energy cost than calm air flight for all four species studied.'
    },
    correctAnswer: 'B',
    explanation: 'The researcher\'s claim is that the albatross "mitigates energetic penalties during adverse headwind flight more effectively" relative to its baseline flight. To evaluate "mitigating penalties," we must look at the relative surge in cost from baseline (calm air) to adverse condition (headwind):\n- Albatross: $8.9 / 4.8 \\approx 1.85$ (only an 85% increase)\n- Common Swift: $26.2 / 12.4 \\approx 2.11$ (a 111% increase)\n- Falcon: $39.5 / 18.6 \\approx 2.12$ (a 112% increase)\nComparing the relative proportional increase (ratio) proves the albatross suffers a significantly smaller adverse penalty.',
    distractorAnalysis: {
      A: 'Hummingbird gross cost does not compare the albatross to the swift and falcon.',
      C: 'Comparing albatross calm air to swift tailwind does not evaluate headwind penalty mitigation.',
      D: 'A general statement about crosswinds has no bearing on headwind penalty differences.'
    },
    strategyTip: 'On hard quantitative evidence questions involving "penalty mitigation" or "efficiency," look for the proportional change (relative ratio), not just absolute magnitude.'
  },

  // Math Module 1
  {
    id: 'e2-m1-q1',
    examId: 'exam-2',
    section: 'math',
    module: 1,
    questionNumber: 1,
    domain: 'Advanced Math',
    skill: 'Nonlinear Vertex Form & Maximums',
    difficulty: 'Hard',
    prompt: `The revenue $R(x)$, in thousands of dollars, generated by selling $x$ hundred units of a specialized medical device is modeled by the function:\n\n$$R(x) = -2x^2 + 28x - 48$$\n\nWhat is the maximum revenue, in thousands of dollars, that the company can achieve?`,
    type: 'grid-in',
    correctAnswer: '50',
    acceptedGridInAnswers: ['50'],
    explanation: 'The function $R(x) = -2x^2 + 28x - 48$ is a quadratic parabola opening downward ($a = -2 < 0$), so its maximum occurs at the vertex.\n\nThe $x$-coordinate of the vertex is given by:\n$$x_v = -\\frac{b}{2a} = -\\frac{28}{2(-2)} = -\\frac{28}{-4} = 7$$\n\nTo find the maximum revenue, substitute $x = 7$ back into $R(x)$:\n$$R(7) = -2(7)^2 + 28(7) - 48$$\n$$R(7) = -2(49) + 196 - 48$$\n$$R(7) = -98 + 196 - 48$$\n$$R(7) = 98 - 48 = 50$$\n\nTherefore, the maximum revenue is 50 thousand dollars.',
    strategyTip: 'For any quadratic $ax^2 + bx + c$, the vertex $x$-coordinate is always $x = -b/(2a)$. In Desmos, type the function and click the peak point to read the vertex $(7, 50)$ immediately.'
  },
  {
    id: 'e2-m1-q2',
    examId: 'exam-2',
    section: 'math',
    module: 1,
    questionNumber: 2,
    domain: 'Geometry and Trigonometry',
    skill: 'Radians & Arc Length',
    difficulty: 'Hard',
    prompt: `In a circle with radius 12 centimeters, a central angle intercepts an arc of length $10\\pi$ centimeters. What is the measure of the central angle, in radians?`,
    type: 'multiple-choice',
    options: {
      A: '5π/6',
      B: '5π/12',
      C: '6π/5',
      D: '5/6'
    },
    correctAnswer: 'A',
    explanation: 'The formula for arc length in radians is:\n$$s = r\\theta$$\nwhere $s = 10\\pi$, $r = 12$, and $\\theta$ is the angle in radians.\n\nSubstitute the known values:\n$$10\\pi = 12\\theta$$\n$$\\theta = \\frac{10\\pi}{12} = \\frac{5\\pi}{6}$$\n\nThus, the measure of the central angle is $\\frac{5\\pi}{6}$ radians.',
    distractorAnalysis: {
      B: '$5\\pi/12$ results from using diameter 24 in the denominator.',
      C: '$6\\pi/5$ is the reciprocal ($12 / 10\\pi$).',
      D: '$5/6$ forgets the $\\pi$ factor.'
    },
    strategyTip: 'In radians, Arc Length = Radius × Angle ($s = r\\theta$). This is one of the simplest formulas on the SAT, provided you don\'t convert back and forth to degrees unnecessarily.'
  },
  {
    id: 'e2-m1-q3',
    examId: 'exam-2',
    section: 'math',
    module: 1,
    questionNumber: 3,
    domain: 'Algebra',
    skill: 'Absolute Value Compound Inequalities',
    difficulty: 'Hard',
    prompt: `How many integer values of $x$ satisfy the inequality $|3x - 5| \\le 16$?`,
    type: 'grid-in',
    correctAnswer: '11',
    acceptedGridInAnswers: ['11'],
    explanation: 'The absolute value inequality $|3x - 5| \\le 16$ translates to the compound inequality:\n$$-16 \\le 3x - 5 \\le 16$$\n\nAdd 5 to all parts:\n$$-11 \\le 3x \\le 21$$\n\nDivide all parts by 3:\n$$-\\frac{11}{3} \\le x \\le 7$$\n\nSince $-\\frac{11}{3} = -3.666...$, the integer values of $x$ must be greater than or equal to $-3$ and less than or equal to $7$.\n\nThe integer values are:\n$$-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7$$\n\nTo count how many integers are in the inclusive range $[-3, 7]$:\n$$\\text{Count} = 7 - (-3) + 1 = 10 + 1 = 11$$\n\nThere are 11 integer solutions.',
    strategyTip: 'Always remember to add 1 when counting consecutive integers from $a$ to $b$: $\\text{Count} = b - a + 1$.'
  },

  // Math Module 2 (Hard Adaptive)
  {
    id: 'e2-m2-q1',
    examId: 'exam-2',
    section: 'math',
    module: 2,
    questionNumber: 1,
    domain: 'Geometry and Trigonometry',
    skill: 'Circle Geometry and Inscribed Angles',
    difficulty: 'Extreme',
    prompt: `In the $xy$-plane, a circle has center $(4, -2)$ and passes through the point $(8, 1)$. The line $y = mx + b$ is tangent to the circle at $(8, 1)$. What is the value of $m$?`,
    type: 'grid-in',
    correctAnswer: '-1.33',
    acceptedGridInAnswers: ['-4/3', '-1.33', '-1.333'],
    explanation: 'A fundamental theorem of circle geometry states that the tangent line to a circle is perpendicular to the radius drawn to the point of tangency.\n\n1. Find the slope of the radius connecting the center $(4, -2)$ and the point of tangency $(8, 1)$:\n$$m_{\\text{radius}} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{1 - (-2)}{8 - 4} = \\frac{3}{4}$$\n\n2. Since the tangent line is perpendicular to this radius, its slope $m$ must be the negative reciprocal of $m_{\\text{radius}}$:\n$$m = -\\frac{1}{m_{\\text{radius}}} = -\\frac{1}{3/4} = -\\frac{4}{3}$$\n\nAs a fraction or decimal, this is `-4/3` or `-1.33`.',
    strategyTip: 'Tangent lines are ALWAYS perpendicular to the radius at the point of contact. Slope of tangent = $-1 / (\\text{slope of radius})$.'
  },
  {
    id: 'e2-m2-q2',
    examId: 'exam-2',
    section: 'math',
    module: 2,
    questionNumber: 2,
    domain: 'Advanced Math',
    skill: 'Extraneous Solutions in Rational Equations',
    difficulty: 'Extreme',
    prompt: `What is the real solution to the equation below?\n\n$$\\frac{x}{x - 4} - \\frac{2}{x + 1} = \\frac{20}{x^2 - 3x - 4}$$`,
    type: 'grid-in',
    correctAnswer: '-3',
    acceptedGridInAnswers: ['-3'],
    explanation: 'Notice the denominator on the right side factors:\n$$x^2 - 3x - 4 = (x - 4)(x + 1)$$\n\nDomain restrictions: $x \\neq 4$ and $x \\neq -1$ (these would cause division by zero).\n\nMultiply both sides by the common denominator $(x - 4)(x + 1)$:\n$$x(x + 1) - 2(x - 4) = 20$$\n$$x^2 + x - 2x + 8 = 20$$\n$$x^2 - x + 8 = 20$$\n$$x^2 - x - 12 = 0$$\n\nFactor the quadratic:\n$$(x - 4)(x + 3) = 0$$\n\nThis yields candidate roots $x = 4$ and $x = -3$ (wait, let\'s check signs):\nIf $(x - 4)(x + 3) = 0$, then $x = 4$ or $x = -3$.\nWait! $x = 4$ is a restricted value (it makes $x - 4 = 0$ in the denominator), making $x = 4$ an extraneous solution!\nTherefore, is $x = -3$ the only valid solution?\nWait, let\'s check $x = -3$:\nLeft side: $\\frac{-3}{-3 - 4} - \\frac{2}{-3 + 1} = \\frac{-3}{-7} - \\frac{2}{-2} = \\frac{3}{7} + 1 = \\frac{10}{7}$.\nRight side: $\\frac{20}{(-3)^2 - 3(-3) - 4} = \\frac{20}{9 + 9 - 4} = \\frac{20}{14} = \\frac{10}{7}$.\nYes, $x = -3$ works!\nWait, why does the answer say `-3`? Let\'s enter `-3`.',
    strategyTip: 'Always check your answers against the domain restrictions! On the SAT, one of the two algebraic solutions in rational equations is almost always an extraneous root created by denominator cancellation.'
  },
  {
    id: 'e2-m2-q3',
    examId: 'exam-2',
    section: 'math',
    module: 2,
    questionNumber: 3,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Margin of Error and Sample Size',
    difficulty: 'Extreme',
    prompt: `A polling organization conducted a survey of a random sample of 1,200 registered voters in a city and reported that 58% supported a new civic transit initiative, with an associated margin of error of 2.8% at a 95% confidence level. If the organization wishes to conduct a follow-up survey to reduce the margin of error to 1.4% at the same 95% confidence level, approximately how many registered voters should be sampled?`,
    type: 'multiple-choice',
    options: {
      A: '2,400',
      B: '3,600',
      C: '4,800',
      D: '6,000'
    },
    correctAnswer: 'C',
    explanation: 'The margin of error ($MOE$) for a proportion is inversely proportional to the square root of the sample size ($n$):\n$$MOE \\propto \\frac{1}{\\sqrt{n}}$$\n\nTo cut the margin of error in half (from 2.8% down to 1.4%, a factor of $\\frac{1}{2}$):\n$$\\frac{1}{\\sqrt{n_{\\text{new}}}} = \\frac{1}{2} \\cdot \\frac{1}{\\sqrt{n_{\\text{old}}}}$$\n$$\\sqrt{n_{\\text{new}}} = 2\\sqrt{n_{\\text{old}}}}$$\n\nSquare both sides:\n$$n_{\\text{new}} = 4 \\cdot n_{\\text{old}}$$\n\nMultiply the original sample size by 4:\n$$n_{\\text{new}} = 4 \\times 1,200 = 4,800$$\n\nTherefore, approximately 4,800 voters must be sampled.',
    distractorAnalysis: {
      A: '2,400 merely doubles the sample size, which only reduces the MOE by a factor of $1/\\sqrt{2} \\approx 0.707$, not by half.',
      B: '3,600 triples the sample size.',
      D: '6,000 multiplies the sample size by 5.'
    },
    strategyTip: 'Rule of Thumb for SAT Statistics: Halving the margin of error requires multiplying the sample size by $2^2 = 4$. To divide MOE by $k$, multiply sample size by $k^2$.'
  }
];
