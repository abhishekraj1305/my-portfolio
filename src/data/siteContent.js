/** Central content — replace email if needed */
export const SITE = {
  name: "Abhishek Raj",
  title: "Automation Developer | Data Scientist | Power Platform Expert",
  tagline: "I ship automation, data systems, and enterprise workflows.",
  linkedIn: "https://www.linkedin.com/in/abhishekraj1305/",
  email: "mailto:abhishekraj1305@gmail.com",
  emailDisplay: "abhishekraj1305@gmail.com",
};

export const PLACEHOLDERS = {
  profile: "https://via.placeholder.com/300x300/0f172a/38bdf8?text=Profile",
  project: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=Project",
  art: "https://via.placeholder.com/400x400/0f172a/64748b?text=Art",
};

export const HOME_INTRO = {
  short:
    "Digitization Executive in the automobile industry with 1.5+ years turning manual processes into reliable systems. I work where Python, SQL, Microsoft Graph, Power Platform, and dashboards meet real operations.",
};

export const SKILLS_PREVIEW = [
  "Python automation & scripting",
  "SQL & data modeling",
  "Microsoft Graph API",
  "Power Platform (Power Automate, Apps)",
  "Power BI & reporting stacks",
  "Excel / VBA bridges to modern APIs",
  "Enterprise task & review workflows",
];

export const PROJECTS = [
  {
    slug: "dwm",
    title: "DWM Automation System",
    summary:
      "End-to-end Daily Work Management automation for reviewers, owners, and status tracking across large operational teams.",
    problem:
      "Task ownership and review cycles lived in spreadsheets and ad hoc follow-ups, slowing closure and blinding leadership to backlog health.",
    solution:
      "Designed Python-driven pipelines with Excel and Graph API touchpoints, structured review queues, and clear handoffs between owners and approvers.",
    impact:
      "Fewer dropped tasks, faster review cycles, and a single narrative for what is pending versus done—without adding another heavy ERP module.",
    stack: ["Python", "Excel automation", "Microsoft Graph API", "Review workflows"],
    features: [
      "Pending vs completed visibility by owner",
      "Reviewer routing and escalation paths",
      "Status narratives leadership can scan weekly",
    ],
    image: PLACEHOLDERS.project + "&t=DWM",
  },
  {
    slug: "graph",
    title: "Microsoft Graph API Automation",
    summary:
      "API-first automations across users, mail, files, and lists so the org spends time on decisions—not copy-paste.",
    problem:
      "Teams repeated the same Microsoft 365 actions manually: file moves, mail triggers, list updates, and user-driven checks that did not scale.",
    solution:
      "Built Graph-backed scripts and flows that encapsulate permissions, batch safely, and log outcomes for support and audits.",
    impact:
      "Repeatable operations at volume, less human error in M365 hygiene, and codified patterns the next automation can extend.",
    stack: ["Microsoft Graph API", "Python", "Power Automate", "REST patterns"],
    features: [
      "Task and calendar-aware integrations",
      "OneDrive / Excel connectivity",
      "Email-triggered and scheduled jobs",
    ],
    image: PLACEHOLDERS.project + "&t=Graph",
  },
  {
    slug: "dashboards",
    title: "Dashboard & Reporting Systems",
    summary:
      "Decision surfaces that connect operational data to executives without the spreadsheet chaos.",
    problem:
      "KPIs were fragmented across tools; meetings started with data arguments instead of decisions.",
    solution:
      "Delivered dashboards in Power BI, Dash, and hybrid Excel stacks, with clean grain definitions and refresh discipline.",
    impact:
      "Leadership could steer weekly ops from one place; teams stopped rebuilding the same cut of numbers for every review.",
    stack: ["Power BI", "Python (Dash)", "SQL", "Excel", "Power Platform"],
    features: [
      "Role-appropriate views (exec vs operator)",
      "Refresh and lineage discipline",
      "Drill paths for root-cause conversations",
    ],
    image: PLACEHOLDERS.project + "&t=Dash",
  },
];

export const EXPERIENCE = {
  role: "Digitization Executive",
  org: "Automobile industry · Digital transformation",
  tenure: "1.5+ years (professional)",
  narrative:
    "I sit at the intersection of operations and engineering: translating how work actually happens into systems that run without heroics.",
  responsibilities: [
    "Own and extend automation programs that replace manual tracking, reporting, and handoffs in production-adjacent workflows.",
    "Partner with SMEs and IT to wire Python, SQL, Graph, and Power Platform into governance-friendly patterns.",
    "Maintain dashboards and operational views so leadership sees lagging and leading signals, not stale exports.",
  ],
  achievements: [
    "Reduced cycle time on review-heavy workstreams by tightening ownership and API-driven status updates.",
    "Made Microsoft 365-native automation a default path instead of one-off scripts buried on shared drives.",
    "Improved reporting trust by standardizing metrics definitions before visualization—not after.",
  ],
  tools: [
    "Python",
    "SQL",
    "Microsoft Graph API",
    "Power Automate",
    "Power Apps",
    "Power BI",
    "Excel / VBA",
    "Azure / Microsoft 365 ecosystem",
  ],
};

export const ABOUT = {
  summary:
    "I build systems that survive Monday morning—not demo slides. My work spans automation, data, and enterprise tooling in an industry where downtime and ambiguity are expensive. I prefer small, composable services and clear ownership over brittle monoliths nobody dares to touch.",
  vision:
    "Automation is a product discipline: observe the process, encode the rules, measure the outcome, iterate with the people who run it.",
  journey: [
    {
      phase: "Foundation in data & scripting",
      text: "Started from serious SQL and Python practice—not tutorials for badges—because transformations live or die on data quality and edge cases.",
    },
    {
      phase: "Enterprise integration",
      text: "Moved into Graph API and Power Platform where auth, throttling, and policy are first-class constraints, not afterthoughts.",
    },
    {
      phase: "Product mindset in ops",
      text: "Now frame work as measurable outcomes: less manual time, clearer accountability, exec-ready reporting without spreadsheet archaeology.",
    },
  ],
  pillars: [
    {
      title: "Automation",
      body: "Repeatable jobs become code and governed flows. Humans approve exceptions; machines handle the bulk.",
    },
    {
      title: "Data",
      body: "Grain, keys, and refresh honesty beat a pretty chart. I align metrics before building the viz.",
    },
    {
      title: "Systems",
      body: "Documentation, logging, and handoff so the next engineer—or future me—can extend without reverse-engineering.",
    },
  ],
  philosophy: [
    "Discipline beats motivation when systems run 24/7.",
    "Prefer explicit state over tribal knowledge.",
    "Ship, measure, tighten the loop—growth is iterative engineering on real feedback.",
  ],
};

export const CREATIVE_ITEMS = [
  { id: "1", title: "Urban sketch study", medium: "Sketch", src: `${PLACEHOLDERS.art}&n=1` },
  { id: "2", title: "Form & line exercise", medium: "Scribble", src: `${PLACEHOLDERS.art}&n=2` },
  { id: "3", title: "Character gesture", medium: "Digital (Procreate)", src: `${PLACEHOLDERS.art}&n=3` },
  { id: "4", title: "Light & shadow block-in", medium: "Sketch", src: `${PLACEHOLDERS.art}&n=4` },
  { id: "5", title: "Abstract rhythm", medium: "Scribble", src: `${PLACEHOLDERS.art}&n=5` },
  { id: "6", title: "Surface study", medium: "Digital (Procreate)", src: `${PLACEHOLDERS.art}&n=6` },
  { id: "7", title: "Notebook exploration", medium: "Sketch", src: `${PLACEHOLDERS.art}&n=7` },
  { id: "8", title: "Mixed mark making", medium: "Scribble", src: `${PLACEHOLDERS.art}&n=8` },
];
