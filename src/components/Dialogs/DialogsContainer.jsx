import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
  isAuth: state.auth.isAuth
})

let mapDispatchToProps = (dispatch) => ({
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageCreator(body));
    },
  sendMessage: () => {
    dispatch(sendMessageCreator());
  }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
