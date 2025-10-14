"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import Signature from "@/public/icons/signature";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <Link href="#home" className="text-2xl font-bold mb-4 block">
                {/* <span className="text-primary">G</span>K */}
                <Signature />
              </Link>
              <p className="text-muted-foreground text-sm">
                {t.footer.brand}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
              <nav className="space-y-2">
                <Link
                  href="#home"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="#about"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="#experience"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.experience}
                </Link>
                <Link
                  href="#projects"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.projects}
                </Link>
                <Link
                  href="#contact"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-4">{t.footer.followMe}</h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500 fill-current" /> {t.footer.by}{" "}
              {personalInfo.name} © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
