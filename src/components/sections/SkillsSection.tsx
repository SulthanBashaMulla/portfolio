import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "primary",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "secondary",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "DevOps",
    color: "primary",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    title: "Tools",
    color: "secondary",
    skills: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Postman", level: 90 },
      { name: "Jira", level: 75 },
    ],
  },
];

const SkillBar = ({ 
  name, 
  level, 
  color, 
  delay 
}: { 
  name: string; 
  level: number; 
  color: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${
            color === "primary" 
              ? "bg-gradient-to-r from-primary to-primary/70" 
              : "bg-gradient-to-r from-secondary to-secondary/70"
          }`}
          style={{
            boxShadow: color === "primary" 
              ? "0 0 20px hsl(var(--primary) / 0.5)" 
              : "0 0 20px hsl(var(--secondary) / 0.5)",
          }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Skills & Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Proficiency</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              A comprehensive toolkit built through continuous learning and hands-on projects
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 md:p-8 group hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${
                    category.color === "primary" ? "bg-primary" : "bg-secondary"
                  } animate-pulse`} />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={0.2 + categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
