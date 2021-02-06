import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsType, MessagePageType, MessagesType} from "../../redux/state";




type DialogsPropsType = {
    dialogs: MessagePageType
}

const Dialogs= (props: DialogsPropsType ) => {

    let dialogsElements = props.dialogs.dialogs.map((d:DialogsType ) => <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    let messagesElements = props.dialogs.messages.map((m: MessagesType)=>  <Message key={m.id} message={m.message}/>)
let addNewMessage = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        if(addNewMessage.current){
            alert(addNewMessage.current.value)
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
           <div>
               <textarea ref={addNewMessage}></textarea>
               <button onClick={addMessage}>добавить</button>
           </div>
        </div>

    )
}

export default Dialogs;