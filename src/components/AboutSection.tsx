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

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground"
        >
          I am a 3rd-year undergraduate student with a strong interest in web development, UI design, and AI/ML.
          I have experience building responsive applications with React.js and modern frontend tools, and I enjoy
          creating scalable full-stack systems. Currently, I am strengthening my skills in Next.js, FastAPI, and
          machine learning concepts to build intelligent and user-friendly products.
        </motion.p>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              desc: "B.E. in CSE at Dayananda Sagar College of Engineering, Bengaluru (2023-Present), CGPA: 9.28",
              delay: 0.1,
            },
            {
              icon: Code2,
              title: "What I Do",
              desc: "I build responsive and interactive web apps, and explore AI/ML solutions using modern frontend and backend technologies.",
              delay: 0.2,
            },
            {
              icon: MapPin,
              title: "Location",
              desc: "Based in Bengaluru, Karnataka, India. Open to Frontend, Full Stack, and AI/ML internship opportunities.",
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
