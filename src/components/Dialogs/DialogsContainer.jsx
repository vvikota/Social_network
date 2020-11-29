import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
})

let mapDispatchToProps = (dispatch) => ({
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageCreator(body));
    },
  sendMessage: () => {
    dispatch(sendMessageCreator());
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs)
