// Fundamentals Questions - 18 questions covering basic nursing skills and safety
const fundamentalsQuestions = [
    {
        id: 82,
        category: "Fundamentals",
        question: "A nurse is preparing to insert a urinary catheter. Which action demonstrates proper sterile technique?",
        options: [
            "Opening the sterile package by pulling the corners outward",
            "Reaching across the sterile field to get supplies",
            "Using clean gloves throughout the procedure",
            "Cleaning the meatus with the same swab twice"
        ],
        correct: 0,
        explanations: [
            "✅ CORRECT: Opening sterile packages by pulling corners outward prevents contamination of the sterile contents. Never reach over or across the sterile field.",
            "This would contaminate the sterile field. Never reach across a sterile area.",
            "Sterile gloves are required for catheter insertion, not just clean gloves.",
            "Each swab should only be used once, in a front-to-back motion, then discarded."
        ],
        rationale: "Sterile technique is essential for procedures that involve entering sterile body cavities. The principles include: maintaining a sterile field, using sterile supplies, and avoiding contamination through proper movements and handling.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 83,
        category: "Fundamentals",
        question: "A client is receiving continuous tube feedings. To prevent aspiration, the nurse should:",
        options: [
            "Keep the client flat in bed during feeding",
            "Check residual volumes every 8 hours",
            "Keep the head of bed elevated at least 30 degrees",
            "Stop feedings if the client coughs"
        ],
        correct: 2,
        explanations: [
            "Flat positioning increases aspiration risk by allowing reflux.",
            "Residuals should be checked more frequently than every 8 hours.",
            "✅ CORRECT: Elevating the head of bed at least 30 degrees uses gravity to prevent reflux and reduces aspiration risk.",
            "Occasional coughing doesn't necessarily indicate aspiration."
        ],
        rationale: "Gravity helps keep stomach contents in the stomach when the head is elevated. This is one of the most important interventions to prevent aspiration during tube feeding.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 84,
        category: "Fundamentals",
        question: "A client has a stage 3 pressure ulcer on the sacrum. Which intervention is most important?",
        options: [
            "Massage the area to improve circulation",
            "Apply heat to promote healing",
            "Relieve pressure through frequent repositioning",
            "Clean with hydrogen peroxide daily"
        ],
        correct: 2,
        explanations: [
            "Massage over pressure ulcers can cause further tissue damage.",
            "Heat application is not recommended for pressure ulcer treatment.",
            "✅ CORRECT: Pressure relief through frequent repositioning (every 2 hours) prevents further tissue damage and promotes healing.",
            "Hydrogen peroxide can damage healthy tissue and delay healing."
        ],
        rationale: "Continued pressure impairs blood flow and worsens tissue damage. Regular repositioning relieves pressure and allows tissue perfusion to resume, promoting healing.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Basic Care and Comfort"
    },
    {
        id: 85,
        category: "Fundamentals",
        question: "A client is ordered complete bed rest. Which complication is the nurse most concerned about preventing?",
        options: [
            "Muscle weakness",
            "Deep vein thrombosis",
            "Constipation",
            "Skin breakdown"
        ],
        correct: 1,
        explanations: [
            "Muscle weakness occurs but is not immediately life-threatening.",
            "✅ CORRECT: Deep vein thrombosis can lead to pulmonary embolism, which is potentially fatal. This is the most serious immediate complication of immobility.",
            "Constipation is a concern but not immediately life-threatening.",
            "Skin breakdown is important but not as immediately dangerous as DVT."
        ],
        rationale: "Immobility leads to venous stasis, which increases risk of blood clot formation. These clots can travel to the lungs, causing life-threatening pulmonary embolism.",
        nursingProcess: "Planning",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 86,
        category: "Fundamentals",
        question: "When delegating tasks to unlicensed assistive personnel (UAP), which task is appropriate?",
        options: [
            "Assessing a client's pain level",
            "Teaching a client about medications",
            "Taking vital signs on stable clients",
            "Developing a care plan"
        ],
        correct: 2,
        explanations: [
            "Assessment requires nursing judgment and cannot be delegated.",
            "Teaching requires nursing knowledge and cannot be delegated.",
            "✅ CORRECT: Taking vital signs on stable clients is within UAP scope of practice and can be safely delegated.",
            "Care planning requires nursing assessment and judgment."
        ],
        rationale: "Tasks that can be delegated to UAP are routine, standardized activities that don't require nursing judgment, assessment, or teaching. Vital signs on stable clients meet these criteria.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 87,
        category: "Fundamentals",
        question: "A client with diabetes has an order for sliding scale insulin. When should the nurse administer this insulin?",
        options: [
            "At bedtime regardless of blood sugar",
            "Only if the client is eating meals",
            "Based on blood glucose levels as ordered",
            "Every 8 hours around the clock"
        ],
        correct: 2,
        explanations: [
            "Sliding scale insulin is not given at set times regardless of blood sugar.",
            "Sliding scale can be given regardless of meal status, based on blood glucose.",
            "✅ CORRECT: Sliding scale insulin is administered based on current blood glucose levels according to the prescribed parameters.",
            "Regular timing is not the basis for sliding scale insulin administration."
        ],
        rationale: "Sliding scale insulin is a method of adjusting insulin doses based on current blood glucose readings to maintain target glucose levels throughout the day.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 88,
        category: "Fundamentals",
        question: "A client is prescribed a clear liquid diet. Which item can the client consume?",
        options: [
            "Milk",
            "Orange juice with pulp",
            "Chicken broth",
            "Ice cream"
        ],
        correct: 2,
        explanations: [
            "Milk is opaque and not allowed on clear liquid diet.",
            "Orange juice with pulp contains particles and is not 'clear.'",
            "✅ CORRECT: Chicken broth is transparent and allowed on clear liquid diets.",
            "Ice cream is not liquid at body temperature and contains dairy."
        ],
        rationale: "Clear liquid diets include only transparent fluids that leave no residue: water, clear broths, plain gelatin, clear juices without pulp, and tea/coffee without milk.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Basic Care and Comfort"
    },
    {
        id: 89,
        category: "Fundamentals",
        question: "A client has an IV infusing at 100 mL/hour. The nurse notes the IV site is swollen and cool to touch. What should the nurse do first?",
        options: [
            "Slow the IV rate to 50 mL/hour",
            "Apply warm compresses to the site",
            "Stop the IV infusion immediately",
            "Elevate the affected extremity"
        ],
        correct: 2,
        explanations: [
            "Slowing the rate doesn't address the infiltration and allows continued tissue damage.",
            "Treatment comes after stopping the infusion to prevent further damage.",
            "✅ CORRECT: Swelling and coolness indicate IV infiltration. Stopping the infusion immediately prevents further fluid from entering tissues and causing damage.",
            "Elevation is helpful after stopping the infusion but not the first priority."
        ],
        rationale: "IV infiltration occurs when fluid enters tissues instead of the vein. Immediate cessation prevents further tissue damage and complications.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 90,
        category: "Fundamentals",
        question: "When using a gait belt to assist a client with ambulation, where should the belt be placed?",
        options: [
            "Around the client's chest",
            "Around the client's waist/lower ribcage",
            "Around the client's hips",
            "Around the client's thighs"
        ],
        correct: 1,
        explanations: [
            "Chest placement would interfere with breathing.",
            "✅ CORRECT: The gait belt should be placed around the waist/lower ribcage area where it can provide secure support without restricting breathing.",
            "Hip placement is too low and doesn't provide adequate control.",
            "Thigh placement would not provide proper support for ambulation."
        ],
        rationale: "Proper gait belt placement at the waist provides the best mechanical advantage for supporting the client while allowing normal breathing and movement.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 91,
        category: "Fundamentals",
        question: "A client is receiving oxygen via nasal cannula at 3 L/min. Which nursing action is most important?",
        options: [
            "Ensure the oxygen is humidified",
            "Check the client's nail beds for cyanosis",
            "Monitor for signs of oxygen toxicity",
            "Increase flow rate if client appears short of breath"
        ],
        correct: 1,
        explanations: [
            "Humidification is typically needed at higher flow rates (>4 L/min).",
            "✅ CORRECT: Monitoring for cyanosis helps assess oxygenation effectiveness and early signs of respiratory distress.",
            "Oxygen toxicity is unlikely at 3 L/min; it's a concern at much higher concentrations.",
            "Nurses cannot independently change oxygen orders without provider approval."
        ],
        rationale: "Continuous assessment of oxygenation status through observation of skin color, especially nail beds and mucous membranes, is essential to evaluate treatment effectiveness.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 92,
        category: "Fundamentals",
        question: "A client complains of pain rated 8/10. The nurse administers prescribed pain medication. When should the nurse reassess the pain?",
        options: [
            "In 4 hours when the next dose is due",
            "30-60 minutes after administration",
            "Only if the client requests reassessment",
            "At the end of the shift"
        ],
        correct: 1,
        explanations: [
            "Waiting until the next dose is due is too long to assess effectiveness.",
            "✅ CORRECT: Pain should be reassessed 30-60 minutes after medication administration to evaluate effectiveness and need for additional interventions.",
            "Nurses should proactively reassess pain, not wait for client requests.",
            "End-of-shift assessment is too late to modify treatment if needed."
        ],
        rationale: "Timely reassessment allows evaluation of medication effectiveness and opportunity to implement additional pain management strategies if needed.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Basic Care and Comfort"
    },
    {
        id: 93,
        category: "Fundamentals",
        question: "When teaching a client about taking medications, which statement indicates the need for further education?",
        options: [
            "I should take my blood pressure medication even when I feel fine",
            "I can stop taking antibiotics when I start feeling better",
            "I need to take my diabetes medication as prescribed every day",
            "I should report any unusual side effects to my doctor"
        ],
        correct: 1,
        explanations: [
            "This shows correct understanding - BP medications should be taken as prescribed.",
            "✅ CORRECT: This indicates misunderstanding. Antibiotics must be completed as prescribed to prevent resistance and ensure infection clearance.",
            "This shows correct understanding of diabetes medication adherence.",
            "This shows appropriate understanding of reporting side effects."
        ],
        rationale: "Incomplete antibiotic courses can lead to bacterial resistance and infection recurrence. Clients must understand the importance of completing the full course even when feeling better.",
        nursingProcess: "Evaluation",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 94,
        category: "Fundamentals",
        question: "A client has a Salem sump nasogastric tube for decompression. Which finding requires immediate nursing action?",
        options: [
            "Small amount of yellow drainage",
            "Client reports slight throat discomfort",
            "Air vent lumen is clamped shut",
            "Tube is secured to the nose with tape"
        ],
        correct: 2,
        explanations: [
            "Small amounts of yellow gastric drainage are expected.",
            "Slight throat discomfort is common with NG tubes.",
            "✅ CORRECT: The air vent (blue lumen) must remain open to prevent vacuum buildup that could damage gastric mucosa. Clamping it is dangerous.",
            "Proper securement with tape is correct technique."
        ],
        rationale: "Salem sump tubes have a dual lumen design. The blue air vent prevents vacuum formation that could cause mucosal damage. It must never be clamped.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 95,
        category: "Fundamentals",
        question: "A client is being discharged with a walker. Which statement indicates the client needs more teaching?",
        options: [
            "I should put my weight on the hand grips, not my armpits",
            "I will move the walker forward first, then step into it",
            "The walker should be about waist high when I'm standing",
            "I can lean my forearms on the walker when I get tired"
        ],
        correct: 3,
        explanations: [
            "This shows correct understanding - weight should be on hand grips.",
            "This demonstrates proper walker technique.",
            "Proper walker height is at wrist level when arms hang at sides, approximately waist high.",
            "✅ CORRECT: This indicates need for teaching. Leaning forearms on walker can cause instability and falls. Weight should be through hands on grips."
        ],
        rationale: "Proper walker use involves supporting weight through the hands on the grips. Leaning forearms on the walker creates instability and increases fall risk.",
        nursingProcess: "Evaluation",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 96,
        category: "Fundamentals",
        question: "A client is scheduled for surgery in the morning. Which pre-operative instruction is most important?",
        options: [
            "Take a shower the night before surgery",
            "Do not eat or drink anything after midnight",
            "Remove all jewelry and nail polish",
            "Arrive at the hospital 2 hours early"
        ],
        correct: 1,
        explanations: [
            "Showering is important for infection prevention but not the most critical instruction.",
            "✅ CORRECT: NPO (nothing by mouth) status prevents aspiration of gastric contents during anesthesia, which can be life-threatening.",
            "Removing jewelry and nail polish is important but not as critical as NPO status.",
            "Arrival time is important for preparation but not a safety issue like NPO status."
        ],
        rationale: "Maintaining NPO status before surgery prevents gastric contents from being aspirated during anesthesia induction, which can cause pneumonia or airway obstruction.",
        nursingProcess: "Planning",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 97,
        category: "Fundamentals",
        question: "A client with limited mobility is at risk for contractures. Which intervention is most effective for prevention?",
        options: [
            "Massage the affected joints twice daily",
            "Apply heat to stiff joints",
            "Perform range of motion exercises regularly",
            "Keep joints in flexed position for comfort"
        ],
        correct: 2,
        explanations: [
            "Massage alone doesn't prevent contractures, though it may provide comfort.",
            "Heat may provide comfort but doesn't prevent joint contractures.",
            "✅ CORRECT: Regular range of motion exercises maintain joint flexibility and muscle length, preventing contractures in immobilized clients.",
            "Keeping joints flexed actually promotes contracture development."
        ],
        rationale: "Range of motion exercises maintain joint mobility and prevent shortening of muscles and tendons that leads to contractures in immobilized clients.",
        nursingProcess: "Planning",
        clientNeed: "Physiological Integrity - Basic Care and Comfort"
    },
    {
        id: 98,
        category: "Fundamentals",
        question: "A client falls in the hallway and hits their head. What should the nurse do first?",
        options: [
            "Help the client stand up immediately",
            "Complete an incident report",
            "Assess the client for injuries while they remain on the floor",
            "Move the client to their room"
        ],
        correct: 2,
        explanations: [
            "Moving a client after a head injury could worsen potential spinal injuries.",
            "Incident reports are completed after ensuring client safety and medical evaluation.",
            "✅ CORRECT: After a fall with head injury, assess for injuries before moving the client. Check consciousness, vital signs, and obvious injuries while client remains still.",
            "Moving the client before assessment could cause further injury."
        ],
        rationale: "After a fall involving head injury, the priority is assessing for potential injuries including spinal damage before moving the client, which could cause further harm.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    },
    {
        id: 99,
        category: "Fundamentals",
        question: "A client has a urinary catheter that has been in place for 5 days. Which intervention helps prevent catheter-associated urinary tract infections?",
        options: [
            "Change the catheter every 3 days",
            "Keep the drainage bag above the level of the bladder",
            "Perform routine catheter care with soap and water daily",
            "Disconnect the catheter from the bag daily for cleaning"
        ],
        correct: 2,
        explanations: [
            "Catheters should only be changed when clinically indicated, not routinely every 3 days.",
            "The drainage bag should be kept below bladder level to prevent reflux.",
            "✅ CORRECT: Daily peri-catheter care with soap and water removes bacteria and reduces infection risk.",
            "The catheter system should remain a closed system; disconnecting increases infection risk."
        ],
        rationale: "Proper hygiene around the catheter insertion site removes bacteria that could ascend the catheter and cause urinary tract infection.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    }
];

// Signal that fundamentals questions are loaded
checkAllQuestionsLoaded();
