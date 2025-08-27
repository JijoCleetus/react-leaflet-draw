import React, { useRef, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";

const MapWithDraw = () => {
  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        polygon: true,
        polyline: true,
        rectangle: true,
        circle: false,
        marker: true,
      },
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (e) => {
      drawnItems.addLayer(e.layer);
      console.log("Shape created:", e.layer);
    });
  }, []);

  return (
    <Map
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </Map>
  );
};

export default MapWithDraw;
