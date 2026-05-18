/** Site & contact — primary source of truth for copy */
export const GITHUB_USER = "https://github.com/abhishekraj1305";

export const SITE = {
  name: "Abhishek Raj",
  title:
    "Data Engineer · Data Scientist · AI/ML Automation Engineer · Power Platform Expert",
  titleFull:
    "Data Engineer | Data Scientist | AI/ML Automation Engineer | Power Platform Expert | Digital Transformation Specialist",
  tagline:
    "I build Python, SQL, Azure, and API-driven data systems that turn fragmented operations into reliable pipelines, governed datasets, and dashboard-ready business intelligence.",
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
  phoneTel: "tel:+91 7261078212",
  phoneDisplay: "+91 7261078212",
  school: "SLIET Longowal",
};

export const HOME_INTRO = {
  short:
    "Data Engineer, Data Scientist, and automation developer focused on enterprise digitization: ETL/ELT pipelines, SQL-backed reporting, Azure Data Factory, Azure Blob/ADLS, Microsoft Graph API integrations, Power Platform workflows, dashboards, and AI-assisted data products. Based in Gurugram with public code and experiments on GitHub.",
};

export const ROLE_TRACKS = [
  {
    title: "Data Engineering",
    body: "ETL/ELT, PySpark, SQL Server, Azure Data Factory, Blob/ADLS, Delta Lake, Airflow, validation, monitoring, and dashboard-ready data models.",
    tags: ["Python", "SQL", "PySpark", "ADF", "Delta Lake"],
  },
  {
    title: "Data Science & AI",
    body: "NLP, computer vision, model prototyping, RAG, evaluation narratives, and practical ML workflows that connect models to business use cases.",
    tags: ["Pandas", "Scikit-learn", "OpenCV", "NLP", "RAG"],
  },
  {
    title: "Automation & Power Platform",
    body: "Microsoft Graph API, Planner, To-Do, OneDrive, Excel automation, Power BI, Power Apps, Power Automate, and SharePoint/M365 workflows.",
    tags: ["Graph API", "Power BI", "Power Apps", "M365", "PDI"],
  },
];

function projectVisual(prompt) {
  const key = prompt.toLowerCase();
  const kind = key.includes("trading") || key.includes("cryptocurrency")
    ? "trading"
    : key.includes("ocr") || key.includes("invoice") || key.includes("document")
      ? "ocr"
      : key.includes("object") || key.includes("vision") || key.includes("gesture") || key.includes("train")
        ? "vision"
        : key.includes("fraud") || key.includes("banking") || key.includes("finance") || key.includes("power bi") || key.includes("dashboard") || key.includes("analytics")
          ? "dashboard"
          : key.includes("typescript") || key.includes("frontend") || key.includes("portfolio")
            ? "frontend"
            : key.includes("scraping") || key.includes("python")
              ? "code"
              : "ml";

  const icons = {
    trading: `<path d="M168 612C320 432 420 518 552 352C672 202 790 250 1032 110" stroke="#00CAEB" stroke-width="18" stroke-linecap="round"/><path d="M168 672C340 572 482 628 622 512C760 398 870 464 1050 330" stroke="#DF3F8B" stroke-width="16" stroke-linecap="round"/><path d="M760 176L890 306L760 436L630 306L760 176Z" fill="#DF3F8B"/><path d="M760 176L826 306L760 436L694 306L760 176Z" fill="#9AF7FF"/><circle cx="168" cy="612" r="24" fill="#9AF7FF"/><circle cx="552" cy="352" r="24" fill="#00CAEB"/><circle cx="1032" cy="110" r="24" fill="#DF3F8B"/>`,
    ml: `<path d="M600 138L846 280V520L600 662L354 520V280L600 138Z" fill="#020617" fill-opacity=".72" stroke="#9AF7FF" stroke-width="9"/><path d="M600 138V662M354 280L846 520M846 280L354 520" stroke="#00CAEB" stroke-opacity=".58" stroke-width="7"/><circle cx="600" cy="400" r="102" fill="#00CAEB"/><circle cx="600" cy="400" r="48" fill="#DFFBFF"/><circle cx="354" cy="280" r="18" fill="#DF3F8B"/><circle cx="846" cy="520" r="18" fill="#DF3F8B"/>`,
    ocr: `<rect x="230" y="118" width="350" height="500" rx="30" fill="#E9FBFF" fill-opacity=".92"/><path d="M292 220H520M292 298H490M292 376H536M292 454H460" stroke="#060885" stroke-width="20" stroke-linecap="round"/><rect x="640" y="232" width="300" height="360" rx="32" fill="#020617" stroke="#00CAEB" stroke-width="8"/><path d="M700 326H880M700 410H840M700 494H900" stroke="#DF3F8B" stroke-width="18" stroke-linecap="round"/><path d="M596 394H640" stroke="#9AF7FF" stroke-width="10" stroke-linecap="round"/>`,
    vision: `<circle cx="610" cy="396" r="278" fill="#00CAEB" fill-opacity=".12" stroke="#00CAEB" stroke-width="8"/><path d="M176 400C320 200 506 122 610 122C714 122 900 200 1044 400C900 600 714 678 610 678C506 678 320 600 176 400Z" fill="#020617" fill-opacity=".62" stroke="#9AF7FF" stroke-width="9"/><circle cx="610" cy="400" r="124" fill="#00CAEB"/><circle cx="610" cy="400" r="62" fill="#060885"/><circle cx="654" cy="358" r="24" fill="#DF3F8B"/>`,
    dashboard: `<rect x="120" y="112" width="960" height="560" rx="46" fill="#020617" fill-opacity=".62" stroke="#00CAEB" stroke-width="7"/><rect x="210" y="206" width="230" height="160" rx="26" fill="#00CAEB" fill-opacity=".24" stroke="#00CAEB" stroke-width="5"/><rect x="494" y="206" width="230" height="160" rx="26" fill="#DF3F8B" fill-opacity=".24" stroke="#DF3F8B" stroke-width="5"/><rect x="778" y="206" width="230" height="160" rx="26" fill="#9AF7FF" fill-opacity=".18" stroke="#9AF7FF" stroke-width="5"/><path d="M214 566C360 426 458 494 594 374C720 264 826 368 1004 214" stroke="#9AF7FF" stroke-width="14" stroke-linecap="round"/><circle cx="594" cy="374" r="22" fill="#00CAEB"/><circle cx="1004" cy="214" r="22" fill="#DF3F8B"/>`,
    code: `<rect x="132" y="110" width="560" height="580" rx="34" fill="#020617" fill-opacity=".8" stroke="#00CAEB" stroke-width="6"/><circle cx="190" cy="166" r="13" fill="#DF3F8B"/><circle cx="232" cy="166" r="13" fill="#00CAEB"/><circle cx="274" cy="166" r="13" fill="#9AF7FF"/><path d="M196 260H530M196 332H610M196 404H450M196 476H580M196 548H628M196 620H490" stroke="#9AF7FF" stroke-width="20" stroke-linecap="round"/><path d="M196 332H350M196 476H392M196 620H318" stroke="#DF3F8B" stroke-width="20" stroke-linecap="round"/><path d="M790 250L1020 400L790 550" stroke="#00CAEB" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/><path d="M1020 250L790 400L1020 550" stroke="#DF3F8B" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>`,
    frontend: `<rect x="176" y="130" width="848" height="520" rx="44" fill="#020617" fill-opacity=".7" stroke="#00CAEB" stroke-width="7"/><rect x="250" y="222" width="360" height="300" rx="28" fill="#00CAEB" fill-opacity=".18" stroke="#00CAEB" stroke-width="5"/><rect x="660" y="222" width="280" height="90" rx="24" fill="#DF3F8B" fill-opacity=".24" stroke="#DF3F8B" stroke-width="5"/><rect x="660" y="362" width="280" height="160" rx="24" fill="#9AF7FF" fill-opacity=".16" stroke="#9AF7FF" stroke-width="5"/><path d="M306 304H554M306 382H500M708 414H888" stroke="#9AF7FF" stroke-width="20" stroke-linecap="round"/>`,
  };

  const svg = `<svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="800" fill="#000000"/><defs><radialGradient id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 180) rotate(90) scale(470)"><stop stop-color="#00CAEB" stop-opacity=".64"/><stop offset="1" stop-color="#00CAEB" stop-opacity="0"/></radialGradient><radialGradient id="m" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(830 360) rotate(90) scale(520)"><stop stop-color="#DF3F8B" stop-opacity=".66"/><stop offset="1" stop-color="#DF3F8B" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="800" fill="#060885" opacity=".55"/><rect width="1200" height="800" fill="url(#c)"/><rect width="1200" height="800" fill="url(#m)"/><g opacity=".16"><path d="M0 100H1200M0 200H1200M0 300H1200M0 400H1200M0 500H1200M0 600H1200M0 700H1200" stroke="#00CAEB"/><path d="M100 0V800M200 0V800M300 0V800M400 0V800M500 0V800M600 0V800M700 0V800M800 0V800M900 0V800M1000 0V800M1100 0V800" stroke="#00CAEB"/></g><g transform="translate(0 0)">${icons[kind]}</g></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const SKILLS_PREVIEW = [
  "Python, SQL, PySpark & Spark SQL",
  "ETL/ELT, batch processing & incremental loading",
  "Medallion Architecture, CDC & SCD Type 2",
  "Azure Data Factory, Blob, ADLS, Azure SQL & VMs",
  "Power BI, dashboard-ready data modeling & KPI layers",
  "Microsoft Graph API, Office 365 APIs & REST integrations",
  "Pentaho Data Integration, Airflow & scheduled workflows",
  "Logging, validation, monitoring & idempotent pipelines",
];

export const HERO_STATS = [
  { value: "200+", label: "employees in task-data pipelines", detail: "Graph API, Planner, To-Do, OneDrive, Excel" },
  { value: "160+", label: "global sources ingested", detail: "Python and Azure VM extraction workflows" },
  { value: "95%", label: "manual intervention reduced", detail: "ADF and Azure Blob batch ETL" },
  { value: "100K+", label: "records extracted and cleaned", detail: "real-estate data pipeline impact" },
];

export const CAPABILITIES = [
  {
    title: "Data Engineering & Warehousing",
    body: "Build extraction, validation, transformation, orchestration, and serving layers so reporting teams can trust scheduled data flows.",
    tags: ["PySpark", "Delta Lake", "Airflow", "SQL Server", "ADF"],
  },
  {
    title: "Enterprise Automation",
    body: "Replace repetitive manual operations with Python jobs, Graph API integrations, Pentaho workflows, and Power Platform delivery.",
    tags: ["Python", "Graph API", "PDI", "Power Automate", "Azure"],
  },
  {
    title: "Data Science & Applied AI",
    body: "Clean, preprocess, model, and explain data through NLP, CV, RAG, and dashboard workflows that stay grounded in measurable outcomes.",
    tags: ["NLP", "Computer vision", "RAG", "Scikit-learn", "Power BI"],
  },
];

export const SYSTEM_HIGHLIGHTS = [
  "Python + SQL pipelines for extraction, transformation, validation, logging, monitoring, reporting, and handover-ready delivery.",
  "Warehouse-style thinking across Bronze/Silver/Gold layers, incremental loads, CDC, SCD Type 2, idempotent design, and dashboard-ready models.",
  "Azure delivery across Data Factory, Blob Storage, ADLS, Azure SQL, VMs, scheduled batch processing, and operational pipeline reliability.",
  "Enterprise integration patterns using Microsoft Graph API, Office 365 APIs, Planner, To-Do, OneDrive, Excel, Power BI, and Power Platform.",
];

/** Mapped to public repos — see https://github.com/abhishekraj1305?tab=repositories */
export const PROJECTS = [
  {
    slug: "medallion-pyspark-pipeline",
    highlight: true,
    title: "Medallion Architecture data pipeline using PySpark",
    repoUrl: "",
    summary:
      "Scalable PySpark and Delta Lake pipeline implementing Bronze, Silver, and Gold layers with incremental loading, SCD Type 2 history, validation, logging, and Airflow orchestration.",
    problem:
      "Analytics teams need trusted historical datasets, not one-off cleaned files that overwrite history or hide late-arriving changes.",
    solution:
      "Built a layered warehouse-style pipeline: raw landing in Bronze, cleaned/conformed data in Silver, and reporting-ready Gold tables with SCD Type 2 tracking.",
    impact:
      "Demonstrates production-grade data warehousing concepts recruiters expect: medallion layers, incremental loads, idempotent processing, history tracking, and quality gates.",
    stack: ["PySpark", "Spark SQL", "Delta Lake", "Apache Airflow", "SCD Type 2", "CDC"],
    features: ["Bronze/Silver/Gold layers", "Incremental loading", "Validation and logging"],
    image: projectVisual("medallion architecture data warehouse pipeline, bronze silver gold layers, spark delta lake airflow orchestration dashboard"),
  },
  {
    slug: "azure-batch-data-pipeline",
    highlight: true,
    title: "End-to-end Azure batch data pipeline",
    repoUrl: "",
    summary:
      "Azure Data Factory, Blob/ADLS, SQL Server, and Python batch workflow for ingesting structured data, validating it, transforming it, and serving reporting-ready tables.",
    problem:
      "Manual file movement and inconsistent refresh logic make enterprise reporting slow, fragile, and hard to audit.",
    solution:
      "Designed scheduled Azure batch processing with source extraction, storage layers, SQL transformations, validation checks, and dashboard-facing outputs.",
    impact:
      "Frames Azure Data Factory and SQL Server work as a repeatable data engineering pattern instead of a single dashboard refresh script.",
    stack: ["Azure Data Factory", "Azure Blob", "ADLS", "SQL Server", "Python", "Power BI"],
    features: ["Scheduled batch processing", "Data validation checks", "Reporting-ready serving layer"],
    image: projectVisual("Azure Data Factory batch ETL pipeline, blob storage data lake SQL Server reporting architecture dashboard"),
  },
  {
    slug: "graph-task-data-etl",
    highlight: true,
    title: "Microsoft Graph API task-data ETL for 200+ employees",
    repoUrl: "",
    summary:
      "Python, SQL, Pentaho PDI, and Microsoft Graph API pipelines consolidating Planner, To-Do, OneDrive, and Excel task data for enterprise reporting.",
    problem:
      "Task status, ownership, and overdue work were fragmented across Microsoft 365 systems, creating manual reporting effort and inconsistent visibility.",
    solution:
      "Built API-driven extraction and consolidation workflows with validation, logging, scheduled batch execution, and dashboard-ready task models.",
    impact:
      "Reduced manual effort by 90%, improved reporting accuracy by 85%, and supported alerting that increased task closure rate by 30%.",
    stack: ["Python", "SQL", "Pentaho PDI", "Microsoft Graph API", "Office 365 APIs", "Power BI"],
    features: ["Planner/To-Do/OneDrive extraction", "Overdue-task alerts", "Operational KPI model"],
    image: projectVisual("Microsoft Graph API enterprise task data ETL pipeline, Planner To Do OneDrive Excel Power BI dashboard"),
  },
  {
    slug: "global-source-ingestion",
    highlight: true,
    title: "Azure/Python ingestion from 160+ global sources",
    repoUrl: "",
    summary:
      "Python and Azure VM ingestion workflows extracting structured data from 160+ global web sources, with Azure Blob batch storage, validation, and error handling.",
    problem:
      "Global source coverage does not scale when extraction, validation, and retry handling depend on manual refresh work.",
    solution:
      "Designed scalable ingestion jobs and Azure batch storage patterns with structured extraction, validation, and production-oriented error handling.",
    impact:
      "Reduced manual intervention by 95%, supported 95% pipeline uptime, and created a reusable pattern for high-volume global data acquisition.",
    stack: ["Python", "Azure VMs", "Azure Blob", "Azure Data Factory", "ETL", "Monitoring"],
    features: ["160+ source coverage", "Validation and error handling", "Batch ingestion reliability"],
    image: projectVisual("global web source ingestion data pipeline, Azure VM Python extraction, blob storage monitoring dashboard"),
  },
  {
    slug: "binance-futures-bot",
    highlight: false,
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
    image: projectVisual("cryptocurrency trading bot dashboard, futures trading terminal, candlestick charts, API automation, secure algorithmic trading workstation"),
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
    image: projectVisual("MLOps machine learning pipeline, model training workflow, deployment lab, experiment tracking dashboard, neural network infrastructure"),
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
    image: projectVisual("OCR document intelligence system extracting invoice and bill data, scanned receipts, structured data dashboard"),
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
    image: projectVisual("natural language processing sentiment analysis dashboard, restaurant reviews, text embeddings, rating prediction AI"),
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
    image: projectVisual("real time object detection computer vision interface, bounding boxes, camera analytics, AI vision system"),
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
    image: projectVisual("financial fraud detection AI dashboard, anomaly detection, secure banking risk analytics, transaction monitoring"),
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
    image: projectVisual("banking analytics dashboard, financial data visualization, executive KPI screen, secure finance reporting"),
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
    image: projectVisual("Power BI style business intelligence dashboard, KPI analytics, enterprise reporting wall, data visualization"),
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
    image: projectVisual("real estate data scraping automation, property listing intelligence dashboard, web crawler collecting housing data"),
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
    image: projectVisual("train side view computer vision dataset analysis, rail coach segmentation, coverage report, transportation AI"),
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
    image: projectVisual("hand gesture detection computer vision, human computer interaction, media control AI, landmark tracking"),
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
    image: projectVisual("machine learning notebooks collection, classification and regression models, Python data science workspace"),
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
    image: projectVisual("data science learning modules, Python scripts, data lifecycle pipeline, notebooks and analytics workspace"),
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
    image: projectVisual("data analysis and visualization projects, charts dashboard, Python analytics, insight storytelling"),
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
    image: projectVisual("futuristic TypeScript frontend portfolio interface, code editor and responsive website mockup"),
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
    image: projectVisual("legacy portfolio website redesign archive, futuristic web interface, personal brand system"),
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
    image: projectVisual("Python programming exercises, code editor, terminal scripts, automation practice workspace"),
  },
];

/** Narrative for Experience page hero */
export const EXPERIENCE_HEADLINE = {
  narrative:
    "I work like a hybrid technical IC: data engineering where pipelines need reliability, data science where prediction matters, Python automation where operations need scale, and Power Platform where business users need governed tools. Recent focus: task-data ETL at Jay Switches and large-scale Azure/Python ingestion at AiToXr.",
  tenureSummary: "2+ years across Data Engineering, AI/ML, automation, and analytics roles; SLIET Longowal graduate based in Gurgaon, Delhi NCR.",
};

/** Reverse-chronological roles */
export const EXPERIENCE_POSITIONS = [
  {
    id: "jay-switches",
    org: "Jay Switches India (P) Limited",
    role: "Data Engineer",
    location: "Gurugram, Haryana, India",
    period: "Feb 2025 – Present",
    current: true,
    highlights: [
      "Built end-to-end ETL pipelines using Python, SQL, Pentaho PDI, and Microsoft Graph API to extract and consolidate task data from Planner, To-Do, OneDrive, and Excel systems for 200+ employees.",
      "Developed scheduled batch workflows with logging, validation, API integrations, and dashboard-ready task models for operational reporting.",
      "Implemented automated alerting and monitoring for overdue tasks so pipeline outputs became action-oriented, not just reporting artifacts.",
      "Worked across Microsoft stack delivery: Power BI, Power Automate, Power Apps, SharePoint/M365 workflows, and SQL-backed reporting.",
    ],
    impact: [
      "Reduced manual task-reporting effort by 90%.",
      "Improved reporting accuracy by 85% through validation and automated consolidation.",
      "Increased task closure rate by 30% through overdue-task monitoring and alerts.",
    ],
    tools: ["Python", "SQL", "Pentaho PDI", "Microsoft Graph API", "Office 365 APIs", "Power BI", "Power Platform"],
  },
  {
    id: "aitoxr-auto",
    org: "AiToXr",
    role: "Data Engineer",
    location: "Chandigarh, India",
    period: "Jul 2023 – Jan 2025",
    current: false,
    highlights: [
      "Designed scalable data ingestion pipelines using Python and Azure VMs to extract structured data from 160+ global web sources.",
      "Built automated ETL pipelines using Azure Data Factory and Azure Blob Storage for batch data processing.",
      "Led a team of 3 to develop a production-grade data pipeline system with validation, error-handling, and operational reliability mechanisms.",
      "Used Azure Blob, containers, Azure VMs, Data Factory, SQL, and Python ETL patterns for high-volume acquisition and transformation.",
    ],
    impact: [
      "Reduced manual intervention by 95% through automated Azure/Python pipelines.",
      "Supported 95% uptime for production-grade data pipeline workflows.",
      "Improved global data coverage and reliability across 160+ source sites.",
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
    role: "Data Engineer Intern",
    location: "United States (remote)",
    period: "Apr 2023 – Jun 2023",
    current: false,
    highlights: [
      "Developed a Python-based extraction pipeline using BeautifulSoup and Requests to process 100,000+ real-estate records.",
      "Performed data cleaning, transformation, structuring, validation, and preprocessing to prepare datasets for analytics and reporting.",
      "Applied data-quality thinking from responsible AI/data workflows: better datasets become the lever for better downstream outcomes.",
    ],
    impact: [
      "Improved data accuracy to 88% through validation and preprocessing.",
      "Contributed to a $5,000 revenue impact narrative from structured real-estate data acquisition.",
    ],
    tools: ["Python", "BeautifulSoup", "Requests", "Data cleaning", "Validation", "Analytics datasets"],
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
  "PySpark",
  "Spark SQL",
  "Apache Spark",
  "Databricks",
  "Delta Lake",
  "Apache Airflow",
  "ETL/ELT pipelines",
  "Batch processing",
  "Incremental loading",
  "CDC",
  "SCD Type 2",
  "Medallion Architecture",
  "Idempotent pipelines",
  "Data validation",
  "Data modeling",
  "SQL Server",
  "Azure SQL Database",
  "Snowflake",
  "MongoDB",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "OpenCV",
  "NLP & LLMs",
  "RAG",
  "Power BI",
  "Power Automate",
  "Power Apps",
  "Pentaho Data Integration",
  "Microsoft Graph API",
  "Office 365 APIs",
  "Azure Data Factory",
  "Azure Blob",
  "Azure Data Lake Storage",
  "Azure VMs",
  "Docker / containers",
  "Shell/Bash basics",
  "Git",
  "VS Code",
  "Jira",
  "Logging & observability",
  "GenAI governance",
];

export const ABOUT = {
  summary:
    "Data Engineer, Data Scientist, AI/ML Automation Engineer, and Power Platform Expert focused on digital transformation. I turn raw operational data into cleaned datasets, reliable pipelines, dashboard-ready models, workflow automations, and AI-assisted systems that improve how businesses run.",
  vision:
    "Whether I am building a Python/PySpark pipeline, designing Medallion layers, optimizing SQL, shipping a Power App, automating Microsoft 365 with Graph API, or training an ML model, I connect technical delivery to business outcomes: less manual work, faster reporting, cleaner data, and systems people can adopt.",
  missionBullets: [
    "Data engineering — ETL/ELT pipelines, PySpark, Spark SQL, Delta Lake, Airflow, Azure Data Factory, Blob/ADLS, batch processing, validation, and monitoring.",
    "Warehouse concepts — Medallion Architecture, CDC, SCD Type 2, incremental loading, idempotent pipelines, SQL modeling, and reporting-ready serving layers.",
    "Python automation — scheduled jobs, API extraction, data refresh, scraping, validation, logging, reporting, and handover-ready scripts.",
    "Power Platform — Power Apps, Power Automate, Power BI, approvals, forms, workflow digitization, and low-code business tools.",
    "Microsoft 365 automation — Graph API, SharePoint lists/libraries, email workflows, user/process data, and governed collaboration systems.",
    "Data science & analytics — cleaning, preprocessing, SQL, dashboards, NLP, ML prototypes, RAG, and stakeholder-ready insight stories.",
  ],
  achievementsHighlight: [
    "Zomato-style NLP rating model (public repo: ~85% on 20K+ reviews per README) with sentiment-ready storytelling.",
    "Real-estate automation for 100K+ listings contributing to $5K+ revenue narrative.",
    "Microsoft Graph API task-data ETL for 200+ employees, reducing manual effort by 90% and improving reporting accuracy by 85%.",
    "Azure/Python ingestion across 160+ global sources with 95% manual intervention reduction and 95% uptime.",
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
      title: "Data Science",
      body: "Models and dashboards grounded in clean data, honest metrics, and business questions that survive outside notebooks.",
    },
    {
      title: "Automation Engineering",
      body: "Repeatable work becomes Python, ADF pipelines, Graph API integrations, or governed Power Platform flows with logging and handover baked in.",
    },
    {
      title: "Digital Transformation",
      body: "Operations become traceable systems: SQL-backed apps, dashboards, approval flows, SharePoint automation, and executive-ready reporting.",
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
    degree: "Bachelor of Engineering · Electrical Engineering",
    period: "Jul 2021 – May 2024",
    note: "Student Placement Representative (May 2022 – May 2024).",
  },
  {
    school: "Sant Longowal Institute of Engineering & Technology (SLIET)",
    degree: "Diploma · Electrical Engineering",
    period: "Jul 2018 – May 2021",
    note: "",
  },
  {
    school: "Resonance International School",
    degree: "Matriculation",
    period: "Mar 2017 – Mar 2018",
    note: "Muzaffarpur, Bihar.",
  },
];

export const CERTIFICATIONS = [
  "AI-900: Microsoft Azure AI Fundamentals — Microsoft",
  "Beginner to Advanced MLOps on GCP (CI/CD, Jenkins, Kubernetes) — Udemy",
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
