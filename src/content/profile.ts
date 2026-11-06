/**
 * Core profile content. Facts come from Ryan's resume (public/Ryan-Lin-Resume.pdf)
 * and the approved design.
 *
 * Links set to `null` are hidden across the site rather than rendered as
 * placeholders. Fill them in to make them appear.
 */

export type ProfileLink = {
  label: string;
  href: string | null;
};

export const profile = {
  name: "Ryan Lin",
  initials: "RL",
  title: "Software Engineer",
  role: "AI Full-Stack Software Engineer",
  photo: { src: "/ryan-lin-portrait.webp", alt: "Portrait of Ryan Lin" },
  /** Drop the designed portrait (navy backdrop + gold ring) here to use it in the hero. */
  designPhotoFiles: ["ryan-lin-design.webp", "ryan-lin-design.png", "ryan-lin-design.jpg"],
  /** Full-length photo for the About page (4:5). */
  aboutPhotoFiles: ["ryan-lin-about.webp", "ryan-lin-about.jpg", "ryan-lin-about.png"],
  eyebrow: ["AI", "Full-Stack", "Cloud", "Data"],
  headline: {
    lead: "Building AI-powered software that delivers",
    lines: ["Building AI-powered", "software that delivers"], // line breaks as designed
    emphasis: "real business impact.",
  },
  intro:
    "Full-stack software engineer with 8+ years of experience designing and building scalable, AI-driven web platforms — from LLM document extraction and data tools to Kubernetes optimization.",
  description:
    "Ryan Lin is a full-stack software engineer with 8+ years of experience building AI-driven web platforms: RAG and LLM document extraction, data tools and Kubernetes optimization.",
  siteUrl: "https://ryanlin.dev", // Pending: replace with the real domain.
  links: {
    email: { label: "Email", href: "Lyanli34@gmail.com" } as ProfileLink,
    linkedin: { label: "LinkedIn", href: null } as ProfileLink,
    github: { label: "GitHub", href: null } as ProfileLink,
  },
  currentlyBuilding: ["AI Document Intelligence", "Scalable Web Platforms", "Kubernetes Solutions", "Data & Automation Tools"],
  stats: [
    { icon: "code", value: "8+", label: "Years of Experience" },
    { icon: "layers", value: "3", label: "Core Companies" },
    { icon: "box", value: "10+", label: "Production Systems" },
    { icon: "brain", value: "AI", label: "LLM & Data Expertise" },
  ],
  about: {
    title: "A full-stack engineer who builds practical AI and data solutions.",
    // Line breaks as in the design (applied on large screens; text flows normally on small ones).
    body: [
      "I enjoy turning complex requirements into reliable,",
      "user-friendly systems. My focus is on AI-powered",
      "applications, data automation, and scalable web platforms",
      "that solve real business problems.",
    ],
    // Longer story for the /about page.
    long: [
      "I started out at Liber Pharmaceuticals, building the internal tools an Australian therapeutic-products business ran on: inventory, supplier orders, distribution records and the reporting that reconciled them. At rTurner Consulting I built search tools and nightly data pipelines for US federal procurement data. Most recently I built AI document tools for a law firm. In each role the job has been the same: turn messy, high-stakes data into software people can act on.",
      "I work across the whole stack. That means Python services in FastAPI and Django, PostgreSQL and Elasticsearch, ML and LLM pipelines, and the React and Next.js interfaces on top. I'm most at home where those layers meet: an extraction pipeline and the canvas editor a reviewer uses to correct it, or a reconciliation job and the dashboard that shows what it found.",
      "With AI, I care about whether people can check the output. Answers from the systems I build cite their sources, extracted fields go through human review, and the interfaces are built so checking is quick.",
    ],
  },
  coreSkills: [
    { icon: "openai", label: "OpenAI / Azure OpenAI" },
    { icon: "langchain", label: "RAG / LangChain" },
    { icon: "robot", label: "LLM Agents" },
    { icon: "react", label: "React / Next.js" },
    { icon: "typescript", label: "TypeScript" },
    { icon: "threedotjs", label: "Three.js" },
    { icon: "python", label: "Python / FastAPI" },
    { icon: "django", label: "Django" },
    { icon: "go", label: "Go" },
    { icon: "postgresql", label: "PostgreSQL" },
    { icon: "docker", label: "Docker" },
    { icon: "aws", label: "AWS" },
  ],
  education: { degree: "Bachelor of Computer Science", school: "Singapore University of Technology and Design", year: "2015 – 2018" },
  interests: [
    { icon: "brain", label: "AI & LLMs" },
    { icon: "cloud", label: "Cloud & DevOps" },
    { icon: "chart", label: "Data Visualization" },
    { icon: "layers", label: "Product Building" },
  ],
  cta: {
    title: "Let’s build something impactful together.",
    body: "I’m open to new opportunities, collaborations, and interesting projects in AI, data, and full-stack development.",
  },
} as const;

/** Drop a PDF at public/Ryan-Lin-Resume.pdf and the resume buttons appear. */
export const resumeFile = "Ryan-Lin-Resume.pdf";

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#work" },
  { label: "Contact", href: "/#contact" },
] as const;
