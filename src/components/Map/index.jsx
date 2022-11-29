import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./style.css";

export const Map = ({location}) => {
  return (
    <div className="container map">
      <MapContainer center={[location.location.latitude, location.location.longitude]} zoom={13} scrollWheelZoom={false} style={{height: '300px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.location.latitude, location.location.longitude]}>
          <Popup>
            <p>{`${ location.city.name } ${ location.city.region_name }`}</p>
            <p><b>{`${ location.country.country_name }`}</b></p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
