import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


type DialogsPropsType = {}



const mapStateToProps = (state: any) => {

    return {
        messagePage: state.messagePage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;