"use client";
import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef } from "react";
import { MAP_CONFIG, MAP_FOG_CONFIG } from "./config";
import { spinGlobe } from "./utils";
import "mapbox-gl/dist/mapbox-gl.css";
import useMapStore from "./store";
import { useGlobeData } from "../../_contexts/globe-data";

const REQUIRED_ZOOM_LEVEL = 8;

const MapboxMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { setMap, setCurrentMarker, setLocationFound } = useMapStore();
  const { currentSiteData } = useGlobeData();
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXGL_ACCESSTOKEN;
    if (mapContainerRef.current === null) return;

    const map = new Map({
      ...MAP_CONFIG,
      container: mapContainerRef.current,
    });
    setMap(map);
    mapRef.current = map;

    // Start the spin
    let shouldSpin = true;
    const startSpin = () => {
      shouldSpin = true;
      spinGlobe(map, shouldSpin);
    };
    const continueSpin = () => {
      spinGlobe(map, shouldSpin);
    };
    const stopSpin = () => {
      shouldSpin = false;
    };

    startSpin();

    // Spin again once the animation is complete
    map.on("moveend", continueSpin);
    // Stop spinning when the user clicks the map
    map.on("mousedown", stopSpin);
    // Stop spinning when the user touches the map
    map.on("touchstart", stopSpin);

    const onLoad = () => {
      map.setFog(MAP_FOG_CONFIG);
    };

    map.on("load", onLoad);

    return () => {
      map.off("load", onLoad);
      map.off("moveend", continueSpin);
      map.off("mousedown", stopSpin);
      map.off("touchstart", stopSpin);
    };
  }, []);

  // Handle marker creation and visibility
  useEffect(() => {
    if (!mapRef.current || !currentSiteData) return;

    const map = mapRef.current;
    const { latitude, longitude } = currentSiteData.location;

    // Remove existing marker if any
    const existingMarker = useMapStore.getState().currentMarker;
    if (existingMarker) {
      existingMarker.remove();
    }

    // Create new marker
    const marker = new mapboxgl.Marker({
      color: "#FF0000",
      scale: 0.8,
    })
      .setLngLat([longitude, latitude])
      .addTo(map);

    // Set marker visibility based on zoom level
    const updateMarkerVisibility = () => {
      const zoom = map.getZoom();
      if (zoom >= REQUIRED_ZOOM_LEVEL) {
        marker.getElement().style.display = "block";
      } else {
        marker.getElement().style.display = "none";
      }
    };

    // Check if marker is in viewport
    const checkMarkerInViewport = () => {
      const bounds = map.getBounds();
      if (!bounds) return;
      const markerLngLat = marker.getLngLat();
      const isInView = bounds.contains(markerLngLat);
      if (isInView && map.getZoom() >= REQUIRED_ZOOM_LEVEL) {
        marker.getElement().style.cursor = "pointer";
      } else {
        marker.getElement().style.cursor = "default";
      }
    };

    // Add click handler to marker
    marker.getElement().addEventListener("click", () => {
      if (map.getZoom() >= REQUIRED_ZOOM_LEVEL) {
        const markerLngLat = marker.getLngLat();
        map.flyTo({
          center: markerLngLat,
          zoom: REQUIRED_ZOOM_LEVEL,
          duration: 1000
        });
        setLocationFound(true);
      }
    });

    // Update marker visibility on zoom and move
    map.on("zoom", updateMarkerVisibility);
    map.on("move", checkMarkerInViewport);

    // Set initial visibility
    updateMarkerVisibility();
    checkMarkerInViewport();

    setCurrentMarker(marker);

    return () => {
      map.off("zoom", updateMarkerVisibility);
      map.off("move", checkMarkerInViewport);
      marker.remove();
    };
  }, [currentSiteData]);

  return (
    <div
      style={{ height: "100%" }}
      ref={mapContainerRef}
      className="map-container flex-1 rounded-lg border border-border"
    ></div>
  );
};

export default MapboxMap;