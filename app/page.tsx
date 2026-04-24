"use client";

export default function Portfolio() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">

      {/* HEADER */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg">Sanjay Nandaniya</h1>
          <div className="flex gap-6 text-sm">
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold leading-tight">
          Industry 4.0 & IIoT Architect
        </h2>

        <p className="mt-3 text-gray-600">
          Edge AI • Digital Twins • IT-OT Transformation
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
          Industry 4.0 Architect with 7+ years of experience across industrial automation,
          Edge AI, Digital Twins, and cloud-native IT-OT ecosystems. Proven track record
          of delivering production-grade architectures across manufacturing, pharma,
          energy, and automotive domains.
        </p>

        <div className="mt-6 text-sm text-gray-600">
          📞 +91-9687757217 | ✉ nandaniyasanjay123@gmail.com | 
          <a href="https://linkedin.com/in/sanjay-nandaniya-1585b4142" className="underline ml-1">
            LinkedIn
          </a>
        </div>
      </section>

      {/* PROFILE SUMMARY */}
      <section className="max-w-6xl mx-auto p-8 border-t">
        <h3 className="text-2xl font-semibold mb-4">Profile Summary</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Edge AI validation across Qualcomm DSP/NPU, NXP i.MX, NVIDIA Jetson</li>
          <li>• 25+ AI/ML container validations with benchmarking and optimization</li>
          <li>• End-to-end IIoT & MES architectures (OPC UA, MQTT, BACnet)</li>
          <li>• AWS & Azure IoT platforms with Digital Twin implementations</li>
          <li>• Strong expertise in regulated environments (21 CFR Part 11, IQ/OQ/PQ)</li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto p-8 border-t">
        <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>

        <div className="space-y-6 text-sm">

          <div>
            <h4 className="font-semibold">Nagarro</h4>
            <p className="text-gray-500">MAR-2024 – PRESENT</p>
            <p>Staff Engineer (DEC-2025 – PRESENT)</p>
            <p>Associate Staff Engineer (MAR-2024 – DEC-2025)</p>
          </div>

          <div>
            <h4 className="font-semibold">Accenture</h4>
            <p className="text-gray-500">APR-2023 – FEB-2024</p>
            <p>Integration Specialist Engineer (Industry X.0)</p>
          </div>

          <div>
            <h4 className="font-semibold">Wipro Technologies</h4>
            <p className="text-gray-500">NOV-2021 – APR-2023</p>
          </div>

          <div>
            <h4 className="font-semibold">Torrent Pharmaceutical</h4>
            <p className="text-gray-500">JUN-2019 – OCT-2021</p>
          </div>

          <div>
            <h4 className="font-semibold">Sanofi</h4>
            <p className="text-gray-500">SEP-2018 – JUN-2019</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto p-8 border-t">
        <h3 className="text-2xl font-semibold mb-6">Key Projects</h3>

        <div className="space-y-6 text-sm text-gray-700">

          <div>
            <h4 className="font-semibold">Advantech Edge AI Platform</h4>
            <p>
              Delivered production-grade Edge AI workloads across Qualcomm, NXP,
              and NVIDIA Jetson platforms with LLM, CV, and RAG pipelines.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Industrial IoT Platform</h4>
            <p>
              Designed AWS-based IoT systems integrating OPC UA, MQTT, BACnet with
              real-time analytics and scalable microservices architecture.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Azure Digital Twin</h4>
            <p>
              Built enterprise-scale Digital Twin platform with OT integration and
              hierarchical asset modeling.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Cloud Historian</h4>
            <p>
              Developed multi-site industrial historian using Azure IoT and
              time-series analytics.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto p-8 border-t">
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>

        <p className="text-sm text-gray-700 leading-relaxed">
          Edge AI, LLM, RAG, Computer Vision | NVIDIA Jetson, Qualcomm DSP/NPU, NXP |
          LangChain, Ollama, YOLO | AWS IoT, Azure IoT | OPC UA, MQTT, BACnet |
          Docker, FastAPI, Node.js | ThingWorx, Ignition | SQL, FAISS
        </p>
      </section>

      {/* EDUCATION */}
      <section className="max-w-6xl mx-auto p-8 border-t">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <p className="text-sm text-gray-700">
          Bachelor of Technology – Instrumentation & Control<br/>
          Government Engineering College, Rajkot
        </p>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto p-8 border-t">
        <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>AWS Fundamentals</li>
          <li>Microsoft Azure AZ-900</li>
          <li>ThingWorx</li>
          <li>Kepware</li>
          <li>Ignition</li>
          <li>GenAI APIs</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto p-8 border-t text-center">
        <h3 className="text-xl font-semibold">Contact</h3>
        <p className="mt-3 text-gray-600">
          nandaniyasanjay123@gmail.com | +91-9687757217
        </p>
      </section>

    </div>
  );
}
