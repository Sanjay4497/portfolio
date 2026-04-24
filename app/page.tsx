"use client";

export default function Portfolio() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-300 min-h-screen font-sans">

      {/* NAV */}
      <header className="border-b border-gray-800 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto flex justify-between p-4 text-sm">
          <h1 className="font-semibold text-white">Sanjay Nandaniya</h1>
          <div className="flex gap-6">
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-white leading-tight">
          Industry 4.0 Architect
          <br />
          <span className="text-gray-400">Edge AI • Digital Twins • IIoT</span>
        </h2>

        <p className="mt-6 max-w-3xl text-gray-400 leading-relaxed">
          7+ years of experience designing and delivering industrial-scale systems
          across Edge AI, Digital Twins, and cloud-native IIoT architectures.
          Specialized in bridging IT-OT systems with real-time intelligence.
        </p>

        <div className="mt-8 text-sm text-gray-500">
          +91-9687757217 • nandaniyasanjay123@gmail.com • 
          <a href="https://linkedin.com/in/sanjay-nandaniya-1585b4142" className="text-blue-400 ml-1">LinkedIn</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl text-white mb-6">Profile</h3>

        <p className="text-gray-400 leading-relaxed max-w-4xl">
          Industry 4.0 Architect specializing in Edge AI validation, IIoT systems,
          and Digital Twin platforms. Proven experience across pharma, energy,
          manufacturing, and automotive sectors delivering production-grade
          solutions using AWS, Azure, and industrial protocols.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl text-white mb-8">Professional Experience</h3>

        <div className="space-y-10 text-sm">

          {/* Nagarro */}
          <div>
            <h4 className="text-white font-semibold">Nagarro</h4>
            <p className="text-gray-500">MAR-2024 – PRESENT</p>

            <ul className="mt-3 text-gray-400 space-y-2">
              <li>• Staff Engineer (DEC-2025 – PRESENT)</li>
              <li>• Associate Staff Engineer (MAR-2024 – DEC-2025)</li>
              <li>• Edge AI validation across Qualcomm, NXP, NVIDIA Jetson</li>
              <li>• LLM + RAG pipelines with FAISS, LangChain, Ollama</li>
              <li>• 25+ AI/ML container benchmarking & optimization</li>
            </ul>
          </div>

          {/* Accenture */}
          <div>
            <h4 className="text-white font-semibold">Accenture</h4>
            <p className="text-gray-500">APR-2023 – FEB-2024</p>
            <p className="text-gray-400 mt-2">
              Built enterprise-scale Azure Digital Twin with real-time OT integration,
              AKS ingestion layer, and 11-level asset hierarchy.
            </p>
          </div>

          {/* Wipro */}
          <div>
            <h4 className="text-white font-semibold">Wipro Technologies</h4>
            <p className="text-gray-500">NOV-2021 – APR-2023</p>
            <p className="text-gray-400 mt-2">
              Delivered cloud historian platform and Industrial IoT MES system across
              multi-site manufacturing environments.
            </p>
          </div>

          {/* Torrent */}
          <div>
            <h4 className="text-white font-semibold">Torrent Pharmaceutical</h4>
            <p className="text-gray-500">JUN-2019 – OCT-2021</p>
            <p className="text-gray-400 mt-2">
              Led MES–L2–L1 integration across 100+ machines with OPC UA and SCADA systems.
            </p>
          </div>

          {/* Sanofi */}
          <div>
            <h4 className="text-white font-semibold">Sanofi</h4>
            <p className="text-gray-500">SEP-2018 – JUN-2019</p>
            <p className="text-gray-400 mt-2">
              Instrumentation and automation support for API manufacturing systems.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl text-white mb-8">Key Projects</h3>

        <div className="space-y-8 text-sm text-gray-400">

          <div>
            <h4 className="text-white font-semibold">Advantech Edge AI Platform</h4>
            <p>
              Built and validated containerized AI workloads across Qualcomm DSP/NPU,
              NXP i.MX, and NVIDIA Jetson. Included LLM benchmarking, RAG pipelines,
              hardware acceleration validation, and long-run stability testing.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Industrial IoT Platform</h4>
            <p>
              Designed AWS-based IoT systems integrating OPC UA, BACnet, MQTT with
              microservices architecture using Docker, Flink, and ThingsBoard.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Azure Digital Twin</h4>
            <p>
              Developed enterprise Digital Twin platform with AKS, IoT Hub, ADX,
              and real-time industrial data integration.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Cloud Historian</h4>
            <p>
              Implemented Azure-based time-series analytics system integrating
              GE Historian, Aspen, and MES systems across 5 sites.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Industrial IoT MES Platform</h4>
            <p>
              Built ThingWorx-based MES platform for aluminium plants enabling
              real-time monitoring, predictive maintenance, and centralized operations.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl text-white mb-6">Technical Capabilities</h3>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">

          <div>
            <h4 className="text-white">Edge AI</h4>
            <p>LLM, RAG, Computer Vision, Benchmarking</p>
          </div>

          <div>
            <h4 className="text-white">IIoT Systems</h4>
            <p>OPC UA, MQTT, BACnet, MES, Digital Twins</p>
          </div>

          <div>
            <h4 className="text-white">Cloud Platforms</h4>
            <p>AWS IoT, Azure Digital Twin, Microservices</p>
          </div>

          <div>
            <h4 className="text-white">Backend</h4>
            <p>Python, FastAPI, Node.js, SQL</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} Sanjay Nandaniya
      </footer>

    </div>
  );
}
