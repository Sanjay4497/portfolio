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
          Industry 4.0 Architect <br />
          <span className="text-gray-400">Edge AI • Digital Twins • IIoT</span>
        </h2>

        <p className="mt-6 max-w-3xl text-gray-400 leading-relaxed">
          Designing production-grade industrial systems that bridge Edge AI, Digital Twins,
          and cloud-native architectures. Focused on building scalable, resilient,
          and compliant solutions across manufacturing and energy domains.
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
          With over seven years of experience in industrial automation and IIoT ecosystems,
          I specialize in translating complex operational challenges into scalable digital
          architectures. My work spans Edge AI validation, Digital Twin systems, and
          enterprise IoT platforms, delivering measurable impact across pharma,
          manufacturing, and energy sectors.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl text-white mb-8">Experience</h3>

        <div className="space-y-8">

          <div>
            <h4 className="text-white font-semibold">Nagarro</h4>
            <p className="text-gray-500 text-sm">MAR-2024 – PRESENT</p>

            <ul className="mt-3 text-sm text-gray-400 space-y-2">
              <li>• Delivered Edge AI systems across Qualcomm, NXP, NVIDIA Jetson</li>
              <li>• Built LLM + RAG pipelines with benchmarking and optimization</li>
              <li>• Designed scalable validation frameworks for production AI</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Accenture</h4>
            <p className="text-gray-500 text-sm">APR-2023 – FEB-2024</p>
            <p className="text-gray-400 text-sm mt-2">
              Built enterprise Azure Digital Twin enabling real-time operational visibility.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Wipro</h4>
            <p className="text-gray-500 text-sm">NOV-2021 – APR-2023</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl text-white mb-8">Selected Work</h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
            <h4 className="text-white font-semibold mb-2">Edge AI Platform</h4>
            <p className="text-sm text-gray-400">
              Built multi-platform Edge AI pipelines integrating LLMs, CV, and RAG systems
              across heterogeneous hardware environments.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
            <h4 className="text-white font-semibold mb-2">Industrial IoT Platform</h4>
            <p className="text-sm text-gray-400">
              Architected scalable AWS-based IoT systems integrating OPC UA, MQTT,
              and real-time analytics.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl text-white mb-6">Capabilities</h3>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <h4 className="text-white mb-2">Edge AI</h4>
            <p>LLMs, RAG, Computer Vision, Benchmarking</p>
          </div>

          <div>
            <h4 className="text-white mb-2">IIoT Systems</h4>
            <p>OPC UA, MQTT, BACnet, MES, Digital Twins</p>
          </div>

          <div>
            <h4 className="text-white mb-2">Cloud</h4>
            <p>AWS IoT, Azure Digital Twin, Microservices</p>
          </div>

          <div>
            <h4 className="text-white mb-2">Backend</h4>
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
