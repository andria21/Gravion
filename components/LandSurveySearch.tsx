"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HudContainer } from "@/components/ui/hud-container";

// Mock data for land survey certificates
const MOCK_CERTIFICATES = [
  {
    id: "GRV-MARS-2024-001",
    ownerName: "Elena Rodriguez",
    planet: "Mars",
    coordinates: "12°34'N 45°67'W",
    date: "2024-05-15",
    status: "Verified",
  },
  {
    id: "GRV-MARS-2024-002",
    ownerName: "James Chen",
    planet: "Mars",
    coordinates: "08°12'S 14°22'E",
    date: "2024-06-20",
    status: "Verified",
  },
  {
    id: "GRV-EUROPA-2024-001",
    ownerName: "Sarah Johnson",
    planet: "Europa",
    coordinates: "45°00'N 12°00'W",
    date: "2024-07-10",
    status: "Pending Verification",
  },
  {
    id: "GRV-TITAN-2024-001",
    ownerName: "Michael Chang",
    planet: "Titan",
    coordinates: "23°45'N 67°89'W",
    date: "2024-08-05",
    status: "Verified",
  },
  {
    id: "GRV-VENUS-2024-001",
    ownerName: "David Smith",
    planet: "Venus",
    coordinates: "10°20'S 30°40'E",
    date: "2024-09-12",
    status: "Verified",
  },
];

export default function LandSurveySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof MOCK_CERTIFICATES>(
    []
  );
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = MOCK_CERTIFICATES.filter(
      (cert) =>
        cert.id.toLowerCase().includes(query) ||
        cert.ownerName.toLowerCase().includes(query) ||
        cert.planet.toLowerCase().includes(query)
    );

    setSearchResults(results);
    setHasSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <HudContainer className="mb-12 md:w-1/2 mx-auto">
      <h3 className="text-xl font-medium mb-4">Certificate Search</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Verify the authenticity of a Gravion Land Survey Certificate by entering
        the Certificate ID, Owner Name, or Planet.
      </p>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by Certificate ID, Name, or Planet..."
            className="pl-9 bg-background/50 border-primary/20 focus-visible:ring-primary/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button
          onClick={handleSearch}
          className="bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30"
        >
          Search
        </Button>
      </div>

      {hasSearched && (
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground mb-2">
            Found {searchResults.length} result
            {searchResults.length !== 1 ? "s" : ""}
          </div>

          {searchResults.length > 0 ? (
            <div className="grid gap-4">
              {searchResults.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 bg-card/50 border border-primary/20 rounded-md hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-mono text-primary font-bold">
                      {cert.id}
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full border ${
                        cert.status === "Verified"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                      }`}
                    >
                      {cert.status}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="text-muted-foreground">Owner:</div>
                    <div className="font-medium">{cert.ownerName}</div>
                    <div className="text-muted-foreground">Planet:</div>
                    <div className="font-medium">{cert.planet}</div>
                    <div className="text-muted-foreground">Coordinates:</div>
                    <div className="font-mono text-xs">{cert.coordinates}</div>
                    <div className="text-muted-foreground">Date:</div>
                    <div>{cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border border-dashed border-primary/20 rounded-md">
              <p className="text-muted-foreground">
                No certificates found matching &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      )}
    </HudContainer>
  );
}
