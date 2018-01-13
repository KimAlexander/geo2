
import React, { Component } from 'react'
import { config } from './config'

export function Geolocation (WrappedComponent) {
  return class extends Component {
    constructor() {
        super();
        this.state = { 
          coords: {
            lat: 0,
            lng: 0
          }
        };
    }
    
    componentDidMount() {
      this.getLocation();
    }

    getLocation() {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.setState((state) => ({
          coords: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
        }));
      });
  }
    
    render() {
      return (
        this.state.coords.lat ?
          <WrappedComponent location={this.state} markers={config.markers}/>
                              : null
      )
    }
  }  
}