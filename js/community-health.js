// Community Health Questions - 10 questions covering public health and health promotion
const communityHealthQuestions = [
    {
        id: 100,
        category: "Community Health",
        question: "A community health nurse is planning a vaccination program. Which population should be the highest priority for influenza vaccination?",
        options: [
            "Healthy adults aged 20-40",
            "Pregnant women and adults over 65",
            "Children aged 5-12 years",
            "College students living in dormitories"
        ],
        correct: 1,
        explanations: [
            "Healthy young adults are not the highest priority group for influenza vaccination.",
            "✅ CORRECT: Pregnant women and adults over 65 are at highest risk for influenza complications and should be prioritized for vaccination programs.",
            "While children benefit from vaccination, pregnant women and elderly are higher priority.",
            "College students may benefit but are not the highest risk group."
        ],
        rationale: "Influenza vaccination priorities focus on those at highest risk for severe complications: pregnant women, adults 65+, and those with chronic conditions. These groups have increased morbidity and mortality from influenza.",
        nursingProcess: "Planning",
        clientNeed: "Health Promotion and Maintenance"
    },
    {
        id: 101,
        category: "Community Health",
        question: "A school nurse notices an increase in head lice cases. What is the most important intervention?",
        options: [
            "Send all affected children home immediately",
            "Educate families about proper treatment and prevention measures",
            "Recommend closing the school for fumigation",
            "Screen only children with symptoms"
        ],
        correct: 1,
        explanations: [
            "Exclusion policies vary, but education is more important than immediate exclusion.",
            "✅ CORRECT: Education about proper treatment (medicated shampoos) and prevention (avoiding head-to-head contact, not sharing personal items) is most effective.",
            "School closure and fumigation are not necessary for head lice management.",
            "Screening should be comprehensive since lice can be present before symptoms appear."
        ],
        rationale: "Head lice management focuses on education about treatment and prevention. Environmental measures like fumigation are unnecessary since lice cannot survive long off the human host.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 102,
        category: "Community Health",
        question: "A community has experienced a food-borne illness outbreak. What is the nurse's first priority?",
        options: [
            "Identify the source of contamination",
            "Treat affected individuals",
            "Report to local health authorities",
            "Educate the public about food safety"
        ],
        correct: 2,
        explanations: [
            "Source identification is important but reporting must come first.",
            "Treatment is important but the immediate priority is reporting to prevent further spread.",
            "✅ CORRECT: Food-borne illness outbreaks must be immediately reported to health authorities to initiate proper investigation and prevent further cases.",
            "Education is important but not the immediate priority during an active outbreak."
        ],
        rationale: "Rapid reporting of disease outbreaks to health authorities triggers coordinated public health response including investigation, source identification, and prevention of additional cases.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 103,
        category: "Community Health",
        question: "A community health nurse is working with a family living in poverty. Which intervention addresses the most fundamental need?",
        options: [
            "Providing health education materials",
            "Connecting family with food assistance programs",
            "Scheduling regular health screenings",
            "Teaching stress management techniques"
        ],
        correct: 1,
        explanations: [
            "Health education is important but addressing basic needs comes first.",
            "✅ CORRECT: According to Maslow's hierarchy, basic physiological needs like food must be met before higher-level health promotion activities can be effective.",
            "Health screenings are valuable but food security is the priority.",
            "Stress management is helpful but addressing food insecurity will reduce stress more effectively."
        ],
        rationale: "Maslow's hierarchy of needs indicates that basic physiological needs (food, shelter) must be met before individuals can focus on health promotion and disease prevention activities.",
        nursingProcess: "Planning",
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 104,
        category: "Community Health",
        question: "A community health nurse is planning diabetes prevention programs. Which population should be targeted first?",
        options: [
            "All community members equally",
            "People with family history of diabetes and minority populations",
            "Only individuals who request information",
            "Children under 18 years old"
        ],
        correct: 1,
        explanations: [
            "While broad education is valuable, targeting high-risk groups is more effective and efficient.",
            "✅ CORRECT: Diabetes prevention should target high-risk populations including those with family history, certain ethnic groups (Hispanic, African American, Native American), and those with other risk factors.",
            "Waiting for requests doesn't reach at-risk individuals who may not be aware of their risk.",
            "While childhood obesity is concerning, adults at high risk should be the primary focus for type 2 diabetes prevention."
        ],
        rationale: "Community health programs are most effective when targeted at high-risk populations. Genetic predisposition and ethnic disparities make certain groups priority targets for diabetes prevention.",
        nursingProcess: "Planning",
        clientNeed: "Health Promotion and Maintenance"
    },
    {
        id: 105,
        category: "Community Health",
        question: "A community health nurse identifies high rates of teenage pregnancy. Which intervention would be most effective?",
        options: [
            "Distribute birth control to all teenagers",
            "Implement comprehensive sex education programs",
            "Focus only on abstinence education",
            "Provide pregnancy testing services"
        ],
        correct: 1,
        explanations: [
            "Simply distributing contraceptives without education is less effective.",
            "✅ CORRECT: Evidence-based comprehensive sex education that includes information about abstinence, contraception, and consequences is most effective at reducing teenage pregnancy rates.",
            "Abstinence-only education has not been shown to be as effective as comprehensive programs.",
            "Pregnancy testing is a service but doesn't address prevention."
        ],
        rationale: "Research shows that comprehensive sex education programs that provide complete information about sexual health, including abstinence and contraception, are most effective at reducing teenage pregnancy rates.",
        nursingProcess: "Planning",
        clientNeed: "Health Promotion and Maintenance"
    },
    {
        id: 106,
        category: "Community Health",
        question: "A community health nurse is assessing environmental health hazards. Which factor poses the greatest immediate health risk?",
        options: [
            "Noise pollution from traffic",
            "Contaminated drinking water supply",
            "Air pollution from factories",
            "Inadequate waste management"
        ],
        correct: 1,
        explanations: [
            "Noise pollution can cause stress and hearing problems but is not immediately life-threatening.",
            "✅ CORRECT: Contaminated water can cause immediate and severe illness including cholera, dysentery, and other infectious diseases that can be rapidly fatal.",
            "Air pollution is serious but effects are usually more chronic than acute.",
            "Poor waste management can lead to various health problems but contaminated water poses more immediate risk."
        ],
        rationale: "Contaminated water supplies can rapidly cause widespread infectious disease outbreaks with high morbidity and mortality, making them the most immediate public health threat.",
        nursingProcess: "Assessment",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 107,
        category: "Community Health",
        question: "A community health nurse is developing a smoking cessation program. Which approach is most likely to be successful?",
        options: [
            "Focus only on the health risks of smoking",
            "Use fear-based messaging about lung cancer",
            "Combine education, support groups, and nicotine replacement therapy",
            "Recommend quitting \"cold turkey\" for everyone"
        ],
        correct: 2,
        explanations: [
            "Education alone has limited effectiveness for addiction cessation.",
            "Fear-based approaches often cause avoidance rather than behavior change.",
            "✅ CORRECT: Multi-modal approaches combining education, peer support, and pharmacological aids have the highest success rates for smoking cessation.",
            "Cold turkey approach works for some but is not suitable for all smokers."
        ],
        rationale: "Smoking cessation is most successful when multiple interventions are combined: education about risks and benefits, social support, behavioral modification, and pharmacological support when appropriate.",
        nursingProcess: "Planning",
        clientNeed: "Health Promotion and Maintenance"
    },
    {
        id: 108,
        category: "Community Health",
        question: "A community health nurse is working with elderly residents in a housing complex. What is the priority safety concern?",
        options: [
            "Fire safety education",
            "Fall prevention measures",
            "Home security systems",
            "Medication storage safety"
        ],
        correct: 1,
        explanations: [
            "Fire safety is important but falls cause more frequent injuries in elderly.",
            "✅ CORRECT: Falls are the leading cause of injury and death in elderly populations. Fall prevention should be the priority safety intervention.",
            "Security is a concern but not the leading cause of injury.",
            "Medication safety is important but falls pose greater immediate physical risk."
        ],
        rationale: "Falls are the leading cause of both fatal and non-fatal injuries in adults over 65. Fall prevention interventions have the greatest potential to reduce morbidity and mortality in this population.",
        nursingProcess: "Planning",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 109,
        category: "Community Health",
        question: "A community health nurse is planning health promotion activities for a Hispanic community with high rates of diabetes. Which approach would be most culturally appropriate?",
        options: [
            "Use only English-language materials",
            "Focus on individual behavior change only",
            "Incorporate family involvement and traditional foods in education",
            "Ignore cultural factors and focus on medical facts"
        ],
        correct: 2,
        explanations: [
            "Language barriers significantly reduce effectiveness of health education.",
            "Individual focus ignores the collectivist values of Hispanic culture.",
            "✅ CORRECT: Hispanic culture values family involvement and has strong food traditions. Incorporating these elements makes health education more effective and culturally appropriate.",
            "Ignoring cultural factors reduces program effectiveness and community acceptance."
        ],
        rationale: "Cultural competence in health promotion requires understanding and incorporating cultural values, family structures, and traditional practices while providing health education that resonates with the target population.",
        nursingProcess: "Planning",
        clientNeed: "Psychosocial Integrity"
    }
];

// Signal that community health questions are loaded
checkAllQuestionsLoaded();
