import React from 'react';
import s from './Dialogs.module.css';
import { Link } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <Link to={path}>{props.name}</Link>
    </div>

}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>

}


const Dialogs = () => {

    let dialogs = [
        { id: 1, name: "Дима" },
        { id: 2, name: "Света" },
        { id: 3, name: "Саша" },
        { id: 4, name: "Оjля" },
        { id: 5, name: "Анjдрей" },
        { id: 6, name: "Вадим" }
    ]

    let messages = [
        { id: 1, messages: "Ппривет!" },
        { id: 2, messages: "Каак дела?" },
        { id: 3, messages: "Ччто делаешь?" }
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> ); 
    let messagesElements = messages.map( m => <Message message={m.messages} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;