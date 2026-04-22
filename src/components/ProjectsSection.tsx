import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
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
    color: "from-primary to-accent",
  },
  {
    title: "Virtual Classroom Assistant",
    subtitle: "Student-Centered Classroom Platform",
    tech: ["React.js", "Bootstrap", "Node.js", "SQL", "MongoDB"],
    bullets: [
      "Developed dashboard-driven classroom features for students and educators.",
      "Added scheduling and document sharing capabilities for classroom management.",
      "Built full-stack modules focused on usability and performance.",
    ],
    live: "",
    github: "https://github.com/Akhilesh-2007/virtual-classroom-assistant",
    color: "from-accent to-primary",
  },
  {
    title: "Group Chat Application",
    subtitle: "Real-Time Communication System",
    tech: ["Java", "Swing", "AWT", "Sockets"],
    bullets: [
      "Built a real-time group chat application with Java socket programming.",
      "Designed desktop UI using Swing and AWT components.",
      "Handled multi-user communication and message broadcasting.",
    ],
    live: "",
    github: "https://github.com/Akhilesh-2007/chat-application",
    color: "from-accent via-primary to-accent",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    tech: ["React.js", "JavaScript", "CSS"],
    bullets: [
      "Built a personal portfolio to showcase projects, skills, and technical journey.",
      "Structured content for better readability and recruiter accessibility.",
      "Focused on responsive design and clean visual hierarchy.",
    ],
    live: "https://my-portfolio-six-bay-47.vercel.app/",
    github: "https://github.com/Akhilesh-2007/my-portfolio",
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
