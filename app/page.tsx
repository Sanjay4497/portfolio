'use client';

import { motion } from 'framer-motion';

const Section = ({ title, children }: any) => (
  <section className="mb-24">
    <h2 className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight">
      {title}
    </h2>
    {children}
  </section>
);

const Card = ({ children }: any) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-24 py-12">

      {/* HERO */}
      <section className="mb-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sanjay Nandaniya
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          Industry 4.0 Architect • Edge AI • Digital Twins • IT-OT Transformation
        </p>

        <p className="max-w-5xl text-gray-300 leading-relaxed text-lg">
          Architecting production-grade Edge AI systems, Digital Twins, and industrial cloud platforms across pharma, manufacturing, energy, and automotive domains. 
          Bridging IT and OT through scalable architectures that deliver measurable operational intelligence, resilience, and business impact.
        </p>

        <div className="mt-6 text-gray-400">
          <p>📧 nandaniyasanjay123@gmail.com</p>
          <p>📞 +91-9687757217</p>
          <p>🔗 linkedin.com/in/sanjay-nandaniya-1585b4142</p>
        </div>
      </section>

      {/* IMPACT */}
      <Section title="Impact & Scale">
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <h3 className="text-3xl font-bold">25+</h3>
            <p className="text-gray-400">AI/ML Containers Validated</p>
          </Card>
          <Card>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-gray-400">Industrial Assets Integrated</p>
          </Card>
          <Card>
            <h3 className="text-3xl font-bold">6+</h3>
            <p className="text-gray-400">Plants Digitized (MES/IIoT)</p>
          </Card>
          <Card>
            <h3 className="text-3xl font-bold">7+ yrs</h3>
            <p className="text-gray-400">Industry Experience</p>
          </Card>
        </div>
      </Section>

      {/* EXPERTISE */}
      <Section title="Core Expertise">
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <Card>Edge AI Validation • LLM • RAG • Computer Vision</Card>
          <Card>IIoT Architecture • OPC UA • MQTT • BACnet</Card>
          <Card>Digital Twins • MES • SCADA Integration</Card>
          <Card>AWS & Azure Industrial Platforms</Card>
          <Card>DSP / NPU / GPU Acceleration</Card>
          <Card>Performance Benchmarking & Stability Engineering</Card>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Professional Experience">

        <div className="space-y-10">

          <Card>
            <h3 className="text-xl font-bold">Nagarro (2024 – Present)</h3>
            <p className="text-gray-400 mb-4">Staff Engineer → Associate Staff Engineer</p>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>Delivered production-grade Edge AI across Qualcomm, NXP, NVIDIA</li>
              <li>Validated LLM pipelines (DeepSeek, Llama, Qwen) with RAG systems</li>
              <li>Built benchmarking frameworks (Q4/Q8, latency, throughput)</li>
              <li>Designed large-scale IoT architectures on AWS</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">Accenture (2023 – 2024)</h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>Built enterprise Azure Digital Twin</li>
              <li>Designed AKS ingestion pipelines</li>
              <li>Integrated PLC/SCADA into cloud systems</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">Wipro (2021 – 2023)</h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>Developed cloud historian across 5 sites</li>
              <li>Built MES platform across 6 plants</li>
              <li>Integrated OT systems with Azure</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">Torrent Pharma (2019 – 2021)</h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>Integrated 100+ machines with MES & OPC UA</li>
              <li>Implemented 21 CFR Part 11 systems</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">Sanofi (2018 – 2019)</h3>
            <p className="text-gray-300">Graduate Trainee Engineer</p>
          </Card>

        </div>
      </Section>

      {/* SIGNATURE PROJECTS */}
      <Section title="Signature Projects">

        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <h3 className="font-bold text-lg">Edge AI Platform (Advantech)</h3>
            <p className="text-gray-400">LLM + CV + RAG Systems</p>
            <p className="text-gray-300 mt-2">
              Cross-platform AI validation across DSP/NPU/GPU with benchmarking, RAG pipelines, and system stability engineering.
            </p>
          </Card>

          <Card>
            <h3 className="font-bold text-lg">Industrial IoT Platforms</h3>
            <p className="text-gray-300 mt-2">
              AWS-based microservices architecture integrating OPC UA, BACnet, MQTT with real-time analytics.
            </p>
          </Card>

          <Card>
            <h3 className="font-bold text-lg">Azure Digital Twin</h3>
            <p className="text-gray-300 mt-2">
              Enterprise digital twin with 11-level asset hierarchy and real-time ingestion.
            </p>
          </Card>

          <Card>
            <h3 className="font-bold text-lg">Cloud Historian</h3>
            <p className="text-gray-300 mt-2">
              Time-series analytics platform integrating multiple OT systems across sites.
            </p>
          </Card>

        </div>

      </Section>

      {/* TECH STACK */}
      <Section title="Technology Stack">

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <Card>
            <h4 className="font-bold mb-2">Edge AI</h4>
            <p>LLMs, RAG, YOLO, DSP/NPU/GPU</p>
          </Card>

          <Card>
            <h4 className="font-bold mb-2">Cloud</h4>
            <p>AWS IoT, Azure IoT, AKS, Greengrass</p>
          </Card>

          <Card>
            <h4 className="font-bold mb-2">Industrial</h4>
            <p>OPC UA, MQTT, SCADA, MES</p>
          </Card>

          <Card>
            <h4 className="font-bold mb-2">Backend</h4>
            <p>Python, FastAPI, Node.js</p>
          </Card>

          <Card>
            <h4 className="font-bold mb-2">Data</h4>
            <p>Postgres, MSSQL, FAISS</p>
          </Card>

        </div>

      </Section>

      {/* RECOGNITION */}
      <Section title="Recognition">
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Nagarro Care Award (2x)</li>
          <li>Advantech PM & Lead Appreciation</li>
        </ul>
      </Section>

      {/* FOOTER */}
      <footer className="text-gray-500 mt-20">
        © 2026 Sanjay Nandaniya — Built with precision engineering mindset
      </footer>

    </main>
  );
}
