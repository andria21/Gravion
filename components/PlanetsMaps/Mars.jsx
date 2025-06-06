// pages/mars.js
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function MarsMap() {
  const viewDivRef = useRef(null);

  useEffect(() => {
    // Load the ArcGIS script
    const script = document.createElement("script");
    script.src = "https://js.arcgis.com/4.32/";
    script.onload = () => {
      // Now require the modules
      window.require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/ElevationLayer",
        "esri/layers/TileLayer",
        "esri/layers/FeatureLayer",
        "esri/widgets/LayerList"
      ], (Map, SceneView, ElevationLayer, TileLayer, FeatureLayer, LayerList) => {
        const marsElevation = new ElevationLayer({
          url: "https://astro.arcgis.com/arcgis/rest/services/OnMars/MDEM200M/ImageServer",
          copyright: "NASA, ESA, HRSC, Goddard Space Flight Center, USGS Astrogeology Science Center, Esri"
        });

        const marsImagery = new TileLayer({
          url: "https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer",
          title: "Imagery",
          copyright: "USGS Astrogeology Science Center, NASA, JPL, Esri"
        });

        const map = new Map({
          ground: {
            layers: [marsElevation]
          },
          layers: [marsImagery]
        });

        const view = new SceneView({
          map,
          container: viewDivRef.current,
          spatialReference: {
            wkid: 104971
          },
          camera: {
            position: {
              x: 27.63423,
              y: -6.34466,
              z: 1281525.766,
              spatialReference: 104971
            },
            heading: 332.28,
            tilt: 37.12
          }
        });

        const cratersLayer = new FeatureLayer({
          url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Mars_Nomenclature_Mountains/FeatureServer",
          definitionExpression: "type = 'Crater, craters'",
          title: "Craters",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [{
                type: "fill",
                material: { color: [255, 255, 255, 0.1] },
                outline: {
                  color: [0, 0, 0, 0.4],
                  size: 2
                }
              }]
            }
          },
          labelingInfo: [{
            labelPlacement: "above-center",
            labelExpressionInfo: { expression: "$feature.NAME" },
            symbol: {
              type: "label-3d",
              symbolLayers: [{
                type: "text",
                material: { color: [0, 0, 0, 0.9] },
                halo: {
                  size: 2,
                  color: [255, 255, 255, 0.7]
                },
                font: {
                  size: 10
                }
              }],
              verticalOffset: {
                screenLength: 40,
                maxWorldLength: 500000,
                minWorldLength: 0
              },
              callout: {
                type: "line",
                size: 0.5,
                color: [255, 255, 255, 0.9],
                border: {
                  color: [0, 0, 0, 0.3]
                }
              }
            }
          }]
        });

        map.add(cratersLayer);

        const shadedReliefLayer = new TileLayer({
          url: "https://astro.arcgis.com/arcgis/rest/services/OnMars/MColorDEM/MapServer",
          copyright: "USGS Astrogeology Science Center, NASA, JPL, ESA, DLR, Esri",
          title: "Shaded relief",
          visible: false
        });

        map.add(shadedReliefLayer);

        const layerList = new LayerList({
          view
        });

        view.ui.add(layerList, "top-right");
      });
    };

    document.head.appendChild(script);

    // Add CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://js.arcgis.com/4.32/esri/themes/light/main.css";
    document.head.appendChild(link);

    return () => {
      // Optional cleanup
    };
  }, []);

  return (
    <>
      <Head>
        <title>Visualize data on Mars</title>
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
      </Head>
      <div
        ref={viewDivRef}
        style={{ height: "100%", width: "100%", padding: 0, margin: 0 }}
      ></div>
    </>
  );
}
