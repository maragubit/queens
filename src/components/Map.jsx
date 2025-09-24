import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react/dist/iconify.js';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 36.68146875230025, 
  lng: -6.11655351933622, 
};
const api_key=process.env.REACT_APP_GOOGLE_API_KEY;

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Esto podría ser útil si quieres mostrar algo mientras carga el mapa
    setMapLoaded(true);
  }, []);

  return (
    <Container>
        <h1 className='mb-3'>Ubicación <Icon icon="material-symbols:location-on" color="var(--primary)" /></h1>
    <LoadScript googleMapsApiKey={api_key}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        {mapLoaded && (
          <Marker position={center} />
        )}
      </GoogleMap>
    </LoadScript>
    </Container>
  );
};

export default Map;