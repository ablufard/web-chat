import { connect } from 'react-redux';
import { InputAreaComponent } from '../../components';
import {CHANGE_MESSAGE, SEND_MESSAGE} from '../../actions'



const mapDispatchToProps = (dispatch) => ({
  changeMessage: (value) =>  dispatch({
      type: CHANGE_MESSAGE,
      value: value
  }),
  sendMessage: () => dispatch({
      type: SEND_MESSAGE
  })

})

const mapStateToProps = state => ({
    text: state.text
  })

export const InputAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAreaComponent)
