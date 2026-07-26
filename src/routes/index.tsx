import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Bubai Saha — Senior Full-Stack & Generative AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Bubai Saha — Senior Full-Stack & Generative AI Developer with 10+ years shipping scalable SaaS, marketplaces and LLM-powered products with React, Node.js, TypeScript, Python, AWS, LangChain, LangGraph, RAG Systems, Vector Databases, MCP (Model Context Protocol).",
      },
      { property: "og:title", content: "Bubai Saha — Senior Full-Stack & GenAI Developer" },
      {
        property: "og:description",
        content:
          "10+ years building scalable full-stack platforms and Generative AI features with React, Node.js, TypeScript, Python, LangChain, LangGraph, RAG Systems, Vector Databases, MCP (Model Context Protocol).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bubai Saha — Senior Full-Stack & GenAI Developer" },
      {
        name: "twitter:description",
        content:
          "Senior Full-Stack & Generative AI Developer — React, Node.js, TypeScript, Python, LangChain, LangGraph, RAG Systems, Vector Databases, MCP.",
      },
    ],
  }),
});

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "Senior Full-Stack Developer",
    company: "Matrix Media Solutions Pvt. Ltd.",
    period: "December 2022 — Present",
    bullets: [
      "Architected and delivered scalable microservices-based full-stack applications using React.js, Next.js, Node.js, TypeScript, and Python (FastAPI), serving 10,000+ concurrent users across multi-service marketplace and enterprise platforms with 99.9% uptime.",
      "Designed real-time booking and order management systems utilizing an event-driven microservices architecture with WebSocket, GraphQL, Redis caching, RabbitMQ message brokers, and AWS services (EC2, S3, SES), reducing API response time by 40% in high-availability production environments.",
      "Led a team of 5 engineers, conducting 100+ code reviews per quarter, establishing coding standards, and mentoring junior developers through pair programming and technical knowledge-sharing sessions.",
      "Implemented CI/CD pipelines using GitHub Actions and Docker, with PM2 process management and Sentry application performance monitoring & error tracking, reducing deployment time by 65% and ensuring zero-downtime releases through automated testing with Jest and Cypress.",
      "Led integration of 12+ third-party APIs (Razorpay, Firebase FCM, Exotel, WhatsApp Business API), reducing manual workflows by 60% and enabling real-time notifications for 5,000+ daily active users.",
      "Integrated Generative AI capabilities using LLMs (Google Gemini, OpenAI), LangChain/LangGraph orchestration, MCP (Model Context Protocol), and RAG Systems with Vector Databases (Pinecone, ChromaDB) and Embeddings-based Semantic Search to build intelligent features like AI Service Recommendations and AI Customer Support Assistants, driving user engagement and automation.",
      "Partnered with product managers and UX designers using Agile/Scrum methodologies, JIRA, and Confluence to define technical roadmaps and deliver features across 3 concurrent product streams on schedule.",
    ],
  },
  {
    role: "Senior Full-Stack Developer",
    company: "Remote Programmer Pvt. Ltd.",
    period: "March 2019 — November 2022",
    bullets: [
      "Delivered end-to-end full-stack solutions for international clients including online betting platforms, hotel booking systems, SaaS accounting modules, and emotional intelligence toolkits, serving 50,000+ end users across 4 countries.",
      "Built multi-tenant SaaS architectures with Node.js, Express, React.js, Python, Django, PostgreSQL, and Sequelize ORM, achieving 99.9% availability through load-balanced infrastructure on AWS, handling 5,000+ daily transactions.",
      "Implemented secure payment gateway integrations (Razorpay, PayPal, Peach) with OAuth2/JWT authentication and KYC/AML compliance workflows, processing $200K+ in monthly transactions for regulated platforms.",
      "Mentored 3 junior developers through code reviews and pair programming, improving team velocity by 25% and reducing production bugs by 30%.",
    ],
  },
  {
    role: "Sr. PHP Developer",
    company: "Web Corridor",
    period: "August 2016 — February 2019",
    bullets: [
      "Developed and maintained 8+ web applications using PHP (CodeIgniter, Phalcon), MySQL, jQuery, and Ajax, delivering e-commerce and prediction platforms with payment gateway integrations serving 15,000+ monthly active users.",
      "Built custom shopping cart systems, subscription workflows, and real-time data feeds using RESTful APIs and third-party service integrations, improving conversion rates by 25%.",
    ],
  },
  {
    role: "Web Application Developer",
    company: "Arobit Technologies",
    period: "November 2015 — August 2016",
    bullets: [
      "Developed 5+ dynamic web applications using PHP, JavaScript, jQuery, and MySQL, contributing to multiple client projects with focus on responsive design and database query optimization, improving page load times by 35%.",
    ],
  },
];

const SKILLS = [
  { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP", "HTML5", "CSS3"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "jQuery", "SSR/SSG"] },
  { group: "Backend", items: ["Node.js", "Express.js", "NestJS", "GraphQL", "Django", "FastAPI", "Socket.io", "CodeIgniter", "Phalcon"] },
  { group: "Generative AI", items: ["LLM Integration", "Prompt Engineering", "Google Gemini API", "OpenAI API", "AI Agents", "LangChain", "LangGraph", "RAG Systems", "Embeddings", "Semantic Search", "Vector Databases (Pinecone, ChromaDB)", "MCP (Model Context Protocol)"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis (Caching, Pub/Sub, Queues)", "Sequelize ORM", "Prisma", "Mongoose"] },
  { group: "Architecture", items: ["Microservices", "Event-Driven", "System Design", "Webhooks", "Message Queues", "Data Pipelines", "Pub/Sub"] },
  { group: "Cloud & DevOps", items: ["AWS (EC2, S3, SES, SNS, Lambda, CloudWatch)", "Docker", "CI/CD (GitHub Actions)", "Nginx", "Fly.io", "RabbitMQ", "Linux"] },
  { group: "Testing", items: ["Jest", "Cypress", "React Testing Library", "TDD", "Selenium", "Swagger", "Postman"] },
  { group: "Security", items: ["OAuth2", "JWT", "RBAC", "Data Encryption", "Secure API Design"] },
  { group: "Monitoring", items: ["PM2", "Sentry", "Application Performance Monitoring", "Error Tracking"] },
];

const PROJECTS = [
  {
    name: "Qkly",
    tag: "Hyperlocal Multi-Service Marketplace",
    desc: "Microservices-based hyperlocal on-demand marketplace connecting customers with verified local service providers. Features real-time booking, live tracking, RabbitMQ-driven asynchronous task processing, portals for customers/providers/admins, plus AI service recommendations and an AI support assistant powered by LangChain and LangGraph orchestration, MCP (Model Context Protocol), and RAG pipelines using Pinecone and ChromaDB Embeddings.",
    stack: ["Node.js", "React.js", "TypeScript", "FastAPI", "Microservices", "RabbitMQ", "MongoDB", "WebSocket", "AWS", "Razorpay", "Google Gemini", "LangChain", "LangGraph", "RAG Systems", "Pinecone", "Vector Databases", "MCP"],
    url: "https://qkly.in",
  },
  {
    name: "LottoStar",
    tag: "Online Betting Platform",
    desc: "Regulated South-African betting platform for lotteries, sports, live casino & slots with real-time odds, fixed-odds wagering and KYC/AML compliance in ZAR.",
    stack: ["Node.js", "React", "PHP", "Phalcon", "Django", "PostgreSQL", "AWS"],
    url: "https://www.lottostar.co.za",
  },
  {
    name: "Wfrlee",
    tag: "Smart Hotel Booking",
    desc: "Hourly hotel booking (3/6/12h) with a unique bidding-based dynamic pricing system, admin-defined slots and a full role-based admin dashboard.",
    stack: ["Node.js", "Express", "React", "Redux", "TypeScript", "MongoDB", "AWS"],
    url: "https://www.wfrlee.com",
  },
  {
    name: "Fintura",
    tag: "SaaS for Accounting Firms",
    desc: "Multi-tenant SaaS for client & company management, onboarding and compliance with DATANAMIX verification, tax/VAT tracking and Peach payments.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Sequelize", "Peach", "DATANAMIX", "AWS"],
    url: "https://fintura.co.za",
  },
  {
    name: "The Empathy Set",
    tag: "Emotional Intelligence Toolkit",
    desc: "Tiered EI learning platform (Starter, Enhancer, Maximizer) built on Nonviolent Communication with a points-based unlock system across web, iOS & Android.",
    stack: ["Node.js", "React", "Redux", "TypeScript", "MongoDB", "Swagger", "AWS"],
    url: "https://theempathyset.com",
  },
  {
    name: "FootballTipster",
    tag: "Soccer Prediction & E-Commerce",
    desc: "Automated soccer prediction platform with live feeds, tiered subscriptions and a custom shopping cart with PayPal and Help2Pay.",
    stack: ["PHP", "CodeIgniter", "MySQL", "PayPal", "Help2Pay"],
    url: "https://footballtipster.com",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function Portfolio() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" />

      <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="relative mx-auto max-w-6xl px-6 pb-24">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header({
  active,
  menuOpen,
  setMenuOpen,
}: {
  active: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-primary glow-ring" />
          <span>bubai<span className="text-primary">.</span>dev</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                active === n.id
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:bubaisaha.developer@gmail.com"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          Hire me
        </a>
        <button
          className="md:hidden rounded-md border border-border p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-6 py-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[85vh] flex-col justify-center py-20">
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Available for senior full-stack & GenAI roles
      </div>
      <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        Bubai Saha.
        <br />
        <span className="text-gradient">Full-stack & GenAI</span>
        <br />
        engineer shipping at scale.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        10+ years designing SaaS platforms, marketplaces and{" "}
        <span className="text-foreground">LLM-powered products</span> with React, Node.js,
        TypeScript & Python. Deep in system design, microservices, RAG pipelines and cloud-native
        delivery on AWS — leading teams and serving 10,000+ concurrent users.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          View selected work →
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Get in touch
        </a>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
        {[
          ["10+", "Years shipping"],
          ["50K+", "Users served"],
          ["99.9%", "Uptime delivered"],
          ["$200K+", "Monthly txns"],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="font-display text-3xl font-semibold text-primary">{n}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="mb-3 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-primary">
        <span className="h-px w-8 bg-primary" />
        {tag}
      </div>
      <h2 className="text-4xl font-semibold sm:text-5xl">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <SectionTitle tag="01 — About" title="Engineer, mentor, systems thinker." />
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a results-driven Senior Full-Stack & Generative AI Developer based in Kolkata with
            a decade of experience designing, building and deploying scalable web platforms — from
            hyperlocal marketplaces to regulated betting products, multi-tenant SaaS, and LLM-powered
            features.
          </p>
          <p>
            My focus is on{" "}
            <span className="text-foreground">
              system design, performance, reliability and applied GenAI
            </span>{" "}
            — shipping API-driven products that stay fast under real load, augmented with RAG,
            embeddings and semantic search. I lead small, senior teams with strong code-review
            culture and TDD, and I love mentoring engineers who want to grow.
          </p>
        </div>
        <div className="card-glass rounded-2xl p-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Currently
          </div>
          <div className="mt-2 text-lg font-medium">Senior Full-Stack Developer</div>
          <div className="text-primary">Matrix Media Solutions</div>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Location</span>
              <span className="text-foreground">Kolkata, IN</span>
            </div>
            <div className="flex justify-between">
              <span>Experience</span>
              <span className="text-foreground">10+ years</span>
            </div>
            <div className="flex justify-between">
              <span>Focus</span>
              <span className="text-foreground">SaaS · Marketplaces · GenAI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <SectionTitle tag="02 — Experience" title="A decade of shipping production systems." />
      <div className="relative space-y-8 border-l border-border pl-8">
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="relative">
            <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background glow-ring" />
            <div className="card-glass rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <div className="mb-4 text-primary">{e.company}</div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const [active, setActive] = useState(SKILLS[0].group);
  const current = SKILLS.find((s) => s.group === active)!;
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <SectionTitle tag="03 — Skills" title="The stack I reach for." />
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
          {SKILLS.map((s) => (
            <button
              key={s.group}
              onClick={() => setActive(s.group)}
              className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                active === s.group
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {s.group}
            </button>
          ))}
        </div>
        <div className="card-glass min-h-[280px] rounded-2xl p-8">
          <div className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {current.group}
          </div>
          <div className="flex flex-wrap gap-3">
            {current.items.map((it) => (
              <span
                key={it}
                className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground transition-all hover:border-primary hover:text-primary"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <SectionTitle tag="04 — Projects" title="Selected work, live in production." />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass group relative block overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1} / {PROJECTS.length}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Live
              </span>
            </div>
            <h3 className="flex items-center gap-2 text-2xl font-semibold">
              {p.name}
              <span className="text-primary transition-transform group-hover:translate-x-1">↗</span>
            </h3>
            <div className="mb-4 text-sm text-primary">{p.tag}</div>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
              Visit site
              <span aria-hidden>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const items = [
    { title: "B.Tech in Information Technology", org: "Govt. College of Engg. & Ceramic Technology (WBUT)", year: "2014" },
    { title: "Higher Secondary", org: "Madarat Popular Academy (WBCHSE)", year: "2010" },
    { title: "Secondary", org: "Madarat Popular Academy (WBBSE)", year: "2008" },
  ];
  return (
    <section id="education" className="scroll-mt-24 py-20">
      <SectionTitle tag="05 — Education" title="Foundations." />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((e) => (
          <div key={e.title} className="card-glass rounded-2xl p-6">
            <div className="mb-3 font-mono text-xs text-primary">{e.year}</div>
            <div className="font-semibold">{e.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="card-glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
            06 — Contact
          </div>
          <h2 className="text-4xl font-semibold sm:text-5xl">
            Let's build something <span className="text-gradient">durable</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to senior full-stack, GenAI, staff and tech-lead roles — full-time.
            Drop a line and I'll get back within a day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:bubaisaha.developer@gmail.com"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              bubaisaha.developer@gmail.com
            </a>
            <a
              href="tel:+918240921515"
              className="rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium hover:bg-muted"
            >
              +91 82409 21515
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">LinkedIn ↗</a>
            <a href="#" className="hover:text-primary">GitHub ↗</a>
            <span>Kolkata, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Bubai Saha. Crafted with care.</div>
        <div className="font-mono">Built with React · TanStack · Tailwind</div>
      </div>
    </footer>
  );
}
