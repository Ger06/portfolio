"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const categoryKeys = ["frontend", "backend", "database", "tools"];
const categoryIcons = [Code2, Server, Database, Wrench];

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.skills.title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.skills.categories.map((category, index) => {
              const Icon = categoryIcons[index];
              const key = categoryKeys[index];
              const skillList = skills[key as keyof typeof skills];

              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-muted/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 hover:bg-primary/10 transition-colors cursor-default"
                      >
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center bg-card border border-border rounded-lg p-6"
          >
            <p className="text-muted-foreground">
              {t.skills.learning}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
