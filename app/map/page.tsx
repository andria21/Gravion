"use client";

import { Button } from "@/components/ui/button";
import { HudContainer } from "@/components/ui/hud-container";
import { ResourceSelect } from "@/components/ui/resource-select";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import {
  GoogleMap,
  Marker,
  type Libraries,
  useLoadScript,
} from "@react-google-maps/api";
import {
  Circle as CircleIcon,
  Crosshair,
  Layers,
  Map,
  Minus,
  Pencil,
  Plus,
  Radar,
  Search,
  Target,
  Thermometer,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const libraries: Libraries = ["places", "drawing", "geometry"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.7128,
  lng: -74.006,
};

// Dark, cyan-tinted map style matching the site palette
const options = {
  styles: [
    { elementType: "geometry", stylers: [{ color: "#151a20" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#6b7a8a" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#0d1014" }] },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#2a3a46" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#171d23" }],
    },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#222a33" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#24404a" }],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0a2a33" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#2f6f7a" }],
    },
  ],
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false,
};

const MAP_TYPES = [
  { id: "roadmap", label: "Standard", icon: Map },
  { id: "satellite", label: "Satellite", icon: Layers },
  { id: "terrain", label: "Terrain", icon: Target },
  { id: "hybrid", label: "Hybrid", icon: Crosshair },
];

const SCAN_MODES = [
  { id: "thermal", label: "Thermal", icon: Thermometer, status: "THERMAL IMAGING ACTIVE" },
  { id: "radar", label: "Radar", icon: Radar, status: "RADAR SCANNING ACTIVE" },
  { id: "multi", label: "Multi-Spectral", icon: Target, status: "MULTI-SPECTRAL ANALYSIS ACTIVE" },
  { id: "drawing", label: "Free Drawing", icon: Pencil, status: "FREE DRAWING MODE ACTIVE" },
];

// Custom Map Type Control Component
const MapTypeControl = ({ map }: { map: google.maps.Map | null }) => {
  const [activeMapType, setActiveMapType] = useState<string>("roadmap");

  const changeMapType = useCallback(
    (mapType: string) => {
      if (!map) return;

      setActiveMapType(mapType);
      map.setMapTypeId(mapType);
    },
    [map]
  );

  return (
    <div className="absolute bottom-3 right-3 z-10 flex gap-1 rounded-md border border-primary/20 bg-background/80 p-1 backdrop-blur-md">
      {MAP_TYPES.map((type) => (
        <button
          key={type.id}
          type="button"
          title={type.label}
          onClick={() => changeMapType(type.id)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors cursor-pointer",
            activeMapType === type.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
          )}
        >
          <type.icon className="h-3.5 w-3.5" />
          <span className="hidden md:inline">{type.label}</span>
        </button>
      ))}
    </div>
  );
};

// Live zoom and cursor coordinates, kept in its own component so mouse
// movement only re-renders this readout instead of the whole page
const MapReadout = ({
  map,
  mode,
}: {
  map: google.maps.Map | null;
  mode: string;
}) => {
  const [zoom, setZoom] = useState<number | null>(null);
  const [cursor, setCursor] = useState<{ lat: number; lng: number } | null>(
    null
  );

  useEffect(() => {
    if (!map) return;

    const listeners = [
      map.addListener("idle", () => setZoom(map.getZoom() ?? null)),
      map.addListener("zoom_changed", () => setZoom(map.getZoom() ?? null)),
      map.addListener("mousemove", (e: google.maps.MapMouseEvent) => {
        if (e.latLng) setCursor({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      }),
      map.addListener("mouseout", () => setCursor(null)),
    ];

    return () => listeners.forEach((l) => l.remove());
  }, [map]);

  return (
    <div className="pointer-events-none absolute bottom-3 left-3 z-10 hidden md:block rounded-md border border-primary/20 bg-background/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-primary/90 backdrop-blur-md">
      <div>
        Zoom: {zoom ?? "--"} | Mode: {mode}
      </div>
      <div className="text-muted-foreground">
        {cursor
          ? `${cursor.lat.toFixed(4)}, ${cursor.lng.toFixed(4)}`
          : "Cursor: --"}
      </div>
    </div>
  );
};

export default function MapPage() {
  const [activeMode, setActiveMode] = useState<string>("thermal");
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [isResourceSelectOpen, setIsResourceSelectOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [drawingType, setDrawingType] = useState<"polygon" | "circle">(
    "polygon"
  );
  const [drawnAreas, setDrawnAreas] = useState<google.maps.Polygon[]>([]);
  const [drawnCircles, setDrawnCircles] = useState<google.maps.Circle[]>([]);
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const drawingManagerRef = useRef<google.maps.drawing.DrawingManager | null>(
    null
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
    version: "3.64",
  });

  const handleZoomIn = useCallback(() => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom();
      if (typeof currentZoom === "number") {
        mapRef.current.setZoom(currentZoom + 1);
      }
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom();
      // Prevent zooming out too much (Google Maps typically has a min zoom level around 0-3)
      if (typeof currentZoom === "number" && currentZoom > 0) {
        mapRef.current.setZoom(currentZoom - 1);
      }
    }
  }, []);

  const [mapT, setMapT] = useState<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    setMapT(map);

    // If the searchBox is already initialized, prevent re-initialization.
    // This stops duplicate search inputs if onMapLoad is called multiple times.
    if (searchBoxRef.current) {
      // Ensure the drawing manager (if it exists) is associated with the current map instance.
      if (drawingManagerRef.current) {
        drawingManagerRef.current.setMap(map);
      }
      return;
    }

    // Original initialization logic (runs only if searchBoxRef.current is null):
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Search location...";
    input.className =
      "w-56 md:w-72 mx-auto mt-3 px-4 py-2 rounded-md bg-background/85 backdrop-blur-md border border-primary/25 text-sm font-mono text-foreground placeholder:text-muted-foreground shadow-[0_0_20px_rgba(0,255,255,0.12)] focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30";

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    const searchBox = new google.maps.places.SearchBox(input);
    searchBoxRef.current = searchBox;

    // Initialize drawing manager
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: null,
      drawingControl: false,
      polygonOptions: {
        fillColor: "#00FFFF",
        fillOpacity: 0.2,
        strokeColor: "#00FFFF",
        strokeWeight: 2,
        editable: true,
        zIndex: 1,
      },
      circleOptions: {
        fillColor: "#00FFFF",
        fillOpacity: 0.2,
        strokeColor: "#00FFFF",
        strokeWeight: 2,
        editable: true,
        zIndex: 1,
      },
    });

    drawingManager.setMap(map);
    drawingManagerRef.current = drawingManager;

    // Add listener for when a polygon is completed
    google.maps.event.addListener(
      drawingManager,
      "polygoncomplete",
      (polygon: google.maps.Polygon) => {
        setDrawnAreas((prev) => [...prev, polygon]);
        drawingManager.setDrawingMode(null);
        setIsDrawingMode(false);

        toast("Area defined", {
          description: "Custom polygon area has been drawn for scanning.",
        });
      }
    );

    // Add listener for when a circle is completed
    google.maps.event.addListener(
      drawingManager,
      "circlecomplete",
      (circle: google.maps.Circle) => {
        setDrawnCircles((prev) => [...prev, circle]);
        drawingManager.setDrawingMode(null);
        setIsDrawingMode(false);

        toast("Area defined", {
          description: `Circular area with radius ${Math.round(
            circle.getRadius()
          )}m has been drawn for scanning.`,
        });
      }
    );

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places?.length === 0) return;

      const place = places?.[0];
      if (!place?.geometry?.location) return;

      const newLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      setSelectedLocation(newLocation);
      map.setCenter(newLocation);
      map.setZoom(15);

      toast("Location found", {
        description: `Selected: ${place.formatted_address}`,
      });
    });
  }, []);

  const onMapUnmount = useCallback(() => {
    // Clear listeners and refs to prevent memory leaks and ensure clean re-initialization on remount
    if (drawingManagerRef.current) {
      google.maps.event.clearInstanceListeners(drawingManagerRef.current);
      drawingManagerRef.current.setMap(null);
    }
    // Note: Listeners attached via searchBox.addListener() might need specific cleanup
    // if their callbacks capture component state that could become stale.
    // For simple cases, this is often not an issue.

    mapRef.current = null;
    searchBoxRef.current = null; // Crucial: allow re-initialization if map remounts
    drawingManagerRef.current = null;
  }, []);

  // Add a function to toggle drawing mode
  const toggleDrawingMode = useCallback(() => {
    if (drawingManagerRef.current) {
      if (isDrawingMode) {
        drawingManagerRef.current.setDrawingMode(null);
        setIsDrawingMode(false);
      } else {
        const mode =
          drawingType === "polygon"
            ? google.maps.drawing.OverlayType.POLYGON
            : google.maps.drawing.OverlayType.CIRCLE;
        drawingManagerRef.current.setDrawingMode(mode);
        setIsDrawingMode(true);
      }
    }
  }, [isDrawingMode, drawingType]);

  // Update the clear drawn areas function to handle circles too
  const clearDrawnAreas = useCallback(() => {
    drawnAreas.forEach((polygon) => polygon.setMap(null));
    drawnCircles.forEach((circle) => circle.setMap(null));
    setDrawnAreas([]);
    setDrawnCircles([]);
    toast("Areas cleared", {
      description: "All drawn areas have been removed.",
    });
  }, [drawnAreas, drawnCircles]);

  const totalDrawnShapes = drawnAreas.length + drawnCircles.length;

  // Update the scan function to handle circles too and adjust scan time based on area size
  const handleScan = () => {
    if (!selectedLocation && totalDrawnShapes === 0) {
      toast.error("No area selected", {
        description:
          "Please select a location or draw an area on the map first.",
      });
      return;
    }

    if (selectedResources.length === 0) {
      toast.error("No resources selected", {
        description: "Please select at least one resource to scan for.",
      });
      return;
    }

    setIsScanning(true);

    // Calculate scan duration based on area size
    let scanDuration = 3000; // Base duration in milliseconds

    if (totalDrawnShapes > 0) {
      // Calculate total area of all shapes
      let totalArea = 0;

      // Calculate area of polygons
      drawnAreas.forEach((polygon) => {
        totalArea += google.maps.geometry.spherical.computeArea(
          polygon.getPath()
        );
      });

      // Calculate area of circles
      drawnCircles.forEach((circle) => {
        const radius = circle.getRadius();
        const circleArea = Math.PI * radius * radius;
        totalArea += circleArea;
      });

      // Adjust scan duration based on area (in square meters)
      // For very large areas (> 10 km²), cap the duration at 15 seconds
      const areaInSquareKm = totalArea / 1000000;
      scanDuration = Math.min(3000 + areaInSquareKm * 1200, 15000);

      toast("Scan initiated", {
        description: `Scanning ${totalDrawnShapes} custom area(s) for ${
          selectedResources.length
        } resources. Estimated time: ${Math.round(
          scanDuration / 1000
        )} seconds.`,
      });
    } else {
      toast("Scan initiated", {
        description: `Scanning for ${
          selectedResources.length
        } resources at lat: ${selectedLocation?.lat.toFixed(
          4
        )}, lng: ${selectedLocation?.lng.toFixed(4)}`,
      });
    }

    setTimeout(() => {
      setIsScanning(false);
      toast("Scan complete", {
        description: `Analysis complete for ${selectedResources.join(
          ", "
        )}. No significant deposits detected.`,
      });
    }, scanDuration);
  };

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setSelectedLocation({ lat, lng });
      setIsResourceSelectOpen(true);

      toast("Location selected", {
        description: `Selected coordinates: ${lat.toFixed(4)}, ${lng.toFixed(
          4
        )}`,
      });
    }
  }, []);

  if (loadError) {
    return (
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-destructive">
            Error loading maps
          </h1>
          <p className="text-muted-foreground">
            Please check your API key and try again.
          </p>
        </div>
      </div>
    );
  }

  const activeModeInfo = SCAN_MODES.find((m) => m.id === activeMode);

  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid opacity-60"></div>
          <div className="absolute left-1/2 top-1/3 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="eyebrow mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-primary/60" />
                Capability Map
                <span className="h-px w-8 bg-primary/60" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider leading-[1.1] mb-6">
                <span className="text-gradient">MISSION CONTROL</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                Interactive demonstration of Gravion&apos;s anomaly detection
                capabilities
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary/90">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Demo environment · Simulated results
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Scan controls */}
            <div className="lg:col-span-1">
              <HudContainer className="h-full bg-card/60">
                <SectionHeader
                  eyebrow="Console"
                  title="SCAN CONTROLS"
                  className="mb-6"
                />

                <div className="space-y-7">
                  <div>
                    <StepLabel step={1} title="Scan Mode" />
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                      {SCAN_MODES.map((mode) => (
                        <ModeButton
                          key={mode.id}
                          active={activeMode === mode.id}
                          onClick={() => setActiveMode(mode.id)}
                        >
                          <mode.icon className="h-4 w-4" />
                          {mode.label}
                        </ModeButton>
                      ))}
                    </div>
                  </div>

                  {activeMode === "drawing" && (
                    <div className="rounded-md border border-primary/15 bg-background/40 p-3">
                      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Drawing Tools
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <ModeButton
                          active={drawingType === "polygon"}
                          onClick={() => setDrawingType("polygon")}
                        >
                          <Pencil className="h-4 w-4" />
                          Polygon
                        </ModeButton>
                        <ModeButton
                          active={drawingType === "circle"}
                          onClick={() => setDrawingType("circle")}
                        >
                          <CircleIcon className="h-4 w-4" />
                          Circle
                        </ModeButton>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant={isDrawingMode ? "default" : "outline"}
                          size="sm"
                          className={cn(
                            !isDrawingMode &&
                              "border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50"
                          )}
                          onClick={toggleDrawingMode}
                        >
                          {isDrawingMode ? "Cancel" : "Start Drawing"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50"
                          onClick={clearDrawnAreas}
                          disabled={totalDrawnShapes === 0}
                        >
                          Clear Areas
                        </Button>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {isDrawingMode
                          ? drawingType === "polygon"
                            ? "Click on the map to create polygon vertices. Complete by clicking the first point."
                            : "Click on the map to set center, then drag to set radius."
                          : totalDrawnShapes > 0
                          ? `${totalDrawnShapes} area(s) defined for scanning.`
                          : `Click "Start Drawing" to define a custom ${drawingType} area for scanning.`}
                      </div>
                    </div>
                  )}

                  <div>
                    <StepLabel step={2} title="Selected Location" />
                    {selectedLocation ? (
                      <div className="rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-sm font-mono text-primary">
                        <div>LAT: {selectedLocation.lat.toFixed(4)}</div>
                        <div>LNG: {selectedLocation.lng.toFixed(4)}</div>
                      </div>
                    ) : totalDrawnShapes > 0 ? (
                      <div className="text-sm text-muted-foreground">
                        {totalDrawnShapes} custom area(s) selected for
                        scanning.
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        Click on the map to select a location or draw an area.
                      </div>
                    )}
                    {(selectedLocation || totalDrawnShapes > 0) && (
                      <div className="mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsResourceSelectOpen(true)}
                          className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50"
                        >
                          Select Resources ({selectedResources.length})
                        </Button>
                      </div>
                    )}
                  </div>

                  <div>
                    <StepLabel step={3} title="Actions" />
                    <Button
                      className="btn-shine w-full h-11 font-semibold tracking-wider shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.55)]"
                      onClick={handleScan}
                      disabled={
                        (!selectedLocation && totalDrawnShapes === 0) ||
                        isScanning
                      }
                    >
                      {isScanning ? (
                        <>
                          <div className="animate-spin mr-2">
                            <Radar className="h-4 w-4" />
                          </div>
                          SCANNING...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" />
                          INITIATE SCAN
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Sample Scan History
                    </h3>
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground font-mono">
                    {SCAN_HISTORY.map((scan) => (
                      <div
                        key={scan.id}
                        className={cn(
                          "rounded-md border-l-2 bg-background/50 p-2.5",
                          scan.match ? "border-secondary" : "border-primary/40"
                        )}
                      >
                        <div
                          className={
                            scan.match ? "text-secondary" : "text-primary"
                          }
                        >
                          SCAN #{scan.id}
                        </div>
                        <div>{scan.coords}</div>
                        <div>RESULT: {scan.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </HudContainer>

              <ResourceSelect
                open={isResourceSelectOpen}
                onOpenChange={setIsResourceSelectOpen}
                selectedResources={selectedResources}
                onResourceChange={setSelectedResources}
                onConfirm={() => {
                  setIsResourceSelectOpen(false);
                  handleScan();
                }}
              />
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <HudContainer className="h-full bg-card/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <SectionHeader
                    eyebrow="Live View"
                    title="MISSION MAP"
                    className="mb-0"
                  />

                  <div className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {activeModeInfo?.status}
                  </div>
                </div>

                <div className="relative w-full bg-black rounded-md overflow-hidden cursor-crosshair h-125 md:h-150.5 ring-1 ring-primary/20 shadow-[0_30px_80px_-30px_rgba(0,255,255,0.35)]">
                  {!isLoaded ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-card">
                      <div className="animate-spin mr-2">
                        <Radar className="h-10 w-10 text-primary opacity-50" />
                      </div>
                      <span className="text-sm font-mono">
                        LOADING MAP DATA...
                      </span>
                    </div>
                  ) : (
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={center}
                      zoom={10}
                      options={options}
                      onLoad={onMapLoad}
                      onUnmount={onMapUnmount}
                      onClick={onMapClick}
                    >
                      {selectedLocation && (
                        <Marker
                          position={selectedLocation}
                          icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 8,
                            fillColor: "#00FFFF",
                            fillOpacity: 0.8,
                            strokeColor: "#00FFFF",
                            strokeWeight: 2,
                          }}
                        />
                      )}
                    </GoogleMap>
                  )}

                  {/* Grid overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border border-primary/[0.07]" />
                    ))}
                  </div>

                  {/* Center reticle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Crosshair className="h-10 w-10 text-primary opacity-30" />
                  </div>

                  {/* Radar sweep while a scan runs */}
                  {isScanning && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5" />
                      <div className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,255,255,0.28)_40deg,transparent_70deg)]" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 bg-background/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                        Scanning…
                      </div>
                    </div>
                  )}

                  {/* HUD corners */}
                  <div className="pointer-events-none absolute inset-2">
                    <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-primary/60" />
                    <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-primary/60" />
                    <span className="absolute left-0 bottom-0 h-5 w-5 border-l-2 border-b-2 border-primary/60" />
                    <span className="absolute right-0 bottom-0 h-5 w-5 border-r-2 border-b-2 border-primary/60" />
                  </div>

                  <div className="pointer-events-none absolute top-4 left-4 hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                    Satellite Feed: Active
                  </div>

                  {/* Custom zoom controls */}
                  <div className="absolute top-3 right-3 z-10 flex flex-col overflow-hidden rounded-md border border-primary/20 bg-background/80 backdrop-blur-md">
                    <button
                      type="button"
                      aria-label="Zoom in"
                      className="flex h-9 w-9 items-center justify-center text-foreground transition-colors hover:bg-primary/15 hover:text-primary cursor-pointer"
                      onClick={handleZoomIn}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <span className="h-px bg-primary/20" />
                    <button
                      type="button"
                      aria-label="Zoom out"
                      className="flex h-9 w-9 items-center justify-center text-foreground transition-colors hover:bg-primary/15 hover:text-primary cursor-pointer"
                      onClick={handleZoomOut}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                  </div>

                  <MapReadout map={mapT} mode={activeMode} />
                  {/* Add custom map type control */}
                  <MapTypeControl map={mapT} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                  {SYSTEM_STATUS.map((item) => (
                    <div
                      key={item.label}
                      className="relative overflow-hidden rounded-md border border-primary/15 bg-background/50 p-3 font-mono text-xs"
                    >
                      <span className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-primary to-primary/0" />
                      <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      <div className="text-primary">{item.value}</div>
                    </div>
                  ))}
                </div>
              </HudContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Detection capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="01 — Detection"
                title="Radiation & Electromagnetic Disruption Detection"
                description="Gravion’s portable detection modules flag gamma, neutron, and EM field disturbances — helping locate unauthorized tech, monitor disaster zones, or assess covert energy signatures."
                className="mb-8"
              />

              <div className="space-y-4">
                {DETECTION_FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative flex gap-4 overflow-hidden rounded-lg border border-primary/15 bg-card/40 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
                  >
                    <span className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-primary to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/5 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <HudContainer className="h-full bg-card/60">
                <div className="eyebrow mb-2">By Environment</div>
                <h3 className="text-xl font-medium mb-6">
                  Detection Range by Environment
                </h3>

                <div className="space-y-5">
                  {ENVIRONMENT_RANGE.map((env) => (
                    <MeterBar
                      key={env.label}
                      label={env.label}
                      value={`${env.percent}%`}
                      percent={env.percent}
                    />
                  ))}
                </div>
              </HudContainer>
            </Reveal>
          </div>

          <Reveal>
            <HudContainer className="mt-8 bg-card/60">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="eyebrow mb-2">By Target</div>
                  <h3 className="text-xl font-medium">
                    Detection Certainty by Target
                  </h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {Object.entries(CERTAINTY_COLORS).map(([level, color]) => (
                    <span key={level} className="inline-flex items-center gap-1.5">
                      <span className={cn("h-2 w-2 rounded-full", color.dot)} />
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                {TARGET_CERTAINTY.map((target) => (
                  <MeterBar
                    key={target.label}
                    label={target.label}
                    value={target.level}
                    percent={target.percent}
                    tone={CERTAINTY_COLORS[target.level]}
                  />
                ))}
              </div>
            </HudContainer>
          </Reveal>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 px-4">
        <Reveal className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card px-6 py-16 md:px-16 text-center shadow-[0_0_80px_-20px_rgba(0,255,255,0.25)]">
            <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none"></div>
            <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 glow-line"></div>

            <div className="relative max-w-3xl mx-auto">
              <div className="eyebrow mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-primary/60" />
                Roadmap
                <span className="h-px w-8 bg-primary/60" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-8">
                <span className="text-gradient">
                  Our Vision: One Year From Now
                </span>
              </h2>
              <p className="text-md md:text-lg text-muted-foreground mb-6">
                This demonstration showcases the current capabilities of
                Gravion&apos;s anomaly detection. In one year, we envision this
                platform evolving into a comprehensive planetary analysis suite.
              </p>
              <p className="text-md md:text-lg text-muted-foreground">
                Future enhancements will include real-time data fusion from
                multiple satellite constellations, advanced AI-driven predictive
                modeling for resource discovery, and seamless integration with
                ground-based robotic exploration units. Our goal is to provide
                unparalleled insights into planetary surfaces, accelerating
                scientific discovery and resource utilization efforts across the
                solar system.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function StepLabel({ step, title }: { step: number; title: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 font-mono text-[10px] text-primary">
        {step}
      </span>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/85">
        {title}
      </h3>
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm transition-all duration-200 cursor-pointer",
        active
          ? "border-primary bg-primary/15 text-primary shadow-[0_0_15px_rgba(0,255,255,0.25)]"
          : "border-white/10 bg-white/5 text-muted-foreground hover:border-primary/40 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

function MeterBar({
  label,
  value,
  percent,
  tone = CERTAINTY_COLORS.High,
}: {
  label: string;
  value: string;
  percent: number;
  tone?: { bar: string; text: string; dot: string };
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm">{label}</span>
        <span className={cn("font-mono text-xs uppercase tracking-wider", tone.text)}>
          {value}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={cn("h-full rounded-full", tone.bar)}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

const SCAN_HISTORY = [
  {
    id: "32941",
    coords: "LAT: 37.7749, LNG: -122.4194",
    result: "NO ANOMALIES",
    match: false,
  },
  {
    id: "32940",
    coords: "LAT: 40.7128, LNG: -74.0060",
    result: "POTENTIAL MATCH (68%)",
    match: true,
  },
  {
    id: "32939",
    coords: "LAT: 34.0522, LNG: -118.2437",
    result: "NO ANOMALIES",
    match: false,
  },
];

const SYSTEM_STATUS = [
  { label: "System Status", value: "ALL SYSTEMS OPERATIONAL" },
  { label: "Satellite Coverage", value: "83% OF TARGET AREA" },
  { label: "Detection Confidence", value: "93% IN OPTIMAL CONDITIONS" },
];

const DETECTION_FEATURES = [
  {
    icon: Thermometer,
    title: "Subaquatic & Coastal Scanning",
    description:
      "Marine-adapted Gravion drones map underwater terrain and track submerged assets using 3D sonar, temperature anomalies, and turbidity shifts — supporting naval ops, environmental surveys, and deepwater exploration.",
  },
  {
    icon: Radar,
    title: "Seismic Disturbance Mapping",
    description:
      "By analyzing micro-tremors, Gravion forecasts geological instability, detects underground construction, and flags tunneling activity — crucial for border security, mining, and earthquake research",
  },
];

const ENVIRONMENT_RANGE = [
  { label: "Forest", percent: 78 },
  { label: "Desert", percent: 97 },
  { label: "Mountain", percent: 86 },
  { label: "Ocean Surface", percent: 94 },
  { label: "Submerged", percent: 73 },
  { label: "Urban", percent: 85 },
];

const CERTAINTY_COLORS: Record<
  string,
  { bar: string; text: string; dot: string }
> = {
  "Very High": {
    bar: "bg-linear-to-r from-primary/70 to-primary",
    text: "text-primary",
    dot: "bg-primary",
  },
  High: {
    bar: "bg-linear-to-r from-cyan-600/70 to-cyan-400",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
  },
  "Medium - High": {
    bar: "bg-linear-to-r from-sky-700/70 to-sky-400",
    text: "text-sky-300",
    dot: "bg-sky-400",
  },
  Medium: {
    bar: "bg-linear-to-r from-indigo-700/70 to-indigo-400",
    text: "text-indigo-300",
    dot: "bg-indigo-400",
  },
  Low: {
    bar: "bg-linear-to-r from-slate-600/70 to-slate-400",
    text: "text-slate-400",
    dot: "bg-slate-400",
  },
};

const TARGET_CERTAINTY = [
  { label: "Iron Ore", level: "Very High", percent: 95 },
  { label: "Gold", level: "Very High", percent: 95 },
  { label: "Copper", level: "Very High", percent: 95 },
  { label: "Aluminium", level: "Very High", percent: 95 },
  { label: "Platinum", level: "Very High", percent: 95 },
  { label: "Zinc", level: "High", percent: 80 },
  { label: "Lithium Clay", level: "High", percent: 80 },
  { label: "Diamonds", level: "High", percent: 80 },
  { label: "Rare Earth Elements", level: "High", percent: 80 },
  { label: "Oil / Gas", level: "High", percent: 80 },
  { label: "Meteorites", level: "Medium - High", percent: 70 },
  { label: "Caves / Voids", level: "Medium - High", percent: 70 },
  { label: "Buried Stashes", level: "Medium - High", percent: 68 },
  { label: "Deep Buried Structures", level: "Medium", percent: 55 },
  { label: "Radioactive Anomalies", level: "Medium", percent: 55 },
  { label: "Unknown Deep Targets", level: "Low", percent: 30 },
  { label: "Native Silver Veins (Deep)", level: "Low", percent: 30 },
  { label: "Deep Gem Pockets", level: "Low", percent: 30 },
  { label: "Helium", level: "Low", percent: 30 },
  { label: "Lost / Ancient Cities", level: "Low", percent: 30 },
];
