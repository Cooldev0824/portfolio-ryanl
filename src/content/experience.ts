/** Career history. Source: Resume.pdf. */

export type Role = {
  company: string;
  url: string | null; // null: shown without a link
  mark: "jaburg" | "rturner" | "liber";
  title: string;
  period: string;
  context: string;
  summary: string;
  highlights: string[];
  brief: string[]; // three-line version for the home page timeline
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Jaburg Wilk",
    url: "https://cms.jaburgwilk.com/",
    mark: "jaburg",
    title: "AI Full Stack Developer",
    period: "2024 – 2026",
    context: "Law firm of about 80 people · Phoenix, Arizona",
    summary:
      "Built the firm's internal AI document tools end to end: retrieval, extraction, the review interface and the front end people sign in to.",
    highlights: [
      "Built an internal document Q&A assistant with retrieval-augmented generation (FastAPI, pgvector, GPT-4o), with every answer cited to its source pages.",
      "Built a document viewer with PDF.js and an HTML5 Canvas overlay (react-konva) where reviewers draw, move and resize extraction boxes, with zoom, snapping and undo/redo.",
      "Extracted clauses, parties and key dates from scanned documents using Azure AI Document Intelligence and structured outputs, with a human review step.",
      "Shipped the Next.js and TypeScript front end with Entra ID single sign-on, and agent workflows with LangGraph and MCP.",
    ],
    brief: [
      "Built an internal document Q&A assistant with RAG (FastAPI, pgvector, GPT-4o).",
      "Built a document viewer with PDF.js and a Canvas overlay (react-konva).",
      "Extracted clauses, parties, and key dates using Azure AI Document Intelligence.",
    ],
    stack: [
      "Python 3.12",
      "FastAPI",
      "Next.js 14/15",
      "React 18/19",
      "TypeScript 5",
      "react-konva",
      "PostgreSQL 16",
      "pgvector",
      "GPT-4o",
      "LangGraph",
      "Azure",
    ],
  },
  {
    company: "rTurner Consulting",
    url: "https://www.rturner.net/",
    mark: "rturner",
    title: "Full Stack Engineer",
    period: "2021 – 2024",
    context: "Government-contracting consulting firm with federal procurement data products",
    summary:
      "Built the data products behind the firm's procurement work, from nightly federal data pipelines to search tools and bid analytics.",
    highlights: [
      "Built web applications for searching federal opportunities, contract awards and vendors with Django, PostgreSQL, Elasticsearch 6 and React 16.",
      "Wrote Python ETL pipelines (pandas, Celery) loading FPDS-NG, USAspending.gov and FedBizOpps data nightly.",
      "Automated pricing models and market reports used in bids and proposals, with interactive D3.js charts and scikit-learn classifiers that tag opportunities by service category.",
    ],
    brief: [
      "Built web applications for federal opportunities, contract awards and vendors.",
      "Developed Python ETL pipelines (pandas, Celery) for FPDS-NG and USAspending.gov.",
      "Automated pricing models and market reports with D3.js and scikit-learn.",
    ],
    stack: [
      "Python 3.6/3.7",
      "Django 1.11–2.2",
      "React 16",
      "PostgreSQL 10",
      "Elasticsearch 6",
      "Celery",
      "scikit-learn",
      "D3.js",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "Liber Pharmaceuticals",
    url: "https://liber.com.au/",
    mark: "liber",
    title: "Full Stack Developer",
    period: "2018 – 2021",
    context: "Australian therapeutic-products business (began as Nicovape)",
    summary:
      "Built the internal tools the business ran on: inventory, supplier orders, distribution records and the reporting behind them.",
    highlights: [
      "Developed internal web tools to track product inventory, supplier orders and distribution records using Django, PostgreSQL and React.",
      "Built Python data-import and reporting workflows (pandas, Celery) to reconcile stock movements and generate operational summaries.",
      "Created role-based dashboards for product records, fulfillment status and document review, with REST APIs and audit-friendly change histories.",
    ],
    brief: [
      "Developed internal tools for inventory, supplier orders, and distribution records.",
      "Built Python data-import and reporting workflows (pandas, Celery).",
      "Created role-based dashboards with REST APIs and audit-friendly change histories.",
    ],
    stack: [
      "Python 3.6–3.9",
      "Django 2.2/3.2",
      "React 16/17",
      "JavaScript",
      "PostgreSQL 10–12",
      "pandas",
      "Celery",
      "REST APIs",
      "Docker",
      "AWS",
    ],
  },
];
