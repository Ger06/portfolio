"use client";

import React from "react";
import "./../../app/crt-effect.css";

interface MonitorWrapperProps {
  children: React.ReactNode;
}

export function MonitorWrapper({ children }: MonitorWrapperProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="w-full border-8 border-neutral-800 rounded-3xl bg-black relative shadow-2xl">
        {/* Monitor Bezel Details */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-neutral-700 rounded-b-md z-50 opacity-50"></div>
        <div className="absolute bottom-4 right-8 w-2 h-2 bg-green-500 rounded-full animate-pulse z-50 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
        
        {/* Screen Container */}
        <div className="crt-container relative rounded-xl overflow-hidden bg-background monitor-glow border-4 border-neutral-900 flex flex-col">
          
          {/* Browser Bar */}
          <div className="bg-neutral-800 text-neutral-400 text-xs md:text-sm px-4 py-2 flex items-center gap-4 border-b border-neutral-700 font-mono z-40">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex-1 bg-black/30 rounded px-3 py-1 text-center truncate">
              localhost:3000
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto relative scrollbar-hide">
             {children}
             <div className="crt-overlay pointer-events-none sticky inset-0 h-full w-full"></div>
             <div className="crt-scanline pointer-events-none sticky inset-0 h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
