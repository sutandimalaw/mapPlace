import React, { useState, useEffect } from 'react';
import MapPlace from './components/mapPlace';

// API key of the google map

const App = () => {
  
  const [loadMap, setLoadMap] = useState(false);
  
  const GOOGLE_MAP_API_KEY = ''

  // load google map script
  const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      callback();
    } else {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", callback);
    }
  }


  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="App">
      <div style={{margin:20}}>
              {!loadMap ? <div>Loading...</div> : <MapPlace />}     
      </div> 
    </div>
  );
}

export default App;