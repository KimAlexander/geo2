import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { User } from './User';
import { AddMarker } from './containers/AddMarker';

export class LeftMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer open={this.props.isOpen}>  
        <User onBackClick={this.props.onLeftIconClick}/>
        <MenuItem
          primaryText="Список мест"
          leftIcon={
            <FontIcon className="material-icons">business</FontIcon>
          }/>
        <MenuItem 
          leftIcon={
          <FontIcon className="material-icons">timeline</FontIcon>
          }>Oтчеты </MenuItem>
        <AddMarker/>
      </Drawer>
    )
  }
}
