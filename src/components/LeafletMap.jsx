import React,{useState} from 'react';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import { useMapEvents } from 'react-leaflet/hooks'

export default function LeafletMap({data}) {
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
    return position === null ? null : (
      <Marker position={position}>
        <Popup>GPS location</Popup>
      </Marker>
    )
 
  }
  return (
      <MapContainer center={[data.lat,data.lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.lat, data.lon]}>
          <Popup>
            Your Service provide Entry point
          </Popup>
        </Marker>
        <LocationMarker />
    </MapContainer>

  )
}



