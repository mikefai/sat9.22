import json
import os

def build_exam_data(exam_idx, exam_id, code, title, subtitle, desc, difficulty, target_score, tags):
    rw_m1 = []
    rw_m2 = []
    math_m1 = []
    math_m2 = []

    # ==========================================
    # RW MODULE 1 (27 Questions)
    # ==========================================
    rw1_vocab = [
        ("vitiated", "Although the critic conceded the glass facade was visually arresting, its lack of thermal insulation ________ its practical utility, rendering the interior hot.", "vitiated", ["corroborated", "augmented", "dissembled"], "Vitiate means to impair or spoil the effectiveness or validity of something."),
        ("specious", "The economist argued that policies yielding short-term popular gratification were fundamentally ________, concealing future debt beneath a veneer of prosperity.", "specious", ["infallible", "lucid", "scrupulous"], "Specious means superficially plausible, but actually wrong or deceptive."),
        ("laconic", "The mathematician's lecture was notoriously ________; he scrawled three austere formulas and departed without uttering a single explanatory sentence.", "laconic", ["garrulous", "bombastic", "effusive"], "Laconic means using very few words, concise to the point of seeming terse."),
        ("equivocal", "The preliminary geological report offered only ________ conclusions regarding seismic stability, prompting municipal planners to suspend construction.", "equivocal", ["definitive", "indubitable", "categorical"], "Equivocal means open to more than one interpretation; ambiguous or uncertain.")
    ]
    for i, (word, text, correct, wrongs, exp) in enumerate(rw_vocab_set(exam_idx, 1)):
        q_num = i + 1
        opts = { 'A': correct, 'B': wrongs[0], 'C': wrongs[1], 'D': wrongs[2] }
        # Shuffle/rotate so A isn't always correct
        keys = ['A', 'B', 'C', 'D']
        shift = (q_num + exam_idx) % 4
        shuffled_keys = keys[shift:] + keys[:shift]
        new_opts = {}
        correct_key = 'A'
        for orig_k, new_k in zip(['A', 'B', 'C', 'D'], shuffled_keys):
            new_opts[new_k] = opts[orig_k]
            if orig_k == 'A':
                correct_key = new_k
        
        rw_m1.append({
            'id': f'e{exam_idx}-rw1-q{q_num}',
            'examId': exam_id,
            'section': 'rw',
            'module': 1,
            'questionNumber': q_num,
            'domain': 'Craft and Structure',
            'skill': 'Words in Context',
            'difficulty': 'Hard',
            'passage': text,
            'prompt': 'Which choice completes the text with the most logical and precise word or phrase?',
            'type': 'multiple-choice',
            'options': new_opts,
            'correctAnswer': correct_key,
            'explanation': exp,
            'strategyTip': 'Examine the contrast or context signal words before selecting high-register vocabulary.'
        })

    # Questions 5-8: Craft & Structure (Cross-text & Purpose)
    for q_num in range(5, 9):
        item = get_rw_craft_structure(exam_idx, 1, q_num)
        rw_m1.append(item)

    # Questions 9-13: Information & Ideas (Central Ideas & Inferences)
    for q_num in range(9, 14):
        item = get_rw_info_ideas(exam_idx, 1, q_num)
        rw_m1.append(item)

    # Questions 14-17: Information & Ideas (Command of Evidence)
    for q_num in range(14, 18):
        item = get_rw_command_evidence(exam_idx, 1, q_num)
        rw_m1.append(item)

    # Questions 18-23: Standard English Conventions (Grammar & Punctuation)
    for q_num in range(18, 24):
        item = get_rw_conventions(exam_idx, 1, q_num)
        rw_m1.append(item)

    # Questions 24-27: Expression of Ideas (Transitions & Rhetorical Synthesis)
    for q_num in range(24, 28):
        item = get_rw_expression(exam_idx, 1, q_num)
        rw_m1.append(item)

    # ==========================================
    # RW MODULE 2 (27 Questions - Harder Adaptive)
    # ==========================================
    for q_num in range(1, 5):
        item = get_rw_vocab_hard(exam_idx, 2, q_num)
        rw_m2.append(item)
    for q_num in range(5, 9):
        item = get_rw_cross_text_hard(exam_idx, 2, q_num)
        rw_m2.append(item)
    for q_num in range(9, 14):
        item = get_rw_inference_hard(exam_idx, 2, q_num)
        rw_m2.append(item)
    for q_num in range(14, 18):
        item = get_rw_evidence_hard(exam_idx, 2, q_num)
        rw_m2.append(item)
    for q_num in range(18, 24):
        item = get_rw_conventions_hard(exam_idx, 2, q_num)
        rw_m2.append(item)
    for q_num in range(24, 28):
        item = get_rw_expression_hard(exam_idx, 2, q_num)
        rw_m2.append(item)

    # ==========================================
    # MATH MODULE 1 (22 Questions: 17 MC, 5 Grid-In)
    # ==========================================
    for q_num in range(1, 18):
        item = get_math_question(exam_idx, 1, q_num, is_grid_in=False)
        math_m1.append(item)
    for q_num in range(18, 23):
        item = get_math_question(exam_idx, 1, q_num, is_grid_in=True)
        math_m1.append(item)

    # ==========================================
    # MATH MODULE 2 (22 Questions: 17 MC, 5 Grid-In - Harder Adaptive)
    # ==========================================
    for q_num in range(1, 18):
        item = get_math_question(exam_idx, 2, q_num, is_grid_in=False, is_adaptive=True)
        math_m2.append(item)
    for q_num in range(18, 23):
        item = get_math_question(exam_idx, 2, q_num, is_grid_in=True, is_adaptive=True)
        math_m2.append(item)

    all_questions = rw_m1 + rw_m2 + math_m1 + math_m2
    assert len(rw_m1) == 27, f"RW1 length is {len(rw_m1)}"
    assert len(rw_m2) == 27, f"RW2 length is {len(rw_m2)}"
    assert len(math_m1) == 22, f"M1 length is {len(math_m1)}"
    assert len(math_m2) == 22, f"M2 length is {len(math_m2)}"
    assert len(all_questions) == 98, f"Total length is {len(all_questions)}"

    return {
        'metadata': {
            'id': exam_id,
            'code': code,
            'title': title,
            'subtitle': subtitle,
            'description': desc,
            'difficulty': difficulty,
            'targetScore': target_score,
            'tags': tags,
            'totalQuestions': 98,
            'estimatedMinutes': 134,
        },
        'questions': all_questions
    }

# Helper generators for rich content
def rw_vocab_set(exam_idx, mod):
    sets = [
        # Exam 1
        [
            ("vitiated", "Although the municipal library facade was visually striking, its poor thermal barrier ________ its practical utility during summer heatwaves.", "vitiated", ["corroborated", "augmented", "dissembled"], "Vitiate means to impair or diminish the quality or efficiency of something."),
            ("specious", "The fiscal analyst warned that short-term tax rebates offered a ________ solution, masking severe underlying municipal deficits.", "specious", ["lucid", "infallible", "scrupulous"], "Specious means superficially pleasing or plausible, but deceptive in reality."),
            ("laconic", "Known for her ________ style of correspondence, the diplomat conveyed momentous diplomatic breakthroughs in tersely worded two-sentence cables.", "laconic", ["effusive", "verbose", "bombastic"], "Laconic means using very few words; concise and succinct."),
            ("equivocal", "The archeological team's preliminary carbon analysis yielded ________ dates, prompting historians to defer publishing their chronological timeline.", "equivocal", ["definitive", "indubitable", "categorical"], "Equivocal means open to more than one interpretation; ambiguous or inconclusive.")
        ],
        # Exam 2
        [
            ("pragmatic", "Rather than adhering to dogmatic party orthodoxy, the minister's economic compromises were ________, driven by immediate budget constraints.", "pragmatic", ["quixotic", "doctrinaire", "pedantic"], "Pragmatic means guided by practical considerations rather than theoretical or ideological ones."),
            ("arcane", "The manuscript was encoded in an ________ sixteenth-century cipher that baffled even experienced cryptanalysts for decades.", "arcane", ["pedestrian", "transparent", "banal"], "Arcane means understood by few; mysterious or secret."),
            ("artless", "Archival correspondence once thought to be completely ________ was discovered to be an intricately staged series of political fabrications.", "artless", ["disingenuous", "calculating", "duplicitous"], "Artless means free from deceit, natural and sincere. The context contrasts it with staged fabrications."),
            ("ephemeral", "The atmospheric phenomena observed during the solar eruption were remarkably ________, dissipating before spectroscopic sensors could calibrate.", "ephemeral", ["perpetual", "inveterate", "indefatigable"], "Ephemeral means lasting for a very short time; transient.")
        ],
        # Exam 3
        [
            ("pro forma", "While the emperor convened a council of advisors, the deliberations were merely ________; royal decrees had been signed hours prior.", "pro forma", ["incisive", "subversive", "untenable"], "Pro forma means done as a formality or routine gesture without genuine impact."),
            ("coherent", "Though the modernist novel initially struck readers as disjointed, close reading reveals a meticulously ________ thematic framework.", "coherent", ["ephemeral", "superfluous", "anachronistic"], "Coherent means logically ordered, consistent, and integrated into a unified whole."),
            ("tendentious", "Reviewers criticized the monograph as ________, arguing that the author selectively omitted archival evidence that contradicted her thesis.", "tendentious", ["dispassionate", "scrupulous", "impartial"], "Tendentious means expressing or promoting a controversial point of view with explicit bias."),
            ("salutary", "Despite its initial stringency, the newly imposed currency reserve requirement exerted a ________ effect on banking stability.", "salutary", ["deleterious", "pernicious", "malignant"], "Salutary means producing good effects; beneficial or wholesome.")
        ],
        # Exam 4
        [
            ("conjectural", "Because the ancient papyrus scroll was carbonized and incomplete, the philologist's reconstruction remained largely ________.", "conjectural", ["irrefutable", "canonical", "exhaustive"], "Conjectural means based on guesswork or provisional inference rather than solid fact."),
            ("eclectic", "The composer's work featured an ________ synthesis of traditional Javanese gamelan scales, baroque counterpoint, and dodecaphonic serialism.", "eclectic", ["derivative", "myopic", "insular"], "Eclectic means deriving ideas, style, or taste from a broad and diverse range of sources."),
            ("invidious", "The committee avoided making ________ comparisons between the candidates, focusing instead on objective portfolio metrics.", "invidious", ["benevolent", "felicitous", "complimentary"], "Invidious means likely to arouse or incur resentment, anger, or envy in others."),
            ("obdurate", "Despite repeated diplomatic overtures and economic sanctions, the belligerent regime remained ________ in refusing to demobilize border forces.", "obdurate", ["pliable", "amenable", "tractable"], "Obdurate means stubbornly refusing to change one's opinion or course of action.")
        ]
    ]
    return sets[exam_idx - 1]

def get_rw_craft_structure(exam_idx, mod, q_num):
    # Cross text and purpose questions
    return {
        'id': f'e{exam_idx}-rw{mod}-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': mod,
        'questionNumber': q_num,
        'domain': 'Craft and Structure',
        'skill': 'Cross-Text Connections' if q_num % 2 == 1 else 'Text Structure and Purpose',
        'difficulty': 'Hard',
        'passage': f"Text 1\nHistorical linguists have long posited that Proto-Indo-European expanded primarily through militarized pastoral conquests across the Pontic-Caspian steppe during the early Bronze Age (the Kurgan hypothesis).\n\nText 2\nRecent archaeogenetic analyses of ancient genomic clines suggest that Indo-European language dispersion in southern Europe and Anatolia correlated instead with the gradual demic diffusion of early agriculturalist lineages over several millennia, challenging pure pastoral conquest models.",
        'prompt': 'Based on Text 2, how would the author most likely characterize the Kurgan hypothesis presented in Text 1?',
        'type': 'multiple-choice',
        'options': {
            'A': 'As an oversimplified explanatory model that fails to account for archaeogenetic evidence of agricultural demic diffusion',
            'B': 'As a completely fraudulent theory fabricated without archaeological basis',
            'C': 'As an accurate description of language evolution exclusive to Eastern Asia',
            'D': 'As an unproven hypothesis supported only by nineteenth-century folklore'
        },
        'correctAnswer': 'A',
        'explanation': 'Text 2 cites archaeogenetic evidence showing gradual agricultural diffusion over millennia, thereby framing the purely militarized pastoral model of Text 1 as an oversimplification.',
        'strategyTip': 'In dual-text items, look for evidence-based qualifications: Text 2 modifies rather than insults the validity of Text 1.'
    }

def get_rw_info_ideas(exam_idx, mod, q_num):
    return {
        'id': f'e{exam_idx}-rw{mod}-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': mod,
        'questionNumber': q_num,
        'domain': 'Information and Ideas',
        'skill': 'Inferences' if q_num % 2 == 1 else 'Central Ideas and Details',
        'difficulty': 'Hard',
        'passage': f"In evolutionary developmental biology, 'deep homology' refers to the reuse of identical genetic regulatory circuits to produce morphologically distinct structures across distantly related phyla. For instance, the Pax6 master control gene directs the morphogenesis of both the vertebrate camera eye and the insect compound eye, despite the two visual systems having evolved independently. This suggests that while macro-anatomical convergence arose through separate functional selective pressures, ________",
        'prompt': 'Which choice most logically completes the text?',
        'type': 'multiple-choice',
        'options': {
            'A': 'the underlying genetic toolkit for photoreception was inherited from a shared ancestral bilaterian organism.',
            'B': 'insects and vertebrates possess anatomical ocular structures that are physically indistinguishable.',
            'C': 'Pax6 mutations cause optical defects only in organisms that possess camera eyes.',
            'D': 'convergent evolution is impossible without identical environmental selective pressures.'
        },
        'correctAnswer': 'A',
        'explanation': 'Deep homology indicates that distinct eyes share the same master regulatory gene because that gene originated in a common ancestor before the lineages diverged.',
        'strategyTip': 'Inference completions must supply the necessary evolutionary or logical bridge between the premises.'
    }

def get_rw_command_evidence(exam_idx, mod, q_num):
    return {
        'id': f'e{exam_idx}-rw{mod}-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': mod,
        'questionNumber': q_num,
        'domain': 'Information and Ideas',
        'skill': 'Command of Evidence (Textual)',
        'difficulty': 'Hard',
        'passage': f"Marine ecologists investigated whether coral reef bleaching resistance in Acropora millepora is mediated by epigenetic methylation or host-symbiont shuffling. When colonies exposed to elevated temperatures (32°C) were analyzed, colonies that survived sustained heat shock showed no change in clade D Symbiodiniaceae proportion, but exhibited hypermethylation across 14 stress-response chaperone loci. Ecologist Dr. Lin hypothesized that environmental memory in coral thermally conditioned in prior seasons is encoded primarily through chromatin modification rather than algal symbiont population shifts.",
        'prompt': 'Which finding, if true, would most directly support Dr. Lin’s hypothesis?',
        'type': 'multiple-choice',
        'options': {
            'A': 'Thermally conditioned colonies retain bleaching tolerance after pharmacological administration of DNA methyltransferase inhibitors that block methylation.',
            'B': 'Colonies with identical algal symbionts display high heat mortality if their epigenetic methylation pathways are chemically silenced.',
            'C': 'Symbiodiniaceae clade proportions fluctuate wildly during cold water upwelling events in winter.',
            'D': 'Unconditioned colonies produce identical heat-shock proteins regardless of environmental exposure.'
        },
        'correctAnswer': 'B',
        'explanation': 'If silencing epigenetic methylation pathways eliminates heat tolerance even when algal symbionts are identical, it demonstrates that methylation is the essential mechanism driving resistance.',
        'strategyTip': 'To support a hypothesis attributing an effect to mechanism X rather than Y, find data where disabling X destroys the effect.'
    }

def get_rw_conventions(exam_idx, mod, q_num):
    skills = ['Boundaries and Punctuation', 'Modifier Placement', 'Subject-Verb Agreement', 'Pronoun-Antecedent Agreement']
    skill = skills[q_num % len(skills)]
    return {
        'id': f'e{exam_idx}-rw{mod}-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': mod,
        'questionNumber': q_num,
        'domain': 'Standard English Conventions',
        'skill': skill,
        'difficulty': 'Hard',
        'passage': f"Discovered by astrophysicists utilizing the James Webb Space Telescope's near-infrared spectrograph, ________",
        'prompt': 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        'type': 'multiple-choice',
        'options': {
            'A': "the high-redshift galaxy JADES-GS-z14-0 challenged prevailing models of supermassive black hole co-evolution.",
            'B': "prevailing models of galaxy formation were challenged by the high-redshift galaxy JADES-GS-z14-0.",
            'C': "astrophysicists' theoretical simulations were dramatically overturned by JADES-GS-z14-0.",
            'D': "the discovery of JADES-GS-z14-0 challenged prevailing cosmological models."
        },
        'correctAnswer': 'A',
        'explanation': 'The opening modifier "Discovered by astrophysicists utilizing..." must modify the entity that was physically discovered—the galaxy itself (JADES-GS-z14-0), not "prevailing models" or "simulations" or "the discovery".',
        'strategyTip': 'Identify the actor/target of the opening participial modifier. The modified noun must immediately follow the comma.'
    }

def get_rw_expression(exam_idx, mod, q_num):
    if q_num % 2 == 0:
        # Rhetorical synthesis
        return {
            'id': f'e{exam_idx}-rw{mod}-q{q_num}',
            'examId': f'exam-{exam_idx}',
            'section': 'rw',
            'module': mod,
            'questionNumber': q_num,
            'domain': 'Expression of Ideas',
            'skill': 'Rhetorical Synthesis',
            'difficulty': 'Hard',
            'passage': "While researching a topic, a student has taken the following notes:\n• The Voyager 1 probe was launched by NASA in September 1977 to explore the outer Solar System.\n• It crossed the heliopause in August 2012, becoming the first human-made object to enter interstellar space.\n• It carries the Golden Record, a gold-plated copper phonograph disc containing sounds and images selected to portray the diversity of life on Earth.\n• As of 2026, Voyager 1 is over 24 billion kilometers from Earth, transmitting scientific data via a 23-watt transmitter.",
            'prompt': 'The student wants to emphasize the historical milestone of human interstellar exploration to an audience unfamiliar with the probe. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
            'type': 'multiple-choice',
            'options': {
                'A': "In August 2012, NASA's Voyager 1 achieved an unprecedented milestone by crossing the heliopause, becoming the first human-made artifact to reach interstellar space.",
                'B': "Voyager 1 was launched in September 1977 and carries a gold-plated copper phonograph disc designed by Carl Sagan.",
                'C': "Communicating with Earth from over 24 billion kilometers away requires an ultra-low-power 23-watt transmitter.",
                'D': "The Golden Record contains sounds and images portraying Earth's diversity across interstellar space."
            },
            'correctAnswer': 'A',
            'explanation': 'Choice A directly accomplishes the targeted goal: emphasizing the historical milestone of reaching interstellar space for an audience learning about the probe.',
            'strategyTip': 'Match the option directly to the prompt\'s specific rhetorical objective.'
        }
    else:
        # Transitions
        return {
            'id': f'e{exam_idx}-rw{mod}-q{q_num}',
            'examId': f'exam-{exam_idx}',
            'section': 'rw',
            'module': mod,
            'questionNumber': q_num,
            'domain': 'Expression of Ideas',
            'skill': 'Transitions',
            'difficulty': 'Hard',
            'passage': "In classical thermodynamics, entropy in a closed system must always increase, dictating a strict unidirectional thermodynamic arrow of time. ________ in statistical mechanics, entropy increase is probabilistic rather than absolute, meaning spontaneous decreases in entropy are theoretically permissible, albeit astronomically improbable.",
            'prompt': 'Which choice completes the text with the most logical transition?',
            'type': 'multiple-choice',
            'options': {
                'A': 'Conversely,',
                'B': 'Similarly,',
                'C': 'Consequently,',
                'D': 'Specifically,'
            },
            'correctAnswer': 'A',
            'explanation': 'The first sentence asserts that entropy increase is absolute in classical thermodynamics; the second contrasts this with statistical mechanics where it is merely probabilistic. "Conversely," provides the exact contrast needed.',
            'strategyTip': 'Contrast between deterministic law vs probabilistic law requires an adversative transition like "Conversely" or "In contrast".'
        }

# Harder versions for RW Module 2
def get_rw_vocab_hard(exam_idx, mod, q_num):
    hard_words = [
        ("tendentious", "Critics dismissed the historical biography as ________, noting that the author systematically suppressed correspondence that contradicted his predetermined ideological thesis.", "tendentious", ["dispassionate", "scrupulous", "unimpeachable"], "Tendentious means promoting a particular biased cause or point of view."),
        ("obdurate", "Despite mounting macroeconomic data demonstrating an impending recession, central bankers remained ________ in their refusal to lower lending rates.", "obdurate", ["pliable", "tractable", "amenable"], "Obdurate means stubbornly refusing to alter one's course of action or opinion."),
        ("supercilious", "The senior curator's demeanor toward emerging contemporary artists was notoriously ________; he dismissed their experimental installations with an arrogant wave of his hand.", "supercilious", ["deferential", "modest", "ingenuous"], "Supercilious means behaving or looking as though one thinks one is superior to others."),
        ("apocryphal", "Although the anecdote regarding Isaac Newton and the falling apple is widely recounted in popular culture, many science historians consider the tale largely ________.", "apocryphal", ["canonical", "corroborated", "unassailable"], "Apocryphal means of doubtful authenticity, although widely circulated as being true.")
    ]
    word, text, correct, wrongs, exp = hard_words[(q_num - 1) % len(hard_words)]
    return {
        'id': f'e{exam_idx}-rw2-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': 2,
        'questionNumber': q_num,
        'domain': 'Craft and Structure',
        'skill': 'Words in Context',
        'difficulty': 'Extreme',
        'passage': text,
        'prompt': 'Which choice completes the text with the most logical and precise word or phrase?',
        'type': 'multiple-choice',
        'options': { 'A': correct, 'B': wrongs[0], 'C': wrongs[1], 'D': wrongs[2] },
        'correctAnswer': 'A',
        'explanation': exp,
        'strategyTip': 'Extreme-tier vocabulary tests precise negative vs positive connotations.'
    }

def get_rw_cross_text_hard(exam_idx, mod, q_num):
    return {
        'id': f'e{exam_idx}-rw2-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': 2,
        'questionNumber': q_num,
        'domain': 'Craft and Structure',
        'skill': 'Cross-Text Connections',
        'difficulty': 'Extreme',
        'passage': "Text 1\nEconomic historian Karl Polanyi posited that the emergence of unregulated market capitalism in nineteenth-century England represented a radical disembedding of the economy from social relations, turning land, labor, and currency into fictitious commodities that inevitably produced destructive social dislocations.\n\nText 2\nRevisionist economic historians argue that Polanyi romanticized pre-industrial communal society. Quantitative wage records and court rolls reveal that agrarian land and peasant labor were extensively commodified and traded in sophisticated regional markets as early as the thirteenth century, suggesting that market embedding exists along an evolutionary continuum rather than representing an abrupt modern aberration.",
        'prompt': 'Based on Text 2, the author would most likely respond to Polanyi\'s characterization of nineteenth-century market emergence in Text 1 by asserting that ________',
        'type': 'multiple-choice',
        'options': {
            'A': 'market commodification of labor and land was an ancient, gradual historical continuum rather than an unprecedented nineteenth-century rupture.',
            'B': 'pre-industrial agrarian economies were entirely devoid of legal contracts or price mechanisms.',
            'C': 'nineteenth-century capitalism eliminated all forms of social dislocation described by Polanyi.',
            'D': 'Polanyi accurately anticipated modern medieval historiography.'
        },
        'correctAnswer': 'A',
        'explanation': 'Text 2 argues that market commodification existed centuries before Polanyi claimed, meaning it evolved along a continuum rather than as an abrupt disembedding in the 1800s.',
        'strategyTip': 'Identify the exact dimension of disagreement: qualitative rupture (Text 1) vs historical continuum (Text 2).'
    }

def get_rw_inference_hard(exam_idx, mod, q_num):
    return {
        'id': f'e{exam_idx}-rw2-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': 2,
        'questionNumber': q_num,
        'domain': 'Information and Ideas',
        'skill': 'Inferences',
        'difficulty': 'Extreme',
        'passage': "In quantum mechanics, the phenomenon of quantum tunneling permits particles to cross finite potential energy barriers that would be strictly insurmountable under Newtonian mechanics. Recent biochemical experiments demonstrate that certain enzymes, such as aromatic amine dehydrogenase, accelerate hydrogen transfer rates far beyond the limits imposed by classical transition state theory. When enzymes are subjected to isotopic substitution of hydrogen with deuterium (which possesses twice the mass of protium), catalytic efficiency plummets by a factor of 80, far exceeding the semiclassical kinetic isotope effect limit of 7. This implies that in these enzymatic active sites, ________",
        'prompt': 'Which choice most logically completes the text?',
        'type': 'multiple-choice',
        'options': {
            'A': 'hydrogen transfer relies predominantly on nuclear quantum tunneling that is acutely sensitive to particle mass.',
            'B': 'classical electrostatic attraction is the sole physical driver of substrate binding.',
            'C': 'deuterium atoms undergo spontaneous radioactive decay inside the protein catalytic cleft.',
            'D': 'enzymes prevent hydrogen atoms from interacting with surrounding cofactors.'
        },
        'correctAnswer': 'A',
        'explanation': 'Because tunneling probability decays exponentially with particle mass, substituting hydrogen with heavier deuterium drastically impedes tunneling. The massive isotope effect (80 vs classical limit of 7) proves nuclear quantum tunneling is the primary mechanism.',
        'strategyTip': 'Connect the anomaly (anomalous mass-dependent reaction rate collapse) to the quantum tunneling mechanism described in the opening sentence.'
    }

def get_rw_evidence_hard(exam_idx, mod, q_num):
    return {
        'id': f'e{exam_idx}-rw2-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': 2,
        'questionNumber': q_num,
        'domain': 'Information and Ideas',
        'skill': 'Command of Evidence (Textual)',
        'difficulty': 'Extreme',
        'passage': "Paleoclimatologists debating the Younger Dryas cooling event (~12,800 years BP) have divided into proponents of the catastrophic meltwater outburst hypothesis (Lake Agassiz discharging into the North Atlantic, shutting down the AMOC) and proponents of the extraterrestrial airburst hypothesis. Geochemist Dr. Sarah Alvarez hypothesized that if a cometary airburst occurred, nanodiamonds and platinum anomalies must be stratigraphically concurrent across terminal Clovis archaeological strata globally, whereas ocean circulation proxies should show Atlantic water-mass stagnation lagging the impact marker by decades.",
        'prompt': 'Which finding, if true, would most directly undermine Dr. Alvarez’s hypothesis?',
        'type': 'multiple-choice',
        'options': {
            'A': 'High-resolution sediment cores reveal that North Atlantic deep-water slowdown preceded the deposition of platinum and nanodiamond layers by over 200 years.',
            'B': 'Terminal Clovis projectile points are discovered in stratigraphically secure alluvial deposits.',
            'C': 'Cometary debris samples demonstrate elevated iridium concentrations comparable to chondritic meteorites.',
            'D': 'Nanodiamond morphology indicates formation at peak shock pressures exceeding 30 gigapascals.'
        },
        'correctAnswer': 'A',
        'explanation': 'If ocean stagnation occurred 200 years BEFORE the impact markers, the impact could not have caused the circulation shutdown, completely falsifying the causal sequence required by Alvarez\'s hypothesis.',
        'strategyTip': 'To undermine a causal hypothesis, look for temporal inversion: if the supposed effect preceded the cause, the hypothesis collapses.'
    }

def get_rw_conventions_hard(exam_idx, mod, q_num):
    return {
        'id': f'e{exam_idx}-rw2-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': 2,
        'questionNumber': q_num,
        'domain': 'Standard English Conventions',
        'skill': 'Complex Sentence Boundaries',
        'difficulty': 'Extreme',
        'passage': "A prominent member of the Bloomsbury Group, Virginia Woolf pioneered narrative stream-of-consciousness in novels like Mrs. Dalloway ________ her acute critical essays in The Common Reader established her as an incisive theorist of literary form.",
        'prompt': 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        'type': 'multiple-choice',
        'options': {
            'A': 'Dalloway; meanwhile,',
            'B': 'Dalloway, meanwhile',
            'C': 'Dalloway meanwhile;',
            'D': 'Dalloway; meanwhile'
        },
        'correctAnswer': 'A',
        'explanation': 'Two independent clauses linked by the conjunctive adverb "meanwhile" require a semicolon before the conjunctive adverb and a comma immediately following it: "; meanwhile,".',
        'strategyTip': 'Punctuation rule: Independent Clause 1 ; conjunctive adverb , Independent Clause 2.'
    }

def get_rw_expression_hard(exam_idx, mod, q_num):
    return {
        'id': f'e{exam_idx}-rw2-q{q_num}',
        'examId': f'exam-{exam_idx}',
        'section': 'rw',
        'module': 2,
        'questionNumber': q_num,
        'domain': 'Expression of Ideas',
        'skill': 'Rhetorical Synthesis',
        'difficulty': 'Extreme',
        'passage': "While researching a topic, a student has taken the following notes:\n• The Roman architect Vitruvius authored De architectura circa 15 BCE, establishing three cardinal principles of design: firmitas (structural durability), utilitas (functional utility), and venustas (aesthetic beauty).\n• Renaissance architects such as Andrea Palladio revived Vitruvian proportional systems, adapting classical Roman temple porticos for Venetian domestic villas.\n• Twentieth-century modernist architect Louis Sullivan formulated the maxim 'form follows function', which directly prioritized utilitas above ornamental venustas.\n• Contemporary biomimetic architecture synthesizes firmitas and venustas by engineering load-bearing structures that emulate microcellular bone lattice geometry.",
        'prompt': 'The student wants to contrast modern biomimetic architecture with Louis Sullivan\'s functionalist philosophy. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
        'type': 'multiple-choice',
        'options': {
            'A': "While Louis Sullivan prioritized functional utility over aesthetic ornament, contemporary biomimetic architects synthesize structural durability and beauty by modeling load-bearing elements on natural bone lattices.",
            'B': "Vitruvius established the principles of durability, utility, and beauty, which were later adapted by Andrea Palladio during the Italian Renaissance.",
            'C': "Modernist architecture originated with Louis Sullivan, who argued that architectural form should strictly follow functional utility.",
            'D': "Biomimetic architecture emulates microcellular bone geometries to ensure firmitas and venustas in twentieth-century skyscrapers."
        },
        'correctAnswer': 'A',
        'explanation': 'Choice A directly accomplishes the targeted goal: contrasting Sullivan\'s functionalist prioritization (utilitas over venustas) with biomimicry\'s integration of durability and beauty.',
        'strategyTip': 'Always ensure both sides of the requested contrast (Sullivan vs Biomimetic architecture) are explicitly present in the selected choice.'
    }

# ==========================================
# MATH GENERATOR FUNCTIONS
# ==========================================
def get_math_question(exam_idx, mod, q_num, is_grid_in=False, is_adaptive=False):
    # Variety of hard math archetypes
    seed = (exam_idx * 100) + (mod * 30) + q_num
    
    # Archetype 1: Circle equations with completing square
    if q_num in [1, 7, 13, 19]:
        h = (seed % 7) + 2
        k = (seed % 5) - 3
        r = (seed % 6) + 4
        d = -2 * h
        e = -2 * k
        f_const = (h**2) + (k**2) - (r**2)
        eq_str = f"x^2 + y^2 {'+' if d>=0 else ''}{d}x {'+' if e>=0 else ''}{e}y {'+' if f_const>=0 else ''}{f_const} = 0"
        
        if is_grid_in:
            return {
                'id': f'e{exam_idx}-m{mod}-q{q_num}',
                'examId': f'exam-{exam_idx}',
                'section': 'math',
                'module': mod,
                'questionNumber': q_num,
                'domain': 'Geometry and Trigonometry',
                'skill': 'Circle Equations & Completing the Square',
                'difficulty': 'Extreme' if is_adaptive else 'Hard',
                'prompt': f"A circle in the $xy$-plane is represented by the equation:\n\n$${eq_str}$$\n\nWhat is the radius of the circle?",
                'type': 'grid-in',
                'correctAnswer': str(r),
                'acceptedGridInAnswers': [str(r)],
                'explanation': f"Group $x$ and $y$ terms and complete the square:\n$$(x^2 {d:+}x + {h**2}) + (y^2 {e:+}y + {k**2}) = {-f_const} + {h**2} + {k**2}$$\n$$(x {-h:+})^2 + (y {-k:+})^2 = {r**2}$$\n\nSince $r^2 = {r**2}$, the radius is $r = {r}$.",
                'strategyTip': 'Complete the square for $x$ and $y$: add $(b/2)^2$ to both sides.'
            }
        else:
            options = {
                'A': str(r - 1),
                'B': str(r),
                'C': str(r + 2),
                'D': str(r**2)
            }
            return {
                'id': f'e{exam_idx}-m{mod}-q{q_num}',
                'examId': f'exam-{exam_idx}',
                'section': 'math',
                'module': mod,
                'questionNumber': q_num,
                'domain': 'Geometry and Trigonometry',
                'skill': 'Circle Equations',
                'difficulty': 'Extreme' if is_adaptive else 'Hard',
                'prompt': f"The equation of a circle in the $xy$-plane is given by:\n\n$${eq_str}$$\n\nWhat is the radius of this circle?",
                'type': 'multiple-choice',
                'options': options,
                'correctAnswer': 'B',
                'explanation': f"Completing the square gives $(x {-h:+})^2 + (y {-k:+})^2 = {r**2}$. Taking the square root of {r**2} yields radius $r = {r}$.",
                'strategyTip': 'Avoid confusing $r^2$ with $r$. Always take the square root of the constant term after completing the square.'
            }

    # Archetype 2: Quadratic systems with discriminant parameters
    elif q_num in [2, 8, 14, 20]:
        a = 2
        b = 8
        # y = 2x^2 + 8x + c intersects y = 4x - 6 at one point
        # 2x^2 + 4x + (c + 6) = 0
        # Delta = 16 - 8(c+6) = 0 => 16 = 8(c+6) => 2 = c+6 => c = -4
        c_val = (seed % 10) + 1
        # 2x^2 + 8x + c_val = mx + k
        return {
            'id': f'e{exam_idx}-m{mod}-q{q_num}',
            'examId': f'exam-{exam_idx}',
            'section': 'math',
            'module': mod,
            'questionNumber': q_num,
            'domain': 'Advanced Math',
            'skill': 'Nonlinear Systems & Discriminants',
            'difficulty': 'Extreme' if is_adaptive else 'Hard',
            'prompt': f"In the $xy$-plane, the graph of $y = 3x^2 - 12x + c$ intersects the line $y = 6x - 15$ at exactly one real point. What is the value of $c$?",
            'type': 'grid-in' if is_grid_in else 'multiple-choice',
            'options': { 'A': '10', 'B': '12', 'C': '15', 'D': '18' } if not is_grid_in else None,
            'correctAnswer': 'B' if not is_grid_in else '12',
            'acceptedGridInAnswers': ['12'] if is_grid_in else None,
            'explanation': "Equate the two functions:\n$$3x^2 - 12x + c = 6x - 15$$\n$$3x^2 - 18x + (c + 15) = 0$$\n\nFor exactly one intersection, the discriminant must be zero:\n$$\\Delta = B^2 - 4AC = (-18)^2 - 4(3)(c + 15) = 0$$\n$$324 - 12(c + 15) = 0$$\n$$324 = 12(c + 15)$$\n$$27 = c + 15 \\implies c = 12$$",
            'strategyTip': 'Tangency between line and parabola always implies $\\Delta = B^2 - 4AC = 0$.'
        }

    # Archetype 3: Trigonometric cofunctions and radian identities
    elif q_num in [3, 9, 15, 21]:
        return {
            'id': f'e{exam_idx}-m{mod}-q{q_num}',
            'examId': f'exam-{exam_idx}',
            'section': 'math',
            'module': mod,
            'questionNumber': q_num,
            'domain': 'Geometry and Trigonometry',
            'skill': 'Trigonometric Complementary Identities',
            'difficulty': 'Extreme' if is_adaptive else 'Hard',
            'prompt': "In a right triangle $ABC$, angle $C = 90^\\circ$. If $\\sin(A) = \\frac{4k - 3}{9}$ and $\\cos(B) = \\frac{2k + 7}{18}$, what is the value of $k$?",
            'type': 'grid-in' if is_grid_in else 'multiple-choice',
            'options': { 'A': '13/6', 'B': '2.17', 'C': '3.25', 'D': '4.5' } if not is_grid_in else None,
            'correctAnswer': 'A' if not is_grid_in else '13/6',
            'acceptedGridInAnswers': ['13/6', '2.17', '2.167'] if is_grid_in else None,
            'explanation': "Because $A$ and $B$ are acute angles in a right triangle, they are complementary: $A + B = 90^\\circ$. By the cofunction identity:\n$$\\sin(A) = \\cos(B)$$\n$$\\frac{4k - 3}{9} = \\frac{2k + 7}{18}$$\n$$2(4k - 3) = 2k + 7$$\n$$8k - 6 = 2k + 7$$\n$$6k = 13 \\implies k = \\frac{13}{6}$$",
            'strategyTip': 'In right triangles, $\\sin(A) = \\cos(B)$ is guaranteed.'
        }

    # Archetype 4: Polynomial Remainder Theorem
    elif q_num in [4, 10, 16, 22]:
        return {
            'id': f'e{exam_idx}-m{mod}-q{q_num}',
            'examId': f'exam-{exam_idx}',
            'section': 'math',
            'module': mod,
            'questionNumber': q_num,
            'domain': 'Advanced Math',
            'skill': 'Polynomial Remainder Theorem',
            'difficulty': 'Extreme' if is_adaptive else 'Hard',
            'prompt': "The polynomial $p(x) = 3x^3 - kx^2 + 4x - 15$ has a remainder of 25 when divided by $(x - 2)$. What is the value of $k$?",
            'type': 'grid-in' if is_grid_in else 'multiple-choice',
            'options': { 'A': '-2', 'B': '2', 'C': '-3', 'D': '3' } if not is_grid_in else None,
            'correctAnswer': '-2' if not is_grid_in else '-2',
            'acceptedGridInAnswers': ['-2'] if is_grid_in else None,
            'explanation': "By the Remainder Theorem, $p(2) = 25$:\n$$p(2) = 3(2)^3 - k(2)^2 + 4(2) - 15 = 25$$\n$$3(8) - 4k + 8 - 15 = 25$$\n$$24 - 4k - 7 = 25$$\n$$17 - 4k = 25$$\n$$-4k = 8 \\implies k = -2$$",
            'strategyTip': 'Divided by $(x - c)$ with remainder $R$ means $p(c) = R$.'
        }

    # Archetype 5: Exponential modeling with non-standard time units
    elif q_num in [5, 11, 17]:
        return {
            'id': f'e{exam_idx}-m{mod}-q{q_num}',
            'examId': f'exam-{exam_idx}',
            'section': 'math',
            'module': mod,
            'questionNumber': q_num,
            'domain': 'Problem-Solving and Data Analysis',
            'skill': 'Exponential Growth and Decay',
            'difficulty': 'Extreme' if is_adaptive else 'Hard',
            'prompt': "A radioactive isotope has an initial mass of 640 grams and a half-life of 36 hours. Which of the following functions $M(t)$ models the mass remaining, in grams, after $t$ days? (Note: 1 day = 24 hours)",
            'type': 'multiple-choice',
            'options': {
                'A': 'M(t) = 640(1/2)^{2t/3}',
                'B': 'M(t) = 640(1/2)^{3t/2}',
                'C': 'M(t) = 640(1/2)^{t/36}',
                'D': 'M(t) = 640(1/2)^{36t}'
            },
            'correctAnswer': 'A',
            'explanation': "Total hours elapsed in $t$ days is $24t$. The number of 36-hour half-life periods is:\n$$\\frac{24t}{36} = \\frac{2t}{3}$$\nTherefore, $M(t) = 640(1/2)^{2t/3}$.",
            'strategyTip': 'Convert time units: $24t$ hours divided by 36-hour period $= 2t/3$.'
        }

    # Archetype 6: Linear systems with parameters (no solution or infinite)
    else:
        return {
            'id': f'e{exam_idx}-m{mod}-q{q_num}',
            'examId': f'exam-{exam_idx}',
            'section': 'math',
            'module': mod,
            'questionNumber': q_num,
            'domain': 'Algebra',
            'skill': 'Linear Systems with Parameters',
            'difficulty': 'Extreme' if is_adaptive else 'Hard',
            'prompt': "In the system of equations below, $a$ is a constant:\n\n$$ax - 9y = 12$$\n$$4x - 6y = 8$$\n\nIf the system has infinitely many solutions, what is the value of $a$?",
            'type': 'multiple-choice' if not is_grid_in else 'grid-in',
            'options': { 'A': '4', 'B': '6', 'C': '8', 'D': '12' } if not is_grid_in else None,
            'correctAnswer': 'B' if not is_grid_in else '6',
            'acceptedGridInAnswers': ['6'] if is_grid_in else None,
            'explanation': "For infinitely many solutions, the ratio of coefficients must be equal for $x$, $y$, and the constants:\n$$\\frac{a}{4} = \\frac{-9}{-6} = \\frac{12}{8} = \\frac{3}{2}$$\n$$\\frac{a}{4} = \\frac{3}{2} \\implies a = 6$$",
            'strategyTip': 'Infinite solutions = identical lines: $a/4 = 3/2 \\implies a = 6$.'
        }

# Main execution
def main():
    target_dir = r"c:\Users\mike\Documents\antigravity\brave-hawking\src\data\exams"
    os.makedirs(target_dir, exist_ok=True)

    exams_meta = [
        (1, 'exam-1', 'SAT-HARD-01', 'Full SAT Mock Exam 1', 'Diagnostic Hard Mastery & High-Adaptive Benchmark',
         'Features deceptive traps, complex cross-text synthesis, advanced nonlinear systems, and tricky circle geometries.', 'Hard', '1450 – 1600',
         ['High Adaptive', 'Module 2 Calibrated', 'Trap Analysis', 'Full 4-Module']),
        (2, 'exam-2', 'SAT-HARD-02', 'Full SAT Mock Exam 2', 'High-Scorer Elite / 750+ Challenger Exam',
         'Specialized for top-percentile scorers. Tests subtle nuance vocabulary, quantum/bio stimuli, circle-line tangencies, and multi-step conditional probabilities.', 'Very Hard', '1500 – 1600',
         ['Elite Tier', 'Quantum & Bio Stimuli', 'Geometry Traps', 'Discriminant Mastery']),
        (3, 'exam-3', 'SAT-HARD-03', 'Full SAT Mock Exam 3', '800-Target / High-Complexity Synthesis Exam',
         'Meticulously crafted for students pursuing an 800 in either section. Contains high-tier archaic texts, advanced rhetorical syntheses, 3D volume ratios, and complex polynomial root interactions.', 'Elite Challenger', '1520 – 1600',
         ['800-Target', 'Archaic Prose', 'Volume Scaling', 'Polynomial Roots']),
        (4, 'exam-4', 'SAT-HARD-04', 'Full SAT Mock Exam 4', 'The Ultimate 1500+ Hard-Adaptive Simulation',
         'The pinnacle benchmark test. Simulates the most extreme College Board difficulty spikes: counter-intuitive inferences, complex coordinate geometry, and multi-variable optimization.', 'Maximum Adaptive', '1550 – 1600',
         ['Maximum Adaptive', 'Hardest Math', 'Trap Masterclass', 'Perfect-Score Target'])
    ]

    for idx, e_id, code, title, subtitle, desc, diff, target_score, tags in exams_meta:
        exam_data = build_exam_data(idx, e_id, code, title, subtitle, desc, diff, target_score, tags)
        
        file_path = os.path.join(target_dir, f"exam{idx}.ts")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write("import type { Question, ExamMetadata } from '../../types/exam';\n\n")
            f.write(f"export const exam{idx}Metadata: ExamMetadata = {json.dumps(exam_data['metadata'], indent=2)};\n\n")
            f.write(f"export const exam{idx}Questions: Question[] = {json.dumps(exam_data['questions'], indent=2)};\n")
        print(f"Generated exam{idx}.ts: {len(exam_data['questions'])} questions.")

if __name__ == '__main__':
    main()
