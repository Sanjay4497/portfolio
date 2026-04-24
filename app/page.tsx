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
            Sanjay Hajabhai Nandaniya
          </motion.h1>

          <p className="mt-4 text-xl text-gray-300">
            Industry 4.0 & IIoT Architect | Edge AI | IT-OT Transformation Specialist
          </p>

          <p className="mt-6 text-gray-400 max-w-4xl">
            Building production-grade Digital Twins, Edge AI systems, and industrial cloud platforms. Specialized in LLM, RAG, and computer vision workloads on constrained edge hardware with strong IT-OT integration across pharma, manufacturing, energy, and automotive industries.
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
            A consummate Industry 4.0 and IIoT Architect with deep expertise across Edge AI, Digital Twins, and industrial cloud ecosystems. Proven ability to translate complex industrial challenges into scalable architectures delivering measurable business value. Strong experience in regulated environments (21 CFR Part 11, IQ/OQ/PQ) ensuring compliance-driven engineering.
          </p>
        </section>

        {/* TECH STACK (TABLE FORMAT) */}
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
                  <td className="p-4 font-semibold">IIoT & Platforms</td>
                  <td className="p-4 text-gray-400">
                    AWS IoT (Core, Greengrass, SiteWise, TwinMaker, Kinesis, EC2, Lambda, S3), Azure IoT (Hub, ADX, ADT, AKS, Data Lake), ThingWorx, Ignition, AVEVA
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Edge AI & ML</td>
                  <td className="p-4 text-gray-400">
                    NVIDIA Jetson, Qualcomm DSP/NPU, NXP i.MX, Ollama, LangChain, Llama.cpp, YOLO, RAG Pipelines, Locust, stress-ng
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Databases</td>
                  <td className="p-4 text-gray-400">
                    PostgreSQL, MS SQL, Oracle, InfluxDB, GE Historian, FAISS
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Backend</td>
                  <td className="p-4 text-gray-400">
                    Python (FastAPI, Flask), Node.js, SQL, Kusto, Microservices, Docker, Event-driven systems
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Protocols</td>
                  <td className="p-4 text-gray-400">
                    OPC UA/DA, MQTT Sparkplug, BACnet, Modbus, REST, WebSocket
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Visualization</td>
                  <td className="p-4 text-gray-400">
                    Grafana, ThingWorx Mashups, Ignition Perspective, SSRS
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Monitoring</td>
                  <td className="p-4 text-gray-400">
                    jtop, tegrastats, Qualcomm Profiler, system logs, htop
                  </td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-semibold">Tools</td>
                  <td className="p-4 text-gray-400">
                    Draw.io, Lucidchart, ELK Stack, Technical Documentation
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Professional Experience</h2>

          <div className="space-y-10">

            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Nagarro</h3>
              <p className="text-gray-400">Staff Engineer</p>
              <ul className="mt-3 list-disc ml-5 text-gray-300 space-y-2">
                <li>Delivered Edge AI workloads across Qualcomm, NXP, NVIDIA</li>
                <li>LLM benchmarking (DeepSeek, Llama, Qwen)</li>
                <li>RAG pipelines with FAISS and multi-document ingestion</li>
                <li>DSP/GPU/NPU acceleration validation</li>
                <li>Locust-based load testing & system profiling</li>
              </ul>
            </div>

            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Accenture</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-300">
                <li>Azure Digital Twin enterprise implementation</li>
                <li>PLC, SCADA, IoT integration</li>
              </ul>
            </div>

            <div className="border-l border-gray-700 pl-6">
              <h3 className="text-xl font-semibold">Wipro</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-300">
                <li>Cloud Historian across 5 sites</li>
                <li>MES + IIoT platform development</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "AWS Fundamentals",
              "Microsoft Azure AZ-900",
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
          <p className="text-gray-400">
            Pharmaceuticals, Manufacturing, Energy Grids, Oil & Gas, Metals, Healthcare
          </p>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 pt-10 border-t border-white/10">
          © 2026 Sanjay Nandaniya | AI & IIoT Architect
        </footer>

      </div>
    </div>
  );
}
