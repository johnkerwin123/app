import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ location }) {
  const { lat, lon } = location;

  return (
    <MapContainer center={[lat, lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          A marker for the location.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
