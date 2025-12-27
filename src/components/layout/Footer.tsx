import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold text-gradient">
            Portfolio
          </a>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built By AsHwaK <Heart className="w-4 h-4 text-destructive fill-destructive" /> and lots of ☕
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
