import { useEffect } from 'react';
import MapContainer from './MapContainer';

const MapPage = () => {
  useEffect(() => {
    // Load the map using the map API of your choice
    // Implement the functionalities like click and drag, zoom, and marking locations on the map
  }, []);

  return (
    <div>
      <h2>Map Page</h2>
      <MapContainer/>
    </div>
  );
};

export default MapPage;
