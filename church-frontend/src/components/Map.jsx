import React from "react";
import { GoogleMap, useLoadScript, MarkerF, LoadScript, AdvancedMarkerView } from "@react-google-maps/api";

const containerStyle = {
  width: '80vh',
  height: '80vh',
}

const center = {
  lat: 47.3426728,
  lng: -122.2909152
};

const position = {
  lat: 47.3426728,
  lng: -122.2909152
}

const Map = () => {
  const API_URL = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey = {API_URL}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        >
          <MarkerF
          position={position}
          label={"FFPC"}
          clickable={true}
          />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);