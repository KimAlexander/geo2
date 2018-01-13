import React, { Component } from 'react'
import { GoogleMap, Marker } from "react-google-maps";
import { Geolocation } from './Geolocation';

class MapsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ 
          lat: this.props.location.coords.lat,
          lng: this.props.location.coords.lng
        }}>
        {this.props.markers.map((marker) => (
          <Marker position={{
            lat: marker[0],
            lng: marker[1]
          }} key={marker[0]}/>
        ))}
      </GoogleMap>
    );
  }
}

export const Maps = Geolocation(MapsComponent);