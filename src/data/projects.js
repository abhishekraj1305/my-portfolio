import { PROJECTS as LEGACY_PROJECTS } from "./siteContent";

const proofBySlug = {
  "medallion-pyspark-pipeline": {
    role: "Designed the warehouse-style pipeline structure, PySpark transformations, incremental loading pattern, SCD Type 2 history handling, validation checks, and Airflow orchestration story.",
    workflow:
      "Raw source data lands in Bronze, cleaned and standardized records move through Silver, and analytics-ready Gold outputs preserve history with SCD Type 2 logic and quality logs.",
    proof: "Portfolio proof: architecture and implementation narrative based on the new Data Engineer profile; repository link should point to public code when published.",
    learned: "A data pipeline becomes credible when it explains storage layers, change capture, repeatability, validation, and failure handling.",
  },
  "azure-batch-data-pipeline": {
    role: "Designed the Azure batch ingestion, transformation, validation, and serving workflow for structured reporting data.",
    workflow:
      "Azure Data Factory orchestrates batch movement into Blob/ADLS, SQL Server handles structured transformations, and validated outputs feed reporting and Power BI-style consumption.",
    proof: "Portfolio proof: Azure Data Factory, Blob/ADLS, SQL Server, batch scheduling, and validation pattern from the Data Engineer profile.",
    learned: "For enterprise reporting, reliability and auditability matter as much as the dashboard users eventually see.",
  },
  "graph-task-data-etl": {
    role: "Built the Python, SQL, PDI, and Microsoft Graph API workflow that extracted and consolidated task data from Microsoft 365 systems for operational reporting.",
    workflow:
      "Scheduled jobs pull Planner, To-Do, OneDrive, and Excel data through Graph/Office APIs, validate and consolidate it, then expose task and overdue-status metrics for dashboards.",
    proof: "Experience proof: Jay Switches workflow for 200+ employees; reported impact includes 90% manual effort reduction, 85% reporting accuracy improvement, and 30% better task closure.",
    learned: "Operational data engineering succeeds when API integration, validation, alerting, and business adoption are designed together.",
  },
  "global-source-ingestion": {
    role: "Designed and led ingestion workflows for high-volume global source extraction using Python and Azure infrastructure.",
    workflow:
      "Python extraction jobs on Azure VMs collect structured data from 160+ global sources, land batches in Azure Blob, and use validation/error handling before downstream processing.",
    proof: "Experience proof: AiToXr pipeline work; reported impact includes 160+ sources, 95% manual intervention reduction, and 95% uptime.",
    learned: "High-volume extraction needs source-specific resilience, observability, and clean handoff into storage layers.",
  },
  "binance-futures-bot": {
    role: "Built the Python order-flow toolkit, Streamlit inspection UI, validation surface, logging approach, and testnet-first safety framing.",
    workflow:
      "CLI and Streamlit UI call a signed Binance Futures testnet client, validate order parameters, execute supported order types, and persist logs for review.",
    proof: "Repo proof: public GitHub repository with API signing, UI, logging, validation, and testnet execution paths.",
    learned: "Trading demos are credibility traps unless safety, observability, and testnet boundaries are explicit.",
  },
  "mlops-pipeline": {
    role: "Structured the training/evaluation workflow so experiments produce traceable outputs instead of one-off notebook results.",
    workflow:
      "Data preparation, training, metrics output, and artifact logging are separated so another engineer can rerun and compare results.",
    proof: "Repo proof: public MLOps lab repository focused on reproducibility, metrics, and deployment-oriented organization.",
    learned: "A modest model pipeline becomes much more valuable when artifacts and logs make the result defensible.",
  },
  "ocr-react": {
    role: "Connected document extraction logic to a review/export front end, shaping the product workflow from image input to structured rows.",
    workflow:
      "Scanned bills move through OCR/OpenCV extraction, become structured fields, then land in a React dashboard for review and CSV export.",
    proof: "Repo proof: public OCR + React repository showing both extraction and front-end review surfaces.",
    learned: "Document AI is mostly a workflow problem: confidence, correction, export, and auditability matter as much as OCR.",
  },
  "nlp-zomato-ratings": {
    role: "Built and documented an NLP modeling workflow that maps review text to rating prediction with evaluation narrative.",
    workflow:
      "Review text is cleaned, vectorized, modeled, and evaluated so the repo tells a complete text-to-metric story.",
    proof: "README claim: public repo cites about 85% accuracy on 20K+ reviews; treat as project evidence, not production validation.",
    learned: "Accuracy claims need context; this project is strongest when framed as NLP workflow proof, not a universal model benchmark.",
  },
  "fraud-detection-ml": {
    role: "Modeled a risk-style classification use case and framed evaluation around imbalanced fraud labels rather than vanity accuracy.",
    workflow:
      "Tabular transaction-style data is explored, cleaned, modeled, and evaluated with attention to fraud-class constraints.",
    proof: "Repo proof: public fraud detection repositories showing classification workflow and finance-oriented framing.",
    learned: "For risk domains, honest metrics and class imbalance discussion are the hiring signal.",
  },
  "real-estate-scraping": {
    role: "Built scraping automation patterns for fragmented property data collection and normalization.",
    workflow:
      "Site-specific scrapers collect listings, parse domain fields, normalize outputs, and prepare structured data for market or lead workflows.",
    proof: "Repo proof: public Housing.com and Sobha scraper repositories; impact claims should be tied to internal or narrative context.",
    learned: "Scraping work needs defensive parsing, data hygiene, and refresh discipline to be more than a one-off script.",
  },
};

function enrich(project) {
  const proof = proofBySlug[project.slug] || {};
  const isLearningArchive = [
    "portfolio-legacy",
    "abhishek-portfolio-ts",
    "python-exercises",
    "data-science-modules",
    "data-analysis-projects",
    "ml-projects-notebooks",
  ].includes(project.slug);

  return {
    ...project,
    role: proof.role || "Owned the portfolio framing, implementation review, and technical storytelling for this public project.",
    workflow: proof.workflow || project.solution,
    proof: proof.proof || "Portfolio narrative: public repository linked for source review; production impact should be verified in interview context.",
    learned: proof.learned || "The project is useful as a focused proof point when paired with clear constraints, repo evidence, and honest limitations.",
    category: isLearningArchive ? "learning" : "case-study",
    alt: `${project.title} technical project visual for Abhishek Raj portfolio`,
  };
}

export const PROJECTS = LEGACY_PROJECTS.map(enrich);
export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.highlight).slice(0, 4);
export const CASE_STUDY_PROJECTS = PROJECTS.filter((project) => project.category === "case-study").slice(0, 8);
export const LEARNING_ARCHIVE_PROJECTS = PROJECTS.filter((project) => project.category === "learning");
