"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { HudContainer } from "@/components/ui/hud-container";
import { ResourceSelect } from "@/components/ui/resource-select";
import {
  Crosshair,
  Radar,
  Search,
  Thermometer,
  Target,
  Pencil,
  Circle as CircleIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion"; // Import motion

const libraries = ["places", "drawing", "geometry"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.7128,
  lng: -74.006,
};

const options = {
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#242f3e" }],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#242f3e" }],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
  ],
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: true,
};

export default function MapPage() {
  const { toast } = useToast();
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
    libraries: libraries as any,
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

  const onMapLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;

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
        "absolute top-4 left-1/2 -translate-x-1/2 z-10 w-64 px-4 py-2 rounded bg-card/90 border border-primary/20 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

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

          toast({
            title: "Area defined",
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

          toast({
            title: "Area defined",
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

        toast({
          title: "Location found",
          description: `Selected: ${place.formatted_address}`,
        });
      });
    },
    [toast]
  );

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
    toast({
      title: "Areas cleared",
      description: "All drawn areas have been removed.",
    });
  }, [drawnAreas, drawnCircles, toast]);

  // Update the scan function to handle circles too and adjust scan time based on area size
  const handleScan = () => {
    const totalDrawnShapes = drawnAreas.length + drawnCircles.length;

    if (!selectedLocation && totalDrawnShapes === 0) {
      toast({
        title: "No area selected",
        description:
          "Please select a location or draw an area on the map first.",
        variant: "destructive",
      });
      return;
    }

    if (selectedResources.length === 0) {
      toast({
        title: "No resources selected",
        description: "Please select at least one resource to scan for.",
        variant: "destructive",
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
        const path = polygon.getPath();
        const pathArray = [];
        for (let i = 0; i < path.getLength(); i++) {
          const point = path.getAt(i);
          pathArray.push({ lat: point.lat(), lng: point.lng() });
        }
        totalArea += google.maps.geometry.spherical.computeArea(path);
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

      toast({
        title: "Scan initiated",
        description: `Scanning ${totalDrawnShapes} custom area(s) for ${
          selectedResources.length
        } resources. Estimated time: ${Math.round(
          scanDuration / 1000
        )} seconds.`,
      });
    } else {
      toast({
        title: "Scan initiated",
        description: `Scanning for ${
          selectedResources.length
        } resources at lat: ${selectedLocation?.lat.toFixed(
          4
        )}, lng: ${selectedLocation?.lng.toFixed(4)}`,
      });
    }

    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan complete",
        description: `Analysis complete for ${selectedResources.join(
          ", "
        )}. No significant deposits detected.`,
      });
    }, scanDuration);
  };

  const onMapClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setSelectedLocation({ lat, lng });
        setIsResourceSelectOpen(true);

        toast({
          title: "Location selected",
          description: `Selected coordinates: ${lat.toFixed(4)}, ${lng.toFixed(
            4
          )}`,
        });
      }
    },
    [toast]
  );

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

  return (
    <div className="pt-16 pb-20">
      <section className="pt-16 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-6">
              MISSION CONTROL
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Interactive demonstration of Gravion&apos;s anomaly detection
              capabilities
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <HudContainer className="h-full">
                <SectionHeader title="SCAN CONTROLS" className="mb-6" />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Scan Mode</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <Button
                        variant={
                          activeMode === "thermal" ? "default" : "outline"
                        }
                        size="sm"
                        className="justify-start"
                        onClick={() => setActiveMode("thermal")}
                      >
                        <Thermometer className="h-4 w-4 mr-2" />
                        Thermal
                      </Button>
                      <Button
                        variant={activeMode === "radar" ? "default" : "outline"}
                        size="sm"
                        className="justify-start"
                        onClick={() => setActiveMode("radar")}
                      >
                        <Radar className="h-4 w-4 mr-2" />
                        Radar
                      </Button>
                      <Button
                        variant={activeMode === "multi" ? "default" : "outline"}
                        size="sm"
                        className="justify-start"
                        onClick={() => setActiveMode("multi")}
                      >
                        <Target className="h-4 w-4 mr-2" />
                        Multi-Spectral
                      </Button>
                      <Button
                        variant={
                          activeMode === "drawing" ? "default" : "outline"
                        }
                        size="sm"
                        className="justify-start"
                        onClick={() => {
                          setActiveMode("drawing");
                        }}
                      >
                        <Pencil className="h-4 w-4 mr-2" />
                        Free Drawing
                      </Button>
                    </div>
                  </div>

                  {activeMode === "drawing" && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">
                        Drawing Tools
                      </h3>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Button
                          variant={
                            drawingType === "polygon" ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setDrawingType("polygon")}
                        >
                          <Pencil className="h-4 w-4 mr-2" />
                          Polygon
                        </Button>
                        <Button
                          variant={
                            drawingType === "circle" ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setDrawingType("circle")}
                        >
                          <CircleIcon className="h-4 w-4 mr-2" />
                          Circle
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant={isDrawingMode ? "default" : "outline"}
                          size="sm"
                          onClick={toggleDrawingMode}
                        >
                          {isDrawingMode ? "Cancel Drawing" : "Start Drawing"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={clearDrawnAreas}
                          disabled={
                            drawnAreas.length + drawnCircles.length === 0
                          }
                        >
                          Clear Areas
                        </Button>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {isDrawingMode
                          ? drawingType === "polygon"
                            ? "Click on the map to create polygon vertices. Complete by clicking the first point."
                            : "Click on the map to set center, then drag to set radius."
                          : drawnAreas.length + drawnCircles.length > 0
                          ? `${
                              drawnAreas.length + drawnCircles.length
                            } area(s) defined for scanning.`
                          : `Click "Start Drawing" to define a custom ${drawingType} area for scanning.`}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Selected Location
                    </h3>
                    {selectedLocation ? (
                      <div className="text-sm font-mono text-muted-foreground">
                        <div>LAT: {selectedLocation.lat.toFixed(4)}</div>
                        <div>LNG: {selectedLocation.lng.toFixed(4)}</div>
                      </div>
                    ) : drawnAreas.length + drawnCircles.length > 0 ? (
                      <div className="text-sm text-muted-foreground">
                        {drawnAreas.length + drawnCircles.length} custom area(s)
                        selected for scanning.
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        Click on the map to select a location or draw an area.
                      </div>
                    )}
                    {(selectedLocation ||
                      drawnAreas.length + drawnCircles.length > 0) && (
                      <div className="mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsResourceSelectOpen(true)}
                          className="w-full"
                        >
                          Select Resources ({selectedResources.length})
                        </Button>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Actions</h3>
                    <Button
                      className="w-full"
                      onClick={handleScan}
                      disabled={
                        (!selectedLocation && drawnAreas.length === 0) ||
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

                <div className="mt-8 pt-4 border-t border-primary/20">
                  <h3 className="text-sm font-medium mb-4">Scan History</h3>
                  <div className="space-y-2 text-xs text-muted-foreground font-mono">
                    <div className="p-2 bg-card/70 rounded">
                      <div className="text-primary">SCAN #32941</div>
                      <div>LAT: 37.7749, LNG: -122.4194</div>
                      <div>RESULT: NO ANOMALIES</div>
                    </div>
                    <div className="p-2 bg-card/70 rounded">
                      <div className="text-secondary">SCAN #32940</div>
                      <div>LAT: 40.7128, LNG: -74.0060</div>
                      <div>RESULT: POTENTIAL MATCH (68%)</div>
                    </div>
                    <div className="p-2 bg-card/70 rounded">
                      <div className="text-accent">SCAN #32939</div>
                      <div>LAT: 34.0522, LNG: -118.2437</div>
                      <div>RESULT: NO ANOMALIES</div>
                    </div>
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

            <div className="lg:col-span-3">
              <HudContainer className="h-full">
                <div className="flex items-center justify-between mb-6">
                  <SectionHeader title="MISSION MAP" className="mb-0" />

                  <div className="flex items-center text-xs text-primary font-mono">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></div>
                    {activeMode === "thermal" && "THERMAL IMAGING ACTIVE"}
                    {activeMode === "radar" && "RADAR SCANNING ACTIVE"}
                    {activeMode === "multi" && "MULTI-SPECTRAL ANALYSIS ACTIVE"}
                    {activeMode === "drawing" && "FREE DRAWING MODE ACTIVE"}
                  </div>
                </div>

                <div className="relative w-full aspect-video bg-black rounded overflow-hidden cursor-crosshair">
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
                      zoom={8}
                      center={center}
                      options={options}
                      onClick={onMapClick}
                      onLoad={onMapLoad}
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

                  <div className="absolute top-4 left-4 text-xs text-primary font-orbitron opacity-80">
                    ZOOM: 8X | MODE: {activeMode.toUpperCase()}
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-primary font-orbitron opacity-80">
                    SATELLITE FEED: ACTIVE
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Crosshair className="h-10 w-10 text-primary opacity-30" />
                  </div>

                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border border-primary/10" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="text-xs p-3 bg-card/70 border border-primary/20 rounded font-mono space-y-1">
                    <div className="text-muted-foreground">SYSTEM STATUS:</div>
                    <div className="text-primary">ALL SYSTEMS OPERATIONAL</div>
                  </div>
                  <div className="text-xs p-3 bg-card/70 border border-primary/20 rounded font-mono space-y-1">
                    <div className="text-muted-foreground">
                      SATELLITE COVERAGE:
                    </div>
                    <div className="text-primary">83% OF TARGET AREA</div>
                  </div>
                  <div className="text-xs p-3 bg-card/70 border border-primary/20 rounded font-mono space-y-1">
                    <div className="text-muted-foreground">
                      DETECTION CONFIDENCE:
                    </div>
                    <div className="text-primary">
                      93% IN OPTIMAL CONDITIONS
                    </div>
                  </div>
                </div>
              </HudContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Radiation & Electromagnetic Disruption Detection"
                description="Gravion’s portable detection modules flag gamma, neutron, and EM field disturbances — helping locate unauthorized tech, monitor disaster zones, or assess covert energy signatures."
                className="mb-8"
              />

              <div className="space-y-6">
                <div className="p-4 bg-card/50 border border-primary/20 rounded">
                  <div className="flex items-center mb-2">
                    <Thermometer className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium">
                      Subaquatic & Coastal Scanning
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marine-adapted Gravion drones map underwater terrain and
                    track submerged assets using 3D sonar, temperature
                    anomalies, and turbidity shifts — supporting naval ops,
                    environmental surveys, and deepwater exploration.
                  </p>
                </div>

                <div className="p-4 bg-card/50 border border-secondary/20 rounded">
                  <div className="flex items-center mb-2">
                    <Radar className="h-5 w-5 text-secondary mr-2" />
                    <h3 className="text-lg font-medium">
                      Seismic Disturbance Mapping
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    By analyzing micro-tremors, Gravion forecasts geological
                    instability, detects underground construction, and flags
                    tunneling activity — crucial for border security, mining,
                    and earthquake research
                  </p>
                </div>
              </div>
            </div>

            <div>
              <HudContainer className="h-full">
                <h3 className="text-xl font-medium mb-4">
                  Detection Range by Environment
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Forest</span>
                      <span className="text-sm text-primary">94%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Desert</span>
                      <span className="text-sm text-primary">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Mountain</span>
                      <span className="text-sm text-primary">89%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Ocean Surface</span>
                      <span className="text-sm text-primary">96%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Submerged</span>
                      <span className="text-sm text-primary">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Urban</span>
                      <span className="text-sm text-primary">88%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </HudContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Future Vision Section */}
      <motion.section
        className="py-16 bg-background/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-xl bg-card/80 backdrop-blur-sm border border-primary/20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-wider mb-8 text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Vision: One Year From Now
            </motion.h2>
            <motion.p
              className="text-md md:text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              This demonstration showcases the current capabilities of
              Gravion&apos;s anomaly detection. In one year, we envision this
              platform evolving into a comprehensive planetary analysis suite.
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Future enhancements will include real-time data fusion from
              multiple satellite constellations, advanced AI-driven predictive
              modeling for resource discovery, and seamless integration with
              ground-based robotic exploration units. Our goal is to provide
              unparalleled insights into planetary surfaces, accelerating
              scientific discovery and resource utilization efforts across the
              solar system.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
