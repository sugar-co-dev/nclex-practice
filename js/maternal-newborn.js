// Maternal-Newborn Questions - 14 questions covering pregnancy, labor, delivery, and newborn care
const maternalNewbornQuestions = [
    {
        id: 56,
        category: "Maternal-Newborn",
        question: "A postpartum client is breastfeeding her newborn. She reports sore, cracked nipples. What should the nurse recommend first?",
        options: [
            "Switch to bottle feeding temporarily",
            "Apply lanolin cream after each feeding",
            "Check the baby's latch and positioning",
            "Limit feeding time to 10 minutes per side"
        ],
        correct: 2,
        explanations: [
            "Switching to bottle feeding isn't necessary and could interfere with breastfeeding establishment.",
            "While lanolin can help, addressing the root cause (poor latch) is the priority.",
            "✅ CORRECT: Poor latch and positioning are the most common causes of nipple pain and damage. Correcting these addresses the root problem.",
            "Limiting feeding time doesn't address the underlying cause and may lead to inadequate nutrition for the baby."
        ],
        rationale: "Nipple pain during breastfeeding is usually caused by poor latch technique. The baby should have a wide, asymmetric latch with more areola visible above the lip than below. Correcting positioning prevents further damage and promotes healing.",
        nursingProcess: "Implementation",
        clientNeed: "Health Promotion and Maintenance"
    },
    {
        id: 57,
        category: "Maternal-Newborn",
        question: "A pregnant client at 28 weeks gestation reports decreased fetal movement. What should the nurse instruct her to do first?",
        options: [
            "Come to the hospital immediately",
            "Drink a cold glass of juice and lie on her left side, then count fetal movements",
            "Wait 24 hours and call if movements don't return to normal",
            "Take a warm bath and try to relax"
        ],
        correct: 1,
        explanations: [
            "While concerning, this isn't necessarily an immediate emergency without further assessment.",
            "✅ CORRECT: Cold juice and left side-lying can stimulate fetal movement. Formal kick counts help assess fetal well-being before determining need for immediate evaluation.",
            "Waiting 24 hours is too long when fetal movement changes are reported.",
            "A warm bath doesn't specifically address or assess fetal well-being."
        ],
        rationale: "Decreased fetal movement can indicate fetal compromise. Initial stimulation and formal counting help differentiate between temporary decreased activity and potential problems requiring immediate evaluation.",
        nursingProcess: "Implementation",
        clientNeed: "Health Promotion and Maintenance"
    },
    {
        id: 58,
        category: "Maternal-Newborn",
        question: "A laboring client is 8 cm dilated and asks for pain medication. What is the nurse's best response?",
        options: [
            "It's too late for an epidural, but we can give you IV pain medication",
            "Try to hold on, you're almost ready to push",
            "Let me check with your doctor about your pain relief options",
            "Labor pain is normal and will be over soon"
        ],
        correct: 2,
        explanations: [
            "Making assumptions about available options without consulting the provider is inappropriate.",
            "This dismisses the client's pain and doesn't provide helpful options.",
            "✅ CORRECT: At 8 cm dilation, epidural may still be possible, and other options may be available. Consulting the provider ensures appropriate pain management options are explored.",
            "This dismisses the client's pain and doesn't provide support or options."
        ],
        rationale: "Pain management decisions during labor require collaboration between the client, nurse, and provider. At 8 cm, various options may still be available depending on individual circumstances.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Basic Care and Comfort"
    },
    {
        id: 59,
        category: "Maternal-Newborn",
        question: "A newborn's blood glucose is 35 mg/dL. What should the nurse do first?",
        options: [
            "Notify the pediatrician immediately",
            "Recheck the blood glucose in 30 minutes",
            "Feed the baby breast milk or formula",
            "Start an IV for glucose administration"
        ],
        correct: 2,
        explanations: [
            "While the physician should be notified, immediate feeding is the priority for mild hypoglycemia.",
            "Rechecking without intervention allows continued hypoglycemia which can damage the brain.",
            "✅ CORRECT: Blood glucose of 35 mg/dL indicates hypoglycemia. For asymptomatic newborns with mild hypoglycemia, feeding is the first intervention.",
            "IV glucose is used for severe hypoglycemia or when feeding is unsuccessful."
        ],
        rationale: "Newborn hypoglycemia (glucose <40 mg/dL) requires prompt treatment to prevent brain damage. For mild cases without symptoms, feeding increases glucose levels quickly and safely.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 60,
        category: "Maternal-Newborn",
        question: "A client at 36 weeks gestation has premature rupture of membranes. What is the priority nursing assessment?",
        options: [
            "Fetal heart rate",
            "Maternal blood pressure",
            "Color and odor of amniotic fluid",
            "Cervical dilation"
        ],
        correct: 0,
        explanations: [
            "✅ CORRECT: After membrane rupture, the priority is assessing fetal heart rate to detect cord prolapse, which is a life-threatening emergency.",
            "While important, maternal BP is not the immediate priority after membrane rupture.",
            "Fluid assessment is important but not the immediate priority.",
            "Cervical assessment can be done after ensuring fetal well-being."
        ],
        rationale: "Premature rupture of membranes increases risk of cord prolapse, which can cause fetal hypoxia and death. Immediate fetal heart rate assessment is essential.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 61,
        category: "Maternal-Newborn",
        question: "A postpartum client has heavy vaginal bleeding with clots. What should the nurse do first?",
        options: [
            "Weigh the pads to measure blood loss",
            "Massage the uterine fundus",
            "Start an IV for fluid replacement",
            "Notify the physician immediately"
        ],
        correct: 1,
        explanations: [
            "Measuring blood loss is important but not the immediate priority.",
            "✅ CORRECT: Heavy bleeding with clots suggests uterine atony. Fundal massage stimulates contraction and is the first intervention to control bleeding.",
            "IV access is important but stopping bleeding takes priority.",
            "The physician should be notified, but immediate intervention to stop bleeding comes first."
        ],
        rationale: "Uterine atony is the most common cause of postpartum hemorrhage. Fundal massage stimulates uterine contraction, compressing blood vessels and controlling bleeding.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 62,
        category: "Maternal-Newborn",
        question: "A client with preeclampsia is receiving magnesium sulfate. Which finding indicates magnesium toxicity?",
        options: [
            "Deep tendon reflexes 2+",
            "Respiratory rate 24/min",
            "Absence of deep tendon reflexes",
            "Urine output 40 mL/hour"
        ],
        correct: 2,
        explanations: [
            "2+ reflexes are normal; absent reflexes indicate toxicity.",
            "Respiratory rate of 24 is elevated but not indicative of magnesium toxicity.",
            "✅ CORRECT: Absent deep tendon reflexes indicate magnesium toxicity and risk of respiratory depression. The antidote (calcium gluconate) should be readily available.",
            "Urine output should be >30 mL/hour; this is adequate."
        ],
        rationale: "Magnesium sulfate depresses the central nervous system. Loss of deep tendon reflexes is an early sign of toxicity, indicating risk for respiratory depression and cardiac arrest.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Pharmacological Therapies"
    },
    {
        id: 63,
        category: "Maternal-Newborn",
        question: "A newborn has an APGAR score of 4 at 1 minute. What should the nurse do?",
        options: [
            "Continue routine newborn care",
            "Begin resuscitation efforts immediately",
            "Recheck APGAR at 5 minutes",
            "Place the baby skin-to-skin with mother"
        ],
        correct: 1,
        explanations: [
            "An APGAR of 4 indicates significant compromise requiring intervention, not routine care.",
            "✅ CORRECT: APGAR score of 4 indicates severe compromise requiring immediate resuscitation including oxygen, ventilation, and possibly chest compressions.",
            "While 5-minute APGAR will be checked, immediate intervention is needed.",
            "Skin-to-skin contact is inappropriate for a compromised newborn."
        ],
        rationale: "APGAR scores: 7-10 normal, 4-6 moderately depressed requiring stimulation/oxygen, 0-3 severely depressed requiring full resuscitation. Score of 4 requires immediate intervention.",
        nursingProcess: "Implementation",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 64,
        category: "Maternal-Newborn",
        question: "A pregnant client at 32 weeks gestation reports severe abdominal pain and vaginal bleeding. What condition should the nurse suspect?",
        options: [
            "Placenta previa",
            "Braxton Hicks contractions",
            "Placental abruption",
            "Normal bloody show"
        ],
        correct: 2,
        explanations: [
            "Placenta previa typically causes painless bleeding.",
            "Braxton Hicks contractions are usually painless and don't cause bleeding.",
            "✅ CORRECT: Placental abruption presents with severe abdominal pain and bleeding as the placenta separates from the uterine wall. This is an obstetric emergency.",
            "Bloody show occurs at term and is minimal bleeding with mucus."
        ],
        rationale: "Placental abruption involves premature separation of the placenta, causing severe pain from uterine irritation and bleeding from exposed vessels. It threatens both maternal and fetal life.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 65,
        category: "Maternal-Newborn",
        question: "A breastfeeding mother asks when she can expect her period to return. What should the nurse tell her?",
        options: [
            "Periods always return at 6 weeks postpartum",
            "Periods will not return as long as you breastfeed",
            "Period return varies but is often delayed with exclusive breastfeeding",
            "You should start birth control immediately since periods return quickly"
        ],
        correct: 2,
        explanations: [
            "Period return is variable and not consistently at 6 weeks, especially with breastfeeding.",
            "Periods can return even while breastfeeding, especially if not exclusively breastfeeding.",
            "✅ CORRECT: Lactational amenorrhea varies among women. Exclusive breastfeeding often delays return of menstruation, but timing is unpredictable.",
            "Ovulation can occur before first period, so birth control should be discussed, but period return timing varies."
        ],
        rationale: "Breastfeeding suppresses ovulation through prolactin, but the degree and duration vary. Exclusive breastfeeding is more likely to delay menstruation than partial breastfeeding.",
        nursingProcess: "Implementation",
        clientNeed: "Health Promotion and Maintenance"
    },
    {
        id: 66,
        category: "Maternal-Newborn",
        question: "A client in labor has been pushing for 2 hours with no descent of the fetal head. What complication should the nurse anticipate?",
        options: [
            "Normal variation in labor progress",
            "Need for cesarean delivery",
            "Fetal distress from prolonged pushing",
            "Maternal exhaustion only"
        ],
        correct: 1,
        explanations: [
            "Lack of fetal descent after 2 hours of pushing is not normal and indicates a problem.",
            "✅ CORRECT: Prolonged second stage with no fetal descent often indicates cephalopelvic disproportion or malposition, typically requiring cesarean delivery.",
            "While fetal distress may occur, the lack of descent indicates mechanical problems requiring surgical intervention.",
            "Maternal exhaustion is a concern, but the primary issue is mechanical obstruction."
        ],
        rationale: "When adequate maternal effort during pushing doesn't result in fetal descent, mechanical factors like cephalopelvic disproportion or fetal malposition are likely, often requiring cesarean delivery.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    },
    {
        id: 67,
        category: "Maternal-Newborn",
        question: "A newborn is jaundiced on the second day of life. Which intervention is most appropriate?",
        options: [
            "Stop breastfeeding immediately",
            "Begin phototherapy treatment",
            "Assess bilirubin levels and continue monitoring",
            "Administer IV fluids"
        ],
        correct: 2,
        explanations: [
            "Breastfeeding should continue unless specifically contraindicated by bilirubin levels.",
            "Phototherapy is only initiated based on specific bilirubin levels and risk factors.",
            "✅ CORRECT: Physiologic jaundice commonly appears on days 2-3. Assessment of bilirubin levels determines if intervention is needed.",
            "IV fluids are not routinely needed for physiologic jaundice."
        ],
        rationale: "Physiologic jaundice is common in newborns due to immature liver function and increased red cell breakdown. Bilirubin levels guide treatment decisions.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 68,
        category: "Maternal-Newborn",
        question: "A client at 38 weeks gestation has gestational diabetes. Which fetal complication is of greatest concern?",
        options: [
            "Intrauterine growth restriction",
            "Macrosomia (large baby)",
            "Premature birth",
            "Genetic abnormalities"
        ],
        correct: 1,
        explanations: [
            "Gestational diabetes typically causes fetal overgrowth, not growth restriction.",
            "✅ CORRECT: Maternal hyperglycemia leads to fetal hyperinsulinemia and excessive growth (macrosomia), increasing risk of birth trauma and cesarean delivery.",
            "While preterm labor can occur, macrosomia is the more common concern.",
            "Gestational diabetes doesn't cause genetic abnormalities."
        ],
        rationale: "High maternal glucose crosses the placenta, stimulating fetal insulin production and promoting fat and glucose storage, leading to macrosomia and associated birth complications.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Reduction of Risk Potential"
    },
    {
        id: 69,
        category: "Maternal-Newborn",
        question: "A postpartum client complains of severe headache and visual changes 2 days after delivery. What condition should the nurse suspect?",
        options: [
            "Normal postpartum fatigue",
            "Postpartum depression",
            "Postpartum preeclampsia",
            "Migraine headache"
        ],
        correct: 2,
        explanations: [
            "These symptoms are too severe for normal postpartum fatigue.",
            "While headaches can occur with depression, visual changes are not typical.",
            "✅ CORRECT: Preeclampsia can develop or persist postpartum. Severe headache and visual changes are warning signs of worsening condition requiring immediate evaluation.",
            "While possible, the combination with visual changes suggests preeclampsia."
        ],
        rationale: "Postpartum preeclampsia can develop up to 6 weeks after delivery. Severe headache and visual changes indicate potential progression to eclampsia and require immediate intervention.",
        nursingProcess: "Assessment",
        clientNeed: "Physiological Integrity - Physiological Adaptation"
    }
];

// Signal that maternal-newborn questions are loaded
checkAllQuestionsLoaded();
