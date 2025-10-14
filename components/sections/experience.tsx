"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.experience.title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

            <div className="space-y-12">
              {t.experience.experiences.map((exp, index) => {
                const originalExp = experiences[index];
                return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>

                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-medium mb-2">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      <p className="text-muted-foreground font-medium mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {originalExp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
