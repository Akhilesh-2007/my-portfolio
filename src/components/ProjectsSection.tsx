import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Return Triage & Fraud Adjudication",
    subtitle: "Multi-agent system for intelligent e-commerce return decisions",
    tech: ["Python", "LangGraph", "XGBoost", "Google Gemini", "Computer Vision", "RAG", "ChromaDB", "FastAPI", "NLP"],
    bullets: [
      "Developed an autonomous multi-agent return triage system for detecting suspicious e-commerce returns while reducing false rejections of genuine customers.",
      "Built a LangGraph-based multi-agent architecture where specialized agents analyze customer behavior, return text, product images, and company policies.",
      "Integrated a calibrated XGBoost risk model, Gemini LLM, computer vision/image analysis, and ChromaDB-based policy RAG to generate explainable decisions (approve, reject, escalate).",
    ],
    live: "https://return-triage-main.vercel.app/",
    github: "https://github.com/Akhilesh-2007/return-triage",
    color: "from-primary to-accent",
  },
  {
    title: "Trainly",
    subtitle: "Learning Management System",
    tech: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS"],
    bullets: [
      "Built a full-stack e-learning platform with separate interfaces for students and educators.",
      "Implemented course management, enrollment workflow, and analytics modules.",
      "Designed responsive and intuitive UI flows for better learning experience.",
    ],
    live: "https://lms-frontend-indol-alpha.vercel.app/",
    github: "https://github.com/Akhilesh-2007/lms",
    color: "from-accent to-primary",
  },
  {
    title: "ParkVision AI",
    subtitle: "AI-powered parking violation analytics, congestion prediction, and enforcement optimization platform",
    tech: ["React.js", "Vite", "Python", "FastAPI", "Pandas", "Scikit-learn", "DBSCAN", "Random Forest", "React-Leaflet", "GIS"],
    bullets: [
      "Developed an AI-powered spatial analytics platform that analyzes parking violation data to identify high-impact hotspots, predict future violations, measure congestion severity, and optimize enforcement patrols.",
      "Implemented DBSCAN for spatial hotspot detection, Random Forest for 7-day forecasting, and an enforcement simulator to estimate congestion reduction.",
      "Built interactive GIS visualizations with heatmaps and marker clusters for real-time analytical insights.",
    ],
    live: "https://parking-induced-congestion.vercel.app/",
    github: "https://github.com/Akhilesh-2007/PARKING_INDUCED_CONGESTION",
    color: "from-accent via-primary to-accent",
  },
  {
    title: "VOX-SENTINEL: Autonomous Multi-Agent Edge Voice AI Platform",
    subtitle: "Industrial-grade Edge AI Voice & Physical Safety System powered by 7-Agent Architecture",
    tech: ["Python", "ESP32-S3", "FreeRTOS", "React.js", "Node.js", "Edge AI", "Multi-Agent Systems", "C++", "Kalman Filter", "IoT"],
    bullets: [
      "Built an industrial-grade Edge AI Voice System powered by a 7-Agent distributed event mesh architecture for high-risk industrial environments (oil refineries, underground mines, emergency response).",
      "Achieved zero-latency offline voice recognition (<120ms) with Levenshtein fuzzy matching driving physical high-voltage relays and servo valve interlocks.",
      "Engineered 1D Kalman-filtered multi-sensor hazard detection, real-time computer vision, cloud command center web dashboard, and mobile companion app.",
      "Awarded a 100/100 verified final score by AI Arena 3.0 Judging Panel; authored 4 USPTO patent claims covering offline voice interlocks & multi-agent safety overrides.",
    ],
    live: "",
    github: "https://github.com/Akhilesh-2007/Sentra-AI",
    color: "from-primary via-accent to-primary",
  },
  {
    title: "Traffic Demand Prediction",
    subtitle: "Machine learning system for transportation demand forecasting",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "CatBoost", "Machine Learning"],
    bullets: [
      "Built a machine learning system to predict transportation demand using real-world booking data from the Flipkart Gridlock Hackathon 2.0.",
      "Engineered historical lag, geographical, temporal, and categorical features and developed an ensemble model using LightGBM and CatBoost with cross-validation.",
      "Achieved Rank 202 on the competition leaderboard.",
    ],
    live: "",
    github: "https://github.com/Akhilesh-2007",
    color: "from-accent to-primary",
  },
  {
    title: "Hotel Reservation System",
    subtitle: "Android-based hotel booking and management application",
    tech: ["Java", "Android", "XML", "SQLite", "Android Studio"],
    bullets: [
      "Developed a full-featured Android application with separate Customer and Admin modules.",
      "Customers can register, authenticate, browse rooms, make reservations, manage profiles, and access hotel services.",
      "Admins can manage rooms, reservations, users, services, and discounts through CRUD operations using a local database.",
    ],
    live: "",
    github: "https://github.com/Akhilesh-2007/Hotel-Reservation-Android-Studio",
    color: "from-primary to-accent",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-primary" />
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-card shadow-card transition-all duration-500 hover:border-primary/30 hover:shadow-glow"
            >
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="font-heading text-2xl font-bold transition-all duration-300 group-hover:text-gradient">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-primary/50"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
