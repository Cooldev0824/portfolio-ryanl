/**
 * Project cards. Every capability and technology is taken from Ryan's resume.
 * Each card opens the company's website (from content/experience.ts) in a new tab.
 */

export type CardArt = "document";

export type Project = {
  slug: string;
  company: string;
  period: string;
  featured: boolean;
  /** `image` comes from the approved design with the logo baked in; otherwise the drawn `art` is used. */
  card: { title: string; summary: string; tags: string[] } & ({ image: string } | { art: CardArt });
};

export const projects: Project[] = [
  {
    slug: "cited-document-qa",
    company: "Jaburg Wilk",
    period: "2024 – 2026",
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
    company: "Jaburg Wilk",
    period: "2024 – 2026",
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
    company: "rTurner Consulting",
    period: "2021 – 2024",
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
    company: "Liber Pharmaceuticals",
    period: "2018 – 2021",
    featured: true,
    card: {
      title: "Pharmaceutical Operations Platform",
      summary: "Inventory, supplier orders, and distribution tools with reporting and dashboards.",
      tags: ["Django", "React", "Reporting"],
      image: "/projects/pharmaceutical-operations-platform.webp",
    },
  },
];
