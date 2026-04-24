'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-10">

      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Sanjay Nandaniya
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Industry 4.0 & IIoT Architect | Edge AI | IT-OT Transformation
        </p>

        <p className="max-w-4xl text-gray-300 leading-relaxed">
          Architecting production-grade Digital Twins, Edge AI systems, and large-scale industrial cloud platforms. 
          7+ years of experience across pharma, manufacturing, energy, and automotive domains, bridging IT and OT 
          with scalable, resilient, and intelligent systems.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Professional Experience</h2>

        {/* Nagarro */}
        <div className="mb-10">
          <h3 className="text-xl font-bold">Nagarro (Mar 2024 – Present)</h3>
          <p className="text-gray-400 mb-3">Staff Engineer → Associate Staff Engineer</p>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Delivered containerized Edge AI workloads across Qualcomm, NXP, NVIDIA Jetson</li>
            <li>Validated 25+ AI/ML containers with DSP, GPU, NPU acceleration</li>
            <li>Built RAG pipelines with FAISS, multi-PDF ingestion, grounding validation</li>
            <li>Benchmarked LLMs: DeepSeek, Llama 3.2, Qwen, TinyLlama</li>
            <li>Created Locust-based load testing for LLM scalability</li>
            <li>Designed AWS-based IIoT platforms with microservices architecture</li>
          </ul>
        </div>

        {/* Accenture */}
        <div className="mb-10">
          <h3 className="text-xl font-bold">Accenture (Apr 2023 – Feb 2024)</h3>
          <p className="text-gray-400 mb-3">Integration Specialist Engineer (Industry X.0)</p>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Built enterprise Azure Digital Twin for real-time asset monitoring</li>
            <li>Designed AKS-based ingestion for high-volume time-series data</li>
            <li>Integrated PLC, SCADA via OPC into Azure IoT ecosystem</li>
            <li>Created 11-level asset hierarchy across enterprise systems</li>
          </ul>
        </div>

        {/* Wipro */}
        <div className="mb-10">
          <h3 className="text-xl font-bold">Wipro Technologies (Nov 2021 – Apr 2023)</h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Developed Azure-based Cloud Historian across 5 sites</li>
            <li>Integrated GE Historian, Aspen, Kepware, LIMS</li>
            <li>Built Industrial IoT MES platform (“Process in a Box”) for 6 plants</li>
            <li>Enabled real-time monitoring, predictive maintenance</li>
          </ul>
        </div>

        {/* Torrent Pharma */}
        <div className="mb-10">
          <h3 className="text-xl font-bold">Torrent Pharmaceuticals (Jun 2019 – Oct 2021)</h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Integrated 100+ machines with MES, SCADA, OPC UA</li>
            <li>Implemented 21 CFR Part 11 compliance systems</li>
            <li>Designed workflows, recipes, and reporting systems</li>
          </ul>
        </div>

        {/* Sanofi */}
        <div>
          <h3 className="text-xl font-bold">Sanofi (Sep 2018 – Jun 2019)</h3>
          <p className="text-gray-300">Graduate Trainee Engineer – Instrumentation</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Key Projects</h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold">Edge AI Platform (Advantech)</h3>
            <p className="text-gray-400">
              LLM + CV + RAG validation across Qualcomm, NXP, NVIDIA
            </p>
            <p className="text-gray-300">
              Built production-grade AI validation pipelines including benchmarking,
              RAG evaluation, and hardware acceleration validation across DSP/NPU/GPU.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Industrial IoT Platforms (Multi-domain)</h3>
            <p className="text-gray-300">
              Designed AWS-based microservices IoT platforms integrating OPC UA, BACnet,
              MQTT with Flink pipelines and ThingsBoard visualization.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Azure Digital Twin</h3>
            <p className="text-gray-300">
              Enterprise digital twin with real-time ingestion, AKS pipelines,
              and asset hierarchy modeling.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Cloud Historian</h3>
            <p className="text-gray-300">
              Centralized time-series analytics platform using Azure IoT and TSI.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Process in a Box (MES)</h3>
            <p className="text-gray-300">
              Full-scale MES + IIoT platform across 6 plants using ThingWorx & Kepware.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Core Skills</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-300">

          <div>
            <h4 className="font-bold">Edge AI & ML</h4>
            <p>LLMs, RAG, YOLO, benchmarking, DSP/NPU/GPU acceleration</p>
          </div>

          <div>
            <h4 className="font-bold">IIoT & Industry 4.0</h4>
            <p>OPC UA, MQTT, BACnet, MES, SCADA, Digital Twins</p>
          </div>

          <div>
            <h4 className="font-bold">Cloud Platforms</h4>
            <p>AWS IoT, Azure IoT, AKS, Greengrass, Kinesis, ADX</p>
          </div>

          <div>
            <h4 className="font-bold">Programming</h4>
            <p>Python, FastAPI, Node.js, SQL</p>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Recognition</h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>Nagarro Care Award (2x)</li>
          <li>Advantech PM & Lead Appreciation</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-300">📧 nandaniyasanjay123@gmail.com</p>
        <p className="text-gray-300">📞 +91-9687757217</p>
        <p className="text-gray-300">
          🔗 linkedin.com/in/sanjay-nandaniya-1585b4142
        </p>
      </section>

    </main>
  );
}
