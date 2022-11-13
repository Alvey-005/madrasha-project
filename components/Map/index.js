import React from 'react'
// import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";
// import './map.css';
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}
const center ={
    lat: 37.42216,
    lng: -122.08427
}
const Map = ({ location, zoomLevel=1 }) => {
    console.log("paul",location);
    return(
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBuyKVYPwdRV0Vckd39UmX6eJaiOeyDCLg' }}
                defaultCenter={center}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>)
}
export default Map;