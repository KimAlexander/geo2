import { combineReducers } from 'redux'
import { locationTracker } from './locationTracker';

export const geoApp = combineReducers({
  locationTracker
})
