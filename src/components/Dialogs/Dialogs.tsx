import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsType, MessagePageType, MessagesType,} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-page-reducer";


type DialogsPropsType = {
    store: any
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().messagePage
    let dialogsElements = state.dialogs.map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    let messagesElements = state.messages.map((m: MessagesType) => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick= () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange= (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='Enter your message' value={newMessageBody} onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Dialogs;