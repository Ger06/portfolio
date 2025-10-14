"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-primary text-lg font-medium">
              {t.hero.greeting}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_auto] animate-gradient"
          >
            {t.personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8"
          >
            {t.personalInfo.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t.hero.contactMe}
            </Link>
            <a
              href={language === "es" ? "/cv-Gerardo-Kohatus-fullstack.pdf" : "/cv-Gerardo-Kohatus-fullstack-en.pdf"}
              download
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t.hero.downloadCV}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
