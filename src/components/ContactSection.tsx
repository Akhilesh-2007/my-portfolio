import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone, Code2 } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "kolisettyakhilesh18012007@gmail.com",
      href: "mailto:kolisettyakhilesh18012007@gmail.com",
    },
    { icon: Phone, label: "Phone", value: "+91-6305132988", href: "tel:+916305132988" },
    { icon: Github, label: "GitHub", value: "Akhilesh-2007", href: "https://github.com/Akhilesh-2007" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "akhilesh-kolisetty",
      href: "https://www.linkedin.com/in/akhilesh-kolisetty-76aa4a2a2/",
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "kolisettyakhilesh18012007",
      href: "https://leetcode.com/u/kolisettyakhilesh18012007/",
    },
  ];

  return (
    <section id="contact" className="relative py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-primary" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            I am open to internships, projects, and collaborations in Frontend, Full Stack, and AI/ML.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/85 p-6 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <c.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="max-w-xs break-all font-heading font-medium transition-colors group-hover:text-primary">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
