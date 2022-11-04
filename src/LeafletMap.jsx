import React from 'react';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'

export default function LeafletMap({data}) {
  console.log(data.lat)
  return (
      <MapContainer center={[data.lat,data.lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.lat, data.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
    </MapContainer>

  )
}
