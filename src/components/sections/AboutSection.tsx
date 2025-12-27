import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Cpu } from "lucide-react";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
];

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, accessible UIs with React and modern CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Designing RESTful APIs and microservices architecture",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, containerization, and cloud infrastructure",
  },
  {
    icon: Cpu,
    title: "System Design",
    description: "Scalable solutions for complex technical challenges",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              A passionate technologist on a journey to master the art of software engineering
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a BCA student with an unwavering passion for technology, I've 
                    dedicated myself to mastering the full spectrum of software development. 
                    From crafting pixel-perfect frontends to architecting robust backend systems.
                  </p>
                  <p>
                    My journey into DevOps began with a simple curiosity about how applications 
                    are deployed and scaled. Today, I'm deeply invested in automation, 
                    containerization, and building reliable CI/CD pipelines.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying current with 
                    industry best practices. Every project is an opportunity to learn, grow, 
                    and push the boundaries of what's possible.
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="glass-card p-6">
                <h4 className="font-display text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-all cursor-default"
                    >
                      <span>{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
