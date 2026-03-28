import { aiImage } from "./aiImage";

/** Site & contact — primary source of truth for copy */
export const GITHUB_USER = "https://github.com/abhishekraj1305";

export const SITE = {
  name: "Abhishek Raj",
  title:
    "Data Scientist · AI/ML Engineer · GenAI & LLMs · Python & SQL · Digital Transformation · Automation & Analytics",
  titleFull:
    "Data Scientist | AI & ML Engineer | GenAI & LLMs | Python & SQL Expert | Digital Transformation Specialist | Automation & Analytics Enthusiast | Artist",
  tagline:
    "I turn raw data into actionable systems—ML, automation, and cloud-backed workflows that make businesses faster and more human-friendly.",
  linkedIn: "https://www.linkedin.com/in/abhishekraj1305/",
  email: "mailto:r.abhishek1305@gmail.com",
  emailDisplay: "r.abhishek1305@gmail.com",
  location: "Gurugram, Haryana, India",
};

export const LINKS = {
  github: { label: "GitHub", href: "https://github.com/abhishekraj1305" },
  behance: { label: "Behance", href: "https://www.behance.net/abhishekraj20" },
  dataSciencePortfolio: {
    label: "Data Science Portfolio",
    href: "https://www.datascienceportfol.io/Abhishekraj1305",
  },
};

export const CONTACT = {
  phoneTel: "tel:+916201270892",
  phoneDisplay: "+91 6201270892",
  school: "SLIET Longowal",
};

export const HOME_INTRO = {
  short:
    "Data Scientist and AI/ML engineer grounded in digital transformation—from SQL and Python automation on Azure to Power Platform, BI, and GenAI. Alumnus and placement representative at SLIET Longowal; based in Gurugram. Public code and experiments live on GitHub; portfolio imagery below uses prompt-based AI renders for a consistent neon tech aesthetic.",
};

export const SKILLS_PREVIEW = [
  "Python, TensorFlow, PyTorch, Scikit-learn",
  "SQL · data modeling · query optimization",
  "GenAI, RAG, LLMs & NLP",
  "Power BI, Power Automate, Power Apps",
  "Microsoft Graph API & M365 automation",
  "Azure (Data Factory, Blob, VMs, containers)",
  "ETL, logging, MLOps-minded delivery",
  "Git & collaborative engineering",
];

/** Mapped to public repos — see https://github.com/abhishekraj1305?tab=repositories • Images: AI-generated (Pollinations). */
export const PROJECTS = [
  {
    slug: "binance-futures-bot",
    highlight: true,
    title: "Binance USDT-M futures testnet trading bot",
    repoUrl: `${GITHUB_USER}/binance-futures-testnet-trading-bot`,
    summary:
      "Python trading toolkit for Binance USDT-M futures testnet: CLI plus Streamlit UI, HMAC signing, validation, logging, and MARKET/LIMIT plus algo STOP_MARKET orders.",
    problem:
      "Need a safe testnet environment to exercise order flows, execution rules, and monitoring without risking production capital.",
    solution:
      "Structured bot with clear signing, configurable strategies surface, and UI for inspection—focused on correctness and observability on testnet.",
    impact:
      "Reusable foundation for experimentation and demos; sharpens production habits around logging, validation, and API hygiene.",
    stack: ["Python", "Streamlit", "Binance futures API", "HMAC auth", "CLI patterns"],
    features: ["Streamlit dashboard", "Order-type coverage", "Logging & validation-first design"],
    image: aiImage("cryptocurrency trading terminal holographic charts futuristic bot interface", 600, 400),
  },
  {
    slug: "mlops-pipeline",
    highlight: true,
    title: "MLOps-style training & deployment lab",
    repoUrl: `${GITHUB_USER}/MLOps`,
    summary:
      "Mini pipeline demonstrating reproducibility, basic deployment thinking, structured logging, and metrics output—the glue work around models that teams actually operate.",
    problem:
      "Notebooks alone do not encode how a model was trained, logged, or reproduced when results need to be defended.",
    solution:
      "Codified training/eval paths with emphasis on artifacts, logs, and traceable metrics suitable for extension into fuller MLOps stacks.",
    impact:
      "Clear pattern for turning one-off experiments into something another engineer can re-run and compare.",
    stack: ["Python", "Logging", "Metrics & artifacts", "Reproducibility"],
    features: ["Structured outputs", "Deployment-oriented layout", "Teaching-friendly scope"],
    image: aiImage("MLOps pipeline data flow machine learning cicd abstract diagram", 600, 400),
  },
  {
    slug: "ocr-react",
    highlight: true,
    title: "OCR bill extraction + React dashboard",
    repoUrl: `${GITHUB_USER}/OCR--React`,
    summary:
      "Extracts structured data from bills using Python (OCR, OpenCV), then surfaces results in a React + Vite dashboard with CSV export and interactive UI.",
    problem:
      "Manual transcription from invoices and receipts is slow, error-prone, and hard to audit at volume.",
    solution:
      "CV + OCR pipeline feeding a clean API contract to a modern front end for review, correction, and export.",
    impact:
      "End-to-end story from pixels to actionable rows—closer to how document AI products are shaped in practice.",
    stack: ["Python", "OpenCV", "OCR", "React", "Vite", "CSV export"],
    features: ["Document capture to fields", "Dashboard review UX", "Export for downstream systems"],
    image: aiImage("document OCR scanning invoices holographic data extraction dashboard", 600, 400),
  },
  {
    slug: "nlp-zomato-ratings",
    highlight: true,
    title: "NLP: restaurant rating prediction (Zomato-style reviews)",
    repoUrl: `${GITHUB_USER}/NLP_zomato_ratings_prediction`,
    summary:
      "Predicts restaurant ratings from review text—public repo trained on 20,000+ reviews with strong reported accuracy on the task (README cites ~85%).",
    problem:
      "Text-heavy reviews hide rating signals; a model helps prioritize quality issues and sentiment themes at scale.",
    solution:
      "Classic ML/NLP feature and model loop in Python notebooks with clear evaluation narrative.",
    impact:
      "Demonstrates end-to-end NLP from raw text to metric—not only exploratory EDA—with reproducible project structure.",
    stack: ["Python", "Jupyter", "NLP", "Scikit-learn"],
    features: ["Text → rating mapping", "Larger-than-toy dataset", "Documented accuracy claims"],
    image: aiImage("restaurant reviews word cloud neural NLP sentiment analysis abstract", 600, 400),
  },
  {
    slug: "realtime-object-detection",
    title: "Real-time object detection (Streamlit)",
    repoUrl: `${GITHUB_USER}/real-time-object-detection-streamlit`,
    summary:
      "Computer-vision demo wired for Streamlit: quick feedback loop for detection experiments and UI-first iteration.",
    problem:
      "CV prototypes stall when inference and UI are not wired for fast iteration with stakeholders.",
    solution:
      "Streamlit shell around detection flow so parameters and outputs are visible in one place.",
    impact:
      "Speeds demos and classroom-style reviews without a heavy custom front end.",
    stack: ["Python", "Streamlit", "Computer vision", "Object detection"],
    features: ["Live-ish UI", "Detection loop", "Shareable runnable app"],
    image: aiImage("real time object detection bounding boxes camera feed cyber interface", 600, 400),
  },
  {
    slug: "fraud-detection-ml",
    title: "Fraud detection with machine learning",
    repoUrl: `${GITHUB_USER}/fraud-detection-ml`,
    extraRepos: [{ label: "credit-card-fraud-detection", url: `${GITHUB_USER}/credit-card-fraud-detection` }],
    summary:
      "ML-focused fraud analytics—pattern discovery and classification aligned with financial risk narratives (paired with a companion credit-card fraud notebook repo).",
    problem:
      "Imbalanced, high-stakes labels need careful baselines and honest metrics—not accuracy theater.",
    solution:
      "Notebook-driven modeling workflow with emphasis on the fraud use-case framing and repeatable steps.",
    impact:
      "Portfolio-grade evidence of tabular + risk-style thinking alongside classic ML reporting.",
    stack: ["Python", "Jupyter", "Classification", "Imbalanced learning mindset"],
    features: ["Risk framing", "Feature + model iteration", "Second related repo for breadth"],
    image: aiImage("fraud detection cybersecurity shield neural network banking abstract", 600, 400),
  },
  {
    slug: "banking-analytics",
    title: "Banking analytics (Czechoslovakia financial dataset)",
    repoUrl: `${GITHUB_USER}/Data-Analytics-Project_Banking`,
    summary:
      "End-to-end analytics project on banking financial data: cleaning, analysis, and narrative suitable for stakeholder readouts.",
    problem:
      "Finance analytics projects fail when lineage from raw extract to chart is not documented.",
    solution:
      "Structured project layout with analysis checkpoints and visualization choices tied to business questions.",
    impact:
      "Shows SQL/Python/BI-style storytelling on realistic financial shape—not generic toy CSVs only.",
    stack: ["Python", "Pandas", "Data visualization", "Financial domain"],
    features: ["ETL-style prep", "Banking context", "Presentation-ready cuts"],
    image: aiImage("banking analytics charts dashboards holographic finance data", 600, 400),
  },
  {
    slug: "power-bi-visualization",
    title: "Data analysis & Power BI visualization collection",
    repoUrl: `${GITHUB_USER}/Data-Analysis-and-Visualization-Project`,
    summary:
      "Collection oriented toward Power BI dashboards and analysis deliverables—how numbers become decisions in the BI layer.",
    problem:
      "Analysis without a visualization contract leaves executives rebuilding the same views monthly.",
    solution:
      "Dashboard-forward artifacts plus notebook/analysis companions where appropriate.",
    impact:
      "Demonstrates BI literacy alongside code-first analytics.",
    stack: ["Power BI", "Python", "Jupyter", "Data storytelling"],
    features: ["Dashboard samples", "BI + notebook pairing", "Portfolio-ready narratives"],
    image: aiImage("Power BI dashboard neon charts executive analytics room", 600, 400),
  },
  {
    slug: "real-estate-scraping",
    title: "Real-estate listing scrapers (Housing.com · Sobha)",
    repoUrl: `${GITHUB_USER}/Housing.com-scrapping`,
    extraRepos: [{ label: "sobha.com_scraping", url: `${GITHUB_USER}/sobha.com_scraping` }],
    summary:
      "Python scraping work for property listings—high-volume structured acquisition aligned with market-mapping and lead-gen style use cases.",
    problem:
      "Listing data is fragmented across portals; manual copy-paste does not scale for coverage or refresh.",
    solution:
      "Dedicated scrapers per site pattern with defensive parsing and normalization discipline.",
    impact:
      "Pairs with broader narrative on automation-led revenue and coverage (see experience summary).",
    stack: ["Python", "Web scraping", "HTML parsing", "Data cleaning"],
    features: ["Multi-site pattern", "Domain-specific selectors", "Companion Sobha Bengaluru scraper"],
    image: aiImage("real estate skyscrapers data network property tech wireframe", 600, 400),
  },
  {
    slug: "train-sideview",
    title: "Train side-view coach splitter + coverage report",
    repoUrl: `${GITHUB_USER}/train-sideview`,
    summary:
      "HTML-forward project splitting side-view train coach imagery and reporting coverage—CV + data QA flavor for rail/railcar visuals.",
    problem:
      "Visual datasets need cheap, inspectable QA on how well regions are covered before training detectors.",
    solution:
      "Splitter plus coverage-style reporting so gaps are visible early.",
    impact:
      "Shows attention to dataset integrity, not only model code.",
    stack: ["Python", "HTML report", "Computer vision data prep"],
    features: ["Coach-centric crops", "Coverage reporting", "Operations-minded QA"],
    image: aiImage("train railway side view technical diagram futuristic measurement", 600, 400),
  },
  {
    slug: "hand-detection",
    title: "Hand detection: gesture video control",
    repoUrl: `${GITHUB_USER}/Hand-Detection`,
    summary:
      "Uses hand landmarks/gesture logic to drive media or control signals—interactive CV beyond static classification.",
    problem:
      "Gesture UIs need low-latency perception and simple state machines users can feel.",
    solution:
      "Python CV pipeline oriented to video control rather than one-shot images only.",
    impact:
      "Demonstrates perception + interaction design in a small, understandable codebase.",
    stack: ["Python", "MediaPipe / CV patterns", "Video"],
    features: ["Gesture → control mapping", "Interactive demo angle", "CV fundamentals"],
    image: aiImage("hand gesture recognition holographic interface controlling video", 600, 400),
  },
  {
    slug: "ml-projects-notebooks",
    title: "Machine Learning Projects (notebooks)",
    repoUrl: `${GITHUB_USER}/Machine-Learning-Projects`,
    summary:
      "Curated ML exercises and projects in notebook form—classification, regression, and classic workloads suited for study and reuse.",
    problem:
      "Learners need a single place for varied ML patterns without starting from zero each time.",
    solution:
      "Repository of notebook projects with incremental complexity.",
    impact:
      "Shows breadth of ML baselines and teaching-grade clarity.",
    stack: ["Python", "Jupyter", "Scikit-learn", "Classic ML"],
    features: ["Multiple problem types", "Notebook-native pedagogy", "Portfolio density"],
    image: aiImage("machine learning notebooks scatter plots neural grid education", 600, 400),
  },
  {
    slug: "data-science-modules",
    title: "Data_Science — learning scripts & modules",
    repoUrl: `${GITHUB_USER}/Data_Science`,
    summary:
      "End-to-end data science learning path in one repo: scripts and modules that cover the lifecycle from ingest to modeling hooks.",
    problem:
      "Fragmented tutorials rarely sit in one coherent repo with runnable structure.",
    solution:
      "Consolidated modules and scripts for practice and extension.",
    impact:
      "Best read as a personal academy-in-code—signals seriousness about foundations.",
    stack: ["Python", "HTML docs", "Data science lifecycle"],
    features: ["Modular layout", "Learning-oriented", "Broad coverage"],
    image: aiImage("data science learning path books code holographic library", 600, 400),
  },
  {
    slug: "data-analysis-projects",
    title: "Data analysis & visualization projects",
    repoUrl: `${GITHUB_USER}/Data-Analysis-Projects`,
    summary:
      "Broader collection for analysis, visualization, and reporting patterns—useful as a grab-bag of techniques and chart grammar.",
    problem:
      "One-off charts do not teach how to build reusable analysis habits.",
    solution:
      "Multiple small projects emphasizing visualization literacy and data sense-making.",
    impact:
      "Complements Power BI-focused repo with code-first viz and pandas workflows.",
    stack: ["Python", "Jupyter", "Visualization", "Pandas"],
    features: ["Many slices", "EDA patterns", "Viz grammar practice"],
    image: aiImage("data visualization many charts holographic analyst workspace", 600, 400),
  },
  {
    slug: "abhishek-portfolio-ts",
    title: "abhishek-portfolio (TypeScript)",
    repoUrl: `${GITHUB_USER}/abhishek-portfolio`,
    summary:
      "Earlier portfolio / profile site experiment in TypeScript—useful as a snapshot of front-end iteration before the current React build.",
    problem:
      "Personal sites drift; you still want history of how presentation evolved.",
    solution:
      "Lightweight TS project scaffolding for a prior deployment target.",
    impact:
      "Shows continued investment in developer experience and shipping a public face, not only notebooks.",
    stack: ["TypeScript", "Front-end tooling"],
    features: ["Historical portfolio variant", "TS-based setup"],
    image: aiImage("developer portfolio website holographic typescript code", 600, 400),
  },
  {
    slug: "portfolio-legacy",
    title: "Portfolio (legacy snapshot)",
    repoUrl: `${GITHUB_USER}/Portfolio`,
    summary:
      "Legacy portfolio repository retained for continuity—paired with the TypeScript variant as a progression story.",
    problem:
      "Recruiters sometimes dig old repos; clarity beats mystery.",
    solution:
      "Keep the repo public with honest labeling relative to newer work.",
    impact:
      "Demonstrates long-term public versioning of your personal brand.",
    stack: ["Legacy web assets"],
    features: ["Archival value", "Progression narrative"],
    image: aiImage("archive folder timeline glowing portfolio evolution", 600, 400),
  },
  {
    slug: "python-exercises",
    title: "Python exercises",
    repoUrl: `${GITHUB_USER}/python-exercises`,
    summary:
      "Drills and small scripts—foundational practice that supports everything from scraping to ML prep.",
    problem:
      "Skipping fundamentals shows up when edge cases hit in production.",
    solution:
      "Dedicated space for language mechanics and repeatable patterns.",
    impact:
      "Signals discipline: the boring reps that make hard projects tractable.",
    stack: ["Python"],
    features: ["Core syntax", "Problem sets", "Interview-ready muscle memory"],
    image: aiImage("python snake logo abstract code keyboard neon", 600, 400),
  },
];

/** Narrative for Experience page hero */
export const EXPERIENCE_HEADLINE = {
  narrative:
    "I work like a hybrid IC: model training where it matters, pipelines where data must move 24/7, and Power Platform where business users live. Recent focus—digital transformation at Jay Switches and high-automation data engineering at AiToXr on Azure.",
  tenureSummary: "AI/ML, automation, and data roles across industry and internships; SLIET Longowal graduate.",
};

/** Reverse-chronological roles */
export const EXPERIENCE_POSITIONS = [
  {
    id: "jay-switches",
    org: "Jay Switches India (P) Limited",
    role: "Digital Transformation Specialist",
    location: "Gurugram, Haryana, India",
    period: "Feb 2025 – Present",
    current: true,
    highlights: [
      "Database & data management: designed and optimized SQL data stores; faster queries and more trustworthy reporting.",
      "Process automation in Python: large cuts to manual processing time (~60%) and stronger operational efficiency.",
      "Microsoft stack: Power BI, Power Automate, and Power Apps to strip ~70% manual effort from targeted workflows.",
      "Transformation programs for production monitoring, inventory, and customer communication—higher accuracy and throughput.",
      "IT support & hygiene on Microsoft apps: stable operations with security-conscious practice.",
    ],
    impact: [
      "~80% less manual intervention in reporting and analytics.",
      "~50% faster data retrieval via optimized SQL paths.",
      "~30% operational cost reduction from automated processes.",
    ],
    tools: ["SQL", "Python", "Power BI", "Power Automate", "Power Apps", "Microsoft Azure"],
  },
  {
    id: "aitoxr-auto",
    org: "AiToXr",
    role: "Python Automation Developer",
    location: "Chandigarh, India",
    period: "Jan 2024 – Jan 2025",
    current: false,
    highlights: [
      "Python data-refresh automation on Azure: ~90–95% reduction in manual refresh work with higher accuracy.",
      "Azure Blob and containers for large-scale storage/retrieval patterns.",
      "ETL with Python and Azure Data Factory for high-volume ingestion and transformation.",
      "Scraping/automation covering 160+ country sites with regulatory and compliance constraints.",
      "ML hooks where predictions could tighten workflow automation.",
    ],
    impact: [
      "Massive manual workload reduction (90–95% band on owned pipelines).",
      "Stronger global data accuracy and compliance posture.",
      "More efficient operations via AI-assisted automation.",
    ],
    tools: ["Python", "SQL", "Azure Blob", "Containers", "Azure VMs", "Data Factory", "ETL", "ML integration"],
  },
  {
    id: "aitoxr-ds",
    org: "AiToXr",
    role: "Data Scientist",
    location: "Chandigarh, India",
    period: "Oct 2023 – Dec 2023",
    current: false,
    highlights: [
      "Computer vision & deep learning: image recognition and object detection with accuracy and latency in mind.",
      "LLaMA 2–based conversational assistant for customer support automation.",
      "CNN architectures for image tasks; improved classification performance in production tests.",
      "Scaled data prep and deployment paths for real-world datasets.",
    ],
    impact: [
      "Better real-time image recognition performance on targeted tasks.",
      "Chatbot quality and latency improved via tuned NLP.",
      "Deepening expertise in LLMs, transformers, and CV pipelines.",
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "LLaMA 2", "CNNs"],
  },
  {
    id: "sliet-spr",
    org: "SLIET Longowal",
    role: "Student Placement Representative",
    location: "Sangrur, Punjab, India",
    period: "May 2022 – May 2024",
    current: false,
    highlights: [
      "Bridged students and employers: fairs, drives, and sustained LinkedIn outreach.",
      "Showcased student outcomes; strengthened institution positioning with hiring partners.",
      "Coached resumes, interviews, and networking; aligned skills to market demand.",
    ],
    impact: [],
    tools: ["Stakeholder communication", "Event operations", "Talent marketing"],
  },
  {
    id: "startupaccel",
    org: "StartupAccel",
    role: "AI / ML Intern",
    location: "Uttar Pradesh, India",
    period: "Sep 2023 – Dec 2023",
    current: false,
    highlights: [
      "NLP chatbot for customer queries and support efficiency.",
      "Text analytics: sentiment, keywords, and trends for BI-style insight.",
      "Computer vision prototype for object detection with deep learning.",
    ],
    impact: [],
    tools: ["Python", "NLP", "Deep learning", "CV"],
  },
  {
    id: "alluvium",
    org: "Alluvium IoT Solutions Pvt. Ltd.",
    role: "Lead Generation Specialist (Intern)",
    location: "Ahmedabad, Gujarat, India",
    period: "Jun 2023 – Jul 2023",
    current: false,
    highlights: [
      "Python scraping and automation for B2B lead discovery.",
      "Google Sheets–based CRM hygiene, cleaning, and enrichment.",
      "Chrome extensions for contact discovery; structured reporting for sales.",
    ],
    impact: [],
    tools: ["Python", "Google Sheets", "Chrome tooling", "Data cleaning"],
  },
  {
    id: "dataknobs",
    org: "DataKnobs",
    role: "Data Science Intern",
    location: "United States (remote)",
    period: "Apr 2023 – Jun 2023",
    current: false,
    highlights: [
      "Exposure to responsible generative-AI practices and governed outputs.",
      "Mindset: high-quality datasets as the lever for predictive power.",
    ],
    impact: [],
    tools: ["Generative AI governance", "Data quality"],
  },
  {
    id: "internpe",
    org: "InternPe",
    role: "Python Engineer (Intern)",
    location: "Jaipur, Rajasthan, India",
    period: "Mar 2023 – Apr 2023",
    current: false,
    highlights: [
      "Web, data processing, and automation projects in Python.",
      "Django/Flask exposure; NumPy/Pandas for analytical work.",
      "Collaboration with senior engineers on clean, maintainable delivery.",
    ],
    impact: [],
    tools: ["Python", "Django", "Flask", "NumPy", "Pandas"],
  },
  {
    id: "acmegrade",
    org: "Acmegrade",
    role: "Data Science Trainee",
    location: "Bengaluru, Karnataka, India",
    period: "Jul 2022 – Sep 2022",
    current: false,
    highlights: [
      "Predictive modeling, visualization, and NLP-style analytics.",
      "Python and R; statistics and ML fundamentals applied to business problems.",
    ],
    impact: [],
    tools: ["Python", "R", "ML", "Visualization"],
  },
];

/** Deduplicated skills for chips */
export const SKILLS_ALL = [
  "Python",
  "SQL",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "OpenCV",
  "NLP & LLMs",
  "RAG",
  "Power BI",
  "Power Automate",
  "Power Apps",
  "Microsoft Graph API",
  "Azure Data Factory",
  "Azure Blob",
  "Azure VMs",
  "Docker / containers",
  "ETL",
  "Git",
  "Logging & observability",
  "GenAI governance",
];

export const ABOUT = {
  summary:
    "Data Scientist and AI/ML engineer focused on digital transformation. I specialize in turning raw data into insights and building intelligent systems that automate, optimize, and improve how businesses operate—from NLP and deep learning to Power Platform and Azure-backed pipelines.",
  vision:
    "Whether it is training models, shipping dashboards, or automating workflows, I pair technical depth with business context. I am motivated by scalable, ethical AI across healthcare, finance, e-commerce, and manufacturing: systems that are smarter, faster, and easier for people to use.",
  missionBullets: [
    "AI & ML development — NLP, deep learning, predictive modeling with Python, TensorFlow, PyTorch, and Scikit-learn.",
    "Process automation — Python, Power Automate, Graph API, and Microsoft 365–native patterns.",
    "Data engineering & analytics — ETL, Azure integration, and Power BI storytelling.",
    "Cloud & transformation — Azure services, Salesforce-aware workflows, end-to-end digital change.",
  ],
  achievementsHighlight: [
    "Zomato-style NLP rating model (public repo: ~85% on 20K+ reviews per README) with sentiment-ready storytelling.",
    "Real-estate automation for 100K+ listings contributing to $5K+ revenue narrative.",
    "HR analytics dashboards tied to ~72% absenteeism reduction and ~85% productivity lift in the program window.",
    "Azure-hosted pipelines replacing manual workflows—up to ~96% reduction in repetitive work on owned processes.",
  ],
  journey: [
    {
      phase: "Engineering foundation · SLIET Longowal",
      text: "B.Tech in Electrical & Electronics Engineering and diploma roots—with placement representation work that sharpened storytelling and stakeholder empathy.",
    },
    {
      phase: "Data science & internships",
      text: "Progressive intensity from Acmegrade and InternPe through DataKnobs, StartupAccel, and AiToXr—CV, NLP, LLMs, and Azure-scale automation.",
    },
    {
      phase: "Digital transformation · industry",
      text: "Jay Switches: owning SQL performance, Python automation, and Power Platform delivery with measurable operational KPIs.",
    },
  ],
  pillars: [
    {
      title: "AI & ML",
      body: "Models that survive real inputs: validation discipline, leakage awareness, and deployment-minded features—not leaderboard chasing.",
    },
    {
      title: "Automation",
      body: "Repeatable jobs become code, ADF pipelines, or governed Power Platform flows—with logging and handover baked in.",
    },
    {
      title: "Data & cloud",
      body: "Azure-native patterns for storage and orchestration; BI layers that executives trust because definitions are honest.",
    },
  ],
  philosophy: [
    "Ship, measure, teach—the loop compounds.",
    "Prefer transparent systems over opaque heroics.",
    "Ethical, scalable AI is a product decision, not a footnote.",
  ],
};

export const EDUCATION = [
  {
    school: "Sant Longowal Institute of Engineering & Technology (SLIET)",
    degree: "Bachelor's · Electrical & Electronics Engineering",
    period: "Sep 2021 – May 2024",
    note: "Student Placement Representative (May 2022 – May 2024).",
  },
  {
    school: "Sant Longowal Institute of Engineering & Technology (SLIET)",
    degree: "Diploma · Electrical Engineering",
    period: "2018 – 2021",
    note: "",
  },
];

export const CERTIFICATIONS = [
  "Web Design Strategy and Information Architecture",
  "Google Advanced Data Analytics Capstone",
  "Read Text in Images and Documents with Azure AI Vision",
  "Introduction to Programming Using Python",
  "The Nuts and Bolts of Machine Learning",
];

export const LANGUAGES = [
  { name: "Hindi", level: "Full professional proficiency" },
  { name: "English", level: "Professional working proficiency" },
];

export const HONORS = ["Best Trainee Award"];
