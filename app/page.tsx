"use client";

import { motion } from "framer-motion";

export default function Portfolio() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const email = () => {
    window.location.href = "mailto:nandaniyasanjay123@gmail.com";
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 border-b border-cyan-500/20">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-6xl font-bold text-cyan-400">
          SANJAY HAJABHAI NANDANIYA
        </motion.h1>

        <p className="text-gray-400 mt-4 text-lg">
          Industry 4.0 & IIoT Architect | Edge AI | Digital Twin
        </p>

        <p className="text-gray-500 mt-2 text-sm">
          📞 +91-9687757217 | ✉ nandaniyasanjay123@gmail.com
        </p>

        <a
          href="https://linkedin.com/in/sanjay-nandaniya-1585b4142"
          target="_blank"
          className="text-cyan-400 underline mt-2 inline-block"
        >
          LinkedIn Profile
        </a>

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={() => scrollTo("projects")} className="bg-cyan-400 text-black px-6 py-2 rounded-xl">
            View Work
          </button>
          <button onClick={() => scrollTo("contact")} className="border border-cyan-400 px-6 py-2 rounded-xl">
            Contact
          </button>
        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-4 gap-4 text-center">
        {[
          "7+ Years Experience",
          "25+ AI Models Validated",
          "Multi-Plant Deployments",
          "Edge AI Specialist",
        ].map((item) => (
          <div key={item} className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            {item}
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">About</h2>
        <p className="text-gray-400 leading-relaxed">
          Industry 4.0 and IIoT Architect with deep expertise in Edge AI, Digital Twins,
          and industrial cloud platforms. Known for building production-grade systems
          across pharma, energy, and manufacturing domains.
        </p>
      </section>

      {/* CORE SKILLS */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Core Expertise</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Edge AI (LLM, RAG, Computer Vision)",
            "Industrial IoT & MES",
            "AWS & Azure IoT",
            "OPC UA, MQTT, BACnet",
            "Docker, FastAPI, Microservices",
            "Digital Twin Systems",
            "Hardware Acceleration (GPU/NPU)",
            "Industrial Data Pipelines",
          ].map((skill) => (
            <div key={skill} className="bg-gray-900 p-4 rounded-xl border border-cyan-500/20">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Key Projects</h2>

        <div className="space-y-6">

          {/* EDGE AI */}
          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <h3 className="text-xl font-semibold">Advantech Edge AI Platform</h3>
            <p className="text-gray-400 text-sm mt-2">
              Built and validated production-grade LLM + RAG + CV systems across NVIDIA Jetson,
              Qualcomm DSP/NPU, and NXP platforms with benchmarking, quantization, and thermal validation.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Tech: LangChain, Ollama, Llama.cpp, YOLO, FAISS, Docker
            </p>
          </div>

          {/* IOT */}
          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <h3 className="text-xl font-semibold">Industrial IoT Platform</h3>
            <p className="text-gray-400 text-sm mt-2">
              Designed AWS-based scalable IoT architecture integrating OPC UA, MQTT, BACnet with
              microservices and real-time analytics across multiple industries.
            </p>
          </div>

          {/* DIGITAL TWIN */}
          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <h3 className="text-xl font-semibold">Azure Digital Twin</h3>
            <p className="text-gray-400 text-sm mt-2">
              Delivered enterprise-scale Digital Twin with real-time OT integration and
              hierarchical asset modeling.
            </p>
          </div>

          {/* HISTORIAN */}
          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <h3 className="text-xl font-semibold">Cloud Historian</h3>
            <p className="text-gray-400 text-sm mt-2">
              Built multi-site industrial data platform using Azure IoT Hub, Stream Analytics,
              and Data Lake with predictive insights.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Experience</h2>

        <div className="space-y-6">

          <div className="bg-gray-900 p-5 rounded-xl border border-cyan-500/20">
            <h3>Nagarro</h3>
            <p className="text-gray-400">MAR-2024 – PRESENT</p>
            <p>Staff Engineer (DEC-2025 – PRESENT)</p>
            <p>Associate Staff Engineer (MAR-2024 – DEC-2025)</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-cyan-500/20">
            <h3>Accenture</h3>
            <p className="text-gray-400">APR-2023 – FEB-2024</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-cyan-500/20">
            <h3>Wipro</h3>
            <p className="text-gray-400">NOV-2021 – APR-2023</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-cyan-500/20">
            <h3>Torrent Pharma</h3>
            <p className="text-gray-400">JUN-2019 – OCT-2021</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-cyan-500/20">
            <h3>Sanofi</h3>
            <p className="text-gray-400">SEP-2018 – JUN-2019</p>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Education</h2>
        <p className="text-gray-400">
          B.Tech Instrumentation & Control – Government Engineering College, Rajkot
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20 border-t border-cyan-500/20">
        <h2 className="text-2xl font-bold text-cyan-400">Contact</h2>
        <p className="text-gray-400 mt-2">📧 nandaniyasanjay123@gmail.com</p>

        <button onClick={email} className="mt-6 bg-cyan-400 text-black px-6 py-2 rounded-xl">
          Email Me
        </button>
      </section>

    </div>
  );
}