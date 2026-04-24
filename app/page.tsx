"use client";

export default function Portfolio() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans">

      {/* HEADER */}
      <header className="border-b border-gray-800 bg-gray-950 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg text-white">Sanjay Nandaniya</h1>
          <div className="flex gap-6 text-sm text-gray-400">
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold leading-tight text-white">
          Industry 4.0 & IIoT Architect
        </h2>

        <p className="mt-3 text-gray-400">
          Edge AI • Digital Twins • IT-OT Transformation
        </p>

        <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl">
          Industry 4.0 Architect with 7+ years of experience across industrial automation,
          Edge AI, Digital Twins, and cloud-native IT-OT ecosystems. Proven track record
          of delivering production-grade architectures across manufacturing, pharma,
          energy, and automotive domains.
        </p>

        <div className="mt-6 text-sm text-gray-400">
          📞 +91-9687757217 | ✉ nandaniyasanjay123@gmail.com | 
          <a href="https://linkedin.com/in/sanjay-nandaniya-1585b4142" className="underline ml-1 text-cyan-400">
            LinkedIn
          </a>
        </div>
      </section>

      {/* PROFILE SUMMARY */}
      <section className="max-w-6xl mx-auto p-8 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-white">Profile Summary</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Edge AI validation across Qualcomm DSP/NPU, NXP i.MX, NVIDIA Jetson</li>
          <li>• 25+ AI/ML container validations with benchmarking and optimization</li>
          <li>• End-to-end IIoT & MES architectures (OPC UA, MQTT, BACnet)</li>
          <li>• AWS & Azure IoT platforms with Digital Twin implementations</li>
          <li>• Strong expertise in regulated environments (21 CFR Part 11, IQ/OQ/PQ)</li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto p-8 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-6 text-white">Professional Experience</h3>

        <div className="space-y-6 text-sm">

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Nagarro</h4>
            <p className="text-gray-500">MAR-2024 – PRESENT</p>
            <p className="text-gray-300">Staff Engineer (DEC-2025 – PRESENT)</p>
            <p className="text-gray-300">Associate Staff Engineer (MAR-2024 – DEC-2025)</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Accenture</h4>
            <p className="text-gray-500">APR-2023 – FEB-2024</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Wipro Technologies</h4>
            <p className="text-gray-500">NOV-2021 – APR-2023</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Torrent Pharmaceutical</h4>
            <p className="text-gray-500">JUN-2019 – OCT-2021</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Sanofi</h4>
            <p className="text-gray-500">SEP-2018 – JUN-2019</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto p-8 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-6 text-white">Key Projects</h3>

        <div className="space-y-6 text-sm text-gray-300">

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Advantech Edge AI Platform</h4>
            <p>
              Delivered production-grade Edge AI workloads across Qualcomm, NXP,
              and NVIDIA Jetson platforms with LLM, CV, and RAG pipelines.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Industrial IoT Platform</h4>
            <p>
              Designed AWS-based IoT systems integrating OPC UA, MQTT, BACnet with
              real-time analytics and scalable microservices architecture.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Azure Digital Twin</h4>
            <p>
              Built enterprise-scale Digital Twin platform with OT integration.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white">Cloud Historian</h4>
            <p>
              Developed multi-site industrial historian using Azure IoT and analytics.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto p-8 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-white">Technical Skills</h3>

        <p className="text-sm text-gray-300 leading-relaxed">
          Edge AI, LLM, RAG, Computer Vision | NVIDIA Jetson, Qualcomm DSP/NPU, NXP |
          LangChain, Ollama, YOLO | AWS IoT, Azure IoT | OPC UA, MQTT, BACnet |
          Docker, FastAPI, Node.js | ThingWorx, Ignition | SQL, FAISS
        </p>
      </section>

      {/* EDUCATION */}
      <section className="max-w-6xl mx-auto p-8 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
        <p className="text-sm text-gray-300">
          Bachelor of Technology – Instrumentation & Control<br/>
          Government Engineering College, Rajkot
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto p-8 border-t border-gray-800 text-center">
        <h3 className="text-xl font-semibold text-white">Contact</h3>
        <p className="mt-3 text-gray-400">
          nandaniyasanjay123@gmail.com | +91-9687757217
        </p>
      </section>

    </div>
  );
}
