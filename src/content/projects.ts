/**
 * Case studies. Every capability and technology is taken from Resume.pdf.
 * Visuals are illustrative diagrams, not screenshots of production systems.
 * `card` holds the shorter copy used on project cards.
 */

export type ProjectVisual = "qa" | "workbench" | "procurement" | "operations";
export type CardArt = "document";

export type Project = {
  slug: string;
  title: string;
  company: string;
  period: string;
  role: string;
  visual: ProjectVisual;
  summary: string;
  tags: string[];
  problem: string;
  solution: string[];
  decisions: { title: string; body: string }[];
  responsibilities: string[];
  stack: string[];
  featured: boolean;
  /** `image` comes from the approved design with the logo baked in; otherwise the drawn `art` is used. */
  card: { title: string; summary: string; tags: string[] } & ({ image: string } | { art: CardArt });
};

export const projects: Project[] = [
  {
    slug: "cited-document-qa",
    title: "Document Q&A with page-level citations",
    company: "Jaburg Wilk",
    period: "2024 – 2026",
    role: "AI Full Stack Developer",
    visual: "qa",
    summary:
      "An internal assistant that answers questions about a law firm's documents and cites every answer to the pages it came from.",
    tags: ["RAG", "GPT-4o", "pgvector", "FastAPI"],
    problem:
      "Legal work runs on long documents, and an answer is only useful if someone can confirm it quickly. A chat assistant that returns fluent text without sources leaves the reader to search the document anyway, which defeats the purpose.",
    solution: [
      "I built a retrieval-augmented generation (RAG) service in Python with FastAPI. Documents are split into passages, embedded, and stored in PostgreSQL with pgvector. For each question the service retrieves the most relevant passages and passes them to GPT-4o as the context for its answer.",
      "Every answer carries citations back to its source pages, so a reader can open the exact page and check the wording before relying on it.",
      "The assistant is part of the firm's internal document tools, whose Next.js and TypeScript front end I shipped with Entra ID single sign-on.",
    ],
    decisions: [
      {
        title: "Citations are part of the answer",
        body: "Each answer is tied to the pages it was drawn from. Being able to check the answer matters as much as the answer itself.",
      },
      {
        title: "Vectors live in PostgreSQL",
        body: "pgvector keeps embeddings next to document records and metadata in one database, so there is no separate vector store to run and keep in sync.",
      },
      {
        title: "Inside the firm's sign-in",
        body: "Access goes through Entra ID single sign-on, which suits a tool that handles confidential documents.",
      },
    ],
    responsibilities: [
      "Built the RAG service: ingestion, embeddings, retrieval and answer generation",
      "Implemented page-level source citations",
      "Shipped the Next.js / TypeScript front end with Entra ID SSO",
    ],
    stack: ["Python 3.12", "FastAPI", "PostgreSQL 16", "pgvector", "GPT-4o", "Next.js", "TypeScript", "Entra ID", "Azure"],
    featured: true,
    card: {
      title: "Legal Document Intelligence",
      summary: "Internal legal AI assistant with source-cited answers and a canvas-based document editor.",
      tags: ["LLM / RAG", "PDF / Canvas", "Next.js"],
      image: "/projects/legal-document-intelligence.webp",
    },
  },
  {
    slug: "extraction-review-workbench",
    title: "AI extraction and review workbench",
    company: "Jaburg Wilk",
    period: "2024 – 2026",
    role: "AI Full Stack Developer",
    visual: "workbench",
    summary:
      "Pulls clauses, parties and key dates out of scanned documents, then gives reviewers a canvas editor to check and correct every field.",
    tags: ["Document AI", "Structured outputs", "react-konva", "PDF.js"],
    problem:
      "Scanned agreements hold the details people need (parties, key dates, specific clauses), but entering them by hand is slow, and fully automatic extraction can't be trusted blindly. The tool needed to do the first pass automatically and make checking it fast.",
    solution: [
      "Scanned documents go through Azure AI Document Intelligence for text and layout, then an LLM with structured outputs extracts clauses, parties and key dates into a fixed schema rather than free text.",
      "Results go to a human review step. I built the viewer for it: PDF.js renders the page, and an HTML5 Canvas overlay built with react-konva shows each extraction as a box on the page.",
      "Reviewers can draw, move and resize boxes, with zoom, snapping and undo/redo, so correcting the AI's work is a quick edit rather than re-typing.",
    ],
    decisions: [
      {
        title: "Structured outputs over free text",
        body: "Extracted data follows a defined schema, so downstream code receives predictable fields instead of parsing prose.",
      },
      {
        title: "Review is a built-in step",
        body: "Extraction feeds a review step instead of going straight into records, so a person confirms what the model found.",
      },
      {
        title: "Canvas overlay on PDF.js",
        body: "Keeping the document rendering (PDF.js) separate from the interactive layer (react-konva) gives smooth drawing, snapping and undo/redo without touching the source PDF.",
      },
    ],
    responsibilities: [
      "Built the extraction pipeline with Azure AI Document Intelligence and structured outputs",
      "Built the PDF.js viewer and react-konva annotation layer",
      "Implemented box editing with zoom, snapping and undo/redo",
    ],
    stack: [
      "Azure AI Document Intelligence",
      "LLM structured outputs",
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "react-konva",
      "PDF.js",
    ],
    featured: false,
    card: {
      title: "AI Extraction & Review Workbench",
      summary: "Clauses, parties and key dates pulled from scanned documents, with a canvas editor for human review.",
      tags: ["Document AI", "react-konva", "PDF.js"],
      art: "document",
    },
  },
  {
    slug: "procurement-intelligence",
    title: "Federal procurement intelligence",
    company: "rTurner Consulting",
    period: "2021 – 2024",
    role: "Full Stack Engineer",
    visual: "procurement",
    summary:
      "Search tools and bid analytics built on nightly loads of US federal contracting data, with ML classifiers that tag opportunities by service category.",
    tags: ["Elasticsearch", "Django", "ETL", "scikit-learn"],
    problem:
      "Federal contracting data is public but spread across several large systems with different formats. Bid teams needed one place to search opportunities, awards and vendors, plus pricing and market analysis they could use in proposals.",
    solution: [
      "I wrote Python ETL pipelines with pandas and Celery that loaded FPDS-NG, USAspending.gov and FedBizOpps data every night.",
      "I built web applications on Django, PostgreSQL, Elasticsearch 6 and React 16 for searching federal opportunities, contract awards and vendors.",
      "I automated pricing models and market reports used in bids and proposals, with interactive D3.js charts, and trained scikit-learn classifiers that tag opportunities by service category.",
    ],
    decisions: [
      {
        title: "Elasticsearch for search, PostgreSQL for records",
        body: "Full-text and filtered search runs on Elasticsearch, while PostgreSQL remains the system of record.",
      },
      {
        title: "Nightly, scheduled pipelines",
        body: "Celery-driven ETL refreshes every source each night, so searches and reports work from current data.",
      },
      {
        title: "Classification for discovery",
        body: "scikit-learn classifiers tag opportunities by service category, so users can browse by what they actually sell.",
      },
    ],
    responsibilities: [
      "Built ETL pipelines for FPDS-NG, USAspending.gov and FedBizOpps",
      "Built search applications with Django, Elasticsearch and React",
      "Automated pricing models, market reports and D3.js charts",
      "Trained classifiers for service-category tagging",
    ],
    stack: ["Python", "Django", "pandas", "Celery", "PostgreSQL 10", "Elasticsearch 6", "React 16", "D3.js", "scikit-learn", "Docker", "AWS"],
    featured: true,
    card: {
      title: "Federal Procurement Data Tools",
      summary: "Search, analyze, and track federal opportunities, contract awards, and vendors.",
      tags: ["Django", "ETL / Data", "D3.js"],
      image: "/projects/federal-procurement-data-tools.webp",
    },
  },
  {
    slug: "pharmaceutical-operations-platform",
    title: "Pharmaceutical operations platform",
    company: "Liber Pharmaceuticals",
    period: "2018 – 2021",
    role: "Full Stack Developer",
    visual: "operations",
    summary:
      "Internal web tools for product inventory, supplier orders and distribution records, with reconciliation workflows and role-based dashboards.",
    tags: ["Django", "React", "pandas", "Celery"],
    problem:
      "A therapeutic-products business has to know where every product is: what is in stock, what has been ordered from suppliers and what has gone out to distribution. Those records need to agree with each other, and changes to them need to be traceable.",
    solution: [
      "I developed internal web tools to track product inventory, supplier orders and distribution records using Django, PostgreSQL and React.",
      "I built Python data-import and reporting workflows with pandas and Celery that reconcile stock movements and generate operational summaries.",
      "I created role-based dashboards for product records, fulfillment status and document review, backed by REST APIs with audit-friendly change histories.",
    ],
    decisions: [
      {
        title: "One system of record",
        body: "Inventory, supplier orders and distribution records live in PostgreSQL behind Django, so every tool reads from the same data.",
      },
      {
        title: "Scheduled reconciliation",
        body: "Celery runs the pandas import and reconciliation jobs, so stock movements are checked and summarised without manual work.",
      },
      {
        title: "Audit-friendly by default",
        body: "Records keep a change history and dashboards are role-based, so people see what they need and changes can be traced.",
      },
    ],
    responsibilities: [
      "Built inventory, supplier-order and distribution tools",
      "Wrote data-import and reconciliation workflows",
      "Built role-based dashboards and REST APIs",
      "Added change histories for audit",
    ],
    stack: ["Python", "Django", "React", "JavaScript", "PostgreSQL", "pandas", "Celery", "REST APIs", "Docker", "AWS"],
    featured: true,
    card: {
      title: "Pharmaceutical Operations Platform",
      summary: "Inventory, supplier orders, and distribution tools with reporting and dashboards.",
      tags: ["Django", "React", "Reporting"],
      image: "/projects/pharmaceutical-operations-platform.webp",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
