import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { config } from './config';

export class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Avatar
          src={config.userAvatarImageSrc}
          size={150}
        />
        <p>Test user</p>
        <IconButton onClick={this.props.onBackClick}>
          <FontIcon className="material-icons">keyboard_arrow_left </FontIcon>
        </IconButton>
      </div>
    )
  }
}


