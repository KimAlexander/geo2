import React, { Component } from 'react'
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap
} from "react-google-maps";

import { Maps } from './Maps';

export const MapInitializer = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <Maps />
);