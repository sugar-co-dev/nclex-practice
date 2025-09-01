// Mental Health Questions - 12 questions covering psychiatric conditions and therapeutic communication
const mentalHealthQuestions = [
    {
        id: 70,
        category: "Mental Health",
        question: "A client with major depression tells the nurse, 'I don't think the medication is helping. I still feel hopeless.' What is the nurse's best response?",
        options: [
            "You should be more positive about your treatment",
            "It takes time for antidepressants to work effectively",
            "I understand this is frustrating. Let's talk about what you're experiencing and discuss this with your provider",
            "Many people feel this way when starting treatment"
        ],
        correct: 2,
        explanations: [
            "This dismisses the client's feelings and is not therapeutic communication.",
            "While true, this doesn't acknowledge the client's current distress or provide support.",
            "✅ CORRECT: This validates the client's feelings, encourages therapeutic communication, and involves the healthcare team in reassessing treatment effectiveness.",
            "This minimizes the client's individual experience and doesn't provide specific help."
        ],
        rationale: "Therapeutic communication involves active listening, validation of feelings, and collaborative problem-solving. The nurse should acknowledge the client's distress while facilitating communication with the provider about treatment effectiveness.",
        nursingProcess: "Implementation", 
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 71,
        category: "Mental Health",
        question: "A client with bipolar disorder is experiencing a manic episode. Which intervention should the nurse prioritize?",
        options: [
            "Encourage group activities to improve socialization",
            "Provide a calm, low-stimulus environment",
            "Engage in detailed discussions about feelings",
            "Allow unlimited visitors to provide support"
        ],
        correct: 1,
        explanations: [
            "Group activities may overstimulate and worsen manic symptoms.",
            "✅ CORRECT: Manic clients are easily overstimulated. A calm, quiet environment with minimal stimuli helps reduce agitation and prevents escalation.",
            "Detailed discussions can be overstimulating during acute mania.",
            "Multiple visitors would increase stimulation and potentially worsen symptoms."
        ],
        rationale: "During manic episodes, clients have decreased attention span, increased distractibility, and heightened response to stimuli. Reducing environmental stimulation is essential for stabilization.",
        nursingProcess: "Implementation",
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 72,
        category: "Mental Health",
        question: "A client with schizophrenia tells the nurse, 'The TV is sending me special messages.' What is the most appropriate response?",
        options: [
            "That's not possible. TVs don't send personal messages",
            "What kind of messages are you receiving?",
            "I don't hear any special messages from the TV, but I can see this is concerning to you",
            "You're having hallucinations. This isn't real"
        ],
        correct: 2,
        explanations: [
            "Directly challenging delusions can increase anxiety and damage trust.",
            "This could reinforce the delusion by showing excessive interest.",
            "✅ CORRECT: This acknowledges the client's experience without agreeing with the delusion, shows empathy, and maintains reality orientation.",
            "Labeling experiences as 'not real' can be dismissive and damage therapeutic relationship."
        ],
        rationale: "When responding to delusions, avoid challenging or reinforcing them. Acknowledge the client's feelings while gently presenting reality without argument.",
        nursingProcess: "Implementation",
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 73,
        category: "Mental Health",
        question: "A client with anxiety disorder is having a panic attack. What should the nurse do first?",
        options: [
            "Teach deep breathing techniques",
            "Stay with the client and speak in a calm, reassuring voice",
            "Encourage the client to talk about what triggered the attack",
            "Administer prescribed anti-anxiety medication"
        ],
        correct: 1,
        explanations: [
            "During acute panic, clients cannot focus on learning new techniques.",
            "✅ CORRECT: During a panic attack, staying with the client provides safety and security. Speaking calmly helps reduce anxiety through modeling.",
            "Discussing triggers during acute panic is not effective; wait until symptoms subside.",
            "While medication may be needed, immediate presence and support are the priority."
        ],
        rationale: "During panic attacks, clients feel intense fear and loss of control. Calm presence provides safety and helps prevent further escalation through therapeutic relationship.",
        nursingProcess: "Implementation",
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 74,
        category: "Mental Health",
        question: "A client with alcohol use disorder is admitted for detoxification. Which symptom would indicate severe withdrawal?",
        options: [
            "Mild tremors and sweating",
            "Nausea and vomiting",
            "Visual hallucinations and seizures",
            "Anxiety and insomnia"
        ],
        correct: 2,
        explanations: [
            "Mild tremors and sweating indicate mild withdrawal.",
            "Nausea and vomiting are common but not indicators of severe withdrawal.",
            "✅ CORRECT: Visual hallucinations and seizures indicate delirium tremens (DTs), a life-threatening form of alcohol withdrawal requiring immediate medical intervention.",
            "Anxiety and insomnia are common withdrawal symptoms but not severe."
        ],
        rationale: "Delirium tremens occurs in severe alcohol withdrawal and includes hallucinations, seizures, hyperthermia, and cardiovascular instability. It has a high mortality rate without treatment.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 75,
        category: "Mental Health",
        question: "A client with anorexia nervosa is admitted with severe weight loss. What is the priority nursing concern?",
        options: [
            "Improving body image perception",
            "Monitoring for cardiac arrhythmias",
            "Establishing a therapeutic relationship",
            "Educating about proper nutrition"
        ],
        correct: 1,
        explanations: [
            "Body image work is important but not the immediate priority with severe weight loss.",
            "✅ CORRECT: Severe malnutrition in anorexia causes electrolyte imbalances and cardiac complications that can be life-threatening. Cardiac monitoring is essential.",
            "Therapeutic relationship is important but physical safety comes first.",
            "Nutrition education is important but immediate medical stabilization is the priority."
        ],
        rationale: "Severe anorexia causes dangerous complications including cardiac arrhythmias from electrolyte imbalances, hypotension, and bradycardia. Medical stabilization is the priority before psychological interventions.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 76,
        category: "Mental Health",
        question: "A client with PTSD experiences flashbacks during a therapy session. What should the nurse do?",
        options: [
            "Continue the session to work through the trauma",
            "Help the client focus on present reality and use grounding techniques",
            "Leave the client alone until the flashback ends",
            "Encourage detailed discussion of the traumatic event"
        ],
        correct: 1,
        explanations: [
            "Continuing to discuss trauma during a flashback can worsen symptoms.",
            "✅ CORRECT: Grounding techniques help the client reconnect with present reality and reduce the intensity of flashback symptoms.",
            "Leaving the client alone during distress is abandonment and may worsen symptoms.",
            "Detailed trauma discussion during flashbacks can be retraumatizing."
        ],
        rationale: "During flashbacks, clients re-experience trauma as if it's happening now. Grounding techniques (focusing on immediate environment, breathing, senses) help return them to present reality.",
        nursingProcess: "Implementation",
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 77,
        category: "Mental Health",
        question: "A client with borderline personality disorder frequently threatens suicide when upset. What is the most appropriate nursing response?",
        options: [
            "Ignore the threats since they're manipulative",
            "Take all threats seriously and assess for suicidal intent",
            "Tell the client to stop being dramatic",
            "Isolate the client until they calm down"
        ],
        correct: 1,
        explanations: [
            "All suicide threats must be taken seriously, regardless of diagnosis.",
            "✅ CORRECT: Even if threats seem manipulative, they must be assessed seriously. BPD clients have high suicide risk and threats may indicate genuine distress.",
            "Dismissing threats as 'dramatic' is judgmental and potentially dangerous.",
            "Isolation may worsen abandonment fears common in BPD."
        ],
        rationale: "Borderline personality disorder has a high suicide rate (8-10%). All threats must be assessed seriously as they may represent genuine suicidal ideation, not just manipulation.",
        nursingProcess: "Assessment",
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 78,
        category: "Mental Health",
        question: "A client with obsessive-compulsive disorder spends 4 hours daily washing hands. Which intervention would be most therapeutic initially?",
        options: [
            "Prevent all hand washing to break the cycle",
            "Allow the behavior while gradually setting time limits",
            "Distract the client whenever they start washing",
            "Explain that excessive washing is unnecessary"
        ],
        correct: 1,
        explanations: [
            "Completely preventing compulsions causes severe anxiety and is not therapeutic.",
            "✅ CORRECT: Gradual limitation of compulsive behaviors reduces anxiety while slowly helping the client regain control. Abrupt cessation causes severe distress.",
            "Simple distraction is not effective for compulsive behaviors driven by anxiety.",
            "Logical explanations don't help with compulsions driven by anxiety, not logic."
        ],
        rationale: "OCD compulsions reduce anxiety. Gradual limitation allows the client to develop coping skills while slowly reducing the behavior without overwhelming anxiety.",
        nursingProcess: "Planning",
        clientNeed: "Psychosocial Integrity"
    },
    {
        id: 79,
        category: "Mental Health",
        question: "A client tells the nurse, 'I hear voices telling me to hurt myself.' What is the priority nursing action?",
        options: [
            "Ask detailed questions about the voices",
            "Implement one-to-one observation immediately",
            "Encourage the client to ignore the voices",
            "Document the hallucinations in the chart"
        ],
        correct: 1,
        explanations: [
            "Detailed questioning about command hallucinations can be done after safety is ensured.",
            "✅ CORRECT: Command hallucinations to hurt oneself require immediate safety precautions including constant observation to prevent self-harm.",
            "Telling clients to ignore hallucinations is not realistic or helpful.",
            "Documentation is important but safety is the immediate priority."
        ],
        rationale: "Command hallucinations, especially those directing self-harm, represent immediate safety risk. Constant observation prevents the client from acting on dangerous auditory commands.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 80,
        category: "Mental Health",
        question: "A client with severe depression has not spoken or eaten in 2 days. What is the priority nursing intervention?",
        options: [
            "Encourage the client to attend group therapy",
            "Provide nutritional support and monitor intake",
            "Give the client space and privacy",
            "Engage in lengthy therapeutic conversations"
        ],
        correct: 1,
        explanations: [
            "Group therapy is not appropriate for clients who are not eating or communicating.",
            "✅ CORRECT: When clients with severe depression stop eating, nutritional support becomes a safety priority to prevent medical complications.",
            "While respecting autonomy is important, not eating for 2 days requires intervention.",
            "Lengthy conversations are not appropriate for severely depressed, non-communicative clients."
        ],
        rationale: "Severe depression can lead to refusal of food and fluids, creating medical emergency. Nutritional support prevents dehydration, electrolyte imbalances, and other complications.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Basic Care and Comfort"
    },
    {
        id: 81,
        category: "Mental Health",
        question: "A client with dementia becomes agitated and combative during evening care. Which approach is most appropriate?",
        options: [
            "Use physical restraints to prevent injury",
            "Speak loudly and firmly to get the client's attention",
            "Approach calmly and redirect to a pleasant activity",
            "Leave the client alone until the agitation passes"
        ],
        correct: 2,
        explanations: [
            "Physical restraints can increase agitation and should be used only as last resort.",
            "Loud, firm speech can escalate agitation in dementia clients.",
            "✅ CORRECT: Calm approach and redirection to pleasant activities often de-escalates agitation without confrontation or restraints.",
            "Leaving agitated clients alone can lead to injury and doesn't address the underlying need."
        ],
        rationale: "Agitation in dementia often stems from unmet needs, overstimulation, or confusion. Calm redirection addresses the behavior without escalating the situation.",
        nursingProcess: "Implementation",
        clientNeed: "Psychosocial Integrity"
    }
];

// Signal that mental health questions are loaded
checkAllQuestionsLoaded();
