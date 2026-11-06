/** Skills and approach. Source: Resume.pdf. */

export const skillGroups = [
  {
    title: "AI & ML",
    items: ["OpenAI API (GPT-4o)", "Azure OpenAI", "RAG", "LangChain", "LangGraph", "LLM agents", "MCP", "Azure AI Document Intelligence", "PyTorch", "scikit-learn"],
  },
  {
    title: "Frontend",
    items: ["TypeScript", "JavaScript (ES6+)", "React", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Canvas & 2D graphics",
    items: ["HTML5 Canvas", "Three.js", "Konva.js / react-konva", "Fabric.js", "D3.js", "PDF.js"],
  },
  {
    title: "Backend & data",
    items: ["Python", "FastAPI", "Django", "Flask", "Go", "Node.js", "REST APIs", "PostgreSQL", "pgvector", "MySQL", "Elasticsearch", "pandas", "Celery"],
  },
  {
    title: "Cloud & delivery",
    items: ["Docker", "AWS", "Azure", "Entra ID SSO"],
  },
] as const;

export const approachSteps = [
  {
    title: "Understand the problem",
    body: "I start with the people who will use the system and the decisions they make with it, then work back to the data and architecture.",
    practice: "Search tools organised around how bid teams look for opportunities, awards and vendors.",
  },
  {
    title: "Design for the long run",
    body: "I pick well-understood infrastructure and split the system into separate services only where that pays for itself.",
    practice: "Vectors in PostgreSQL with pgvector, and background work in Celery rather than the web app.",
  },
  {
    title: "Build maintainable software",
    body: "Types end to end, from TypeScript front ends to FastAPI services and schema-checked LLM outputs, so changes stay safe.",
    practice: "TypeScript 5 front ends and structured outputs for document extraction.",
  },
  {
    title: "Make AI verifiable",
    body: "Citations, review steps and correction tools are part of the design from the start. People need to be able to check what the model did.",
    practice: "Page-cited answers and a human review step for extracted fields.",
  },
  {
    title: "Test and optimise",
    body: "Rendering and data choices made for real volumes, not demo data.",
    practice: "Canvas overlays on PDF.js pages, and Elasticsearch for search across federal data.",
  },
  {
    title: "Ship and keep improving",
    body: "Automate the jobs that keep data fresh and consistent, then keep improving what people use.",
    practice: "Nightly federal data pipelines and scheduled stock reconciliation.",
  },
] as const;
