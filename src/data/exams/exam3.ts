import { Question, ExamMetadata } from '../../types/exam';

export const exam3Metadata: ExamMetadata = {
  id: 'exam-3',
  code: 'SAT-HARD-03',
  title: 'Full SAT Mock Exam 3',
  subtitle: '800-Target / High-Complexity Synthesis Exam',
  description: 'Meticulously crafted for students pursuing an 800 in either section. Contains high-tier archaic texts, advanced rhetorical syntheses, 3D volume ratios, and complex polynomial root interactions.',
  difficulty: 'Elite Challenger',
  targetScore: '1520 – 1600',
  tags: ['800-Target', 'Archaic Prose', 'Volume Scaling', 'Polynomial Roots'],
  totalQuestions: 98,
  estimatedMinutes: 134,
};

export const exam3Questions: Question[] = [
  // RW Module 1
  {
    id: 'e3-rw1-q1',
    examId: 'exam-3',
    section: 'rw',
    module: 1,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passage: `Although the monarch claimed to welcome dissenting counsel, courtiers quickly recognized that his invitation to debate was merely ________; any nobleman bold enough to offer candid criticism found himself summarily banished from the royal privy council.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'pro forma',
      B: 'incisive',
      C: 'subversive',
      D: 'untenable'
    },
    correctAnswer: 'A',
    explanation: 'The sentence reveals that while the monarch claimed to welcome dissenting counsel, anyone who actually offered candid criticism was banished. This indicates the invitation was insincere—done purely as an empty ritual or formality without genuine intent. "Pro forma" means done as a matter of form or formality; perfunctory. Thus, "merely pro forma" accurately characterizes the cosmetic, insincere invitation.',
    distractorAnalysis: {
      B: '"Incisive" means sharp, penetrating, or intelligent, which does not convey an empty formality.',
      C: '"Subversive" means seeking to undermine an established authority, which doesn\'t describe the king\'s own official invitation.',
      D: '"Untenable" means indefensible or unsustainable, which does not fit an invitation being an empty gesture.'
    },
    strategyTip: '"Pro forma" is a favorite SAT phrase representing something done for appearance\'s sake or nominal compliance, contrasting with authentic practice.'
  },
  {
    id: 'e3-rw1-q2',
    examId: 'exam-3',
    section: 'rw',
    module: 1,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passage: `In her 1905 essay collection, sociologist Jane Addams reflects on the moral imperative of urban settlement houses:\n\n"We are learning that the settlement is not a philanthropic institution in the traditional sense, bestowing favors from above; rather, it is a protest against a restricted view of education, an insistence that cultural democracy must accompany political democracy. It posits that shared human experience, lived across the artificial chasms of social class and ethnic lineage, constitutes the only genuine foundation for civic regeneration."`,
    prompt: 'Which choice best describes the main rhetorical purpose of the text?',
    type: 'multiple-choice',
    options: {
      A: 'To redefine the social settlement from a patronizing charity into an egalitarian vehicle for democratic community life',
      B: 'To critique the municipal administration for failing to fund public educational facilities in immigrant neighborhoods',
      C: 'To lament the inevitable decline of traditional philanthropic organizations in the face of urban industrialization',
      D: 'To outline the legal procedures required to establish non-profit settlement houses in major metropolitan centers'
    },
    correctAnswer: 'A',
    explanation: 'Addams explicitly contrasts the settlement with "a philanthropic institution in the traditional sense, bestowing favors from above" (charity/patronage). She redefines it instead as "a protest against a restricted view of education," an "insistence that cultural democracy must accompany political democracy," and a champion of "shared human experience" across classes. Choice A captures this exact rhetorical redefinition.',
    distractorAnalysis: {
      B: 'The text does not criticize municipal funding or administrative actions.',
      C: 'Addams is not mourning a decline of old charities; she is rejecting their paternalistic model.',
      D: 'There is no discussion of administrative or legal setup procedures.'
    },
    strategyTip: 'Notice the pivot: "not X... rather, it is Y." The purpose of "not X, rather Y" statements is almost always to redefine or reframe a concept.'
  },
  {
    id: 'e3-rw1-q3',
    examId: 'exam-3',
    section: 'rw',
    module: 1,
    questionNumber: 3,
    domain: 'Standard English Conventions',
    skill: 'Dashes and Parentheticals',
    difficulty: 'Hard',
    passage: `The preservation of ancient papyrus scrolls—such as the Herculaneum papyri carbonized during the eruption of Mount Vesuvius in 79 CE ________ required non-invasive imaging techniques like phase-contrast tomography, because physical unrolling would reduce the brittle organic fibers to powder.`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    type: 'multiple-choice',
    options: {
      A: '—has',
      B: ', has',
      C: '—have',
      D: 'has'
    },
    correctAnswer: 'A',
    explanation: 'The sentence opens a parenthetical interruption with an em-dash: "—such as the Herculaneum papyri carbonized during the eruption of Mount Vesuvius in 79 CE". To preserve grammatical symmetry, an open dash must be closed by a matching dash ("—"). Furthermore, the subject of the sentence is "The preservation" (singular), requiring the singular verb "has required". Choice A correctly supplies both the closing em-dash and the singular verb "has".',
    distractorAnalysis: {
      B: 'You cannot open a parenthetical with a dash and close it with a comma; punctuation must match.',
      C: 'Uses the plural verb "have", which incorrectly agrees with the plural noun "papyri" inside the parenthetical rather than the singular subject "preservation".',
      D: 'Omits the closing em-dash altogether.'
    },
    strategyTip: 'Dash Rule: Parenthetical dashes come in pairs. If a parenthetical begins with an em-dash, it must end with an em-dash before the main verb.'
  },
  {
    id: 'e3-rw1-q4',
    examId: 'exam-3',
    section: 'rw',
    module: 1,
    questionNumber: 4,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Hard',
    passage: `In nineteenth-century Britain, the Pre-Raphaelite Brotherhood sought to revitalize art by rejecting the mannered, formulaic poses championed by the Royal Academy. ________ they championed direct observation of nature and vibrant, jewel-like luminosity, painting en plein air directly onto wet white ground.`,
    prompt: 'Which choice completes the text with the most logical transition?',
    type: 'multiple-choice',
    options: {
      A: 'Instead,',
      B: 'Nevertheless,',
      C: 'Meanwhile,',
      D: 'Conversely,'
    },
    correctAnswer: 'A',
    explanation: 'The first sentence states what the painters rejected ("rejecting the mannered, formulaic poses"). The second sentence presents their positive alternative ("they championed direct observation of nature..."). The transition "Instead," is specifically designed to introduce the chosen substitute or preferred action following a rejection.',
    distractorAnalysis: {
      B: '"Nevertheless," indicates that an action occurs despite an obstacle, but here they are enthusiastically substituting one practice for another.',
      C: '"Meanwhile," indicates simultaneous action occurring in another place.',
      D: '"Conversely," implies a reversal of a proposition, whereas "Instead" specifically replaces a rejected alternative.'
    },
    strategyTip: 'When sentence 1 states "X rejected Y" or "did not do Y", sentence 2 almost invariably begins with "Instead," to present what they did in place of Y.'
  },

  // RW Module 2 (Hard Adaptive)
  {
    id: 'e3-rw2-q1',
    examId: 'exam-3',
    section: 'rw',
    module: 2,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Extreme',
    passage: `The literary theorist argued that while the poet’s imagery appeared haphazard at first glance, careful syntactic parsing reveals an underlying architecture that is remarkably ________, with every metaphorically charged stanza echoing the rhythmic cadence of the prologue.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'coherent',
      B: 'ephemeral',
      C: 'superfluous',
      D: 'anachronistic'
    },
    correctAnswer: 'A',
    explanation: 'The sentence establishes a contrast with "while": although the imagery appeared "haphazard" (disorganized, random), parsing reveals an underlying architecture where "every metaphorically charged stanza echoes the rhythmic cadence." This describes an orderly, unified, and logically consistent structure. "Coherent" means logical and consistent, forming a unified whole, directly opposing "haphazard."',
    distractorAnalysis: {
      B: '"Ephemeral" means lasting for a very short time, irrelevant to structural unity.',
      C: '"Superfluous" means unnecessary or excessive, which has negative connotations contrary to the praise.',
      D: '"Anachronistic" means belonging to a different chronological time period.'
    },
    strategyTip: 'Look for antonym pairs when contrast signals like "while" or "although" are used: haphazard (random/disjointed) $\\leftrightarrow$ coherent (unified/structured).'
  },
  {
    id: 'e3-rw2-q2',
    examId: 'exam-3',
    section: 'rw',
    module: 2,
    questionNumber: 2,
    domain: 'Information and Ideas',
    skill: 'Inferences & Complex Logic',
    difficulty: 'Extreme',
    passage: `Paleoecologists investigating the Late Bronze Age collapse (circa 1200 BCE) have linked civilizational disintegration in the Eastern Mediterranean to a prolonged multi-century megadrought. However, critics of this climatic determinism note that several city-states in the Levant, such as Carchemish, continued to thrive and maintain uninterrupted agrarian production despite experiencing the identical regional rainfall deficits. These scholars suggest that civilizational survival during ecological shocks depended fundamentally on institutional resilience and decentralized grain-storage logistics rather than climatic conditions alone. If this assessment is accurate, it implies that ________`,
    prompt: 'Which choice most logically completes the text?',
    type: 'multiple-choice',
    options: {
      A: 'the severity of regional megadroughts in the ancient world has been grossly overstated by modern paleoclimatologists.',
      B: 'adverse environmental shifts are neither universally sufficient nor exclusively decisive in precipitating societal collapse.',
      C: 'societies lacking centralized monarchical governance were inherently incapable of adapting to agricultural shortages.',
      D: 'technological innovation in irrigation quickly eradicated all negative consequences of rainfall deficits across the Mediterranean.'
    },
    correctAnswer: 'B',
    explanation: 'The argument is that while drought occurred everywhere, some city-states survived because of their internal institutions and grain storage. This proves that climate shocks do not automatically or universally trigger collapse; their outcome is mediated by human societal systems. Therefore, adverse environmental shifts are "neither universally sufficient nor exclusively decisive" on their own to cause collapse.',
    distractorAnalysis: {
      A: 'The text does not deny the megadrought\'s severity; it explicitly notes Carchemish experienced "identical regional rainfall deficits."',
      C: 'The text actually praises decentralized logistics, not claiming centralized monarchies were mandatory.',
      D: 'Claiming all consequences were "quickly eradicated" is an extreme overstatement unmentioned in the text.'
    },
    strategyTip: 'On inference conclusions, beware of extreme words ("grossly overstated", "entirely eradicated"). Balanced, nuanced statements ("neither universally sufficient nor exclusively decisive") are overwhelmingly favoured by test makers.'
  },

  // Math Module 1
  {
    id: 'e3-m1-q1',
    examId: 'exam-3',
    section: 'math',
    module: 1,
    questionNumber: 1,
    domain: 'Advanced Math',
    skill: 'Polynomial Roots and Factoring',
    difficulty: 'Hard',
    prompt: `If $(x + 2)$ and $(x - 5)$ are factors of the polynomial $f(x) = 2x^3 - 5x^2 - 23x - 10$, what is the third real root of the equation $f(x) = 0$?`,
    type: 'grid-in',
    correctAnswer: '-0.5',
    acceptedGridInAnswers: ['-0.5', '-1/2'],
    explanation: 'If $(x + 2)$ and $(x - 5)$ are factors, their product is:\n$$(x + 2)(x - 5) = x^2 - 3x - 10$$\n\nBecause $f(x) = 2x^3 - 5x^2 - 23x - 10$ is a cubic polynomial with leading coefficient 2, the third linear factor must be of the form $(2x - c)$ or $2(x - r_3)$.\n\nDivide $f(x)$ by $(x^2 - 3x - 10)$:\nNotice that:\n$$(x^2 - 3x - 10)(2x + 1)$$\n$$= 2x(x^2 - 3x - 10) + 1(x^2 - 3x - 10)$$\n$$= (2x^3 - 6x^2 - 20x) + (x^2 - 3x - 10)$$\n$$= 2x^3 - 5x^2 - 23x - 10$$\n\nThis matches $f(x)$ exactly! Therefore, the third factor is $(2x + 1)$.\n\nTo find the root, set $2x + 1 = 0$:\n$$2x = -1 \\implies x = -\\frac{1}{2} = -0.5$$\n\nThus, the third real root is `-0.5` or `-1/2`.',
    strategyTip: 'Use Vieta\'s formulas for cubic polynomials: The product of roots $r_1 \\cdot r_2 \\cdot r_3 = -\\frac{d}{a} = -\\frac{-10}{2} = 5$. Since $r_1 = -2$ and $r_2 = 5$, $(-2)(5)(r_3) = 5 \\implies -10r_3 = 5 \\implies r_3 = -0.5$. In 10 seconds!'
  },
  {
    id: 'e3-m1-q2',
    examId: 'exam-3',
    section: 'math',
    module: 1,
    questionNumber: 2,
    domain: 'Geometry and Trigonometry',
    skill: 'Similar Solids and Volume Scaling',
    difficulty: 'Hard',
    prompt: `Two geometrically similar rectangular prisms, Prism A and Prism B, have surface areas of $72\\text{ cm}^2$ and $162\\text{ cm}^2$, respectively. If the volume of Prism A is $128\\text{ cm}^3$, what is the volume, in $\\text{cm}^3$, of Prism B?`,
    type: 'grid-in',
    correctAnswer: '432',
    acceptedGridInAnswers: ['432'],
    explanation: 'For any two similar three-dimensional figures with linear scale factor $k$:\n1. Ratio of surface areas: $\\frac{SA_B}{SA_A} = k^2$\n2. Ratio of volumes: $\\frac{V_B}{V_A} = k^3$\n\nGiven the surface area ratio:\n$$k^2 = \\frac{162}{72}$$\n\nSimplify the fraction by dividing both by 18:\n$$\\frac{162 \\div 18}{72 \\div 18} = \\frac{9}{4}$$\n\nTake the square root to find linear scale factor $k$:\n$$k = \\sqrt{\\frac{9}{4}} = \\frac{3}{2}$$\n\nNow, compute the volume ratio $k^3$:\n$$k^3 = \\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$$\n\nMultiply the volume of Prism A by $k^3$:\n$$V_B = V_A \\times \\frac{27}{8} = 128 \\times \\frac{27}{8}$$\n\nSince $128 \\div 8 = 16$:\n$$V_B = 16 \\times 27 = 432$$\n\nTherefore, the volume of Prism B is 432 $\\text{cm}^3$.',
    strategyTip: 'Always remember: Area scales as $k^2$, Volume scales as $k^3$. Find $k$ first by taking the square root of the area ratio, then cube it to scale the volume.'
  },

  // Math Module 2 (Hard Adaptive)
  {
    id: 'e3-m2-q1',
    examId: 'exam-3',
    section: 'math',
    module: 2,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear Equations with Infinite Solutions',
    difficulty: 'Extreme',
    prompt: `In the equation below, $p$ and $q$ are constants:\n\n$$5(3x - 4) + px = q(x - 2) - 6$$\n\nIf the equation is true for all real values of $x$, what is the value of $q - p$?`,
    type: 'grid-in',
    correctAnswer: '15',
    acceptedGridInAnswers: ['15'],
    explanation: 'If an equation is true for all values of $x$, it is an identity: the coefficients of $x$ on both sides must be equal, and the constant terms on both sides must be equal.\n\nExpand both sides:\nLeft Side: $15x - 20 + px = (15 + p)x - 20$\nRight Side: $qx - 2q - 6 = qx - (2q + 6)$\n\nEquate constant terms:\n$$-20 = -(2q + 6)$$\n$$20 = 2q + 6$$\n$$2q = 14 \\implies q = 7$$\n\nEquate $x$-coefficients:\n$$15 + p = q$$\nSubstitute $q = 7$:\n$$15 + p = 7 \\implies p = 7 - 15 = -8$$\n\nWait, let\'s check $p + q$:\n$$p + q = -8 + 7 = -1$$\nWait! Let\'s re-read the right side constants: $q(x - 2) - 6 = qx - 2q - 6$. If $-20 = -2q - 6$, then $2q = 14 \\implies q = 7$. $15 + p = 7 \\implies p = -8$. Then $p + q = -1$.\nWait! If the question asks for $q - p$, $7 - (-8) = 15$. If it asks for $p + q$, $-8 + 7 = -1$. Let\'s adjust the question or answer to be strictly positive so it\'s impossible to confuse signs: let\'s set $p + q = -1$ or change the equation so $p+q = 21$.\nIf $5(3x + 4) + px = q(x + 2) + 6$:\n$15x + 20 + px = qx + 2q + 6$.\nConstants: $20 = 2q + 6 \\implies 2q = 14 \\implies q = 7$.\nCoefficients: $15 + p = q \\implies 15 + p = 7 \\implies p = -8$.\nWhat if right side was $q(x - 2) + 34$? Then $-20 = -2q + 34 \\implies 2q = 54 \\implies q = 27$.\nLet\'s keep the clean values: $q = 7$, $p = -8$, and ask for the value of $q - p$:\n$q - p = 7 - (-8) = 15$!',
    strategyTip: 'When an equation has infinitely many solutions (or is true for all $x$), simplify both sides into $Ax + B = Cx + D$, then set $A = C$ and $B = D$.'
  },
  {
    id: 'e3-m2-q2',
    examId: 'exam-3',
    section: 'math',
    module: 2,
    questionNumber: 2,
    domain: 'Advanced Math',
    skill: 'Exponential Transformations and Asymptotes',
    difficulty: 'Extreme',
    prompt: `The function $g(x) = a \\cdot b^x + c$ has a horizontal asymptote at $y = -6$ and passes through the points $(0, -2)$ and $(2, 30)$. If $b > 0$, what is the value of $g(1)$?`,
    type: 'grid-in',
    correctAnswer: '6',
    acceptedGridInAnswers: ['6'],
    explanation: 'For any exponential function of the form $g(x) = a \\cdot b^x + c$, as $x \\to -\\infty$ (or $+\\infty$ if $0 < b < 1$), $b^x \\to 0$, which leaves the horizontal asymptote at $y = c$.\nTherefore:\n$$c = -6$$\n\nNow, substitute the given points to solve for $a$ and $b$:\n1. Point $(0, -2)$:\n$$g(0) = a \\cdot b^0 - 6 = -2$$\nSince $b^0 = 1$:\n$$a - 6 = -2 \\implies a = 4$$\n\n2. Point $(2, 30)$:\n$$g(2) = 4 \\cdot b^2 - 6 = 30$$\n$$4b^2 = 36$$\n$$b^2 = 9$$\nSince $b > 0$, we have $b = 3$.\n\nSo the complete function is:\n$$g(x) = 4(3)^x - 6$$\n\nNow evaluate $g(1)$:\n$$g(1) = 4(3)^1 - 6 = 12 - 6 = 6$$\n\nThus, $g(1) = 6$.',
    strategyTip: 'Horizontal asymptote of $y = a \\cdot b^x + c$ is ALWAYS the constant $c$. Once you plug in $c$, use the $y$-intercept $(0, y_0)$ to get $a$, then the second point for $b$.'
  }
];
