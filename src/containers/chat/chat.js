import { connect } from 'react-redux';
import { ChatComponent } from '../../components';


const mapStateToProps = state => ({
  text: state.text
})

const mapDispatchToProps = (dispatch) => ({
  buttonClick: () =>  dispatch({
    type: "SHOW_TEXT"
  })
})

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponent)
