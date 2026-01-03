"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  comingSoon?: boolean;
  disclaimerText?: ReactNode;
  index?: number;
}

export function UseCaseCard({
  title,
  description,
  icon,
  className,
  variant = "primary",
  comingSoon = false,
  disclaimerText = false,
  index = 0,
}: UseCaseCardProps) {
  const glowColor =
    variant === "secondary"
      ? "var(--secondary)"
      : variant === "accent"
      ? "var(--accent)"
      : "var(--primary)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 50,
        damping: 15,
      }}
      whileHover="hover"
      className={cn(
        "group relative p-6 border bg-card/80 rounded-md reticle transition-all duration-500 hover:bg-card/90 overflow-hidden hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)]",
        {
          "border-primary/20 reticle hover:border-primary/50":
            variant === "primary",
          "border-secondary/20 reticle-secondary hover:border-secondary/50":
            variant === "secondary",
          "border-accent/20 reticle-accent hover:border-accent/50":
            variant === "accent",
        },
        className
      )}
      style={{
        // @ts-ignore
        "--glow-color": `hsl(${glowColor} / 0.5)`,
      }}
    >
      {/* Dynamic Background Gradient on Hover */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500",
          {
            "via-primary/10": variant === "primary",
            "via-secondary/10": variant === "secondary",
            "via-accent/10": variant === "accent",
          }
        )}
        variants={{
          hover: { opacity: 1 },
        }}
      />

      {/* Sci-fi Scanline Effect */}
      <motion.div
        className={cn(
          "absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-20 z-0",
          {
            "via-primary": variant === "primary",
            "via-secondary": variant === "secondary",
            "via-accent": variant === "accent",
          }
        )}
        animate={{ top: ["0%", "100%"] }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: Math.random() * 2 + 1,
        }}
      />

      {comingSoon && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          )}
        >
          <motion.div
            className={cn(
              "text-3xl font-bold tracking-widest uppercase rotate-[-20deg] opacity-10 transition-opacity duration-300 group-hover:opacity-25",
              {
                "text-primary": variant === "primary",
                "text-secondary": variant === "secondary",
                "text-accent": variant === "accent",
              }
            )}
            variants={{
              hover: { scale: 1.1, opacity: 0.4 },
            }}
          >
            Coming Soon
          </motion.div>
        </div>
      )}

      <motion.div
        className="absolute top-4 right-4 opacity-70 z-20"
        variants={{
          hover: {
            opacity: 1,
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 },
          },
        }}
      >
        {React.cloneElement(icon, {
          className: cn(
            "h-8 w-8 transition-colors duration-300",
            {
              "text-primary": variant === "primary",
              "text-secondary": variant === "secondary",
              "text-accent": variant === "accent",
            },
            icon.props.className
          ),
        })}
      </motion.div>

      <h3
        className={cn(
          "text-xl font-semibold tracking-wide mb-3 relative z-20 transition-colors duration-300",
          {
            "group-hover:text-primary": variant === "primary",
            "group-hover:text-secondary": variant === "secondary",
            "group-hover:text-accent": variant === "accent",
          }
        )}
      >
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-20">
        {description}
      </p>

      {disclaimerText && (
        <p className="mt-2 text-xs text-muted-foreground italic relative z-20">
          {disclaimerText}
        </p>
      )}
    </motion.div>
  );
}
