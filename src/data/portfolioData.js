export const portfolioData = {
  personal: {
    name: "Suraj Vinod Miskin",
    role: "Python Automation & ADAS Validation Engineer",
    subRole: "Automating ADAS Validation Workflows, Python Test Frameworks & Vehicle Diagnostics",
    email: "surajvmiskin@gmail.com",
    phone: "+91 80952 93563",
    location: "Bengaluru, India",
    domain: "surajvmiskin.com",
    github: "https://github.com/Surajvmiskin",
    linkedin: "https://www.linkedin.com/in/surajvmiskin",
    twitter: "https://twitter.com/Surajvmiskin",
    resumeUrl: "/Suraj_Vinod_Miskin_Resume.pdf",
    bio: "Python Automation & Validation Engineer at Tata Elxsi Bengaluru (onsite at Mercedes-Benz R&D). Specializing in Python-driven test automation frameworks, CustomTkinter GUI harnesses, Vector CANoe simulation, and ECU diagnostic validation. Dedicated to eliminating manual verification overhead with automated, reproducible test suites.",
  },
  metrics: [
    { label: "Primary Expertise", value: "Python Automation", detail: "Frameworks, PyTest & Scripts" },
    { label: "ADAS & Diagnostics", value: "Tata Elxsi", detail: "Active Client: MBRDI ADAS" },
    { label: "Peer-Reviewed IEEE", value: "1 Paper", detail: "ICMNWC 2024 / IEEE Xplore" },
    { label: "B.E. Electrical & Electronics", value: "8.29", detail: "KLE Technological University" },
  ],
  experience: [
    {
      company: "TATA ELXSI (Onsite at Mercedes-Benz R&D)",
      role: "Engineer – ADAS System Digital Validation",
      duration: "Nov 2025 – Present",
      location: "Bengaluru, India",
      badge: "Python Automation & ADAS",
      badgeColor: "cyan",
      points: [
        "Developed and deployed Python-based automation frameworks to streamline ADAS ECU validation workflows, reducing manual analysis effort and improving execution efficiency.",
        "Designed and implemented a GUI-based automation tool (CustomTkinter) for end-to-end test execution, including test case selection and automated report triggering.",
        "Automated log parsing and conversion pipelines by building Python scripts to process network telemetry for ADAS signal validation.",
        "Integrated test automation with Linux-based test benches using SSH-based remote command execution to trigger evaluation scripts.",
        "Collaborated with cross-functional teams to debug integration issues and deliver high-quality validation reports to OEM stakeholders."
      ],
      tools: ["Python", "CustomTkinter GUI", "Test Automation", "Vector CANoe", "ADAS ECU Validation", "Linux / SSH", "CAN Protocol", "Automated Reporting"]
    },
    {
      company: "TATA ELXSI (Project: Mahindra & Mahindra)",
      role: "Engineer – Vehicle Diagnostics",
      duration: "Dec 2024 – Oct 2025",
      location: "Chakan, Pune (On-site)",
      badge: "Vehicle Diagnostics",
      badgeColor: "amber",
      points: [
        "Served as a member of the Diagnostic Trouble Code (DTC) Clearance Team, ensuring vehicle system integrity and functional safety before production release.",
        "Utilized the Mahindra Intelligence Diagnostic Assistance (MIDA) platform to identify, diagnose, and clear vehicle faults across multiple engine and body control modules.",
        "Gained hands-on expertise in CAN communication and diagnostic validation workflows, working directly on vehicle ECUs to resolve integration issues.",
        "Coordinated with production and quality teams to validate fix implementations, ensuring zero-defect rollout for upcoming vehicle models."
      ],
      tools: ["MIDA Diagnostic Tool", "CAN Protocol", "ECU Diagnostics", "DTC Clearance", "Automotive Validation", "Quality Assurance"]
    }
  ],
  publication: {
    title: "Intrusion Detection System for Electric Vehicle Charging Station",
    conference: "IEEE 2023 3rd International Conference on Mobile Networks and Wireless Communications (ICMNWC)",
    date: "February 2024",
    publisher: "IEEE Xplore",
    doiLink: "https://ieeexplore.ieee.org/document/10435897",
    status: "Published & Indexed",
    abstract: "Modern electric vehicle (EV) charging stations rely on interconnected communication protocols that expose critical infrastructure to cybersecurity exploits and network intrusion threats. This research presents a deep learning-based intrusion detection framework trained using TensorFlow in Python to classify and detect anomalous cyber threats with high accuracy, bolstering EV charging resilience.",
    tags: ["Python", "IEEE Xplore", "TensorFlow", "Deep Learning", "EV Charging", "Cybersecurity", "Anomaly Detection"]
  },
  projects: [
    {
      id: "python-gui-automation",
      title: "Python GUI Automation Tool (CustomTkinter)",
      category: "python",
      categoryLabel: "Python & Automation",
      badge: "Desktop Automation",
      badgeColor: "cyan",
      shortDesc: "GUI-based automation tool built with CustomTkinter to automate network trace conversion, test case filtering, and automated report triggering.",
      problem: "Engineers had to manually convert raw network packet captures (PCAP) and configure test triggers via command-line scripts, which was repetitive and error-prone.",
      solution: "Architected a desktop GUI tool in Python using CustomTkinter that parses network packet captures, auto-extracts telemetry, filters test cases, and triggers automated validation reports.",
      impact: "Reduced manual data processing time significantly by implementing automated file parsing and formatting logic.",
      tags: ["Python", "CustomTkinter", "PCAP Conversion", "GUI Tool", "Test Automation", "Log Parsing"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    },
    {
      id: "adas-python-automation",
      title: "Automated ADAS Test Runner & Telemetry Suite",
      category: "python",
      categoryLabel: "Python & Automation",
      badge: "Flagship Framework",
      badgeColor: "cyan",
      shortDesc: "Modular Python test automation harness automating ADAS scenario test execution, CAN diagnostic logging, and automated pass/fail verification.",
      problem: "Manual execution of hundreds of ADAS test scenarios across vehicle configurations requires excessive time and is prone to human oversight.",
      solution: "Engineered an end-to-end Python automation framework that programmatically configures test parameters, triggers simulation runs via CANoe, extracts diagnostic telemetry, and outputs automated HTML/JSON test reports.",
      impact: "Replaced manual test triggers with scalable Python automated test suites, accelerating regression cycles and defect reporting.",
      tags: ["Python", "PyTest", "Test Automation", "Vector CANoe API", "ADAS Validation", "Log Parsing"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    },
    {
      id: "embedded-power-window",
      title: "Embedded Microcontroller Power Window System",
      category: "software",
      categoryLabel: "Embedded & Safety",
      badge: "Firmware Project",
      badgeColor: "cyan",
      shortDesc: "Microcontroller firmware developed in Embedded C for an automotive power window system featuring safety-critical anti-pinch logic.",
      problem: "Automotive power window systems require reliable obstacle detection and anti-pinch safety logic to prevent injury during automatic window roll-up.",
      solution: "Engineered firmware for the PIC16F877A microcontroller in Embedded C, implementing dual-mode manual and automatic operations with real-time response timings.",
      impact: "Successfully validated obstacle detection interrupt response times and motor drive safety controls under simulation.",
      tags: ["Embedded C", "PIC16F877A", "Microcontrollers", "Safety Logic", "Firmware", "Automotive Systems"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    },
    {
      id: "ev-intrusion-ids",
      title: "EV Charging Infrastructure Intrusion Detection System",
      category: "ai",
      categoryLabel: "Python & Deep Learning",
      badge: "IEEE Published",
      badgeColor: "cyan",
      shortDesc: "Python and TensorFlow deep learning neural network built to detect and classify cyber threats in connected EV charging networks.",
      problem: "Connected EV charging stations are susceptible to unauthorized network attacks that can jeopardize vehicle safety and the power distribution grid.",
      solution: "Developed and trained deep learning models in Python using TensorFlow with specialized dataset preprocessing, feature engineering, and high-precision anomaly scoring.",
      impact: "Published in IEEE ICMNWC 2024 proceedings on IEEE Xplore.",
      tags: ["Python", "TensorFlow", "Deep Learning", "Cybersecurity", "IEEE Xplore"],
      link: "https://ieeexplore.ieee.org/document/10435897",
      paperUrl: "https://ieeexplore.ieee.org/document/10435897",
      github: "https://github.com/Surajvmiskin"
    },
    {
      id: "power-fault-classification",
      title: "Power Transmission Line Electrical Fault Classifier",
      category: "ai",
      categoryLabel: "Python & Neural Nets",
      badge: "Open Source",
      badgeColor: "slate",
      shortDesc: "Python neural network framework classifying symmetric and asymmetric electrical faults in high-voltage power transmission lines.",
      problem: "Immediate identification of electrical line faults (line-to-ground, line-to-line, double-line) is paramount to prevent grid blackout cascades.",
      solution: "Trained neural network architectures in Python on multi-bus electrical transmission telemetry to accurately identify and isolate fault classifications in milliseconds.",
      impact: "Publicly accessible open-source repository bridging electrical systems and machine learning.",
      tags: ["Python", "Neural Networks", "Power Systems", "Keras", "Fault Analysis"],
      link: "https://github.com/Surajvmiskin/power-fault-classification",
      github: "https://github.com/Surajvmiskin/power-fault-classification"
    },
    {
      id: "babi-chatbot",
      title: "Contextual Conversational AI Engine (bAbI Benchmark)",
      category: "ai",
      categoryLabel: "Python & NLP",
      badge: "85% Accuracy",
      badgeColor: "slate",
      shortDesc: "Interactive question-answering system using multi-layer attention networks in Python trained on the Facebook bAbI reasoning dataset.",
      problem: "Standard rule-based chatbots fail to perform multi-hop reasoning over contextual story statements.",
      solution: "Implemented memory networks and attention mechanisms in Python/Keras, wrapped in a responsive desktop GUI.",
      impact: "Achieved 85% accuracy on multi-step reasoning benchmarks with a 10% boost through multi-layer attention.",
      tags: ["Python", "Keras", "NLP", "Attention Mechanism", "Desktop GUI"],
      link: "https://github.com/Surajvmiskin/bAbI_Chatbot_using_keras",
      github: "https://github.com/Surajvmiskin/bAbI_Chatbot_using_keras"
    },
    {
      id: "jpmc-financial-feed",
      title: "Real-Time Financial Telemetry & Charting Feeds",
      category: "python",
      categoryLabel: "Python & Systems",
      badge: "JPMorgan Chase SWE",
      badgeColor: "slate",
      shortDesc: "Real-time streaming data visualization platform processing high-frequency stock trade feeds.",
      problem: "Monitoring market spread anomalies across volatile order books requires low-latency stream rendering.",
      solution: "Implemented Python streaming listeners and live chart rendering using Perspective and TypeScript.",
      impact: "Completed JPMorgan Chase Software Engineering Virtual Experience.",
      tags: ["Python", "TypeScript", "Perspective", "Streaming Feeds", "Financial Data"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    }
  ],
  skills: [
    {
      category: "Python & Test Automation",
      isPrimary: true,
      icon: "code",
      description: "Core strength: automated test suites, PyTest, automation harnesses & scalable scripting",
      items: [
        "Python 3.x (Advanced)", "PyTest & Unittest", "Test Automation Frameworks",
        "Automated Test Harnesses", "Test Scripting & Execution", "Object-Oriented Design (OOP)",
        "CANoe Automation (Python/COM)", "Log Parsing & Telemetry Extraction", "REST APIs & Backend", "CI/CD & Git Automation"
      ]
    },
    {
      category: "ADAS & Automotive Validation",
      icon: "car",
      description: "System-level feature testing, MBRDI validation, ECU diagnostics & CAN networks",
      items: [
        "ADAS System Testing", "MBRDI Feature Validation", "Vector CANoe", "CAN Communication",
        "MIDA Diagnostic Tool", "DTC Clearance", "ECU Architecture", "Active Safety Features"
      ]
    },
    {
      category: "Machine Learning & Deep Learning",
      icon: "brain",
      description: "Neural network architectures, TensorFlow deep learning, NLP reasoning & anomaly detection",
      items: [
        "TensorFlow & Keras", "Deep Learning Models", "Neural Networks", "Anomaly Detection",
        "NLP & Dialog Modeling", "NumPy & Pandas", "Data Preprocessing", "Feature Engineering"
      ]
    },
    {
      category: "Software Engineering & Tools",
      icon: "zap",
      description: "Systems programming, frameworks, database systems & engineering tools",
      items: [
        "C & C++", "Django Framework", "Linux / Bash Shell", "SQL & Relational DBs",
        "MATLAB / Simulink", "Git & GitHub", "Battery Management (BMS)", "Power Quality & Systems"
      ]
    }
  ],
  education: {
    institution: "KLE Technological University",
    degree: "Bachelor of Engineering (B.E.) — Electrical & Electronics",
    duration: "Sep 2021 – May 2024",
    location: "Karnataka, India",
    gpa: "8.29",
    keyCourses: [
      "Python & Machine Learning", "Data Structures & Algorithms", "OOPs with C++",
      "EV Technologies", "OS & Embedded Systems", "Battery Management Systems (BMS)"
    ]
  }
};
