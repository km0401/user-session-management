import { useEffect } from 'react';
import MapContainer from './MapContainer';

const MapPage = () => {
  useEffect(() => {
    // Load the map using the map API of your choice
    // Implement the functionalities like click and drag, zoom, and marking locations on the map
  }, []);

  const handleLogout = () => {
    // Perform logout actions, such as clearing the session or token
    localStorage.removeItem('token');
    window.location.href = '/'; // Redirect to the login page
  };

  return (
    <div>
      <h2>Map Page</h2>
      <button onClick={handleLogout}>Logout</button>
      <MapContainer/>
    </div>
  );
};

export default MapPage;
