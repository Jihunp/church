import React from "react";
import { GoogleMap, useLoadScript, MarkerF, LoadScript, AdvancedMarkerView } from "@react-google-maps/api";

const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: 47.3426728,
  lng: -122.2909152
};

const position = {
  lat: 47.3426728,
  lng: -122.2909152
}
/*

function map
map.addListener("center_changed", () => {
  window.setTimeout(() => {
  }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoon()
  })
})
*/


const Map = () => {
  const API_URL = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey = {API_URL}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        >
          <MarkerF
          position={position}
          label={"Federal Way First"}
          clickable={true}
          // onClick={() => setZoom(16)}
          />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);