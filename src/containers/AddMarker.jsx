import { connect } from 'react-redux'
import { AddMarkerComponent } from '../components/AddMarkerComponent'
import { addMarkerAction } from '../actions/addMarkerAction'


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addMarkerAction(text))
    },
  }
}

const coords = () => {
  return {
    coords : {
      ln: 0,
      lt: 0
    }
  }
}

export const AddMarker = connect(coords, mapDispatchToProps)(AddMarkerComponent)
