export const RESUME_URL = "/Shivam_Shukla_MERN_Developer_Resume.pdf";

export interface Experience {
    company: string;
    role: string;
    period: string;
    product?: string;
    highlights: string[];
}

export const experiences: Experience[] = [
    {
        company: "REAL TIME DATA SERVICES",
        role: "Software Development Engineer 2",
        period: "Jan 2026 – Present",
        product: "AceCloud | AI-Powered Cloud Infrastructure | Live",
        highlights: [
            "Developed modules for an automated cron-based billing platform using Python, Flask, and infrastructure APIs to track resource usage, process consumption data, and generate monthly billing reports for 1,000+ customers.",
            "Developed an AI-powered support chatbot using LLMs, integrating internal knowledge sources and backend APIs to answer user queries, retrieve account-specific resource data, and improve user engagement through faster self-service support.",
            "Migrated legacy PHP-based WHMCS admin panel modules to a modern architecture using Next.js and NestJS, improving maintainability, scalability, and alignment with the new platform codebase."
        ]
    },
    {
        company: "WASSERSTOFF RJ INNOVATIONS PRIVATE LIMITED",
        role: "Software Development Engineer",
        period: "June 2023 – Dec 2025",
        product: "Litt Law | AI-Powered Legal Contract Platform | Live",
        highlights: [
            "Engineered the backend for Litt Law, an AI-powered Indian-law contract drafting platform, using Node.js, Express.js, PostgreSQL, Redis, and Drizzle ORM within a microservices architecture powered by gRPC. Built 40+ REST APIs with JWT authentication, achieving 99.9% uptime and a 2.3× throughput improvement.",
            "Implemented RAG pipelines with custom embeddings and Pinecone vector search for AI-powered legal contract generation, reducing inference latency by 48%. Scaled the platform to support 1,500+ concurrent users while maintaining 95%+ test coverage.",
            "Built real-time collaboration features including presence tracking and concurrent editing using SSE. Developed a responsive, SEO-optimized frontend with Next.js (SSR), React.js, Redux, Tailwind CSS, and Tiptap. Integrated Razorpay and Cashfree payment gateways with 100% transaction reliability across 500+ monthly signings."
        ]
    }
];

export const projects = [
    {
        title: "PostMind AI",
        subtitle: "AI Content Generation Platform — Live",
        description: "6-agent AI pipeline using Mastra AI for automated content briefs. Features a Writing DNA engine for voice metrics at zero LLM cost, Next.js 14 Turborepo monorepo, and Docker CI/CD (87% size reduction).",
        tech: ["Mastra AI", "Next.js 14", "TypeScript", "MongoDB", "Docker", "GitHub Actions"],
        link: "https://trends.shikshatech.org/",
        metrics: ["6-Agent AI", "87% Docker Cut", "15+ Voice Metrics"]
    },
    // {
    //     title: "Lit Search",
    //     subtitle: "LLM-Based Legal Assistant Platform",
    //     description: "Production-grade backend with microservices architecture, gRPC, and LangChain APIs. Achieved 99.9% uptime, 48% latency reduction, 2.3× throughput improvement, scaling to 1,500+ concurrent users.",
    //     tech: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Next.js", "gRPC"],
    //     // Assumed GitHub repo URL for this project — update if you have a different live URL
    //     link: "https://search.lit.law/",
    //     metrics: ["99.9% Uptime", "48% Faster", "1,500+ Users"]
    // },
    {
        title: "Lit Sign",
        subtitle: "AI-Powered Legal Contract Platform",
        description: "Scalable contract lifecycle management with 40+ REST APIs, WebSockets for real-time updates, and automated payment integration. 100% transaction reliability across 500+ monthly signings.",
        tech: ["Node.js", "PostgreSQL", "React.js", "WebSockets", "Razorpay"],
        // Assumed GitHub repo URL for this project — update if you have a different live URL
        link: "https://litt.law/",
        metrics: ["40+ APIs", "500+ Signings", "28% Engagement"]
    },
    {
        title: "Legal Wires",
        subtitle: "High-Traffic Legal Blog CMS",
        description: "Custom Ghost CMS theme optimized for SEO and performance. Scaled to 90K+ monthly users, ranking among top 10 law blogs in India with AI-powered legal assistant integration.",
        tech: ["Ghost CMS", "JavaScript", "REST APIs", "LLM Integration"],
        // Assumed GitHub repo URL for this project — update if you have a different live URL
        link: "https://legal-wires.com/",
        metrics: ["90K+ Users", "Top 10 Ranking", "24% Less Bounce"]
    }
];

export const skills = {
    "AI & Generative AI": ["LLMs", "RAG Pipelines", "Mastra AI", "Pinecone", "Vector Search", "Custom Embeddings", "Prompt Engineering", "AI Agents", "LangChain", "Python"],
    "Libraries & Frameworks": ["JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend & Databases": ["PostgreSQL", "MongoDB", "Redis", "Drizzle ORM", "Prisma", "Mongoose", "gRPC", "WebSockets"],
    "DevOps & Tools": ["Docker", "AWS (EC2, Route 53)", "CI/CD (GitHub Actions)", "Git", "GitHub", "Postman", "Jest"],
    "Architecture & APIs": ["RESTful APIs", "Microservices", "JWT/OAuth2", "GraphQL", "Payment Integration", "Agile/Scrum"]
};


export const educationTimeline = [
    {
        period: '2022 — 2024',
        title: 'Master of Computer Applications',
        org: 'Institute of Engineering and Technology, Lucknow',
    },
    {
        period: '2018 — 2021',
        title: 'Bachelor of Science',
        org: 'University Of Lucknow, Lucknow',
    },
]