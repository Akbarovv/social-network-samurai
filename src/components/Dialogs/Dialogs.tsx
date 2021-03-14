import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType,} from "../../redux/store";


type DialogsPropsType = {
    updateNewMessageBody: (body: any) => void
    sendMessage: () => void
    messagePage: any
}

const Dialogs = (props: DialogsPropsType) => {
    const state = props.messagePage
    let dialogsElements = state.dialogs.map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    let messagesElements = state.messages.map((m: MessagesType) => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='Enter your message' value={newMessageBody}
                                   onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Dialogs;