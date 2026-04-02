import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, Trophy } from "lucide-react";

const certifications = [
  {
    title: "OCI Data Science Professional",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7578C645D3B3CCC15D562B7F8F9CC047CB4F11E7ADF8646DCCE59A58EBADEC95",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    link: "https://www.credly.com/earner/earned/badge/271c44d5-b6e4-4a30-896c-c65a827bfa66",
  },
  {
    title: "OCI AI Foundations",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D795A3DFCE939FC1E503F459806AC4967381CA1697934A1BCBC0AC832715D61C",
  },
  {
    title: "NLP and Text Mining",
    issuer: "Simplilearn",
    link: "https://simpli-web.app.link/e/9SHxTa1uTWb",
  },
];

const achievements = [
  {
    text: "1st Place - CodeSphere (DSA Global Codeathon)",
    link: "https://drive.google.com/file/d/1fIR2VA3bJAD7OEfuhzxUnqZ5lKimDRBq/view",
  },
  {
    text: "Participated in Commit and Conquer Hackathon (DSCE)",
    link: "https://drive.google.com/file/d/1BoIeTcmGd9XAtTrTq_Gh_yUqhNsCOH3P/view",
  },
  { text: "Active participation in hackathons and coding events" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="certifications" className="relative bg-gradient-hero py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-primary" />
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border/50 bg-gradient-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Award className="text-primary" size={22} />
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground opacity-0 transition-colors group-hover:text-primary group-hover:opacity-100"
                  />
                </div>
                <h3 className="mb-1 font-heading font-semibold transition-colors group-hover:text-primary">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-primary" />
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-5">
            {achievements.map((item, i) => (
              <motion.a
                key={item.text}
                href={item.link ?? "#"}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.08 }}
                className={`flex items-center gap-4 rounded-2xl border border-border/50 bg-card/90 p-5 shadow-card ${
                  item.link ? "transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow" : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                  <Trophy size={18} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">{item.text}</p>
                {item.link && <ExternalLink size={14} className="ml-auto text-primary/80" />}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificationsSection;
