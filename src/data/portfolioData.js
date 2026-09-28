export const portfolioData = {
  personal: {
    name: "Suraj Vinod Miskin",
    role: "Automation, ADAS & Applied AI Engineer",
    subRole: "Bridging Automotive Embedded Networks, ADAS Validation & Generative AI Systems",
    email: "surajvmiskin@gmail.com",
    phone: "+91 80952 93563",
    location: "Bengaluru, India",
    domain: "surajvmiskin.com",
    github: "https://github.com/Surajvmiskin",
    linkedin: "https://www.linkedin.com/in/suraj-v-miskin/",
    twitter: "https://twitter.com/Surajvmiskin",
    resumeUrl: "#contact", // or PDF download
    bio: "Embedded & Automation Engineer at Tata Elxsi specializing in ADAS feature testing, system-level validation for MBRDI (Mercedes-Benz R&D India), Python-based test automation, and vehicle diagnostics. Passionate about applying modern Machine Learning, RAG architectures, and cybersecurity deep learning models to vehicle and power engineering.",
  },
  metrics: [
    { label: "Automotive Industry Experience", value: "1+ Yrs", detail: "Tata Elxsi & Mahindra DTC" },
    { label: "Peer-Reviewed IEEE Publication", value: "1 Paper", detail: "ICMNWC 2024 / IEEE Xplore" },
    { label: "B.E. Electrical & Electronics", value: "8.29 GPA", detail: "KLE Technological University" },
    { label: "Open-Source Repositories", value: "20+ Repos", detail: "Automotive, AI & Data Systems" },
  ],
  experience: [
    {
      company: "TATA ELXSI (MBRDI Project)",
      role: "Automation and Validation Engineer",
      duration: "8 months (Current)",
      location: "Bengaluru, India",
      badge: "ADAS System Testing",
      badgeColor: "cyan",
      points: [
        "Executing comprehensive ADAS feature testing and system-level validation for MBRDI (Mercedes-Benz Research and Development India), validating core active safety functionalities.",
        "Developing Python-based automation frameworks and test pipelines to streamline ADAS test case execution, diagnostic log analysis, and validation reporting.",
        "Leveraging Vector CANoe, automotive diagnostic tools, and CAN communication protocols to verify sensor behaviors and ECU functional integrity.",
      ],
      tools: ["Python", "Vector CANoe", "ADAS System Testing", "Feature Validation", "MBRDI Testing", "MATLAB", "OBD Tools", "CAN Protocol"]
    },
    {
      company: "TATA ELXSI (Mahindra & Mahindra Project)",
      role: "Embedded Software Engineer",
      duration: "3 months",
      location: "Chakan, Pune (On-site)",
      badge: "Vehicle Diagnostics",
      badgeColor: "amber",
      points: [
        "Served as an integral member of the Diagnostic Trouble Code (DTC) Clearance Team, ensuring vehicle system integrity prior to production commercial release.",
        "Utilized the Mahindra Intelligence Diagnostic Assistance (MIDA) platform to identify, isolate, and clear complex ECU faults across vehicle subsystems.",
        "Gained direct hands-on exposure to automotive Electronic Control Units (ECUs), CAN bus communication protocols, and diagnostic validation standards.",
      ],
      tools: ["MIDA Diagnostic Tool", "CAN Protocol", "ECU Diagnostics", "DTC Clearance", "Automotive Validation"]
    },
    {
      company: "Pravinya Information Technology Services",
      role: "Full Stack Developer",
      duration: "01/2024 - 05/2024",
      location: "Hubli, India",
      badge: "Software Systems",
      badgeColor: "slate",
      points: [
        "Engineered scalable web applications and administrative dashboards using Python, Django, MySQL, and JavaScript.",
        "Designed structured REST APIs and responsive user interfaces with cross-browser compatibility.",
      ],
      tools: ["Python", "Django", "MySQL", "JavaScript", "REST APIs"]
    }
  ],
  publication: {
    title: "Intrusion Detection System for Electric Vehicle Charging Station",
    conference: "IEEE 2023 3rd International Conference on Mobile Networks and Wireless Communications (ICMNWC)",
    date: "February 2024",
    publisher: "IEEE Xplore",
    doiLink: "https://ieeexplore.ieee.org",
    status: "Published & Indexed",
    abstract: "Modern electric vehicle (EV) charging stations rely on interconnected communication protocols that expose critical infrastructure to cybersecurity exploits and network intrusion threats. This research presents a deep learning-based intrusion detection framework trained using TensorFlow to classify and detect anomalous cyber threats with high accuracy, bolstering EV charging resilience.",
    tags: ["IEEE Xplore", "TensorFlow", "Deep Learning", "EV Charging", "Cybersecurity", "Anomaly Detection"]
  },
  projects: [
    {
      id: "ev-intrusion-ids",
      title: "EV Charging Infrastructure Intrusion Detection System",
      category: "ai",
      categoryLabel: "AI & Cybersecurity",
      badge: "IEEE Published",
      badgeColor: "cyan",
      shortDesc: "Deep learning neural network built with TensorFlow to detect and classify cyber threats in connected EV charging networks.",
      problem: "Connected EV charging stations are susceptible to unauthorized network attacks that can jeopardize vehicle safety and the power distribution grid.",
      solution: "Developed and trained deep learning models in TensorFlow with specialized dataset preprocessing, feature engineering, and high-precision anomaly scoring.",
      impact: "Published in IEEE ICMNWC 2024 proceedings on IEEE Xplore.",
      tags: ["TensorFlow", "Deep Learning", "Cybersecurity", "Python", "IEEE Xplore"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    },
    {
      id: "adas-rag-pipeline",
      title: "ADAS Diagnostic & Validation RAG Pipeline",
      category: "automotive",
      categoryLabel: "Automotive & ADAS",
      badge: "Tata Elxsi Project",
      badgeColor: "cyan",
      shortDesc: "LangChain-powered vector retrieval system for querying complex ADAS vehicle test datasets and diagnostic logs using natural language.",
      problem: "Automotive validation engineers spend hours manually inspecting voluminous test datasets and CAN diagnostic logs during ADAS feature validation cycles.",
      solution: "Engineered a scalable Python ingestion pipeline that parses, indexes, and vectorizes vehicle test logs into vector stores queryable via LangChain RAG.",
      impact: "Accelerated edge-case anomaly triage and automated validation report generation for vehicle test runs.",
      tags: ["Python", "LangChain", "RAG", "Vector Search", "ADAS Validation", "Test Automation"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    },
    {
      id: "power-fault-classification",
      title: "Power Transmission Line Electrical Fault Classifier",
      category: "ai",
      categoryLabel: "AI & Power Systems",
      badge: "Open Source",
      badgeColor: "slate",
      shortDesc: "Neural network framework classifying symmetric and asymmetric electrical faults in high-voltage power transmission lines.",
      problem: "Immediate identification of electrical line faults (line-to-ground, line-to-line, double-line) is paramount to prevent grid blackout cascades.",
      solution: "Trained neural network architectures on multi-bus electrical transmission telemetry to accurately identify and isolate fault classifications in milliseconds.",
      impact: "Publicly accessible open-source repository bridging electrical systems and machine learning.",
      tags: ["Neural Networks", "Python", "Power Systems", "Keras", "Fault Analysis"],
      link: "https://github.com/Surajvmiskin/power-fault-classification",
      github: "https://github.com/Surajvmiskin/power-fault-classification"
    },
    {
      id: "ev-grid-harmonics",
      title: "Impact of EV Charging Stations on Utility Grid Power Quality",
      category: "automotive",
      categoryLabel: "EV & Power Engineering",
      badge: "Research Study",
      badgeColor: "amber",
      shortDesc: "Mathematical simulation modeling the harmonic distortion induced by high-density EV charging stations on distribution grids.",
      problem: "Rapid deployment of fast-charging stations introduces non-linear load harmonics that degrade distribution transformer lifespans.",
      solution: "Conducted extensive MATLAB/Simulink harmonic analysis across multi-station loading scenarios.",
      impact: "Quantified THD escalation from 9.1% (single station) to 16.91% (three) and 20.99% (five), proving critical thresholds for passive/active filtering.",
      tags: ["MATLAB", "Simulink", "EV Stations", "Power Quality", "Harmonics"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    },
    {
      id: "babi-chatbot",
      title: "Contextual Conversational AI Engine (bAbI Benchmark)",
      category: "ai",
      categoryLabel: "NLP & Reasoning",
      badge: "85% Accuracy",
      badgeColor: "slate",
      shortDesc: "Interactive question-answering system using multi-layer attention networks trained on the Facebook bAbI reasoning dataset.",
      problem: "Standard rule-based chatbots fail to perform multi-hop reasoning over contextual story statements.",
      solution: "Implemented memory networks and attention mechanisms in Keras, wrapped in a responsive user-facing desktop GUI.",
      impact: "Achieved 85% accuracy on multi-step reasoning benchmarks with a 10% boost through multi-layer attention.",
      tags: ["Keras", "NLP", "Attention Mechanism", "Python GUI", "Conversational AI"],
      link: "https://github.com/Surajvmiskin/bAbI_Chatbot_using_keras",
      github: "https://github.com/Surajvmiskin/bAbI_Chatbot_using_keras"
    },
    {
      id: "jpmc-financial-feed",
      title: "Real-Time Financial Telemetry & Charting Feeds",
      category: "software",
      categoryLabel: "Systems & Data",
      badge: "JPMorgan Chase SWE",
      badgeColor: "slate",
      shortDesc: "Real-time streaming data visualization platform processing high-frequency stock trade feeds.",
      problem: "Monitoring market spread anomalies across volatile order books requires low-latency stream rendering.",
      solution: "Implemented streaming web socket listeners and live chart rendering using Perspective and TypeScript.",
      impact: "Completed JPMorgan Chase Software Engineering Virtual Experience.",
      tags: ["TypeScript", "Perspective", "Python", "Streaming Feeds", "Financial Data"],
      link: "https://github.com/Surajvmiskin",
      github: "https://github.com/Surajvmiskin"
    }
  ],
  skills: [
    {
      category: "Automotive & Diagnostics",
      icon: "car",
      description: "Embedded vehicle communication, test automation & ECU diagnostics",
      items: [
        "Vector CANoe", "CAN Protocol", "ADAS System Testing", "Feature Validation",
        "MIDA Diagnostic Tool", "DTC Clearance", "MBRDI Validation", "ECU Architecture"
      ]
    },
    {
      category: "AI, GenAI & Data Science",
      icon: "brain",
      description: "Generative AI, vector retrieval & neural deep learning models",
      items: [
        "RAG (Retrieval-Augmented)", "LangChain", "TensorFlow", "Keras", 
        "Deep Learning", "Anomaly Detection", "NumPy", "Data Pipelines"
      ]
    },
    {
      category: "Languages & Programming",
      icon: "code",
      description: "Systems programming, automation scripting & databases",
      items: [
        "Python", "C", "C++", "Embedded C", "SQL", "Linux / Bash", "Django", "Git / GitHub"
      ]
    },
    {
      category: "Electrical & EV Technologies",
      icon: "zap",
      description: "Grid integration, battery systems & power quality modeling",
      items: [
        "EV Charging Tech", "Battery Management (BMS)", "Electric Machines",
        "Power Quality & Harmonics", "MATLAB / Simulink", "Transmission Faults"
      ]
    }
  ],
  education: {
    institution: "KLE Technological University",
    degree: "Bachelor of Engineering (B.E.) — Electrical & Electronics",
    duration: "Sep 2021 – May 2024",
    location: "Karnataka, India",
    gpa: "8.29 / 10",
    keyCourses: [
      "Machine Learning", "Data Structures", "OOPs with C++",
      "EV Technologies", "OS & Embedded Systems", "Battery Management Systems (BMS)"
    ]
  }
};
