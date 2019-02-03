import { connect } from 'react-redux';
import { MessageComponent } from '../../components';


const mapStateToProps = state => ({
  text: state.text
})


export const ChatContainer = connect(
  mapStateToProps,
  null
)(MessageComponent)
