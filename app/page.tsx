"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="mb-20">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl font-bold">
            Sanjay Nandaniya
          </motion.h1>

          <p className="mt-4 text-xl text-gray-300">
            Industry 4.0 & IIoT Architect | Edge AI | IT-OT Transformation Specialist
          </p>

          <p className="mt-6 text-gray-400 max-w-4xl">
            Building production-grade Digital Twins, Edge AI systems, and industrial cloud platforms.
            Specialized in LLM, RAG, and computer vision workloads on constrained edge hardware with strong IT-OT integration.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/10 rounded-xl">📞 +91-9687757217</span>
            <span className="px-4 py-2 bg-white/10 rounded-xl">✉ nandaniyasanjay123@gmail.com</span>
            <a href="https://www.linkedin.com/in/sanjay-nandaniya-1585b4142/" className="px-4 py-2 bg-blue-500/20 rounded-xl">LinkedIn</a>
          </div>
        </section>

        {/* METRICS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            {label:"AI Containers",value:"25+"},
            {label:"Experience",value:"7+ Years"},
            {label:"Machines Integrated",value:"100+"},
            {label:"Industries",value:"5+"}
          ].map((item,i)=>(
            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </section>

        {/* PROFILE SUMMARY */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Profile Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            A consummate Industry 4.0 & IIoT Architect with deep expertise across Edge AI, Digital Twins, and industrial cloud ecosystems.
            Proven ability to translate complex industrial challenges into scalable architectures delivering measurable business value.
            Strong experience in regulated environments (21 CFR Part 11, IQ/OQ/PQ).
          </p>
        </section>

        {/* SIGNATURE PROJECTS */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Signature Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title:"Edge AI Platform Validation (Advantech)",
                desc:"Validated 25+ AI/ML containers across Qualcomm, NXP & NVIDIA with LLM, CV, and RAG pipelines."
              },
              {
                title:"Industrial IoT Platform",
                desc:"Designed scalable AWS IIoT platform integrating OPC UA, BACnet, MQTT and microservices."
              },
              {
                title:"Digital Twin Systems",
                desc:"Built AWS & Azure Digital Twins enabling real-time monitoring and predictive analytics."
              },
              {
                title:"Cloud Historian",
                desc:"Azure-based big data historian integrating GE, Aspen, SQL & IoT systems."
              }
            ].map((p,i)=>(
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Technology Stack</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-4">Category</th>
                  <th className="p-4">Technologies</th>
                </tr>
              </thead>
              <tbody>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">IIoT & Industrial Platforms</td>
                  <td className="p-4 text-gray-400">
                    AWS IoT (Core, Greengrass, SiteWise, TwinMaker, Kinesis, Flink, EC2, Lambda, IAM, RDS, ECR, S3, Grafana) <br/>
                    Azure IoT (IoT Hub, Event Hub, Stream Analytics, Logic Apps, ADX, ADT, AKS, ADF, Data Lake, Storage, TSI, Cosmos DB) <br/>
                    ThingWorx, Ignition, Aspen Cloud Connect, AVEVA PriSM
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Edge AI & ML</td>
                  <td className="p-4 text-gray-400">
                    NVIDIA Jetson, Qualcomm DSP/NPU, NXP i.MX <br/>
                    Ollama, LangChain, Genie, Llama.cpp <br/>
                    YOLO (Detection, Segmentation, Pose) <br/>
                    Locust, stress-ng
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Databases</td>
                  <td className="p-4 text-gray-400">
                    PostgreSQL, MSSQL, Oracle <br/>
                    InfluxDB, GE Historian, AspenTech <br/>
                    FAISS
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Backend</td>
                  <td className="p-4 text-gray-400">
                    Python (FastAPI, Flask), Node.js, SQL, Kusto <br/>
                    Microservices, Docker, Event-driven systems
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Protocols</td>
                  <td className="p-4 text-gray-400">
                    OPC UA, MQTT, BACnet, Modbus, REST, WebSocket
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Visualization & Monitoring</td>
                  <td className="p-4 text-gray-400">
                    Grafana, ThingWorx, Ignition <br/>
                    SSRS, Report Builder <br/>
                    jtop, tegrastats
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Tools</td>
                  <td className="p-4 text-gray-400">
                    Draw.io, Lucidchart, ELK Stack
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* EXPERIENCE */}
        {/* EXPERIENCE */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Professional Experience</h2>

          <div className="space-y-10">

            {/* Nagarro */}
            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Nagarro</h3>
              <p className="text-gray-400">Staff Engineer (Mar 2024 – Present)</p>

              <ul className="mt-3 list-disc ml-5 text-gray-300 space-y-2">
                <li>Validated 25+ containerized AI/ML workloads across Qualcomm DSP/NPU, NXP i.MX, and NVIDIA Jetson platforms</li>
                <li>Executed LLM benchmarking (DeepSeek, Llama 3.2, Qwen, TinyLlama) across Ollama, LangChain, Genie, and Llama.cpp</li>
                <li>Designed RAG pipelines with FAISS, multi-PDF ingestion, grounding validation, and long-run stability testing</li>
                <li>Performed DSP/GPU/NPU passthrough validation using SNPE, QNN, jtop, tegrastats, and Qualcomm Profiler</li>
                <li>Built Locust-based load testing framework with 100+ prompt scenarios for LLM performance analysis</li>
                <li>Conducted thermal, power, and stress testing ensuring stable inference under production constraints</li>
                <li>Developed Python tools for Jetson tegrastats parsing and NXP NNStreamer monitoring</li>
              </ul>
            </div>

            {/* Accenture */}
            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Accenture</h3>
              <p className="text-gray-400">Integration Specialist Engineer (Apr 2023 – Feb 2024)</p>

              <ul className="mt-3 list-disc ml-5 text-gray-300 space-y-2">
                <li>Designed and implemented enterprise-scale Azure Digital Twin solutions for industrial assets</li>
                <li>Integrated real-time OT data from PLCs, SCADA, and field devices using OPC UA and IoT Hub</li>
                <li>Built scalable ingestion pipelines using Azure Stream Analytics, Event Hub, and ADX</li>
                <li>Developed Flask-based APIs and deployed workloads on AKS for high-throughput data processing</li>
                <li>Modeled multi-level asset hierarchies (enterprise → machine level) for digital twin environments</li>
                <li>Collaborated directly with clients for solution design, delivery, and optimization</li>
              </ul>
            </div>

            {/* Wipro */}
            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Wipro</h3>
              <p className="text-gray-400">Control System Project Engineer (Nov 2021 – Apr 2023)</p>

              <ul className="mt-3 list-disc ml-5 text-gray-300 space-y-2">
                <li>Implemented Azure-based cloud historian platform integrating GE Historian, Aspen, and SQL systems</li>
                <li>Enabled real-time analytics using Azure IoT Hub, Stream Analytics, Data Lake, and TSI</li>
                <li>Built IIoT pipelines integrating PLCs, SCADA systems, and energy meters via OPC and MQTT</li>
                <li>Developed custom dashboards, alerts, and reporting systems for operational insights</li>
                <li>Standardized data ingestion pipelines and improved data quality through schema optimization</li>
                <li>Led sprint planning, estimation, and client communication for multi-site deployments</li>
              </ul>
            </div>

            {/* Torrent Pharma */}
            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Torrent Pharmaceuticals</h3>
              <p className="text-gray-400">Executive Engineer (Jun 2019 – Oct 2021)</p>

              <ul className="mt-3 list-disc ml-5 text-gray-300 space-y-2">
                <li>Led MES–L2–L1 integration across 100+ machines using OPC UA and centralized SCADA systems</li>
                <li>Implemented 21 CFR Part 11 compliant systems including audit trails, user access control, and reporting</li>
                <li>Developed SSRS-based reporting solutions and web dashboards for manufacturing insights</li>
                <li>Integrated PLCs, HMIs, SCADA, and weighing systems into unified IIoT architecture</li>
                <li>Performed IQ/OQ validation, equipment qualification, and compliance-driven automation upgrades</li>
              </ul>
            </div>

            {/* Sanofi */}
            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Sanofi</h3>
              <p className="text-gray-400">Graduate Trainee Engineer (Sep 2018 – Jun 2019)</p>

              <ul className="mt-3 list-disc ml-5 text-gray-300 space-y-2">
                <li>Supported instrumentation and automation systems for pharmaceutical manufacturing processes</li>
                <li>Worked with PLCs, SCADA, and field instruments for plant operations and maintenance</li>
                <li>Assisted in troubleshooting, calibration, and system optimization activities</li>
              </ul>
            </div>

          </div>
        </section>
        {/* RECOGNITION */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Recognition</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              Nagarro Advantech PM & Lead Appreciation
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              Nagarro Care Award (2×)
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "AWS Cloud Practitioner",
              "Azure AZ-900",
              "ThingWorx",
              "Kepware",
              "Ignition",
              "GenAI APIs"
            ].map((c,i)=>(
              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">{c}</div>
            ))}
          </div>
        </section>

        {/* DOMAINS */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Domains</h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-2">Industries</h3>
              <p>
                Life Sciences, Pharmaceuticals, Healthcare, Energy Grids,
                Oil & Gas, Metals, Manufacturing
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-2">Specializations</h3>
              <p>
                Edge AI Systems, Embedded AI, Digital Twins, Industry 4.0
              </p>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 pt-10 border-t border-white/10">
          © 2026 Sanjay Nandaniya | AI & IIoT Architect
        </footer>

      </div>
    </div>
  );
}
