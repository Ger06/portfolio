"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Heart } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const highlightIcons = [Code2, Briefcase, Heart];

export function About() {
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
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {t.about.highlights.map((item, index) => {
              const Icon = highlightIcons[index];
              const isLastOdd =
                index === t.about.highlights.length - 1 &&
                t.about.highlights.length % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    isLastOdd ? "md:col-span-2 md:max-w-md md:mx-auto" : ""
                    }`}
                  >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">{t.about.journey.title}</h3>
            <div className="space-y-4 text-muted-foreground">
              {t.about.journey.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
