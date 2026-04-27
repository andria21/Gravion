import Link from "next/link";
import { Satellite, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
      <div className="container py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 font-orbitron justify-center"
            >
              <Image
                src="/logos/Logo.png"
                alt="Gravion Logo"
                width={160}
                height={40}
                className="relative z-10"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered reconnaissance system <br />
              Eyes in the sky. Intelligence underground.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-medium text-primary tracking-wider uppercase shadow-[0_0_10px_rgba(0,255,255,0.15)]">
                <ShieldCheck className="w-3 h-3" />
                <span>Patent Pending: 63/791,903</span>
              </div>
              <Image
                src="/nvidia-logos/nvidia-inception-program-badge-rgb-1c-blk-for-screen.png"
                alt="NVIDIA Inception Program Member"
                width={140}
                height={40}
                className="hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              {/* © {new Date().getFullYear()} Gravion Space. All rights reserved. */}
              ©️ Gravion Inc. All rights reserved.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Map
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/planets"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Planets
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-center">Reach Out</h3>
            <p className="text-sm text-muted-foreground max-w-[200px] md:max-w-none mx-auto md:mx-0">
              Interested in our technology
              <br className="md:hidden" />
              or would like to discuss integration?
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
