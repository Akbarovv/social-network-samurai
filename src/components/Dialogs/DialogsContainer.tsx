import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-page-reducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";


type DialogsPropsType = {}

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().messagePage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())

                }
                const onNewMessageChange = (body: any) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                messagePage={state}/>
            }}
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;