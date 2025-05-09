import Link from "next/link";
import { Satellite } from "lucide-react";
import LOGO from "../assets/Logo_Emblem.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
      <div className="container py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-orbitron justify-center">
              <Image
                src={LOGO}
                alt="Gravion Logo"
                width={40}
                height={100}
                className="text-primary"
              />
              <span className="text-lg font-bold tracking-wider">GRAVION</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered reconnaissance system <br />
              For land, life, and what lies beneath.
            </p>
            <p className="text-xs text-muted-foreground">
              {/* © {new Date().getFullYear()} Gravion Space. All rights reserved. */}
              ©️ Cosmos products LLC
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
              <li>
                <Link
                  href="/planets"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Planets
                </Link>
              </li>
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
            <p className="text-sm text-muted-foreground">
              Interested in our technology or would like to discuss integration?
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
