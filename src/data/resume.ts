export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  languages: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface KeyProject {
  id: string;
  name: string;
  client: string;
  environment: string;
  description: string;
  bullets: string[];
}

export interface PocProject {
  id: string;
  name: string;
  url: string;
  description: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
}

export const contact: ContactInfo = {
  name: "Mahalthy Khaleel Ahmed",
  title: "Technical Lead",
  email: "mahalthykhaleel@hotmail.com",
  phone: "+91 82964 85050",
  location: "Adoni, Kurnool (Dist), Andhra Pradesh, India",
  languages: ["English", "Hindi", "Telugu", "Arabic"],
};

export const summary: string =
  "Results-driven Technical Lead with 13+ years of experience architecting and delivering scalable, high-performance enterprise platforms across Financial Services, Automotive, Education, Payroll, Warehouse, and Procurement domains. Expert in designing microservices-based systems with ASP.NET Core, C#, and React.js/Angular, applying Clean Architecture, Domain-Driven Design (DDD), Event-Driven Architecture, and Saga Orchestration. Proven track record leading cross-functional teams, driving CI/CD adoption, optimizing performance, and integrating AI-assisted development tools (GitHub Copilot, Cursor AI, MCP, Agentic AI, MAF Agent Framework) and n8n workflow automation to accelerate delivery and improve code quality.";

export const skills: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "C#",
      "TypeScript",
      "JavaScript",
      "ASP.NET Core",
      ".NET 8",
      "MVC",
      "Web API",
      "EF Core",
      "React.js",
      "Angular",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Architecture",
    items: [
      "Microservices",
      "Micro Frontends",
      "Clean Architecture",
      "DDD",
      "Event-Driven Architecture",
      "Saga Orchestration",
      "API Gateway",
      "BFF Pattern",
      "REST",
      "CQRS",
    ],
  },
  {
    label: "Data & Messaging",
    items: ["SQL Server", "PostgreSQL", "Redis", "Apache Kafka", "RabbitMQ"],
  },
  {
    label: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "GitHub Actions",
      "Swagger",
      "Postman",
    ],
  },
  {
    label: "AI & Modern Tooling",
    items: [
      "GitHub Copilot",
      "Cursor AI",
      "MCP",
      "Agentic AI",
      "MAF (Microsoft Agent Framework)",
      "Prompt Engineering",
    ],
  },
  {
    label: "Automation & Methodology",
    items: [
      "n8n",
      "Webhooks",
      "API Orchestration",
      "Agile",
      "Scrum",
      "TDD",
      "Mentoring",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Technical Lead",
    company: "TAO Digital Solutions Limited",
    period: "2024 — Present",
    current: true,
    bullets: [
      "Lead end-to-end design and delivery of scalable microservices for an automotive service platform (ServiceEdge), enabling online appointment scheduling, digital vehicle inspections, and real-time customer notifications.",
      "Architect solutions using Clean Architecture, DDD, and Saga orchestration, integrating Apache Kafka for asynchronous event-driven communication.",
      "Implemented CI/CD pipelines reducing deployment time by ~40% and improving release reliability.",
      "Mentor a team of 8+ engineers; established code review standards and AI-assisted development workflows with GitHub Copilot and Cursor AI.",
      "Built agentic AI solutions using the MAF (Microsoft Agent Framework) for multi-agent orchestration, tool calling, and LLM-driven workflows integrated with enterprise APIs.",
      "Designed and deployed n8n automation workflows to orchestrate cross-system integrations and AI-assisted operational tasks, reducing manual effort by ~60%.",
    ],
  },
  {
    role: "Principal Engineer II",
    company: "Bhavna Software India Pvt. Ltd.",
    period: "2021 — 2024",
    bullets: [
      "Designed enterprise-grade financial SaaS platforms (Loan Origination System for MeridianLink; Financial Institutions platform for Syntellis) used by banks and credit unions nationwide.",
      "Led full-stack teams delivering modules in React.js, TypeScript, ASP.NET Core, and EF Core; owned API design, security, and performance tuning.",
      "Improved system throughput by 35% through query optimization, caching, and asynchronous processing.",
      "Drove modular architecture adoption and reusable component libraries across products.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Delta Technology & Management Services",
    period: "2019 — 2021",
    bullets: [
      "Built full-stack web applications and REST APIs on .NET Core and Angular for enterprise clients.",
      "Optimized high-volume SQL Server workloads, reducing report generation time by 50%.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Ministry of Defense (KSA)",
    period: "2015 — 2018",
    bullets: [
      "Delivered secure, mission-critical enterprise applications managing large-scale operational data.",
      "Implemented role-based security, auditing, and high-availability data systems.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ministry of Defense (KSA)",
    period: "2010 — 2014",
    bullets: [
      "Developed and maintained mission-critical line-of-business applications ensuring high reliability.",
    ],
  },
];

export const keyProjects: KeyProject[] = [
  {
    id: "serviceedge",
    name: "ServiceEdge",
    client: "CDK Global",
    environment:
      "C#, ASP.NET Core, React.js, Web API, SQL Server, Kafka, Docker",
    description:
      "Integrated automotive service platform with online appointment scheduling, digital vehicle inspections, real-time customer updates, and advanced analytics.",
    bullets: [
      "Designed scalable microservices for service workflows and inspections.",
      "Implemented API integrations and real-time communication via Kafka events.",
      "Optimized queries and Redis caching to improve response times by ~30%.",
      "Integrated centralized logging and observability dashboards.",
    ],
  },
  {
    id: "los",
    name: "Loan Origination System (LOS)",
    client: "MeridianLink",
    environment: "React.js, TypeScript, C#, ASP.NET Core, SQL Server",
    description:
      "Configurable SaaS LOS supporting the full consumer loan suite (VL, PL, DA, HE, CC, BL) for U.S. financial institutions.",
    bullets: [
      "Developed high-performance, scalable modules using React and .NET Core.",
      "Designed secure APIs for financial transactions and loan processing.",
      "Implemented CI/CD pipelines for faster, reliable deployments.",
      "Enhanced UI responsiveness and accessibility for end users.",
    ],
  },
  {
    id: "fi",
    name: "FI (Financial Institutions)",
    client: "Syntellis",
    environment: "ASP.NET Core, EF Core, Kendo UI (Telerik), Angular",
    description:
      "Unified financial performance platform for budgeting, forecasting, profitability, and pricing across institutions.",
    bullets: [
      "Built enterprise-grade financial planning and analytics modules.",
      "Implemented modular architecture with reusable Angular components.",
      "Improved data processing efficiency and reporting throughput.",
    ],
  },
];

export const pocProjects: PocProject[] = [
  {
    id: "genai-chatbot",
    name: "GenAI Chatbot Application",
    url: "https://mahalthy-chatbot-genai-app.streamlit.app/",
    description:
      "An end-to-end conversational Generative AI application, independently designed, built, and deployed to production as a proof of concept.",
    bullets: [
      "Built an interactive LLM-powered chatbot using Python and Streamlit, with prompt-engineered conversational flows for natural, context-aware responses.",
      "Implemented end-to-end deployment from source repository to production on Streamlit Community Cloud.",
      "Applied prompt engineering best practices to optimize response quality, relevance, and consistency of LLM outputs.",
    ],
  },
  {
    id: "data-analyst-agent",
    name: "Agentic AI Data Analyst Agent",
    url: "https://mahalthy-data-analyst-agent.streamlit.app/",
    description:
      "An autonomous Agentic AI data analyst that interprets natural-language queries, reasons over datasets, and generates insights — deployed as a production-ready application.",
    bullets: [
      "Designed an agentic AI workflow where the agent autonomously plans, selects tools, and executes multi-step data analysis tasks from natural-language input.",
      "Integrated LLM-driven reasoning with data-processing tool calling to summarize datasets, surface trends, and answer ad-hoc analytical questions.",
      "Independently owned the full lifecycle — from architecture and development to cloud deployment on Streamlit Community Cloud.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Visvesvaraya Technological University (VTU)",
  },
  {
    degree: "B.A. (Mathematics)",
    institution: "Sri Krishnadevaraya University, Anantapuramu, A.P, India",
  },
];
