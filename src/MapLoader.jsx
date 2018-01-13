import React, { Component } from 'react'
import { MapInitializer } from './MapInitializer';
import { config } from './config';

export class MapLoader extends Component {
  constructor() {
    super();
    this.state = {
      windowWidth: `${window.innerWidth.toString()}px`,      
      windowHeight: `${window.innerHeight.toString()}px`
    }
  }
  render() {
    return (
      <MapInitializer 
        googleMapURL={`${config.mapsAPI}${config.key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: this.state.windowHeight, width:this.setState.windowWidth }} />}
        mapElement={<div style={{ height: `100%` }}/>}
      />
    )
  }
}
