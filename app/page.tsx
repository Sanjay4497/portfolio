"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Cloud & Data Engineering",
    items: "AWS, Microsoft Azure, Google Cloud Platform (GCP), ETL/ELT, batch and streaming pipelines, data modeling, data quality, data lakes, cloud historians",
  },
  {
    category: "Data Platforms & Processing",
    items: "AWS Glue, Amazon Redshift, AWS Lambda, Azure Data Factory, Azure Data Explorer, Azure Data Lake, Event Hubs, Stream Analytics, Kinesis, Apache Flink, KQL, SQL",
  },
  {
    category: "Containers & Orchestration",
    items: "Docker, Docker Compose, Kubernetes, AKS, Amazon ECS/ECR, Azure DevOps, AWS CodePipeline, CloudFormation, Git, Linux, container validation and edge deployment",
  },
  {
    category: "Frontend & Full-Stack Delivery",
    items: "React, TypeScript, JavaScript, responsive dashboards, asset hierarchy visualization, portfolio and plant management applications, Python/FastAPI integration",
  },
  {
    category: "IIoT & Industrial Cloud",
    items: "AWS IoT Core, Greengrass, SiteWise, TwinMaker, Lambda, EC2, IAM, RDS, S3, Grafana; Azure IoT Hub, Digital Twins, Logic Apps, Cosmos DB; ThingWorx, Ignition, Aspen Cloud Connect, AVEVA Predictive Analytics",
  },
  {
    category: "Agentic AI & Generative AI",
    items: "Agentic AI, LLM integration, LangChain, retrieval-augmented generation (RAG), FAISS vector search, multi-document ingestion, grounding validation, Ollama and llama.cpp",
  },
  {
    category: "Machine Learning & Edge AI",
    items: "NVIDIA Jetson, Qualcomm DSP/NPU, NXP i.MX, Ollama, LangChain, Genie, llama.cpp, DeepSeek, Llama, Qwen, TinyLlama, RAG, FAISS, YOLO detection, segmentation and pose",
  },
  {
    category: "Backend & Architecture",
    items: "Python, FastAPI, Flask, Node.js, REST APIs, WebSockets, microservices, event-driven systems, Digital Twins, distributed systems",
  },
  {
    category: "Databases & Historians",
    items: "PostgreSQL, Microsoft SQL Server, Oracle, InfluxDB, Cosmos DB, GE Historian, AspenTech, Azure Data Explorer, FAISS",
  },
  {
    category: "Industrial Connectivity",
    items: "OPC UA, MQTT Sparkplug B, BACnet, Modbus TCP/IP, Kepware, Ignition, ThingWorx, Syncade MES, PLC, SCADA, HMI, RabbitMQ, Mosquitto, eKuiper and IT/OT integration",
  },
  {
    category: "Observability, Testing & Tools",
    items: "Grafana, ELK Stack, Locust, stress-ng, jtop, tegrastats, Qualcomm Profiler, SSRS, Report Builder, Draw.io, Lucidchart",
  },
];

const projects = [
  {
    title: "Industrial Digital Twin & Smart Manufacturing",
    tag: "Full Stack + AWS ETL",
    desc: "Built React/TypeScript plant management applications with Python/FastAPI microservices and AWS Glue, Lambda and Redshift pipelines. Delivered asset hierarchies, KPI dashboards, historian integration and alarm management across multi-plant environments.",
  },
  {
    title: "Edge AI Platform Validation",
    tag: "Advantech",
    desc: "Validated 25+ containerized AI/ML workloads across Qualcomm, NXP and NVIDIA hardware, covering LLM, computer vision, RAG, accelerator passthrough, power, thermal and endurance testing.",
  },
  {
    title: "Enterprise Industrial IoT Platform",
    tag: "AWS",
    desc: "Designed a scalable IIoT platform integrating OPC UA, BACnet and MQTT data with cloud-native microservices, streaming analytics, storage and visualization services.",
  },
  {
    title: "Industrial Digital Twin Systems",
    tag: "AWS + Azure",
    desc: "Delivered an enterprise Azure Digital Twin with an 11-level asset hierarchy, real-time OT ingestion, AKS-hosted APIs and optimized KQL analytics, supported by Azure DevOps CI/CD.",
  },
  {
    title: "Cloud Historian & ETL Platform",
    tag: "Data Engineering",
    desc: "Unified time-series data across five sites, connecting GE Historian, Aspen, Kepware and LIMS to Azure IoT Hub, Stream Analytics and Data Lake with standardized schemas and data-quality controls.",
  },
  {
    title: "Industrial IoT & MES — Process in a Box",
    tag: "Multi-Plant Manufacturing",
    desc: "Deployed a centralized IIoT and MES platform across six aluminium extrusion plants. Integrated ThingWorx, Kepware, Python, MSSQL and PostgreSQL for production monitoring, cross-plant analytics and hybrid on-premise/Azure operations.",
  },
];

const experience = [
  {
    company: "Nagarro",
    role: "Staff Engineer",
    period: "Mar 2024 – Present",
    bullets: [
      "Promoted to Staff Engineer in December 2025 after joining as Associate Staff Engineer (IIoT Cloud & Big Data) in March 2024.",
      "Delivered Industrial Digital Twin and smart manufacturing solutions with React/TypeScript applications and Python/FastAPI microservices for portfolio and plant management.",
      "Built AWS Lambda, Glue, Redshift and SQL ETL pipelines for high-volume industrial telemetry, with containerized deployments using Docker and Kubernetes.",
      "Designed multi-cloud IT/OT integrations across AWS, Azure and GCP using Ignition, ThingWorx, Kepware, OPC UA and MQTT Sparkplug B.",
      "Validated 25+ containerized AI/ML workloads across Qualcomm DSP/NPU, NXP i.MX and NVIDIA Jetson platforms.",
      "Executed LLM benchmarking for DeepSeek, Llama 3.2, Qwen and TinyLlama across Ollama, LangChain, Genie and llama.cpp.",
      "Designed RAG pipelines with FAISS, multi-PDF ingestion, grounding validation and long-run stability testing.",
      "Performed DSP/GPU/NPU passthrough validation using SNPE, QNN, jtop, tegrastats and Qualcomm Profiler.",
      "Built Locust-based load-testing frameworks to measure LLM latency, throughput and concurrency across extensive prompt inventories.",
      "Conducted thermal, power and stress testing to ensure stable inference under production constraints.",
      "Developed Python tools for Jetson tegrastats parsing and NXP NNStreamer monitoring.",
    ],
  },
  {
    company: "Accenture",
    role: "Integration Specialist Engineer",
    period: "Apr 2023 – Feb 2024",
    bullets: [
      "Designed and implemented enterprise-scale Azure Digital Twin solutions for industrial assets.",
      "Integrated real-time OT data from PLCs, SCADA and field devices using OPC UA and Azure IoT Hub.",
      "Built scalable data-ingestion and transformation pipelines using Event Hubs, Stream Analytics and Azure Data Explorer.",
      "Developed Flask APIs and deployed containerized workloads on AKS for high-throughput data processing.",
      "Modeled an 11-level asset hierarchy and optimized KQL queries for Azure Data Explorer analytics.",
      "Automated deployments with Azure DevOps CI/CD pipelines.",
      "Collaborated directly with clients on solution architecture, delivery and optimization.",
    ],
  },
  {
    company: "Wipro",
    role: "Control System Project Engineer",
    period: "Nov 2021 – Apr 2023",
    bullets: [
      "Implemented an Azure cloud historian consolidating GE Historian, Aspen, Kepware and LIMS time-series data across five sites.",
      "Deployed a centralized IIoT and MES platform across six aluminium extrusion plants using ThingWorx, Kepware, Python, MSSQL and PostgreSQL.",
      "Engineered ETL and streaming pipelines across Azure IoT Hub, Stream Analytics, Data Lake and TSI for real-time analytics.",
      "Built IIoT pipelines integrating PLCs, SCADA systems and energy meters through OPC and MQTT.",
      "Developed custom dashboards, alerts and reporting systems for operational insights.",
      "Standardized ingestion pipelines and improved data quality through schema optimization and validation.",
      "Led sprint planning, estimation and client communication for multi-site deployments.",
    ],
  },
  {
    company: "Torrent Pharmaceuticals",
    role: "Executive Engineer",
    period: "Jun 2019 – Oct 2021",
    bullets: [
      "Led MES–L2–L1 integration across 100+ machines using OPC UA and centralized SCADA systems.",
      "Implemented 21 CFR Part 11 compliant systems including audit trails, user-access control and reporting.",
      "Developed SSRS reporting solutions and web dashboards for manufacturing insights.",
      "Integrated PLCs, HMIs, SCADA and weighing systems into a unified IIoT architecture.",
      "Performed IQ/OQ validation, equipment qualification and compliance-driven automation upgrades.",
    ],
  },
  {
    company: "Sanofi",
    role: "Graduate Trainee Engineer",
    period: "Sep 2018 – Jun 2019",
    bullets: [
      "Supported instrumentation and automation systems for pharmaceutical manufacturing processes.",
      "Worked with PLCs, SCADA and field instruments for plant operations and maintenance.",
      "Assisted with troubleshooting, calibration and system-optimization activities.",
    ],
  },
];

const SectionTitle = ({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">{eyebrow}</p>
    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{children}</h2>
  </div>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <a href="#top" className="skip-link">Skip to content</a>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.1),transparent_28%)]" />

      <nav aria-label="Main navigation" className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-wide">SN<span className="text-cyan-400">.</span></a>
          <div className="flex items-center gap-5 text-sm text-slate-300">
            <a href="#projects" className="hidden hover:text-white sm:inline">Projects</a>
            <a href="#skills" className="hidden hover:text-white sm:inline">Expertise</a>
            <a href="#experience" className="hidden hover:text-white sm:inline">Experience</a>
            <a href="/SanjayNandaniya.pdf" download="SanjayNandaniya.pdf" className="rounded-full border border-cyan-400/40 px-4 py-2 text-cyan-300 transition hover:bg-cyan-400/10">Download CV</a>
          </div>
        </div>
        <div className="mobile-nav"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Expertise</a><a href="#contact">Contact</a></div>
      </nav>

      <div id="top" className="relative mx-auto max-w-7xl px-6">
        <section className="hero-section grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={false}>
            <p className="hero-eyebrow">Software engineering <span>/</span> Industrial intelligence</p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">Sanjay<br /><span className="hero-name">Nandaniya.</span></h1>
            <p className="mt-6 text-2xl font-medium tracking-tight text-white">Building software. Connecting industry.<br />Putting AI to work.</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Staff Engineer & IIoT Architect bringing 8 years of experience to cloud platforms, Digital Twins and applied Machine Learning.</p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">Python/FastAPI · React/TypeScript · AWS/Azure/GCP.<br />Working across Edge AI, LLMs and RAG, with a focus on Agentic AI.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="primary-button">Explore my work ↗</a><a href="/SanjayNandaniya.pdf" download="SanjayNandaniya.pdf" className="secondary-button">Download CV ↓</a></div>
            <div className="contact-links mt-6 flex flex-wrap gap-3">
              <a href="tel:+919687757217" className="rounded-full bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10">+91 96877 57217</a>
              <a href="mailto:nandaniyasanjay123@gmail.com" className="rounded-full bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10">nandaniyasanjay123@gmail.com</a>
              <a href="https://www.linkedin.com/in/sanjay-nandaniya-1585b4142/" target="_blank" rel="noreferrer" className="rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-400/20 hover:bg-blue-500/25">LinkedIn ↗</a>
            </div>
          </motion.div>

          <aside className="intelligence-panel" aria-label="AI and engineering focus">
            <div className="intelligence-heading"><span>ENGINEERING FOCUS</span><span className="panel-index">01 — AI / ML</span></div>
            <div className="intelligence-art" aria-hidden="true"><div className="ai-orbit orbit-one" /><div className="ai-orbit orbit-two" /><div className="ai-orbit orbit-three" /><div className="ai-core">AI<span>+ ENGINEERING</span></div><span className="orbit-label label-top">CONTEXT</span><span className="orbit-label label-left">REASON</span><span className="orbit-label label-right">ACTION</span></div>
            <div className="intelligence-copy"><p className="ai-kicker">INTELLIGENCE, APPLIED.</p><h2>Agentic AI.<br />Machine Learning.<br /><span>Industrial impact.</span></h2><p>Connecting models, data and software<br />to real-world systems.</p></div>
            <div className="ai-stack"><span>LLMs & RAG</span><span>Computer Vision</span><span>Edge Inference</span></div>
          </aside>
        </section>

        <div className="impact-strip" aria-label="Career highlights">{[['8', 'Years of experience'], ['25+', 'AI/ML containers validated'], ['150+', 'Machines integrated'], ['5', 'Historian sites unified']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>

        <div className="career-strip"><p>Experience across</p><div>{experience.map(job => <span key={job.company}>{job.company}</span>)}</div></div>
        <section className="py-20">
          <SectionTitle eyebrow="Profile">Industrial depth. Software mindset.</SectionTitle>
          <p className="max-w-5xl text-lg leading-8 text-slate-300">A seasoned Industry 4.0 and IIoT Architect with expertise spanning Edge AI, Digital Twins, data engineering and industrial cloud ecosystems. Proven ability to translate complex industrial challenges into scalable architectures that deliver measurable business value across global metals, oil &amp; gas, energy, manufacturing, life sciences and pharmaceutical environments, including compliance-driven implementations aligned with 21 CFR Part 11 and IQ/OQ/PQ requirements.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Solution Architecture", "Agentic AI", "Machine Learning", "Backend & API Engineering", "React & TypeScript", "IT/OT Transformation", "Data Engineering", "Kubernetes", "Digital Twins", "Edge AI", "GenAI & RAG", "Syncade MES"].map((item) => <span key={item} className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-sm text-cyan-100">{item}</span>)}
          </div>
        </section>

        <section className="py-20">
          <span id="projects" className="section-anchor" />
          <SectionTitle eyebrow="01 / Selected Work">Systems built for the real world.</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-card group rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30 ${index === 0 ? 'featured-project' : ''}`}>
                <span className="project-number" aria-hidden="true">0{index + 1}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">{project.tag}</span>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{project.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20">
          <SectionTitle eyebrow="Capabilities">Technology stack</SectionTitle>
          <div className="grid gap-4 lg:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.category} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-semibold text-white">{skill.category}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-20">
          <SectionTitle eyebrow="Career">From the plant floor to the cloud.</SectionTitle>
          <div className="career-timeline space-y-6">
            {experience.map((job) => (
              <article key={job.company} className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:grid-cols-[240px_1fr] md:p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                  <p className="mt-2 text-cyan-300">{job.role}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.period}</p>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-300">
                  {job.bullets.slice(0, 3).map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{bullet}</li>)}
                  {job.bullets.length > 3 && <li className="list-none"><details className="role-details"><summary>More about this role</summary><ul className="mt-4 space-y-3">{job.bullets.slice(3).map(bullet => <li key={bullet} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{bullet}</li>)}</ul></details></li>}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-20 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <SectionTitle eyebrow="Recognition">Awards & appreciation</SectionTitle>
            <ul className="space-y-3 text-slate-300"><li>Nagarro Advantech PM & Lead Appreciation</li><li>Nagarro Care Award (2×)</li></ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <SectionTitle eyebrow="Learning">Certifications & training</SectionTitle>
            <div className="flex flex-wrap gap-2">{["AWS Certified Cloud Practitioner", "Microsoft Azure Fundamentals: AZ-900", "ThingWorx", "PTC Kepware", "Ignition (Inductive Automation)", "McKinsey Forward Program", "GenAI APIs for Practical Applications"].map((item) => <span key={item} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10">{item}</span>)}</div>
          </div>
        </section>

        <section className="grid gap-6 py-20 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <SectionTitle eyebrow="Education">Engineering foundation</SectionTitle>
            <h3 className="text-xl font-semibold text-white">B.Tech — Instrumentation and Control Engineering</h3>
            <p className="mt-3 leading-7 text-slate-400">Government Engineering College, Rajkot, Gujarat · 2018</p>
            <p className="mt-2 text-sm text-cyan-300">Grade: 7.9/10</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <SectionTitle eyebrow="Beyond delivery">Languages & interests</SectionTitle>
            <p className="leading-7 text-slate-300">English, Gujarati and Hindi</p>
            <p className="mt-3 leading-7 text-slate-400">Technical blogging, mentoring, open source contribution, and workshops on IIoT, Edge AI validation and industrial automation.</p>
          </div>
        </section>

        <section className="py-20">
          <SectionTitle eyebrow="Domain Knowledge">Industries & specializations</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-7"><h3 className="font-semibold text-white">Industries</h3><p className="mt-3 leading-7 text-slate-400">Life Sciences, Pharmaceuticals, Energy Grids, Oil & Gas, Metals, Automotive, Chemicals, Food & Beverage, Building Materials and Manufacturing</p></div>
            <div className="rounded-2xl border border-white/10 p-7"><h3 className="font-semibold text-white">Specializations</h3><p className="mt-3 leading-7 text-slate-400">Edge AI Systems, Embedded AI, Digital Twins, Industry 4.0, Data Engineering, ETL, Cloud Architecture and IT/OT Integration</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section scroll-mt-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Have a challenge in mind?</p>
          <h2>Let’s build what’s next<span>.</span></h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Industrial platforms, intelligent systems, or the software that connects them. Let’s start a conversation.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a className="primary-button" href="mailto:nandaniyasanjay123@gmail.com">Get in touch ↗</a><a className="secondary-button" href="https://www.linkedin.com/in/sanjay-nandaniya-1585b4142/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </section>
        <footer className="flex flex-col gap-3 border-t border-white/10 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sanjay Nandaniya · AI, Data & IIoT Architect</p>
          <a href="mailto:nandaniyasanjay123@gmail.com" className="text-slate-400 hover:text-cyan-300">Let’s build connected intelligence →</a>
        </footer>
      </div>
    </main>
  );
}
