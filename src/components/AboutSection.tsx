import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mb-12 max-w-4xl space-y-4 text-center text-muted-foreground"
        >
          <p className="text-base leading-relaxed md:text-lg">
            I am a fourth-year Computer Science undergraduate with strong expertise in Data Structures and Algorithms,
            Machine Learning, and software development. I have experience building responsive web applications using
            React.js and developing AI-driven and full-stack solutions using modern technologies.
          </p>
          <p className="text-base leading-relaxed md:text-lg">
            I am passionate about solving complex problems and building scalable, intelligent, and user-focused products,
            while continuously exploring emerging technologies in AI and software engineering.
          </p>
          <p className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            🏆 Flipkart GRiD 8.0 National Runner-Up (Data Science Track) out of 1.7L+ registrations across India
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              desc: "B.E. in CSE at Dayananda Sagar College of Engineering, Bengaluru (4th Year Undergraduate), CGPA: 9.28",
              delay: 0.1,
            },
            {
              icon: Code2,
              title: "What I Do",
              desc: "I build responsive web apps, engineer AI/ML solutions, and develop scalable full-stack applications with modern frameworks.",
              delay: 0.2,
            },
            {
              icon: MapPin,
              title: "Location",
              desc: "Based in Bengaluru, Karnataka, India. Open to Machine Learning, Full Stack, and Frontend engineering opportunities.",
              delay: 0.3,
            },
          ].map(({ icon: Icon, title, desc, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay }}
              className="group rounded-2xl border border-border/50 bg-card/85 p-8 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
