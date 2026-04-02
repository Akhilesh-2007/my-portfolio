import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const headingText = "Hi, I'm Akhilesh Kolisetty";

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.08,
    },
  },
};

const headingCharacter = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HeroSection = () => {
  const profilePhotoUrl = "/akhilesh-profile.jpeg";
  const resumeUrl = "https://drive.google.com/file/d/1rSTS4ID9_Gjo3LA4pZNPHIc0UElekaj8/view";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-24 text-foreground transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-10 top-20 h-72 w-72 animate-float rounded-full bg-primary/10 blur-3xl" />
      <div
        className="absolute bottom-20 right-10 h-96 w-96 animate-float rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-24">
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            >
              <span className="text-sm font-medium text-primary">Open to internship opportunities</span>
            </motion.div>

            <motion.h1
              variants={headingContainer}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.01 }}
              className="mb-6 font-heading text-[clamp(2.4rem,6.4vw,5rem)] font-bold leading-tight text-foreground transition-all duration-300"
            >
              <span className="inline-block">
                {headingText.split("").map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    variants={headingCharacter}
                    className={headingText.includes("Akhilesh") && index >= 8 ? "text-gradient" : ""}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground md:text-xl lg:mx-0"
            >
              Frontend Developer | AIML Enthusiast | Full Stack Learner
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mb-10 max-w-xl text-base text-muted-foreground/85 lg:mx-0"
            >
              I build modern and scalable web applications with a strong focus on responsive UI and user experience.
              Currently exploring Next.js, FastAPI, and AI/ML to create intelligent products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="rounded-lg bg-gradient-primary px-8 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                Contact Me
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-card px-8 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10"
              >
                <Download size={18} className="text-primary" />
                View Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Akhilesh-2007", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/akhilesh-kolisetty-76aa4a2a2/",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "mailto:kolisettyakhilesh18012007@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.12, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="rounded-full border border-border/60 bg-card/85 p-3 transition-all duration-300 hover:bg-primary/15 hover:shadow-glow"
                  aria-label={label}
                >
                  <Icon size={20} className="text-muted-foreground transition-colors hover:text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 mx-auto flex w-full max-w-[220px] justify-center lg:order-2 lg:max-w-[280px] xl:max-w-[320px]"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-105 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
              <div className="relative overflow-hidden rounded-full border-4 border-primary/50 bg-card shadow-2xl">
                <img
                  src={profilePhotoUrl}
                  alt="Akhilesh Kolisetty"
                  className="h-[220px] w-[220px] object-cover sm:h-[250px] sm:w-[250px] lg:h-[280px] lg:w-[280px] xl:h-[300px] xl:w-[300px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about">
          <ArrowDown className="text-muted-foreground/50" size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
