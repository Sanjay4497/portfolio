"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Cloud & Data Engineering",
    items: "AWS, Microsoft Azure, Google Cloud Platform (GCP), ETL/ELT, batch and streaming pipelines, data modeling, data quality, data lakes, cloud historians",
  },
  {
    category: "Data Platforms & Processing",
    items: "Azure Data Factory, Azure Data Explorer, Azure Data Lake, Event Hubs, Stream Analytics, Kinesis, Flink, TSI, Kusto, SQL",
  },
  {
    category: "Containers & Orchestration",
    items: "Docker, Kubernetes, Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE), Amazon ECR, container validation and edge deployment",
  },
  {
    category: "IIoT & Industrial Cloud",
    items: "AWS IoT Core, Greengrass, SiteWise, TwinMaker, Lambda, EC2, IAM, RDS, S3, Grafana; Azure IoT Hub, Digital Twins, Logic Apps, Cosmos DB; ThingWorx, Ignition, Aspen Cloud Connect, AVEVA Predictive Analytics",
  },
  {
    category: "Edge AI, GenAI & ML",
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
    items: "OPC UA, MQTT, BACnet, Modbus, PLC, SCADA, HMI, MES, field instrumentation and IT/OT integration",
  },
  {
    category: "Observability, Testing & Tools",
    items: "Grafana, ELK Stack, Locust, stress-ng, jtop, tegrastats, Qualcomm Profiler, SSRS, Report Builder, Draw.io, Lucidchart",
  },
];

const projects = [
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
    desc: "Built multi-level asset models and real-time Digital Twins for industrial monitoring, contextualized analytics and predictive use cases.",
  },
  {
    title: "Cloud Historian & ETL Platform",
    tag: "Data Engineering",
    desc: "Engineered cloud data pipelines connecting GE Historian, Aspen, SQL and IoT sources to Azure analytics, lake and reporting services with standardized schemas and data-quality controls.",
  },
];

const experience = [
  {
    company: "Nagarro",
    role: "Staff Engineer",
    period: "Mar 2024 – Present",
    bullets: [
      "Validated 25+ containerized AI/ML workloads across Qualcomm DSP/NPU, NXP i.MX and NVIDIA Jetson platforms.",
      "Executed LLM benchmarking for DeepSeek, Llama 3.2, Qwen and TinyLlama across Ollama, LangChain, Genie and llama.cpp.",
      "Designed RAG pipelines with FAISS, multi-PDF ingestion, grounding validation and long-run stability testing.",
      "Performed DSP/GPU/NPU passthrough validation using SNPE, QNN, jtop, tegrastats and Qualcomm Profiler.",
      "Built a Locust-based load-testing framework with 100+ prompt scenarios for LLM performance analysis.",
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
      "Modeled multi-level asset hierarchies from enterprise to machine level for Digital Twin environments.",
      "Collaborated directly with clients on solution architecture, delivery and optimization.",
    ],
  },
  {
    company: "Wipro",
    role: "Control System Project Engineer",
    period: "Nov 2021 – Apr 2023",
    bullets: [
      "Implemented an Azure cloud historian platform integrating GE Historian, Aspen and SQL systems.",
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
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.1),transparent_28%)]" />

      <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-wide">SN<span className="text-cyan-400">.</span></a>
          <div className="flex items-center gap-5 text-sm text-slate-300">
            <a href="#skills" className="hidden hover:text-white sm:inline">Skills</a>
            <a href="#experience" className="hidden hover:text-white sm:inline">Experience</a>
            <a href="/Sanjay_Nandaniya_CV.pdf" download className="rounded-full border border-cyan-400/40 px-4 py-2 text-cyan-300 transition hover:bg-cyan-400/10">Download CV</a>
          </div>
        </div>
      </nav>

      <div id="top" className="relative mx-auto max-w-7xl px-6">
        <section className="grid min-h-[72vh] items-center gap-10 py-20 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">Industry 4.0 · IIoT · Edge AI · Data Engineering</p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">Sanjay Nandaniya</h1>
            <p className="mt-6 max-w-4xl text-xl leading-relaxed text-slate-300">Industry 4.0 & IIoT Architect building production-grade Digital Twins, Edge AI systems, ETL pipelines and industrial cloud platforms across AWS, Azure and GCP.</p>
            <p className="mt-5 max-w-3xl leading-7 text-slate-400">Specialized in LLM, RAG and computer-vision workloads on constrained edge hardware, with deep experience connecting IT, OT and enterprise data systems in regulated environments.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919687757217" className="rounded-full bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10">+91 96877 57217</a>
              <a href="mailto:nandaniyasanjay123@gmail.com" className="rounded-full bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10">nandaniyasanjay123@gmail.com</a>
              <a href="https://www.linkedin.com/in/sanjay-nandaniya-1585b4142/" target="_blank" rel="noreferrer" className="rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-400/20 hover:bg-blue-500/25">LinkedIn ↗</a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[{ value: "7+", label: "Years of experience" }, { value: "30+", label: "AI containers" }, { value: "350+", label: "Machines integrated" }, { value: "7+", label: "Industry domains" }].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <SectionTitle eyebrow="Profile">Architecting connected industrial intelligence</SectionTitle>
          <p className="max-w-5xl text-lg leading-8 text-slate-300">A seasoned Industry 4.0 and IIoT Architect with expertise spanning Edge AI, Digital Twins, data engineering and industrial cloud ecosystems. Proven ability to translate complex industrial challenges into scalable architectures that deliver measurable business value across global metals, oil &amp; gas, energy, manufacturing, life sciences and pharmaceutical environments, including compliance-driven implementations aligned with 21 CFR Part 11 and IQ/OQ/PQ requirements.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Solution Architecture", "IT/OT Transformation", "Data Engineering", "ETL & ELT", "GCP", "Kubernetes", "Digital Twins", "Edge AI", "GenAI & RAG", "Industrial Analytics"].map((item) => <span key={item} className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-sm text-cyan-100">{item}</span>)}
          </div>
        </section>

        <section className="py-20">
          <SectionTitle eyebrow="Selected Work">Signature projects</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">
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
          <SectionTitle eyebrow="Career">Professional experience</SectionTitle>
          <div className="space-y-6">
            {experience.map((job) => (
              <article key={job.company} className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:grid-cols-[240px_1fr] md:p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                  <p className="mt-2 text-cyan-300">{job.role}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.period}</p>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-300">
                  {job.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{bullet}</li>)}
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
            <SectionTitle eyebrow="Learning">Certifications</SectionTitle>
            <div className="flex flex-wrap gap-2">{["AWS Cloud Practitioner", "Azure AZ-900", "ThingWorx", "Kepware", "Ignition", "GenAI APIs"].map((item) => <span key={item} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10">{item}</span>)}</div>
          </div>
        </section>

        <section className="py-20">
          <SectionTitle eyebrow="Domain Knowledge">Industries & specializations</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-7"><h3 className="font-semibold text-white">Industries</h3><p className="mt-3 leading-7 text-slate-400">Life Sciences, Pharmaceuticals, Healthcare, Energy Grids, Oil & Gas, Metals and Manufacturing</p></div>
            <div className="rounded-2xl border border-white/10 p-7"><h3 className="font-semibold text-white">Specializations</h3><p className="mt-3 leading-7 text-slate-400">Edge AI Systems, Embedded AI, Digital Twins, Industry 4.0, Data Engineering, ETL, Cloud Architecture and IT/OT Integration</p></div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sanjay Nandaniya · AI, Data & IIoT Architect</p>
          <a href="mailto:nandaniyasanjay123@gmail.com" className="text-slate-400 hover:text-cyan-300">Let’s build connected intelligence →</a>
        </footer>
      </div>
    </main>
  );
}
