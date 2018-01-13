import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { geoApp } from './reducers/index';
import { AppWrapper } from './AppWrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(geoApp)
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppWrapper/>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)