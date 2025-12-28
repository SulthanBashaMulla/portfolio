import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "NDC - College website",
    description: "Built a modern, responsive college website featuring dynamic pages for Resources, faculty, and Navs. Thrived to deliver a scalable and user-friendly platform with improved accessibility and performance..",
    image: "https://i.imghippo.com/files/kQM6760dto.jpg",
    tags: ["Javascript", "Html5", "Css", "Gfonts"],
    github: "https://github.com/SulthanBashaMulla",
    demo: "preview-ndc.onrender.com",
  },
  {
    title: "Portfolio",
    description: "Personal web development project focused on designing a professional portfolio website with responsive layouts, interactive elements, and clean navigation..",
    image: "https://i.imghippo.com/files/cgSt3804zD.jpg",
    tags: ["React", "shadcn", "vitae", "js"],
    github: "https://github.com/SulthanBashaMulla",
    demo: "https://portfolio-tau-two-19.vercel.app/",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, kanban boards, and team analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com/SulthanBashaMulla",
    demo: "https://demo.com",
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by machine learning with natural language processing capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com/SulthanBashaMulla",
    demo: "https://demo.com",
  },
];

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: typeof projects[0]; 
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="glass-card overflow-hidden hover:border-primary/30 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          {/* Overlay Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm"
          >
            <Button variant="hero" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="heroOutline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Folder className="w-4 h-4 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-muted rounded-md text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

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
              Featured Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              A showcase of my latest work, experiments, and side projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                View All Projects
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
