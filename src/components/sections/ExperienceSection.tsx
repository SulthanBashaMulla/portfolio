import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, BookOpen, Briefcase, Clapperboard } from "lucide-react";

const experiences = [
  {
    type: "learning",
    icon: BookOpen,
    title: "BCA Journey",
    organization: "Nationa Degree College, Nandyal",
    period: "2024 - 2027",
    description: "Embarked on my Bachelor's in Computer Applications, building strong foundations in programming, data structures, and algorithms.",
    highlights: ["Java", "Python", "DBMS","Operating systems","Networkings"],
  },
  {
    type: "Devops",
    icon: Clapperboard ,
    title: "Devops Engineer",
    organization: "Self-Learning",
    period: "2026",
    description: "Passionately Learning , OS , Networkings,Cloud , CI/CD pipelins , Working Efficiently to automate workflow through Scripting.",
    highlights: ["Linux", "Docker","Kubernetes","AWS","CI/CD"],
  },
  {
    type: "project",
    icon: Briefcase,
    title: "Full-Stack Development",
    organization: "Self-Learning",
    period: "2025",
    description: "Deep dive into modern web development and Devops, mastering React, Node.js and building multiple production-ready applications.",
    highlights: ["React.js", "Node.js","ShadcnUI","MongoDB"],
  },
  {
    type: "certification",
    icon: Award,
    title: "DevOps & Cloud",
    organization: "Online Certifications",
    period: "2026 - 2027",
    description: "Acquired expertise in DevOps practices, containerization with Docker, and cloud services deployment on AWS.",
    highlights: ["Docker", "AWS", "CI/CD Pipelines"],
  },
  {
    type: "current",
    icon: Calendar,
    title: "Seeking Opportunities",
    organization: "Open to Work",
    period: "Present",
    description: "Actively looking for internships and entry-level positions to apply my skills in a professional environment and continue growing.",
    highlights: ["Full-Stack", "DevOps", "Problem Solving"],
  },
];

const TimelineItem = ({ 
  item, 
  index, 
  isLast 
}: { 
  item: typeof experiences[0]; 
  index: number;
  isLast: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-4 md:gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
        >
          <div className={`flex items-center gap-2 mb-3 ${isEven ? "md:justify-end" : ""}`}>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {item.period}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-primary mb-3">{item.organization}</p>
          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-2 py-1 text-xs font-medium bg-muted rounded-md text-muted-foreground"
              >
                {highlight}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10"
        >
          <item.icon className="w-5 h-5 text-primary" />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="absolute top-12 w-0.5 bg-gradient-to-b from-primary to-primary/20"
            style={{ minHeight: "120px" }}
          />
        )}
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              A timeline of my learning journey and growth as a developer
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
