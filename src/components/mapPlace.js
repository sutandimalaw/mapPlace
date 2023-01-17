import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

const MapPlace = () => {
    const googleMapRef = useRef(null);
    const placeInputRef = useRef(null);
 
    const initMap =()=> { 
        const map = new window.google.maps.Map(googleMapRef.current, {
        center: { lat: 40.749933, lng: -73.98633 },  
        zoom: 13,
        mapTypeControl: false,
        });

        const card = document.getElementById("pac-card");
        const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["establishment"],
        };
    
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(card);
        const autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current, options);
    
        autocomplete.bindTo("bounds", map);
    
        const infowindow = new window.google.maps.InfoWindow();
        const infowindowContent = document.getElementById("infowindow-content");
    
        infowindow.setContent(infowindowContent);
    
        const marker = new window.google.maps.Marker({
        map,
        anchorPoint: new window.google.maps.Point(0, -29),
        });
    
        autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
    
        const place = autocomplete.getPlace();
    
        if (!place.geometry || !place.geometry.location) {
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }
    
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
    
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        });
    
    }

    useEffect(() => {
        initMap();
    },[])

    return (
        <>
            <div id="pac-card">
                <Card sx={{ width: 400 }}>
                    <CardHeader  style={{background:"#4d90fe", color:"white"}} title="Autocomplete Search"/>
                    <CardContent style={{display:"flex"}}>
                        <input 
                            label='input location'  
                            ref={placeInputRef} 
                            style={{
                                width:"100%",
                                padding: "12px 20px"
                            }}
                        />
                    </CardContent>         
                </Card>
            </div>
            <div 
                ref={googleMapRef}
                style={{ width: 800, height: 700 }}
            />
            
        </>

    )
  
}

export default MapPlace
