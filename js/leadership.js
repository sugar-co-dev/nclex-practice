// Leadership and Management Questions - 8 questions covering management principles and delegation
const leadershipQuestions = [
    {
        id: 110,
        category: "Leadership & Management",
        question: "A nurse manager notices increased medication errors on the unit. What is the most effective first step?",
        options: [
            "Discipline the nurses involved in errors",
            "Conduct a root cause analysis of the errors",
            "Implement mandatory overtime to increase staffing",
            "Purchase new medication administration equipment"
        ],
        correct: 1,
        explanations: [
            "Discipline focuses on blame rather than system improvement and may discourage error reporting.",
            "✅ CORRECT: Root cause analysis identifies underlying systems issues that contribute to errors, allowing for effective interventions to prevent future occurrences.",
            "Overtime may actually increase errors due to fatigue and doesn't address root causes.",
            "New equipment may be needed but shouldn't be implemented without understanding the underlying causes."
        ],
        rationale: "Quality improvement in healthcare focuses on systems thinking rather than individual blame. Root cause analysis identifies system failures that enable errors, leading to more effective prevention strategies.",
        nursingProcess: "Assessment",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 111,
        category: "Leadership & Management",
        question: "A charge nurse must assign clients to staff for the next shift. Which assignment demonstrates appropriate delegation?",
        options: [
            "Assign a new graduate nurse to care for the most critical clients",
            "Give the most experienced nurse only stable, easy clients",
            "Match client acuity levels with nurse experience and competency",
            "Assign clients randomly to ensure fairness"
        ],
        correct: 2,
        explanations: [
            "New graduates should not be assigned the most critical clients without adequate support.",
            "Underutilizing experienced nurses wastes valuable resources and expertise.",
            "✅ CORRECT: Safe delegation matches client needs and acuity with nurse competency and experience levels to ensure quality care and patient safety.",
            "Random assignment ignores both client needs and nurse capabilities."
        ],
        rationale: "Effective delegation considers both client needs and staff capabilities. High-acuity clients require experienced nurses, while stable clients can be cared for by less experienced staff with appropriate support.",
        nursingProcess: "Planning",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 112,
        category: "Leadership & Management",
        question: "A nurse manager receives complaints about a staff nurse's performance. What is the most appropriate initial action?",
        options: [
            "Terminate the nurse immediately",
            "Document the complaints and meet privately with the nurse",
            "Ignore the complaints unless they become more serious",
            "Reassign the nurse to less important duties"
        ],
        correct: 1,
        explanations: [
            "Termination without investigation and due process is inappropriate and potentially illegal.",
            "✅ CORRECT: Performance issues require proper documentation and direct communication with the employee to understand the situation and develop improvement plans.",
            "Ignoring performance concerns can lead to patient safety issues and legal problems.",
            "Reassignment without addressing the underlying issues doesn't solve the problem."
        ],
        rationale: "Performance management requires fair investigation, documentation, and direct communication. This approach protects both patients and employees while providing opportunities for improvement.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 113,
        category: "Leadership & Management",
        question: "During a code blue emergency, the nurse manager notices chaos and poor communication. What leadership principle should be applied?",
        options: [
            "Take control and give orders to everyone",
            "Step back and let the team figure it out",
            "Clearly designate roles and establish communication protocols",
            "Send everyone extra training materials later"
        ],
        correct: 2,
        explanations: [
            "Authoritarian control can stifle team effectiveness and communication.",
            "Lack of leadership during emergencies can result in poor outcomes.",
            "✅ CORRECT: Effective emergency leadership involves clear role designation and communication protocols to ensure coordinated, efficient response.",
            "Training is important but doesn't address the immediate emergency situation."
        ],
        rationale: "Crisis leadership requires clear communication, defined roles, and coordinated efforts. Establishing these elements during emergencies improves outcomes and reduces errors.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 114,
        category: "Leadership & Management",
        question: "A nurse manager wants to improve staff satisfaction and retention. Which approach is most effective?",
        options: [
            "Increase salary for all staff members",
            "Implement flexible scheduling and professional development opportunities",
            "Reduce staff workload by hiring more nurses",
            "Provide better parking spaces for nurses"
        ],
        correct: 1,
        explanations: [
            "While salary is important, other factors often have greater impact on job satisfaction.",
            "✅ CORRECT: Flexibility and growth opportunities address key factors in job satisfaction: work-life balance and professional development.",
            "More staffing helps but doesn't address all satisfaction factors and may not be financially feasible.",
            "Parking is a minor concern compared to professional satisfaction factors."
        ],
        rationale: "Research shows that job satisfaction is influenced by multiple factors including autonomy, professional growth, work-life balance, and recognition more than just compensation alone.",
        nursingProcess: "Planning",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 115,
        category: "Leadership & Management",
        question: "A nurse manager must implement a new hospital policy that staff members oppose. What is the best approach?",
        options: [
            "Impose the policy without discussion",
            "Ignore staff concerns and proceed with implementation",
            "Involve staff in planning implementation and address their concerns",
            "Ask administration to delay the policy indefinitely"
        ],
        correct: 2,
        explanations: [
            "Authoritarian implementation often leads to resistance and poor compliance.",
            "Ignoring concerns creates resentment and may lead to passive resistance.",
            "✅ CORRECT: Involving staff in implementation planning addresses concerns, increases buy-in, and improves compliance with new policies.",
            "Unnecessary delays can interfere with organizational goals and may not be possible."
        ],
        rationale: "Change management is most successful when stakeholders are involved in the process. This approach addresses concerns while maintaining forward momentum toward implementation.",
        nursingProcess: "Planning",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 116,
        category: "Leadership & Management",
        question: "A charge nurse observes conflict between two staff members affecting patient care. What is the priority action?",
        options: [
            "Ignore the conflict and hope it resolves itself",
            "Take sides with the nurse who seems more reasonable",
            "Address the conflict immediately and focus on patient care impact",
            "Transfer one of the nurses to another unit"
        ],
        correct: 2,
        explanations: [
            "Ignoring workplace conflict can lead to worsening situations and compromised patient care.",
            "Taking sides creates bias and doesn't resolve the underlying issue.",
            "✅ CORRECT: When conflict affects patient care, immediate intervention is necessary to ensure safety while working toward resolution.",
            "Transfer may be needed eventually but doesn't address the immediate patient care concerns."
        ],
        rationale: "Patient safety is the priority when workplace conflicts affect care delivery. Immediate intervention protects patients while providing opportunity to resolve staff issues.",
        nursingProcess: "Implementation",
        clientNeed: "Safe and Effective Care Environment - Management of Care"
    },
    {
        id: 117,
        category: "Leadership & Management",
        question: "A nurse manager is planning staff development programs. Which topic should be the highest priority?",
        options: [
            "Advanced cardiac life support for all nurses",
            "Customer service training for better patient satisfaction scores",
            "Safety procedures and error prevention strategies",
            "Team building activities to improve morale"
        ],
        correct: 2,
        explanations: [
            "ACLS is important but not all nurses need this advanced training.",
            "Customer service is valuable but patient safety takes priority.",
            "✅ CORRECT: Safety and error prevention directly impact patient outcomes and should be the highest priority for staff development.",
            "Team building is beneficial but patient safety education is more critical."
        ],
        rationale: "Patient safety is the fundamental responsibility of nursing. Education focused on safety procedures and error prevention has the greatest potential impact on patient outcomes.",
        nursingProcess: "Planning",
        clientNeed: "Safe and Effective Care Environment - Safety and Infection Control"
    }
];

// Signal that leadership questions are loaded
checkAllQuestionsLoaded();
