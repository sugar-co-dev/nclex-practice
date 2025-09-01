// Pharmacology Questions - 18 questions covering major drug categories
const pharmacologyQuestions = [
    {
        id: 1,
        category: "Pharmacology",
        question: "A client is receiving digoxin (Lanoxin) 0.25 mg PO daily. Before administering the medication, which assessment is most important for the nurse to perform?",
        options: [
            "Check blood pressure",
            "Assess apical pulse for 1 full minute", 
            "Review recent lab values",
            "Evaluate respiratory rate"
        ],
        correct: 1,
        explanations: [
            "While BP monitoring is important, it's not the priority before digoxin administration.",
            "✅ CORRECT: Digoxin affects heart rate and rhythm. The apical pulse must be assessed for 1 full minute before administration. Hold if HR <60 bpm in adults or notify provider per protocol.",
            "Lab values are important but the immediate priority is cardiac assessment before each dose.",
            "Respiratory rate, while part of vital signs, is not the priority assessment for digoxin."
        ],
        rationale: "Digoxin is a cardiac glycoside that can cause bradycardia and arrhythmias. The apical pulse is the most accurate way to assess heart rate and must be checked before each dose to ensure safe administration.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 2,
        category: "Pharmacology",
        question: "A client with diabetes mellitus is prescribed regular insulin. The nurse should administer this medication:",
        options: [
            "30-60 minutes before meals",
            "Immediately after meals",
            "At bedtime only",
            "With the first bite of food"
        ],
        correct: 0,
        explanations: [
            "✅ CORRECT: Regular insulin should be given 30-60 minutes before meals to allow onset of action to coincide with food absorption and prevent hyperglycemia.",
            "Giving insulin after meals would not control the post-meal glucose spike effectively.",
            "Regular insulin is typically given before meals, not just at bedtime.",
            "Regular insulin needs time to begin working before food intake."
        ],
        rationale: "Regular insulin has an onset of 30-60 minutes, peak at 2-3 hours, and duration of 6-8 hours. Timing before meals ensures insulin activity matches glucose absorption from food.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 3,
        category: "Pharmacology",
        question: "A client receiving warfarin (Coumadin) therapy should be taught to avoid which foods?",
        options: [
            "Foods high in potassium",
            "Foods high in vitamin K",
            "Foods high in calcium",
            "Foods high in vitamin C"
        ],
        correct: 1,
        explanations: [
            "Potassium restrictions are important for certain heart medications, not warfarin.",
            "✅ CORRECT: Vitamin K antagonizes warfarin's anticoagulant effects. Consistent vitamin K intake is important - avoid large amounts of leafy greens, broccoli, and brussels sprouts.",
            "Calcium doesn't significantly interact with warfarin therapy.",
            "Vitamin C doesn't have major interactions with warfarin."
        ],
        rationale: "Warfarin works by blocking vitamin K-dependent clotting factors. High vitamin K intake can reduce warfarin's effectiveness, while sudden decreases can increase bleeding risk.",
        nursingProcess: "Planning",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 4,
        category: "Pharmacology",
        question: "A client is prescribed furosemide (Lasix) 40mg PO daily. Which lab value should the nurse monitor most closely?",
        options: [
            "Serum glucose",
            "Serum potassium",
            "Hemoglobin",
            "White blood cell count"
        ],
        correct: 1,
        explanations: [
            "While diuretics can affect glucose slightly, this is not the primary concern.",
            "✅ CORRECT: Furosemide is a loop diuretic that causes significant potassium loss. Hypokalemia can lead to dangerous arrhythmias and muscle weakness.",
            "Hemoglobin is not directly affected by furosemide.",
            "WBC count is not typically affected by diuretic therapy."
        ],
        rationale: "Loop diuretics like furosemide inhibit sodium and potassium reabsorption in the loop of Henle, leading to significant potassium wasting. Hypokalemia is a serious side effect.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 5,
        category: "Pharmacology",
        question: "A client with hypertension is prescribed lisinopril (ACE inhibitor). What is the most serious side effect the nurse should monitor for?",
        options: [
            "Hyperkalemia",
            "Dry cough",
            "Angioedema",
            "Dizziness"
        ],
        correct: 2,
        explanations: [
            "Hyperkalemia can occur but is usually manageable with monitoring.",
            "Dry cough is common but not life-threatening.",
            "✅ CORRECT: Angioedema (swelling of face, lips, tongue, throat) is a life-threatening emergency that can cause airway obstruction. Requires immediate discontinuation and emergency treatment.",
            "Dizziness is common but not the most serious side effect."
        ],
        rationale: "Angioedema is a rare but potentially fatal side effect of ACE inhibitors. It involves swelling of deeper tissues and can cause airway obstruction requiring immediate intervention.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 6,
        category: "Pharmacology",
        question: "A client is receiving morphine sulfate for post-operative pain. Which finding would require immediate nursing intervention?",
        options: [
            "Blood pressure 110/70 mmHg",
            "Respiratory rate 8 breaths per minute",
            "Heart rate 72 bpm",
            "Temperature 98.6°F"
        ],
        correct: 1,
        explanations: [
            "This blood pressure is within normal limits.",
            "✅ CORRECT: Respiratory depression (RR <12) is the most serious side effect of opioids. RR of 8 indicates significant respiratory depression requiring immediate intervention and possible naloxone administration.",
            "This heart rate is within normal limits.",
            "This temperature is normal."
        ],
        rationale: "Morphine can depress the respiratory center in the medulla, leading to decreased respiratory drive. Respiratory rate below 12 in adults indicates significant depression.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 7,
        category: "Pharmacology",
        question: "A client with atrial fibrillation is starting on amiodarone. Which baseline assessment is most important?",
        options: [
            "Liver function tests",
            "Kidney function tests",
            "Complete blood count",
            "Electrolyte levels"
        ],
        correct: 0,
        explanations: [
            "✅ CORRECT: Amiodarone can cause hepatotoxicity. Baseline liver function tests (ALT, AST, bilirubin) are essential before starting therapy.",
            "While kidney function is important, liver toxicity is the primary concern with amiodarone.",
            "CBC is useful but not the priority for amiodarone.",
            "Electrolytes are important but liver function is the priority."
        ],
        rationale: "Amiodarone is hepatotoxic and can cause severe liver damage. Baseline and periodic liver function monitoring is essential for safe use of this antiarrhythmic.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 8,
        category: "Pharmacology",
        question: "A client is prescribed phenytoin (Dilantin) for seizure control. Which instruction should the nurse emphasize?",
        options: [
            "Take with food to prevent nausea",
            "Maintain good oral hygiene and see dentist regularly",
            "Avoid exposure to sunlight",
            "Take with antacids to prevent stomach upset"
        ],
        correct: 1,
        explanations: [
            "While food can help with absorption, this is not the most important instruction.",
            "✅ CORRECT: Phenytoin causes gingival hyperplasia (gum overgrowth). Excellent oral hygiene and regular dental care are essential to prevent complications.",
            "Phenytoin doesn't typically cause photosensitivity.",
            "Antacids can interfere with phenytoin absorption."
        ],
        rationale: "Gingival hyperplasia is a common side effect of phenytoin, occurring in about 50% of patients. Good oral hygiene can minimize this effect.",
        nursingProcess: "Planning",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 9,
        category: "Pharmacology",
        question: "A client is prescribed prednisone 40mg daily for an autoimmune condition. What is the priority nursing instruction?",
        options: [
            "Take the medication at bedtime",
            "Take with food and never stop abruptly",
            "Avoid all dairy products",
            "Increase fluid intake to 3 liters daily"
        ],
        correct: 1,
        explanations: [
            "Prednisone should be taken in the morning to mimic natural cortisol rhythm.",
            "✅ CORRECT: Prednisone should be taken with food to prevent GI upset, and never stopped abruptly due to risk of adrenal insufficiency.",
            "There's no need to avoid dairy products with prednisone.",
            "Increased fluid intake is not specifically required for prednisone."
        ],
        rationale: "Corticosteroids suppress the adrenal glands. Abrupt discontinuation can cause life-threatening adrenal insufficiency. Taking with food reduces gastric irritation.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 10,
        category: "Pharmacology",
        question: "A client with COPD is prescribed ipratropium (Atrovent) inhaler. The nurse should teach the client to:",
        options: [
            "Use before exercise to prevent bronchospasm",
            "Rinse mouth after each use",
            "Use only during acute exacerbations",
            "Shake well and inhale slowly and deeply"
        ],
        correct: 3,
        explanations: [
            "Ipratropium is a maintenance bronchodilator, not typically used for exercise-induced bronchospasm prevention.",
            "Mouth rinsing is important for corticosteroid inhalers, not anticholinergics like ipratropium.",
            "Ipratropium is used regularly for maintenance, not just during exacerbations.",
            "✅ CORRECT: Proper inhaler technique includes shaking the canister and inhaling slowly and deeply to ensure medication reaches the small airways."
        ],
        rationale: "Proper inhaler technique is essential for medication delivery to the lungs. Slow, deep inhalation ensures optimal drug deposition in the airways.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 11,
        category: "Pharmacology",
        question: "A client is receiving heparin infusion for deep vein thrombosis. Which lab value should the nurse monitor?",
        options: [
            "PT/INR",
            "aPTT",
            "Platelet count",
            "Fibrinogen level"
        ],
        correct: 1,
        explanations: [
            "PT/INR monitors warfarin therapy, not heparin.",
            "✅ CORRECT: aPTT (activated partial thromboplastin time) monitors heparin effectiveness. Target is usually 1.5-2.5 times control value.",
            "While platelet count should be monitored for HIT, aPTT is the primary monitoring parameter.",
            "Fibrinogen is not used to monitor heparin therapy."
        ],
        rationale: "Heparin affects the intrinsic coagulation pathway, which is measured by aPTT. Regular monitoring ensures therapeutic anticoagulation without excessive bleeding risk.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 12,
        category: "Pharmacology",
        question: "A client with depression is prescribed sertraline (Zoloft). What important teaching should the nurse provide?",
        options: [
            "Effects will be noticed within 24-48 hours",
            "It may take 4-6 weeks to feel the full therapeutic effect",
            "The medication should be taken only when feeling depressed",
            "Alcohol consumption should be limited to one drink per day"
        ],
        correct: 1,
        explanations: [
            "SSRIs do not have immediate effects - this is incorrect and may lead to disappointment.",
            "✅ CORRECT: SSRIs like sertraline typically take 4-6 weeks to reach full therapeutic effect due to neurochemical changes in the brain.",
            "Antidepressants must be taken daily as prescribed, not on an as-needed basis.",
            "Alcohol should be avoided completely, not just limited, as it can worsen depression and interact with the medication."
        ],
        rationale: "SSRIs work by increasing serotonin availability in synapses, but the full therapeutic effect requires time for neuroadaptive changes to occur in the brain.",
        nursingProcess: "Planning",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 13,
        category: "Pharmacology",
        question: "A client is prescribed omeprazole (Prilosec) for GERD. When should this medication be taken?",
        options: [
            "30 minutes before the first meal of the day",
            "With each meal",
            "At bedtime",
            "Only when experiencing heartburn"
        ],
        correct: 0,
        explanations: [
            "✅ CORRECT: Proton pump inhibitors like omeprazole should be taken 30 minutes before the first meal to maximize acid suppression when gastric acid production is highest.",
            "Taking with meals reduces the effectiveness of the medication.",
            "Morning dosing is more effective than bedtime for acid suppression.",
            "PPIs are taken daily for prevention, not on an as-needed basis for treatment."
        ],
        rationale: "PPIs are most effective when taken before the first meal because they need to be absorbed and activated before gastric acid production begins.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 14,
        category: "Pharmacology",
        question: "A client with type 2 diabetes is prescribed metformin. Which condition would be a contraindication for this medication?",
        options: [
            "Hypertension",
            "Kidney disease",
            "Asthma",
            "Arthritis"
        ],
        correct: 1,
        explanations: [
            "Hypertension is not a contraindication for metformin use.",
            "✅ CORRECT: Metformin is contraindicated in kidney disease due to risk of lactic acidosis. It should be held if creatinine clearance is <30 mL/min.",
            "Asthma is not a contraindication for metformin.",
            "Arthritis is not a contraindication for metformin."
        ],
        rationale: "Metformin is excreted by the kidneys. In kidney disease, the drug can accumulate and increase risk of life-threatening lactic acidosis.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 15,
        category: "Pharmacology",
        question: "A client is prescribed nitroglycerin sublingual tablets for chest pain. What should the nurse teach about proper use?",
        options: [
            "Swallow the tablet whole with water",
            "Place under tongue and allow to dissolve, may repeat every 5 minutes up to 3 doses",
            "Chew the tablet thoroughly before swallowing",
            "Place between cheek and gum until dissolved"
        ],
        correct: 1,
        explanations: [
            "Sublingual tablets should not be swallowed as they won't be effective.",
            "✅ CORRECT: Sublingual nitroglycerin should be placed under the tongue to dissolve. If pain persists, may repeat every 5 minutes for up to 3 doses, then seek emergency care.",
            "The tablet should dissolve, not be chewed.",
            "This describes buccal administration, not sublingual."
        ],
        rationale: "Sublingual administration allows rapid absorption through the highly vascularized tissue under the tongue, providing quick relief of anginal pain.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 16,
        category: "Pharmacology",
        question: "A client taking lithium for bipolar disorder has a blood level of 1.8 mEq/L. What should the nurse do?",
        options: [
            "Continue the current dose as ordered",
            "Hold the next dose and notify the physician",
            "Increase fluid intake and recheck level in 8 hours",
            "Reduce the dose by half"
        ],
        correct: 1,
        explanations: [
            "This level indicates toxicity; continuing could be dangerous.",
            "✅ CORRECT: Lithium level of 1.8 mEq/L indicates toxicity (therapeutic range 0.6-1.2). The dose should be held and physician notified immediately.",
            "While increasing fluids may help, the dose must be held first and physician notified.",
            "Nurses cannot independently change medication doses."
        ],
        rationale: "Lithium toxicity can cause serious neurological and cardiac complications. Levels above 1.5 mEq/L indicate toxicity requiring immediate intervention and possible hospitalization.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 17,
        category: "Pharmacology",
        question: "A client with Parkinson's disease is prescribed carbidopa-levodopa (Sinemet). Which instruction is most important?",
        options: [
            "Take with high-protein meals for better absorption",
            "Take on an empty stomach for maximum effectiveness",
            "Expect immediate improvement in symptoms",
            "Stop the medication if side effects occur"
        ],
        correct: 1,
        explanations: [
            "High-protein meals actually interfere with levodopa absorption and should be avoided.",
            "✅ CORRECT: Carbidopa-levodopa should be taken on an empty stomach (1 hour before or 2 hours after meals) for optimal absorption and effectiveness.",
            "Symptom improvement is gradual, not immediate, and may take weeks to months.",
            "Side effects should be reported but medication should not be stopped abruptly."
        ],
        rationale: "Levodopa competes with amino acids from protein for absorption in the small intestine. Taking on an empty stomach maximizes drug absorption and therapeutic effect.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 18,
        category: "Pharmacology",
        question: "A client is prescribed albuterol (ProAir) inhaler for asthma. Which statement by the client indicates correct understanding?",
        options: [
            "I should use this inhaler daily to prevent asthma attacks",
            "I will use this inhaler when I have trouble breathing",
            "I need to rinse my mouth after using this inhaler",
            "This medication will cure my asthma"
        ],
        correct: 1,
        explanations: [
            "Albuterol is a rescue inhaler, not for daily prevention (that's what controller medications are for).",
            "✅ CORRECT: Albuterol is a short-acting beta-agonist used as a rescue medication for acute bronchospasm and breathing difficulties.",
            "Mouth rinsing is important for steroid inhalers, not beta-agonist rescue inhalers.",
            "Asthma is a chronic condition that requires management, not a cure."
        ],
        rationale: "Albuterol is a fast-acting bronchodilator used for immediate relief of asthma symptoms and acute bronchospasm. It's not a preventive medication.",
        nursingProcess: "Evaluation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    }
];

// Signal that pharmacology questions are loaded
checkAllQuestionsLoaded();
