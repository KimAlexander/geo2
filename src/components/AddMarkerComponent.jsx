import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export let AddMarkerComponent = ({ coords, onSubmit}) => {
  return (
    <div>
      <form>
        <TextField floatingLabelText="Latitude" value={coords.lt}/>
        <TextField floatingLabelText="Longitude" value={coords.ln}/>
        <RaisedButton label="Add Location" 
                      onClick={() => onSubmit(coords)} 
                      primary={true} />
      </form>
    </div>
  )
}