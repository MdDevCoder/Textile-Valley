"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

// Custom gold icon for Textile Valley
const luxuryIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Setup dark mode tiles for a premium look
const DarkMapLayer = () => {
  return (
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    />
  );
};

export default function MapComponent() {
  const center: [number, number] = [21.0772, 72.9376]; // Approx coord for Lajpore, Surat

  return (
    <MapContainer 
      center={center} 
      zoom={12} 
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", backgroundColor: "#0A0A0A" }}
      className="z-0"
    >
      <DarkMapLayer />
      
      <Marker position={center} icon={luxuryIcon}>
        <Popup className="premium-popup">
          <div className="font-heading font-bold text-lg mb-1">Textile Valley</div>
          <div className="text-xs text-gray-500">Premium Industrial Park</div>
        </Popup>
      </Marker>

      {/* Surrounding Areas (Mock Coordinates) */}
      <Marker position={[21.1702, 72.8311]} icon={icon}>
        <Popup>Surat City (10km)</Popup>
      </Marker>
      <Marker position={[21.0500, 73.0167]} icon={icon}>
        <Popup>Palsana (10km)</Popup>
      </Marker>
      <Marker position={[20.9467, 72.9520]} icon={icon}>
        <Popup>Navsari (15km)</Popup>
      </Marker>
    </MapContainer>
  );
}
