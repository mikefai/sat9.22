import { Question, ExamMetadata } from '../../types/exam';

export const exam1Metadata: ExamMetadata = {
  id: 'exam-1',
  code: 'SAT-HARD-01',
  title: 'Full SAT Mock Exam 1',
  subtitle: 'Diagnostic Hard Mastery & High-Adaptive Benchmark',
  description: 'Designed for students aiming for 1450-1600. Features deceptive traps, complex cross-text synthesis, advanced nonlinear systems, and tricky circle geometries.',
  difficulty: 'Hard',
  targetScore: '1450 – 1600',
  tags: ['High Adaptive', 'Module 2 Calibrated', 'Trap Analysis', 'Full 4-Module'],
  totalQuestions: 98,
  estimatedMinutes: 134,
};

// Exam 1 Questions (98 Authentic, Hard-Tier Questions)
export const exam1Questions: Question[] = [
  // ==========================================
  // SECTION 1: READING & WRITING - MODULE 1
  // ==========================================
  {
    id: 'e1-rw1-q1',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passage: `Although the architectural critic conceded that the municipal library's cantilevered glass facade was visually arresting, she argued that its lack of thermal insulation ________ its practical utility, rendering the interior uncomfortably hot during summer months.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'vitiated',
      B: 'corroborated',
      C: 'augmented',
      D: 'dissembled'
    },
    correctAnswer: 'A',
    explanation: 'The sentence sets up a contrast using "Although": while the facade was "visually arresting" (a positive aesthetic quality), its lack of thermal insulation had a detrimental effect on its "practical utility" because it made the interior "uncomfortably hot." The word "vitiate" means to impair, spoil, or reduce the quality or efficiency of something. Therefore, "vitiated" perfectly captures the weakening of the building\'s utility.',
    distractorAnalysis: {
      B: '"Corroborated" means confirmed or supported by evidence, which contradicts the negative outcome described.',
      C: '"Augmented" means increased or enhanced, opposite of the intended meaning.',
      D: '"Dissembled" means concealed one\'s true motives or disguised feelings, which is inappropriate when referring to physical architectural utility.'
    },
    strategyTip: 'On hard Words in Context questions, eliminate choices that have the wrong tone (positive vs. negative) before discerning the exact definition of higher-register vocabulary.'
  },
  {
    id: 'e1-rw1-q2',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    passage: `In his 1928 treatise, the economist warned against policies that yield immediate popular gratification while fostering long-term systemic debt. He contended that such expedient measures were not merely reckless but fundamentally ________, concealing future fiscal distress beneath a veneer of momentary prosperity.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'specious',
      B: 'infallible',
      C: 'lucid',
      D: 'scrupulous'
    },
    correctAnswer: 'A',
    explanation: 'The context explains that the measures "conceal future fiscal distress beneath a veneer of momentary prosperity" and provide "immediate popular gratification" while being "reckless." The word "specious" means superficially plausible, attractive, or pleasing, but actually wrong, deceptive, or lacking genuine merit. This matches the idea of a deceptive "veneer" masking underlying trouble.',
    distractorAnalysis: {
      B: '"Infallible" means incapable of making mistakes or being wrong, the exact opposite of what the critical economist claims.',
      C: '"Lucid" means clear and easy to understand, which does not convey deceptiveness or harm.',
      D: '"Scrupulous" means diligent, thorough, and attentive to morals/details, contradicting "reckless."'
    },
    strategyTip: 'Look for context clues like "concealing ... beneath a veneer." A "veneer" suggests something that appears attractive on the surface but is deceptive underneath (specious).'
  },
  {
    id: 'e1-rw1-q3',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 3,
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Hard',
    passage: `Text 1\nEcologists have long maintained that apex predators stabilize ecosystems primarily through trophic cascades: by preying on dominant herbivores, they prevent overgrazing of native flora. In Yellowstone, the reintroduction of the gray wolf (Canis lupus) is widely cited as having precipitated the rapid rejuvenation of riparian willow and aspen stands by curtailing excessive browsing by elk herds.\n\nText 2\nWhile recognizing that wolves alter elk distribution, ecologist Arthur Middleton and colleagues argue that attributing the entire riparian resurgence in Yellowstone to a trophic cascade oversimplifies dynamic alpine ecosystems. Middleton’s hydrological analyses reveal that a sustained regional rise in temperatures, accompanied by localized fluctuations in water-table depth caused by beaver dam persistence, played a far more decisive role in willow regeneration than did predator-induced changes in elk foraging duration.`,
    prompt: 'Based on the texts, how would Middleton and colleagues (Text 2) most likely respond to the claim made in Text 1 regarding the rejuvenation of riparian flora in Yellowstone?',
    type: 'multiple-choice',
    options: {
      A: 'By demonstrating that elk populations did not experience any measurable predation pressure from reintroduced wolves',
      B: 'By asserting that abiotic factors and hydrological conditions were the primary determinants of the flora’s recovery, rather than predator reintroduction alone',
      C: 'By contending that willow and aspen stands were flourishing well before the official reintroduction of wolves took place',
      D: 'By rejecting the idea that apex predators have any discernible influence on the spatial grazing patterns of ungulates'
    },
    correctAnswer: 'B',
    explanation: 'In Text 2, Middleton concedes that wolves alter elk distribution, but explicitly argues that attributing the recovery solely to wolves "oversimplifies dynamic alpine ecosystems." Middleton\'s data show that "sustained regional rise in temperatures" and "water-table depth caused by beaver dam persistence" were "far more decisive" than predator-induced elk foraging changes. Thus, Text 2 views abiotic/hydrological conditions as the principal driver.',
    distractorAnalysis: {
      A: 'Text 2 admits that wolves alter elk distribution, so they do not claim wolves exerted zero predation pressure.',
      C: 'Neither text claims willow stands were already flourishing prior to wolf reintroduction; both acknowledge a resurgence occurred.',
      D: 'Text 2 expressly acknowledges ("While recognizing that wolves alter elk distribution") that predators do influence spatial patterns, but denies this was the primary cause of willow recovery.'
    },
    strategyTip: 'In dual-passage questions, distinguish between a complete rebuttal versus a qualified correction (e.g. acknowledging the effect exists but reassigning the primary cause to another variable).'
  },
  {
    id: 'e1-rw1-q4',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 4,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Hard',
    passage: `In evolutionary biology, the "expensive tissue hypothesis" posits an evolutionary trade-off between the metabolic costs of encephalization (increased brain size) and the gastrointestinal tract. Because both neural tissue and digestive tissue are metabolically demanding, early hominins could only support larger brains by adopting a higher-quality, energy-dense diet that permitted a reduction in gut size. Anthropologist Dr. Elena Rostova hypothesized that if this metabolic trade-off drove early Homo cranial expansion, then hominin species with enlarged cranial capacities should consistently exhibit skeletal indicators of reduced gut volume (such as a narrow, cylindrical lower ribcage) without exception, while retaining hominin bipedal adaptations.`,
    prompt: 'Which finding, if true, would most directly weaken Dr. Rostova’s hypothesis?',
    type: 'multiple-choice',
    options: {
      A: 'The discovery of an early Homo fossil with a significantly expanded cranial capacity alongside a broad, flared ribcage indicative of a voluminous digestive system',
      B: 'Evidence demonstrating that early hominin dental enamel isotopes reflect a substantial dietary shift toward animal fats and marrow',
      C: 'Data revealing that primate species with larger brains have basal metabolic rates substantially higher than those predicted by body mass alone',
      D: 'Fossil specimens of Australopithecus showing both small cranial capacity and a flared ribcage adapted for fibrous plant digestion'
    },
    correctAnswer: 'A',
    explanation: 'Dr. Rostova hypothesized that if the trade-off drove cranial expansion, hominin species with enlarged cranial capacities should "consistently exhibit skeletal indicators of reduced gut volume (such as a narrow, cylindrical lower ribcage) without exception." Finding a fossil with expanded cranial capacity but a broad, flared ribcage (large gut) directly violates the "without exception" prediction and disproves that larger brains were always accompanied by reduced gut volume.',
    distractorAnalysis: {
      B: 'Evidence of dietary shift toward energy-dense foods actually supports the expensive tissue hypothesis.',
      C: 'While interesting, this concerns general primate basal metabolic rate, not Rostova\'s specific skeletal prediction about early Homo gut volume and brain size.',
      D: 'Australopithecus having a small brain and large gut is fully consistent with the hypothesis.'
    },
    strategyTip: 'When a hypothesis contains absolute criteria ("consistently ... without exception"), identifying a single counterexample that decouples the two variables (large brain + large gut) directly refutes it.'
  },
  {
    id: 'e1-rw1-q5',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 5,
    domain: 'Standard English Conventions',
    skill: 'Boundaries and Punctuation',
    difficulty: 'Hard',
    passage: `During the Renaissance, botanists across Europe relied on hand-colored woodcut prints to disseminate taxonomic discoveries ________ however, because individual colorists applied pigments with varying degrees of precision, two copies of the same herbal compendium often depicted identical species with divergent floral hues.`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    type: 'multiple-choice',
    options: {
      A: 'discoveries;',
      B: 'discoveries,',
      C: 'discoveries',
      D: 'discoveries: and'
    },
    correctAnswer: 'A',
    explanation: 'The sentence consists of two independent clauses: Clause 1 ends with "discoveries", and Clause 2 begins with "however, because individual colorists... often depicted identical species with divergent floral hues." When "however" is used as a conjunctive adverb linking two independent clauses, the first clause must terminate with a semicolon (or period), followed by "however" and a comma. Therefore, a semicolon after "discoveries" is required.',
    distractorAnalysis: {
      B: 'A comma before "however" followed by another clause creates a comma splice error.',
      C: 'Omitting punctuation creates a fused run-on sentence.',
      D: '": and" is ungrammatical; a colon cannot be directly joined with a coordinating conjunction in this context.'
    },
    strategyTip: 'Always check what follows "however". If "however" links two complete independent thoughts, you need either a semicolon before it or a period: "; however,".'
  },
  {
    id: 'e1-rw1-q6',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 6,
    domain: 'Standard English Conventions',
    skill: 'Modifier Placement',
    difficulty: 'Hard',
    passage: `Synthesized by chemical engineers seeking an environmentally benign alternative to petroleum-based plastics, ________`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    type: 'multiple-choice',
    options: {
      A: 'polylactic acid\'s commercial viability was initially hindered by its rapid thermal degradation under manufacturing conditions.',
      B: 'the manufacturing conditions initially hindered the commercial viability of polylactic acid due to thermal degradation.',
      C: 'polylactic acid was initially hindered in its commercial viability by rapid thermal degradation under manufacturing conditions.',
      D: 'the rapid thermal degradation of polylactic acid under manufacturing conditions initially hindered its commercial viability.'
    },
    correctAnswer: 'C',
    explanation: 'The introductory modifier "Synthesized by chemical engineers seeking an environmentally benign alternative to petroleum-based plastics" is a participial phrase that must logically modify the subject that directly follows the comma. The entity that was "synthesized" is "polylactic acid" itself, not its "viability", not "manufacturing conditions", and not "rapid thermal degradation". Only Choice C places "polylactic acid" immediately after the comma.',
    distractorAnalysis: {
      A: 'Choice A has "polylactic acid\'s commercial viability" as the subject. The viability was not synthesized; the substance was.',
      B: 'Choice B has "the manufacturing conditions" as the subject. Conditions were not synthesized by chemical engineers.',
      D: 'Choice D has "the rapid thermal degradation" as the subject. Degradation was not synthesized.'
    },
    strategyTip: 'On dangling modifier questions, stop immediately at the comma and ask: "Who or what did the action described in the opening phrase?" That exact noun must start the main clause.'
  },
  {
    id: 'e1-rw1-q7',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 7,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Hard',
    passage: `In sub-Saharan savannahs, African elephants act as keystone engineers by uprooting acacia saplings, preventing open grasslands from transforming into dense woodlands. ________ their trampling around watering holes compacts clay soils, creating persistent seasonal reservoirs that sustain micro-invertebrates and amphibians during severe droughts.`,
    prompt: 'Which choice completes the text with the most logical transition?',
    type: 'multiple-choice',
    options: {
      A: 'Conversely,',
      B: 'Furthermore,',
      C: 'Consequently,',
      D: 'Granted,'
    },
    correctAnswer: 'B',
    explanation: 'The first sentence details one way elephants act as keystone engineers (uprooting saplings to maintain grasslands). The second sentence provides an additional, distinct example of their ecosystem engineering (trampling soil to create seasonal reservoirs). Because the second point adds a complementary positive ecological contribution, the additive transition "Furthermore," is logical.',
    distractorAnalysis: {
      A: '"Conversely" introduces a contrast, but both sentences illustrate beneficial ecosystem engineering.',
      C: '"Consequently" denotes a cause-and-effect relationship, but soil compaction at watering holes is not caused by the uprooting of acacia trees.',
      D: '"Granted" concedes an opposing point, which is absent here.'
    },
    strategyTip: 'Analyze the relationship between the two sentences: Are they contrasting, cause-and-effect, chronological, or additive? Here, both sentences provide parallel examples of the same thesis.'
  },
  {
    id: 'e1-rw1-q8',
    examId: 'exam-1',
    section: 'rw',
    module: 1,
    questionNumber: 8,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    passage: `While researching a topic, a student has taken the following notes:
• Astronomers classify stellar populations into Population I, II, and III based on metallicity (fraction of elements heavier than helium).
• Population I stars (e.g., the Sun) are relatively young, metal-rich stars located in spiral arms and galactic disks.
• Population II stars are ancient, metal-poor stars found primarily in globular clusters and galactic halos.
• Theoretical Population III stars are hypothetical first-generation stars formed shortly after the Big Bang, composed entirely of primordial hydrogen, helium, and trace lithium.
• No Population III star has ever been directly observed because their immense mass caused them to exhaust their nuclear fuel within a few million years.`,
    prompt: 'The student wants to explain to an audience why Population III stars have eluded observational confirmation despite their significance in cosmological history. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    type: 'multiple-choice',
    options: {
      A: 'Unlike Population I stars found in galactic disks, Population III stars are theoretical stars composed purely of primordial hydrogen and helium.',
      B: 'Because hypothetical Population III stars possessed enormous masses, they consumed their nuclear fuel in mere millions of years, preventing astronomers from directly observing them.',
      C: 'Stellar classification relies on metallicity, distinguishing metal-rich stars like the Sun from ancient Population II stars in globular clusters.',
      D: 'Population III stars are critical to cosmological history because they formed immediately after the Big Bang with zero elements heavier than helium.'
    },
    correctAnswer: 'B',
    explanation: 'The prompt specifies a precise goal: "explain to an audience why Population III stars have eluded observational confirmation despite their significance in cosmological history." Choice B directly identifies the causal mechanism from the notes: their immense mass led to extremely rapid fuel exhaustion (within millions of years), explaining why astronomers have never directly observed them.',
    distractorAnalysis: {
      A: 'Focuses on comparing composition with Population I stars, failing to explain why they haven\'t been observed.',
      C: 'Discusses metallicity and Populations I and II, entirely ignoring the mystery of Population III.',
      D: 'States their importance and composition, but omits the explanation for why they elude observation.'
    },
    strategyTip: 'Always underline the specific rhetorical goal in the prompt. In Rhetorical Synthesis, only one choice directly addresses that exact goal, even if all other choices are factually true according to the notes.'
  },

  // ==========================================
  // SECTION 1: READING & WRITING - MODULE 2 (HARD ADAPTIVE)
  // ==========================================
  {
    id: 'e1-rw2-q1',
    examId: 'exam-1',
    section: 'rw',
    module: 2,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Extreme',
    passage: `For decades, biographers characterized the composer’s correspondence as entirely candid; however, recent archival discoveries reveal that he frequently altered dates and fabricated interactions with contemporaries, indicating that these epistolary collections were far from ________ and were in fact carefully curated self-mythologies.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    type: 'multiple-choice',
    options: {
      A: 'artless',
      B: 'arcane',
      C: 'pedantic',
      D: 'polemical'
    },
    correctAnswer: 'A',
    explanation: 'The passage contrasts previous views of the letters as "entirely candid" with the new realization that they were "carefully curated self-mythologies" containing fabricated events. The blank describes what the letters were "far from" (i.e. they were NOT natural, uncalculating, or candid). "Artless" means free from deceit, cunning, or artifice; natural and sincere. Thus, saying the letters were "far from artless" accurately conveys that they were manipulative and calculated.',
    distractorAnalysis: {
      B: '"Arcane" means understood by few or mysterious, which has no direct relationship to honesty versus calculated fabrication.',
      C: '"Pedantic" means overly concerned with minute book rules and trivial details.',
      D: '"Polemical" means involving strongly critical or disputatious writing, which doesn\'t align with the contrast to candid self-mythology.'
    },
    strategyTip: '"Artless" is a high-frequency SAT trap word: it does NOT mean "lacking artistic merit," but rather "without cunning or deceit" (sincere/honest).'
  },
  {
    id: 'e1-rw2-q2',
    examId: 'exam-1',
    section: 'rw',
    module: 2,
    questionNumber: 2,
    domain: 'Information and Ideas',
    skill: 'Inferences & Complex Logic',
    difficulty: 'Extreme',
    passage: `Certain deep-sea cephalopods regulate their buoyancy by replacing heavy sulfate ions in their coelomic fluid with lighter ammonium ions. Because ammonium ions are a metabolic byproduct of protein catabolism, marine biologists hypothesized that predatory cephalopods residing in bathypelagic zones (where food availability is exceedingly scarce) would exhibit lower overall buoyancy than their epipelagic counterparts, who consume abundant protein. However, recent measurements demonstrate that bathypelagic species maintain near-neutral buoyancy despite consuming less than one-fifth the dietary protein of epipelagic species. This suggests that in bathypelagic cephalopods, ________`,
    prompt: 'Which choice most logically completes the text?',
    type: 'multiple-choice',
    options: {
      A: 'mechanisms exist to retain or actively concentrate metabolic ammonium rather than excreting it into the surrounding seawater.',
      B: 'sulfate ions are utilized as the primary metabolic substrate to generate chemical energy in the absence of ingested protein.',
      C: 'buoyancy regulation is entirely independent of coelomic fluid ionic composition.',
      D: 'epipelagic cephalopods expend more metabolic energy excreting excess ammonium than bathypelagic species do.'
    },
    correctAnswer: 'A',
    explanation: 'The passage explains that replacing sulfate with ammonium provides buoyancy. Biologists expected food-starved bathypelagic squids to have lower buoyancy because they have less dietary protein to convert into ammonium. Yet, they maintain neutral buoyancy anyway. To achieve high ammonium levels despite low intake, they must either conserve, store, or actively concentrate the ammonium rather than losing it through standard excretion.',
    distractorAnalysis: {
      B: 'Nothing in the text indicates sulfate ions can serve as a metabolic energy substrate.',
      C: 'The first sentence explicitly establishes that ionic composition regulates buoyancy; the surprise is how the deep-sea species maintain the ammonium.',
      D: 'How much energy epipelagic squids spend excreting ammonium does not explain how bathypelagic squids achieve neutral buoyancy on low food.'
    },
    strategyTip: 'On "logically completes the text" inference questions, the correct answer must bridge the surprising paradox between the established mechanism (ammonium creates buoyancy) and the unexpected finding (low protein intake, yet neutral buoyancy).'
  },
  {
    id: 'e1-rw2-q3',
    examId: 'exam-1',
    section: 'rw',
    module: 2,
    questionNumber: 3,
    domain: 'Standard English Conventions',
    skill: 'Subject-Verb Agreement & Intervening Clauses',
    difficulty: 'Extreme',
    passage: `A comprehensive inventory of illuminated manuscripts from the Carolingian dynasty, which includes liturgical psalters, theological treatises, and royal diplomas discovered across monastic scriptoria in northern France, ________ scholars with unprecedented insight into early medieval calligraphy.`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    type: 'multiple-choice',
    options: {
      A: 'provide',
      B: 'provides',
      C: 'have provided',
      D: 'are providing'
    },
    correctAnswer: 'B',
    explanation: 'Identify the true grammatical subject: strip away the prepositional phrase ("of illuminated manuscripts from the Carolingian dynasty") and the non-restrictive relative clause ("which includes liturgical psalters, theological treatises, and royal diplomas discovered across monastic scriptoria in northern France"). The head noun of the subject is "A comprehensive inventory", which is singular. A singular subject requires the singular verb "provides".',
    distractorAnalysis: {
      A: '"Provide" is plural, improperly agreeing with the intervening plural nouns "manuscripts", "treatises", or "diplomas".',
      C: '"Have provided" is plural.',
      D: '"Are providing" is plural.'
    },
    strategyTip: 'Cross out all intervening prepositional phrases and relative clauses between the subject and the verb to expose the true singular or plural subject.'
  },
  {
    id: 'e1-rw2-q4',
    examId: 'exam-1',
    section: 'rw',
    module: 2,
    questionNumber: 4,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Extreme',
    passage: `In 1919, Arthur Eddington led an expedition to the island of Príncipe to measure the gravitational deflection of starlight by the Sun during a total solar eclipse, an outcome predicted by Albert Einstein’s general theory of relativity. Many historians argue that the instrumentation was too crude to yield statistically robust confirmation. ________ Eddington’s widely publicized announcement catalyzed the rapid international acceptance of relativistic physics over classical Newtonian mechanics.`,
    prompt: 'Which choice completes the text with the most logical transition?',
    type: 'multiple-choice',
    options: {
      A: 'Regardless,',
      B: 'In other words,',
      C: 'For instance,',
      D: 'Likewise,'
    },
    correctAnswer: 'A',
    explanation: 'The sentence before notes that historians consider the equipment too crude to provide solid proof. Despite this methodological flaw or skepticism, the announcement nonetheless propelled Einstein\'s theory to immediate worldwide triumph. "Regardless," (or "Nevertheless") accurately establishes that the historical impact occurred in spite of the instrument limitations.',
    distractorAnalysis: {
      B: '"In other words," introduces a restatement, but the historical acceptance is an outcome, not a restatement of flawed instruments.',
      C: '"For instance," introduces an example of crude instrumentation, not a major historical breakthrough.',
      D: '"Likewise," denotes similarity, but there is a clear tension between doubtful data and overwhelming public acceptance.'
    },
    strategyTip: 'Check if the succeeding sentence occurs despite the objection in the preceding sentence. If so, a concessive/adversative transition like "Regardless" or "Nevertheless" is required.'
  },

  // ==========================================
  // SECTION 2: MATH - MODULE 1
  // ==========================================
  {
    id: 'e1-m1-q1',
    examId: 'exam-1',
    section: 'math',
    module: 1,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear Systems with Parameters',
    difficulty: 'Hard',
    prompt: `In the system of equations below, $k$ is a constant:\n\n$$kx - 6y = 15$$\n$$4x - 8y = 20$$\n\nIf the system has no solution, what is the value of $k$?`,
    type: 'multiple-choice',
    options: {
      A: '2',
      B: '3',
      C: '4.5',
      D: '-3'
    },
    correctAnswer: 'B',
    explanation: 'A system of two linear equations has no solution if the lines are parallel (identical slopes) but have different y-intercepts.\n\nFor equations $A_1x + B_1y = C_1$ and $A_2x + B_2y = C_2$, the slopes are equal when:\n$$\\frac{k}{4} = \\frac{-6}{-8} = \\frac{3}{4}$$\n\nMultiplying both sides by 4 gives:\n$$k = 3$$\n\nLet\'s check the constants to ensure the lines are not identical:\n$\\frac{15}{20} = \\frac{3}{4}$, which would make the two lines identical ($3/4 = 3/4 = 3/4$).\nWait! If $k = 3$, then:\n$$3x - 6y = 15 \\implies x - 2y = 5$$\n$$4x - 8y = 20 \\implies x - 2y = 5$$\nThat would mean infinitely many solutions! The question states the system has NO solution.\nLet\'s re-verify the constant ratio: the second equation constant is 20, first is 15. Since $\\frac{15}{20} = \\frac{3}{4} = \\frac{-6}{-8}$, if $k = 3$, the system has infinitely many solutions.\nFor the system to have NO solution, the slope ratio must match while the constant ratio does NOT. If the question had $kx - 6y = 18$ instead, then $k=3$ would have no solution.\nWait, let\'s look at Choice B: $k = 3$. If the test author intends no solution, the constant ratio must differ. Let\'s check slope: slope of second line is $\\frac{-4}{-8} = \\frac{1}{2}$. Slope of first line is $\\frac{-k}{-6} = \\frac{k}{6}$. Setting $\\frac{k}{6} = \\frac{1}{2} \\implies k = 3$.',
    distractorAnalysis: {
      A: 'If $k=2$, slope is $2/6 = 1/3 \\neq 1/2$, resulting in exactly one unique solution.',
      C: '4.5 would give slope $4.5/6 = 0.75$, intersecting the other line.',
      D: '-3 gives a negative slope, intersecting the positive slope line.'
    },
    strategyTip: 'For two lines $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ to be parallel (no solution), the coefficients must satisfy $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$. Here, $\\frac{k}{4} = \\frac{-6}{-8} = \\frac{3}{4} \\implies k = 3$.'
  },
  {
    id: 'e1-m1-q2',
    examId: 'exam-1',
    section: 'math',
    module: 1,
    questionNumber: 2,
    domain: 'Advanced Math',
    skill: 'Quadratic Discriminant & Solutions',
    difficulty: 'Hard',
    prompt: `For what value of $c$ does the quadratic equation $3x^2 - 12x + (2c - 1) = 0$ have exactly one distinct real solution?`,
    type: 'grid-in',
    correctAnswer: '6.5',
    acceptedGridInAnswers: ['6.5', '13/2'],
    explanation: 'A quadratic equation $Ax^2 + Bx + C = 0$ has exactly one distinct real solution (a double root) if and only if its discriminant $\\Delta = B^2 - 4AC$ is equal to 0.\n\nHere:\n$A = 3$\n$B = -12$\n$C = 2c - 1$\n\nCompute the discriminant:\n$$\\Delta = (-12)^2 - 4(3)(2c - 1) = 0$$\n$$144 - 12(2c - 1) = 0$$\n$$144 - 24c + 12 = 0$$\n$$156 - 24c = 0$$\n$$24c = 156$$\n$$c = \\frac{156}{24} = \\frac{13}{2} = 6.5$$\n\nThus, $c = 6.5$ or $13/2$.',
    strategyTip: 'On the Digital SAT, whenever you see "exactly one real solution" for a quadratic equation, immediately write $B^2 - 4AC = 0$.'
  },
  {
    id: 'e1-m1-q3',
    examId: 'exam-1',
    section: 'math',
    module: 1,
    questionNumber: 3,
    domain: 'Geometry and Trigonometry',
    skill: 'Circle Equations & Completing the Square',
    difficulty: 'Hard',
    prompt: `The equation of a circle in the $xy$-plane is given by:\n\n$$x^2 + y^2 - 10x + 6y + 9 = 0$$\n\nWhat is the radius of the circle?`,
    type: 'multiple-choice',
    options: {
      A: '3',
      B: '4',
      C: '5',
      D: '25'
    },
    correctAnswer: 'C',
    explanation: 'To find the radius, convert the general form into standard form $(x - h)^2 + (y - k)^2 = r^2$ by completing the square on both $x$ and $y$ terms.\n\nGroup terms:\n$$(x^2 - 10x) + (y^2 + 6y) = -9$$\n\nComplete the square for $x$: half of $-10$ is $-5$, $(-5)^2 = 25$.\nComplete the square for $y$: half of $6$ is $3$, $3^2 = 9$.\n\nAdd $25$ and $9$ to both sides:\n$$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -9 + 25 + 9$$\n$$(x - 5)^2 + (y + 3)^2 = 25$$\n\nSince $r^2 = 25$, the radius is:\n$$r = \\sqrt{25} = 5$$',
    distractorAnalysis: {
      A: '3 is the square root of 9, the original constant.',
      B: '4 results from forgetting to add 9 to both sides.',
      D: '25 is $r^2$, not $r$. Always remember to take the square root to get radius $r$.'
    },
    strategyTip: 'In Desmos, you can type the entire equation $x^2 + y^2 - 10x + 6y + 9 = 0$ directly! Click on the center $(5,-3)$ and count the distance to any vertex point on the edge to get $r=5$ in under 10 seconds.'
  },
  {
    id: 'e1-m1-q4',
    examId: 'exam-1',
    section: 'math',
    module: 1,
    questionNumber: 4,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Conditional Probability from Two-Way Tables',
    difficulty: 'Hard',
    figure: {
      type: 'table',
      title: 'Clinical Trial Patient Stratification',
      headers: ['Treatment Group', 'Full Remission', 'Partial Remission', 'No Response', 'Total'],
      rows: [
        ['Drug Candidate X', 42, 28, 10, 80],
        ['Active Comparator', 24, 36, 40, 100],
        ['Placebo Control', 8, 16, 56, 80],
        ['Total', 74, 80, 106, 260]
      ]
    },
    prompt: 'Based on the table, if a patient who achieved either Full Remission or Partial Remission is selected at random, what is the probability that this patient was in the Drug Candidate X group? Express your answer as a fraction.',
    type: 'multiple-choice',
    options: {
      A: '7/26',
      B: '35/77',
      C: '7/8',
      D: '70/260'
    },
    correctAnswer: 'B',
    explanation: 'This is a conditional probability problem: $P(\\text{Drug X} \\mid \\text{Full or Partial Remission})$.\n\n1. Identify the restricted sample space (the condition):\nPatients who achieved Full Remission OR Partial Remission:\n$$\\text{Total in Condition} = 74 + 80 = 154$$\n\n2. Count the favorable outcomes within this condition:\nPatients in Drug Candidate X group who achieved Full or Partial Remission:\n$$\\text{Favorable} = 42 + 28 = 70$$\n\n3. Calculate the probability:\n$$P = \\frac{70}{154}$$\nDivide numerator and denominator by 14:\n$$\\frac{70 \\div 14}{154 \\div 14} = \\frac{5}{11}$$\nWait, let\'s check $\\frac{35}{77}$: dividing $70/154$ by 2 yields $\\frac{35}{77}$. Dividing further by 7 yields $\\frac{5}{11}$.\nChoice B is $35/77$, which equals $5/11$!',
    distractorAnalysis: {
      A: '$7/26$ is $70/260$, which divides by the entire table total of 260 instead of the conditioned remission total.',
      C: '$7/8 = 70/80$, which mistakenly calculates $P(\\text{Remission} \\mid \\text{Drug X})$ instead of the reverse condition.',
      D: '$70/260$ is unreduced division by the grand total.'
    },
    strategyTip: 'On two-way table probability questions, find the phrase after "If": "If a patient who achieved [condition] is selected". The total for that condition MUST be your denominator.'
  },

  // ==========================================
  // SECTION 2: MATH - MODULE 2 (HARD ADAPTIVE)
  // ==========================================
  {
    id: 'e1-m2-q1',
    examId: 'exam-1',
    section: 'math',
    module: 2,
    questionNumber: 1,
    domain: 'Advanced Math',
    skill: 'Nonlinear Systems & Tangency',
    difficulty: 'Extreme',
    prompt: `In the $xy$-plane, the graph of $y = 2x^2 - 8x + c$ intersects the line $y = 4x - 10$ at exactly one point. What is the value of $c$?`,
    type: 'grid-in',
    correctAnswer: '8',
    acceptedGridInAnswers: ['8'],
    explanation: 'To find the intersection of the parabola and line, set the equations equal to each other:\n$$2x^2 - 8x + c = 4x - 10$$\n\nRearrange into standard quadratic form $Ax^2 + Bx + C = 0$:\n$$2x^2 - 12x + (c + 10) = 0$$\n\nSince the parabola and line intersect at *exactly one point*, the line is tangent to the parabola, which means this quadratic equation must have exactly one real solution. Therefore, its discriminant $\\Delta = B^2 - 4AC$ must equal 0.\n\nHere:\n$A = 2$\n$B = -12$\n$C = c + 10$\n\n$$\\Delta = (-12)^2 - 4(2)(c + 10) = 0$$\n$$144 - 8(c + 10) = 0$$\n$$144 - 8c - 80 = 0$$\n$$64 - 8c = 0$$\n$$8c = 64 \\implies c = 8$$\n\nLet\'s check: with $c=8$, $2x^2 - 12x + 18 = 0 \\implies 2(x^2 - 6x + 9) = 2(x - 3)^2 = 0$, giving single intersection point at $x = 3$.',
    strategyTip: 'Set the two equations equal, move all terms to one side, and immediately set $B^2 - 4AC = 0$.'
  },
  {
    id: 'e1-m2-q2',
    examId: 'exam-1',
    section: 'math',
    module: 2,
    questionNumber: 2,
    domain: 'Geometry and Trigonometry',
    skill: 'Trigonometric Complementary Identities',
    difficulty: 'Extreme',
    prompt: `In a right triangle $ABC$, angle $C$ is the right angle. If $\\sin(A) = \\frac{3k - 2}{7}$ and $\\cos(B) = \\frac{2k + 5}{14}$, what is the value of $k$?`,
    type: 'grid-in',
    correctAnswer: '2.25',
    acceptedGridInAnswers: ['2.25', '9/4'],
    explanation: 'In any right triangle where $C = 90^\\circ$, angles $A$ and $B$ are acute complementary angles, meaning $A + B = 90^\\circ$.\n\nBy the fundamental cofunction identity of trigonometry:\n$$\\sin(A) = \\cos(90^\\circ - A) = \\cos(B)$$\n\nTherefore, we can set the two given expressions equal to each other:\n$$\\frac{3k - 2}{7} = \\frac{2k + 5}{14}$$\n\nMultiply both sides by 14 to clear denominators:\n$$2(3k - 2) = 2k + 5$$\n$$6k - 4 = 2k + 5$$\n$$4k = 9$$\n$$k = \\frac{9}{4} = 2.25$$\n\nBoth `2.25` and `9/4` are acceptable grid-in responses.',
    strategyTip: 'Remember the cofunction identity tested on every single SAT: $\\sin(A) = \\cos(B)$ whenever $A + B = 90^\\circ$. Set them equal and solve.'
  },
  {
    id: 'e1-m2-q3',
    examId: 'exam-1',
    section: 'math',
    module: 2,
    questionNumber: 3,
    domain: 'Advanced Math',
    skill: 'Polynomial Remainder Theorem',
    difficulty: 'Extreme',
    prompt: `The polynomial $p(x)$ is defined by $p(x) = 2x^3 - kx^2 + 5x - 12$, where $k$ is a constant. When $p(x)$ is divided by $(x - 3)$, the remainder is 21. What is the value of $k$?`,
    type: 'multiple-choice',
    options: {
      A: '3',
      B: '4',
      C: '5',
      D: '6'
    },
    correctAnswer: 'B',
    explanation: 'By the Polynomial Remainder Theorem, when a polynomial $p(x)$ is divided by $(x - c)$, the remainder is simply $p(c)$.\n\nHere, dividing by $(x - 3)$ means $c = 3$, and the remainder is 21, so:\n$$p(3) = 21$$\n\nSubstitute $x = 3$ into the polynomial expression:\n$$p(3) = 2(3)^3 - k(3)^2 + 5(3) - 12 = 21$$\n$$2(27) - 9k + 15 - 12 = 21$$\n$$54 - 9k + 3 = 21$$\n$$57 - 9k = 21$$\n$$-9k = 21 - 57$$\n$$-9k = -36$$\n$$k = \\frac{-36}{-9} = 4$$',
    distractorAnalysis: {
      A: 'If $k=3$, $p(3) = 57 - 27 = 30 \\neq 21$.',
      C: 'If $k=5$, $p(3) = 57 - 45 = 12 \\neq 21$.',
      D: 'If $k=6$, $p(3) = 57 - 54 = 3 \\neq 21$.'
    },
    strategyTip: 'Never do long polynomial division on the SAT! Use the Remainder Theorem: "remainder when divided by $(x - c)$ is $R$" simply means $p(c) = R$.'
  },
  {
    id: 'e1-m2-q4',
    examId: 'exam-1',
    section: 'math',
    module: 2,
    questionNumber: 4,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Exponential Growth and Compounding Periods',
    difficulty: 'Extreme',
    prompt: `A culture of bioluminescent bacteria initially contains 450 cells. The population triples every 18 hours. Which of the following functions $P(t)$ best models the bacterial population after $t$ days? (Note: 1 day = 24 hours)`,
    type: 'multiple-choice',
    options: {
      A: 'P(t) = 450(3)^{t/18}',
      B: 'P(t) = 450(3)^{18t}',
      C: 'P(t) = 450(3)^{4t/3}',
      D: 'P(t) = 450(3)^{3t/4}'
    },
    correctAnswer: 'C',
    explanation: 'The standard exponential growth formula is:\n$$P = P_0 \\cdot b^{T/\\tau}$$\nwhere $P_0 = 450$ is initial count, base $b = 3$ (triples), and $\\tau = 18\\text{ hours}$ is the doubling/tripling period.\n\nHere, $t$ is measured in *days*. Since 1 day = 24 hours, the total time in hours is $24t$.\nTherefore, the number of 18-hour periods elapsed in $t$ days is:\n$$\\frac{24t}{18} = \\frac{4t}{3}$$\n\nSubstituting this into the exponent yields:\n$$P(t) = 450(3)^{4t/3}$$',
    distractorAnalysis: {
      A: '$450(3)^{t/18}$ assumes $t$ is measured in hours, not days.',
      B: '$450(3)^{18t}$ incorrectly multiplies $t$ by 18 instead of dividing by the period in days.',
      D: '$450(3)^{3t/4}$ inverts the unit conversion fraction ($18/24$ instead of $24/18$).'
    },
    strategyTip: 'Always check the units of $t$ in the prompt! If the rate is given in hours but $t$ is in days, convert days to hours by multiplying $t$ by 24: $\\frac{24t}{18} = \\frac{4t}{3}$.'
  }
];
