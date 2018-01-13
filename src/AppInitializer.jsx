import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { MapLoader } from './MapLoader';
import { LeftMenu } from './LeftMenu';
import AppBar from 'material-ui/AppBar';

export class AppInitializer extends Component {
  constructor() {
    super();
    this.state = {
      open : false
    };
  }

  onLeftIconClick(param) {
    this.setState({
      open: !this.state.open
    })
    console.log(this.state.open);
  }

  render() {
    return (
      <div>
      <AppBar title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              style={{position: 'absolute'}}
              onLeftIconButtonTouchTap={this.onLeftIconClick.bind(this)}/>      
        <LeftMenu onLeftIconClick={this.onLeftIconClick.bind(this)} isOpen={this.state.open}/>
        <MapLoader/>
      </div>
    )
  }
}
