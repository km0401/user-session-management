import React, { useState } from 'react';
import { GoogleMap,LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 13.0198,
    lng: 77.5661,
  };

  const handleMapClick = (event) => {
    const clickedPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setMarkerPosition(clickedPosition);
  };

  return (
    <>
    <LoadScript
        googleMapsApiKey="AIzaSyDKz59S0RAf8MC49Kxb5bfWcI7w3fi2wjk"
      >
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={14}
      onClick={handleMapClick}
    >
      {markerPosition && (
        <Marker position={markerPosition} draggable={true} onDragEnd={handleMapClick} />
      )}
    </GoogleMap>
    </LoadScript>
    </>
  );
};

export default MapContainer;
