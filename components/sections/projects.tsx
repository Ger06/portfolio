"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Briefcase, User } from "lucide-react";
import { projects } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.projects.title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.projects.projects.map((project, projectIndex) => {
              const originalProject = projects[projectIndex];
              const isLastOdd =
                projectIndex === t.about.highlights.length - 1 &&
                t.about.highlights.length % 2 !== 0;
              return (
              <motion.div
                key={projectIndex}
                variants={itemVariants}
                className={`bg-card border border-border rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group ${isLastOdd ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.type === "Freelance" || project.type === "Profesional" ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <User className="w-5 h-5 text-primary" />
                      )}
                      <span className="text-xs font-medium text-primary">
                        {project.type}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">{t.projects.highlights}</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {originalProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(originalProject.link || originalProject.github) && (
                    <div className="flex gap-3 pt-4 border-t border-border">
                      {originalProject.link && (
                        <a
                          href={originalProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t.projects.viewProject}
                        </a>
                      )}
                      {originalProject.github && (
                        <a
                          href={originalProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <Github className="w-4 h-4" />
                          {t.projects.viewCode}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
