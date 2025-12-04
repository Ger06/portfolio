"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalIntroProps {
  onComplete: () => void;
}

export function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [text, setText] = useState("");
  const [showLogs, setShowLogs] = useState(false);
  const fullCommand = "pnpm run dev";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowLogs(true), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (showLogs) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2500); // Allow time to read logs
      return () => clearTimeout(timer);
    }
  }, [showLogs, onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono p-8 z-50 flex flex-col justify-start items-start text-lg md:text-xl overflow-hidden">
      <div className="mb-4">
        <span className="text-blue-500">user@portfolio</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$ </span>
        {text}
        <span className="animate-pulse">_</span>
      </div>

      {showLogs && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-1 text-sm md:text-base text-gray-300"
        >
          <p> portfolio-nextjs@1.0.0 dev</p>
          <p> next dev</p>
          <br />
          <p className="text-green-400">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</p>
          <p>info  - Loaded env from .env</p>
          <p>event - compiled client and server successfully in 1241 ms (156 modules)</p>
          <p className="text-green-400">wait  - compiling...</p>
          <p>event - compiled client and server successfully in 300 ms (156 modules)</p>
          <br />
          <p className="animate-pulse text-green-500">Starting interface...</p>
        </motion.div>
      )}
    </div>
  );
}
