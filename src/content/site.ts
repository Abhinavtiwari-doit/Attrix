export const site = {
  name: "Attrix Technologies",
  tagline: "Transforming businesses through technology",
  email: "hello@attrix.tech",
  phone: "+91 90000 12345",
  whatsapp: "+91 90000 12345",
  address: "Level 4, Innovation Park, Bengaluru, India",
  socials: {
    linkedin: "https://linkedin.com/company/attrix",
    github: "https://github.com/attrix",
    twitter: "https://twitter.com/attrix",
    youtube: "https://youtube.com/@attrix",
  },
};

export const clientLogos = [
  "Northwind", "Kestrel", "Vireo Health", "Meridian", "Fabrica",
  "Arcline", "Halcyon", "Sable & Co", "Portage", "Lumen Labs",
];

export const stats = [
  { value: "120+", label: "Enterprise engagements" },
  { value: "40+", label: "Countries served" },
  { value: "98%", label: "Client retention" },
  { value: "12yr", label: "Combined leadership" },
];

export const industries = [
  { slug: "healthcare", name: "Healthcare", blurb: "HIPAA-aligned platforms, patient engagement, and clinical workflow automation." },
  { slug: "finance", name: "Finance", blurb: "Compliance-first data pipelines, fraud detection, and customer onboarding." },
  { slug: "education", name: "Education", blurb: "Learning platforms, admissions CRM, and student success analytics." },
  { slug: "retail", name: "Retail & E-commerce", blurb: "Omnichannel storefronts, inventory intelligence, and personalization." },
  { slug: "manufacturing", name: "Manufacturing", blurb: "Shop-floor visibility, predictive maintenance, and ERP integrations." },
  { slug: "real-estate", name: "Real Estate", blurb: "Lead-to-lease automation, listing platforms, and portfolio dashboards." },
  { slug: "startups", name: "Startups", blurb: "Zero-to-one MVPs, no-code speed, and investor-ready foundations." },
  { slug: "hospitality", name: "Hospitality", blurb: "Guest experience apps, booking flows, and revenue analytics." },
  { slug: "technology", name: "Technology & SaaS", blurb: "Product engineering, DevOps, and AI-native features at scale." },
];

export const services = [
  { slug: "business-automation", name: "Business Automation", tag: "Automation",
    summary: "Replace repetitive work with reliable, monitored workflows.",
    details: "We map every high-cost manual process, then rebuild it in n8n, Make, or Zapier — with error handling, observability, and audit trails.",
    benefits: ["30–70% cost reduction on operations", "Fewer errors, faster cycle times", "Full audit trail & governance"],
    technologies: ["n8n", "Make", "Zapier", "Airtable", "Google Workspace"] },
  { slug: "ai-integration", name: "AI Integration", tag: "AI",
    summary: "Embed intelligence where decisions get made — not in a demo.",
    details: "From LLM copilots to document extraction and agent workflows, we ship AI that measurably moves the metric.",
    benefits: ["Agent workflows that pay for themselves", "RAG over your real knowledge base", "Human-in-the-loop safety"],
    technologies: ["OpenAI", "LangChain", "TensorFlow", "Supabase", "Pinecone"] },
  { slug: "cloud-aws", name: "Cloud & AWS", tag: "Cloud",
    summary: "Cloud foundations engineered for resilience and cost control.",
    details: "Landing zones, IaC, container platforms, and FinOps for teams that need to move fast without surprises.",
    benefits: ["20–40% cloud cost reduction", "Multi-region resilience", "Infrastructure as code"],
    technologies: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Terraform"] },
  { slug: "crm-consulting", name: "CRM Consulting", tag: "CRM",
    summary: "Turn your CRM from a database into a revenue engine.",
    details: "Zoho, HubSpot, and Salesforce implementations with the workflows, reports, and integrations that sales teams actually use.",
    benefits: ["Faster sales cycles", "Reliable pipeline visibility", "Automated hand-offs"],
    technologies: ["Zoho", "HubSpot", "Salesforce", "Make", "Twilio"] },
  { slug: "software-development", name: "Software Development", tag: "Development",
    summary: "Web and mobile applications engineered to last.",
    details: "Typed stacks, tested code, and CI/CD from day one. Long-lived products, not throwaway demos.",
    benefits: ["Ship in weeks, not quarters", "Maintainable architecture", "Documented handover"],
    technologies: ["Python", "TypeScript", "React", "FlutterFlow", "Supabase"] },
  { slug: "no-code-development", name: "No-Code Development", tag: "Development",
    summary: "MVPs and internal tools shipped at no-code speed.",
    details: "Bubble, FlutterFlow, and Xano stacks that scale to real workloads — with clean data models underneath.",
    benefits: ["Prototype to production in weeks", "Lower total cost of ownership", "Editable by your team"],
    technologies: ["Bubble", "FlutterFlow", "Xano", "Wix", "WordPress"] },
  { slug: "data-analytics", name: "Data & Analytics", tag: "Analytics",
    summary: "Dashboards that answer the questions leadership actually asks.",
    details: "Data warehouses, semantic models, and Power BI / Looker dashboards — with the pipelines to keep them fresh.",
    benefits: ["Single source of truth", "Real-time operational KPIs", "Self-serve reporting"],
    technologies: ["Power BI", "BigQuery", "Snowflake", "dbt", "Metabase"] },
  { slug: "digital-transformation", name: "Digital Transformation", tag: "Strategy",
    summary: "A pragmatic roadmap from where you are to where you need to be.",
    details: "Assessment, prioritization, and delivery — sequenced so every quarter ships something the business can feel.",
    benefits: ["Executive-aligned roadmap", "Measurable quarterly outcomes", "Change enablement"],
    technologies: ["Discovery", "Roadmapping", "Change management"] },
];

export const technologies = {
  Cloud: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Hostinger"],
  Automation: ["n8n", "Make", "Zapier", "Google Workspace", "Meta APIs"],
  AI: ["OpenAI", "LangChain", "TensorFlow", "Anthropic", "Hugging Face"],
  CRM: ["Zoho", "HubSpot", "Salesforce", "Pipedrive"],
  Development: ["Python", "React", "TypeScript", "FlutterFlow", "Bubble", "Xano", "Supabase"],
  Analytics: ["Power BI", "BigQuery", "Snowflake", "Metabase", "dbt"],
  Infrastructure: ["Terraform", "Docker", "Kubernetes", "GitHub Actions", "Cloudflare"],
};

export const testimonials = [
  { name: "Aparna Menon", role: "COO, Vireo Health", quote: "Attrix rebuilt our patient intake in six weeks. Turnaround dropped by 62% and our staff stopped dreading Mondays.", rating: 5 },
  { name: "David Ochieng", role: "CTO, Meridian Logistics", quote: "The most senior consulting team we've worked with — and the only one that shipped production code.", rating: 5 },
  { name: "Priya Raghavan", role: "Head of Ops, Fabrica", quote: "Their automation practice paid for the entire engagement in the first quarter.", rating: 5 },
  { name: "Marcus Hale", role: "Founder, Portage", quote: "From roadmap to launch in ten weeks. They act like owners, not vendors.", rating: 5 },
];

export const process = [
  { step: "01", title: "Discovery", body: "Workshops with stakeholders to map goals, constraints, and success metrics." },
  { step: "02", title: "Planning", body: "A prioritized roadmap with scoped milestones and measurable outcomes." },
  { step: "03", title: "Design", body: "Interaction and system design validated with the people who will use it." },
  { step: "04", title: "Development", body: "Typed, tested, reviewed code shipped in small increments." },
  { step: "05", title: "Testing", body: "Automated + manual QA, security review, and performance benchmarks." },
  { step: "06", title: "Deployment", body: "CI/CD to production with observability and rollback safety." },
  { step: "07", title: "Support", body: "SLAs, monitoring, and continuous improvement post-launch." },
];

export type Project = {
  slug: string;
  name: string;
  industry: string;
  category: "AI & Machine Learning" | "Data & Analytics" | "Zoho & Business Apps" | "Automation & Operations" | "Product Engineering";
  summary: string;
  tech: string[];
  metrics: { k: string; v: string }[];
  /** YouTube (or any) recording of the project walkthrough */
  demoUrl?: string;
};

export const projects: Project[] = [
  { slug: "vireo-patient-intake", name: "Vireo Health — Patient Intake Platform", industry: "Healthcare", category: "Product Engineering",
    summary: "A HIPAA-aligned intake system that shrunk onboarding from 40 minutes to 9.",
    tech: ["React", "Supabase", "n8n", "AWS"],
    metrics: [{ k: "Turnaround", v: "-62%" }, { k: "Staff hours saved / wk", v: "180" }, { k: "Patient CSAT", v: "4.8/5" }] },
  { slug: "meridian-freight-ops", name: "Meridian — Freight Ops Console", industry: "Logistics", category: "Product Engineering",
    summary: "A unified operations console replacing four spreadsheets and two legacy tools.",
    tech: ["TypeScript", "Postgres", "Power BI", "Azure"],
    metrics: [{ k: "On-time deliveries", v: "+18%" }, { k: "Ops cost", v: "-24%" }, { k: "Uptime", v: "99.98%" }] },
  { slug: "fabrica-automation", name: "Fabrica — End-to-end Sales Automation", industry: "Manufacturing", category: "Automation & Operations",
    summary: "Zoho CRM, n8n, and WhatsApp orchestrated into one revenue engine.",
    tech: ["Zoho", "n8n", "Twilio", "Metabase"],
    metrics: [{ k: "Lead response", v: "< 4 min" }, { k: "Close rate", v: "+31%" }, { k: "Ops cost", v: "-40%" }] },
  { slug: "portage-mvp", name: "Portage — Zero-to-One MVP", industry: "Startup", category: "Product Engineering",
    summary: "A no-code+code hybrid MVP live in ten weeks, ready for the seed round.",
    tech: ["FlutterFlow", "Xano", "Stripe"],
    metrics: [{ k: "Time to launch", v: "10 wks" }, { k: "Seed raised", v: "$2.4M" }, { k: "DAU at launch", v: "3.1k" }] },

  { slug: "diagnoseme-ai", name: "DiagnoseMe.AI — Health Prediction Platform", industry: "Healthcare", category: "AI & Machine Learning",
    summary: "A Flask-based full-stack AI web app that predicts disease from symptoms using Random Forest models and a REST API.",
    tech: ["Python", "Flask", "scikit-learn", "Pandas", "NumPy"],
    metrics: [{ k: "Model accuracy", v: "92%" }, { k: "Records trained", v: "20k+" }, { k: "Latency", v: "<300ms" }] },
  { slug: "roastmycode", name: "RoastMyCode — Multimodal AI Code Reviewer", industry: "Developer Tools", category: "AI & Machine Learning",
    summary: "A humorous AI code-review tool built on Hugging Face LLMs with a Gradio UI and live deployment on Spaces.",
    tech: ["Python", "Gradio", "Hugging Face", "Transformers"],
    metrics: [{ k: "Languages supported", v: "12" }, { k: "Feedback latency", v: "Real-time" }, { k: "Deployment", v: "HF Spaces" }] },
  { slug: "credit-card-fraud-detection", name: "Credit Card Fraud Detection", industry: "Finance", category: "AI & Machine Learning",
    summary: "Supervised-learning fraud detection over financial transactions with EDA, feature engineering, and tree-based models.",
    tech: ["Python", "scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    metrics: [{ k: "Recall lift", v: "+15%" }, { k: "F1 score", v: "0.91" }, { k: "Records", v: "20k+" }] },
  { slug: "sales-dashboard-excel", name: "Interactive Sales Data Dashboard", industry: "Retail & E-commerce", category: "Data & Analytics",
    summary: "An Excel + VBA dashboard converting raw sales data into KPIs with slicers, timelines, and automated pivots.",
    tech: ["Microsoft Excel", "Pivot Tables", "VBA", "Macros"],
    metrics: [{ k: "Manual effort", v: "-30%" }, { k: "KPIs surfaced", v: "40+" }, { k: "Refresh", v: "1-click" }] },
  { slug: "packers-relocators-platform", name: "Packers & Relocators — Service & Tracking App", industry: "Logistics", category: "Zoho & Business Apps",
    summary: "A Zoho Creator app for service booking, employee tracking, and job dispatch with third-party API integrations.",
    tech: ["Zoho Creator", "Deluge", "Zoho CRM", "REST APIs"],
    metrics: [{ k: "Dispatch time", v: "-45%" }, { k: "Manual entry", v: "-70%" }, { k: "Live jobs", v: "500+/mo" }] },
  { slug: "plastic-moulding-mgmt", name: "Plastic Moulding Management System", industry: "Manufacturing", category: "Zoho & Business Apps",
    summary: "Production planning platform with real-time analytics dashboards, workflow automation, and inventory sync.",
    tech: ["Zoho Creator", "Deluge", "Zoho Inventory", "Workflow Automation"],
    metrics: [{ k: "Planning cycle", v: "-38%" }, { k: "OEE visibility", v: "Real-time" }, { k: "Rejection rate", v: "-12%" }] },
  { slug: "ab-kids-remote-ops", name: "AB Kids — Remote Operations System", industry: "Education", category: "Automation & Operations",
    summary: "SOP-driven remote operations for a 15+ person team with KPI dashboards and AI-powered task management.",
    tech: ["Notion", "Zapier", "AI Tools", "Google Workspace"],
    metrics: [{ k: "Revenue growth", v: "+40%" }, { k: "Onboarding time", v: "-25%" }, { k: "Efficiency", v: "+35%" }] },
  { slug: "alpha-silicon-recruitment", name: "Alpha Silicon — Recruitment Automation", industry: "Technology & SaaS", category: "Automation & Operations",
    summary: "Ceipal-driven recruitment pipeline with automated screening, mass-mail sequences, and candidate matrices.",
    tech: ["Ceipal", "Automation", "MIS Reporting"],
    metrics: [{ k: "Hiring cycle", v: "-25%" }, { k: "Placements", v: "50+" }, { k: "Response rate", v: "70%+" }] },
];

export const products = [
  { slug: "atlas-ai-desk", name: "Atlas AI Desk", category: "AI SaaS", price: "$49/mo", blurb: "Multichannel AI support desk with your knowledge base baked in." },
  { slug: "orbit-crm-suite", name: "Orbit CRM Suite", category: "CRM Extensions", price: "$29/mo", blurb: "Power extensions for Zoho and HubSpot teams." },
  { slug: "loop-automation-kit", name: "Loop Automation Kit", category: "Automation Tools", price: "$79 one-time", blurb: "80+ production-ready n8n workflows for common ops." },
  { slug: "sable-dashboards", name: "Sable Dashboards", category: "Dashboards", price: "$39/mo", blurb: "Beautiful Power BI templates for founders and ops leaders." },
  { slug: "vega-ai-agents", name: "Vega AI Agents", category: "AI Agents", price: "From $199/mo", blurb: "Deploy sales, support, and ops agents in a weekend." },
  { slug: "quill-wp-plugins", name: "Quill WP Plugins", category: "WordPress Plugins", price: "From $19", blurb: "Purpose-built plugins for speed, SEO, and conversion." },
];

export const aiAgents = [
  { name: "Customer Support Agent", blurb: "Deflects 60%+ of tickets across email, chat, and WhatsApp." },
  { name: "WhatsApp Sales Agent", blurb: "Qualifies leads and books meetings inside WhatsApp Business." },
  { name: "Voice AI Agent", blurb: "Answers inbound calls, takes intake, and hands off to humans on demand." },
  { name: "Recruitment Agent", blurb: "Screens applicants, schedules interviews, updates your ATS." },
  { name: "Finance Ops Agent", blurb: "Reconciles invoices, flags exceptions, and drafts approvals." },
  { name: "Knowledge Agent", blurb: "Answers employees from your policies, wikis, and documents." },
  { name: "Operations Agent", blurb: "Runs SOPs across tools, escalating only what needs a human." },
  { name: "CRM Copilot", blurb: "Drafts follow-ups, logs calls, and keeps your pipeline honest." },
];

export const tools = [
  { name: "ROI Calculator", blurb: "Estimate the payback of your next automation project.", tag: "Calculator" },
  { name: "SEO Audit Tool", blurb: "Quick on-page audit for landing pages and blogs.", tag: "SEO" },
  { name: "Prompt Library", blurb: "Field-tested prompts for sales, support, and ops.", tag: "AI" },
  { name: "Automation Recipe Book", blurb: "Free n8n and Make templates you can import today.", tag: "Automation" },
  { name: "Cloud Cost Estimator", blurb: "Ballpark AWS / Azure / GCP monthly costs.", tag: "Cloud" },
  { name: "Content Calendar Generator", blurb: "90-day marketing plans in 30 seconds.", tag: "Marketing" },
];

export const courses = [
  { slug: "automation-fundamentals", name: "Automation Fundamentals", instructor: "Rohan Verma",
    duration: "6 weeks", price: "$149", level: "Beginner",
    blurb: "Build production workflows in n8n, Make, and Zapier from first principles." },
  { slug: "ai-for-operators", name: "AI for Operators", instructor: "Meera Kapoor",
    duration: "8 weeks", price: "$249", level: "Intermediate",
    blurb: "Ship LLM copilots and agents that pay back inside a quarter." },
  { slug: "cloud-architect-track", name: "Cloud Architect Track", instructor: "Karim Al-Farsi",
    duration: "12 weeks", price: "$399", level: "Advanced",
    blurb: "AWS-first architecture, IaC, and FinOps for teams and consultants." },
  { slug: "no-code-mvp", name: "No-Code MVP in 30 Days", instructor: "Anya Sørensen",
    duration: "4 weeks", price: "$129", level: "Beginner",
    blurb: "From idea to launched product using FlutterFlow, Xano, and Bubble." },
];

export type TeamMember = {
  name: string;
  role: string;
  dept: string;
  location?: string;
  bio?: string;
  experience?: string[];
  skillBars?: { label: string; value: number; color?: string }[];
  tags?: string[];
  links?: { linkedin?: string; portfolio?: string; github?: string };
};

export const team: TeamMember[] = [
  {
    name: "Abhinav Tiwari",
    role: "Founder · Automation & Data Engineer",
    dept: "Leadership",
    location: "Panipat, Haryana · Remote",
    bio: "AWS certified (92%), 43 Salesforce Trailhead badges with 9,100+ points. Leads automation strategy, Zoho consulting, ML pipelines and cloud architecture at Attrix. Shipped 40+ projects and mentored 70+ students in data science and cybersecurity.",
    experience: [
      "Tech Ops Manager — The Healing Wiz (Dec 2025–Present)",
      "Shopify Developer — Eternity Capital Corp (Jul 2024–Dec 2025)",
      "Data Science Intern — CodSoft (Aug–Sep 2024, 88–92% accuracy)",
      "Malware Analyst Tutor — Superprof (Feb–Apr 2024)",
      "Zoho Developer — FabLearner (May 2022–May 2023)",
    ],
    skillBars: [
      { label: "Python & ML", value: 95 },
      { label: "Zoho / Deluge", value: 90 },
      { label: "AWS / Cloud", value: 88 },
    ],
    tags: ["Python", "AWS", "Zoho Deluge", "Pabbly", "ML/AI", "SQL", "Power BI"],
    links: { linkedin: "#", portfolio: "#" },
  },
  {
    name: "Jaya Pratha J",
    role: "Full Stack & Zoho Developer",
    dept: "Engineering",
    location: "Chennai, Tamil Nadu · Remote",
    bio: "3+ years of hands-on Zoho development across CRM, Books, Desk, Recruit, Forms, Inventory and Creator. Specialises in API integration, Deluge scripting and custom third-party app connections. Currently delivering enterprise Zoho solutions at Certify Technologies.",
    experience: [
      "Zoho Developer — Certify Technologies (Oct 2025–Present)",
      "Zoho Developer — AORBORC Technologies (Apr 2023–Apr 2025, 2 yrs)",
      "Full Stack & API Integration Specialist",
    ],
    skillBars: [
      { label: "Zoho Ecosystem", value: 96 },
      { label: "Deluge Scripting", value: 93 },
      { label: "API Integration", value: 90 },
    ],
    tags: ["Zoho CRM", "Zoho Creator", "Deluge", "API Integration", "Zoho Books", "Zoho Desk"],
    links: { linkedin: "#" },
  },
  {
    name: "Abhishek Tiwari",
    role: "Business Operations Leader",
    dept: "Leadership",
    location: "Mumbai, Maharashtra · Remote",
    bio: "Executive MBA from IIT Patna. Leads remote teams of 15+, drives revenue strategy, SOP design and process optimisation. Delivered 40% revenue growth and 35% operational efficiency improvements across multiple client engagements.",
    experience: [
      "Manager/Team Lead — AB Kids Life Coach (Aug 2023–Present)",
      "Talent Acquisition Exec — Alpha Silicon, USA (50+ IT placements)",
      "Account Executive — Blissfull Prosperity Solutions, Mumbai",
      "Operations Intern — MedPay LLC (1,000+ orders, 98% accuracy)",
    ],
    skillBars: [
      { label: "Operations Leadership", value: 95 },
      { label: "SOP & KPI Design", value: 92 },
      { label: "Financial Reporting", value: 88 },
    ],
    tags: ["Operations", "CRM Systems", "SOP Design", "MIS Reports", "KPI Strategy", "Tally Prime"],
    links: { linkedin: "#" },
  },
  { name: "Anya Sørensen", role: "Head of Design", dept: "Design" },
  { name: "Lucas Bernard", role: "Principal Engineer", dept: "Engineering" },
  { name: "Priya Nair", role: "Automation Lead", dept: "Automation" },
  { name: "Diego Marín", role: "Senior Cloud Engineer", dept: "Cloud" },
  { name: "Hana Ito", role: "ML Engineer", dept: "AI" },
  { name: "Elias Weiss", role: "Marketing Director", dept: "Marketing" },
  { name: "Sana Ahmed", role: "Senior Project Manager", dept: "Delivery" },
];

export const pricingPlans = [
  {
    tag: "STARTER",
    name: "Hourly Support",
    price: "₹1,500",
    unit: "per hour · minimum 5 hours",
    features: [
      "Bug fixes & small changes",
      "Zoho configuration tweaks",
      "Automation adjustments",
      "Tech advisory sessions",
      "Detailed time logs with invoice",
      "No long-term commitment",
    ],
    cta: "Book Hours",
    highlight: false,
  },
  {
    tag: "MOST POPULAR",
    name: "Project Contract",
    price: "₹1,200",
    unit: "per hour · scoped project",
    features: [
      "Full project scoping & roadmap",
      "Dedicated team assigned",
      "Weekly progress reports",
      "QA & testing included",
      "Documentation & handover",
      "30-day post-launch support",
      "Team training session included",
    ],
    cta: "Start a Project",
    highlight: true,
  },
  {
    tag: "RETAINER",
    name: "Monthly Retainer",
    price: "₹999",
    unit: "per hour · 40 hours/month min",
    features: [
      "Priority response (<4 hrs)",
      "Dedicated account manager",
      "Ongoing development & support",
      "Monthly strategy review call",
      "Rollover unused hours",
      "Best rate guaranteed",
      "Cancel with 14 days notice",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "SQL", "TypeScript", "JavaScript", "Deluge", "C", "HTML", "CSS"] },
  { category: "AI & Machine Learning", items: ["scikit-learn", "TensorFlow", "PyTorch", "Hugging Face", "Transformers", "Gradio", "LangChain", "OpenAI"] },
  { category: "Data & BI", items: ["Power BI", "Excel (VBA)", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tally ERP", "MIS Reporting"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, IAM, Lambda)", "Google Cloud", "Azure", "Docker", "Linux", "Git", "GitHub Actions"] },
  { category: "Automation & Integration", items: ["Zoho Deluge", "Pabbly Connect", "Zapier", "Make", "n8n", "REST APIs", "WhatsApp Business API", "Webhooks"] },
  { category: "Zoho Ecosystem", items: ["Zoho Creator", "Zoho CRM", "Zoho Books", "Zoho Desk", "Zoho Recruit", "Zoho Inventory", "Zoho Forms", "Zoho Projects", "Zoho Writer"] },
  { category: "Web & E-commerce", items: ["React", "Flask", "WordPress", "Shopify", "Wayfair", "Walmart Marketplace", "SEO", "Google Ads"] },
  { category: "Operations & Delivery", items: ["Remote Team Leadership", "SOP Development", "KPI Design", "Process Automation", "Talent Acquisition (Ceipal)", "Jira", "Agile PM"] },
];

export const jobs = [
  { id: "ENG-201", role: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote (Global)", experience: "5+ yrs", salary: "$90–140k" },
  { id: "AI-104", role: "AI / LLM Engineer", dept: "AI", location: "Bengaluru / Remote", experience: "3+ yrs", salary: "$80–130k" },
  { id: "CLD-118", role: "Cloud Solutions Architect", dept: "Cloud", location: "Remote (EU/IN)", experience: "6+ yrs", salary: "$110–160k" },
  { id: "AUT-076", role: "Automation Consultant", dept: "Automation", location: "Remote", experience: "3+ yrs", salary: "$60–95k" },
  { id: "DSN-042", role: "Senior Product Designer", dept: "Design", location: "Remote", experience: "4+ yrs", salary: "$70–110k" },
  { id: "PM-031", role: "Technical Project Manager", dept: "Delivery", location: "Bengaluru", experience: "5+ yrs", salary: "$60–100k" },
];

export const posts = [
  { slug: "automation-that-pays-back", title: "Automation that pays back in a quarter", excerpt: "A pragmatic framework for choosing the first three workflows to automate.", author: "Rohan Verma", date: "2026-05-14", category: "Automation", readingTime: "6 min" },
  { slug: "ai-agents-in-production", title: "AI agents in production: what breaks and how to fix it", excerpt: "Field notes from 30 production agent deployments across sales, support, and ops.", author: "Meera Kapoor", date: "2026-05-02", category: "AI", readingTime: "9 min" },
  { slug: "aws-cost-playbook", title: "The AWS cost playbook we run for every new client", excerpt: "Seven levers that consistently cut cloud spend 20–40% without touching workloads.", author: "Karim Al-Farsi", date: "2026-04-18", category: "Cloud", readingTime: "7 min" },
  { slug: "zoho-crm-that-teams-use", title: "Building a Zoho CRM your sales team will actually use", excerpt: "The difference between a working CRM and a used CRM is workflow design.", author: "Priya Nair", date: "2026-04-05", category: "CRM", readingTime: "5 min" },
  { slug: "no-code-to-code-migration", title: "When (and how) to graduate from no-code to code", excerpt: "The signals that tell you it's time — and the migration path that won't burn the product.", author: "Anya Sørensen", date: "2026-03-22", category: "Development", readingTime: "8 min" },
];

export const values = [
  { title: "Own the outcome", body: "We measure ourselves on the business metric, not the deliverable." },
  { title: "Ship weekly", body: "Small, reversible releases beat quarterly big-bangs — every time." },
  { title: "Write it down", body: "Decisions, architectures, and trade-offs live in documents your team keeps." },
  { title: "No hero engineering", body: "Systems that survive on-call rotations, not on individual heroics." },
  { title: "Honest scope", body: "We say no to work we can't do well — and yes to the tough truths." },
  { title: "Compounding craft", body: "Every project raises the floor of what our next project starts from." },
];

export const timeline = [
  { year: "2019", title: "Founded", body: "Started as a two-person automation practice serving SMBs." },
  { year: "2021", title: "First enterprise engagement", body: "Rolled out a nationwide CRM for a healthcare group." },
  { year: "2023", title: "AI practice launched", body: "Shipped our first production LLM agents for support and sales." },
  { year: "2024", title: "40+ countries", body: "Crossed the milestone of clients on every populated continent." },
  { year: "2026", title: "Attrix today", body: "A senior team across engineering, AI, cloud, design, and delivery." },
];
