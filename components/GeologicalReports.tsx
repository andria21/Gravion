"use client";
import { Globe } from "lucide-react";
import React, { useState } from "react";

function GeologicalReports() {
  const [showPlanets, setShowPlanets] = useState(false);
  // lg:col-start-2
  return (
    <div
      className="group relative p-6 border bg-card/50 rounded-md reticle transition-all duration-300 hover:bg-card overflow-hidden border-primary/20 border-cyan-950"
      onClick={() => showPlanets && setShowPlanets(false)}
    >
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-3xl font-bold tracking-widest uppercase rotate-[-20deg] opacity-10 transition-opacity duration-300 group-hover:opacity-25 text-primary">
          Coming Soon
        </div>
      </div>

      {/* Icon */}
      <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
        <Globe className="h-8 w-8 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold tracking-wide mb-3 relative z-20">
        Land Survey Certificate
      </h3>
      <div className="text-muted-foreground group-hover:text-foreground transition-colors relative z-20">
        <div className="relative">
          Select a location on Mars or choose from{" "}
          <span
            className="inline-block cursor-pointer text-primary "
            onClick={() => setShowPlanets(!showPlanets)}
          >
            other
            <span
              className={`absolute left-1/2 top-1/2 z-30 w-64 -translate-x-1/2 -translate-y-1/2 rounded-md bg-popover/95 p-4 text-sm shadow-md border border-primary/20 backdrop-blur-sm transition-opacity duration-200 ${
                showPlanets ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <h4 className="text-primary font-medium mb-2 text-center border-b border-primary/20 pb-1">
                Available Celestial Bodies
              </h4>
              <ul className="list-none text-foreground space-y-1">
                <li className="hover:text-primary transition-colors cursor-pointer pl-2 border-l-2 border-transparent hover:border-primary/50">
                  Europa
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer pl-2 border-l-2 border-transparent hover:border-primary/50">
                  Titan
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer pl-2 border-l-2 border-transparent hover:border-primary/50">
                  Venus
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer pl-2 border-l-2 border-transparent hover:border-primary/50">
                  Enceladus
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer pl-2 border-l-2 border-transparent hover:border-primary/50">
                  Mercury
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer pl-2 border-l-2 border-transparent hover:border-primary/50">
                  jupiter
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer pl-2 border-l-2 border-transparent hover:border-primary/50">
                  Saturn
                </li>
              </ul>
            </span>
          </span>{" "}
          {/* planets in our solar system (availability may vary) and receive an
          AI-generated geological report with terrain elevation profiles ,
          radiation exposure indices , and anomaly detection using actual
          NASA/HiRISE data. Each report includes a commemorative &apos;Gravion
          Mars Geo Certificate&apos; with your name and parcel coordinates, plus
          optional 3D terrain models and digital registry badges. */}
          Choose a location on various planets (availability may vary) and get
          an AI-generated geological report with elevation profiles, radiation
          indices, and anomaly detection using NASA/HiRISE data. Each report
          includes a personalized Gravion Mars Geo Certificate, with optional 3D
          terrain models and digital badges.
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-2 text-xs text-muted-foreground italic">
        This report is symbolic and draws on Earth-based achievements and
        comparable data. Due to current limitations, direct off-planet
        verification is not possible. Gravion does not provide legally binding
        land ownership on Mars or any celestial body.
      </p>
    </div>
  );
}

export default GeologicalReports;
