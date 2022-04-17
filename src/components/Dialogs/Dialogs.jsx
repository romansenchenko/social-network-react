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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Димаа" id="1"/>
                <DialogItem name="Света" id="2"/>
                <DialogItem name="Саша" id="3"/>
                <DialogItem name="Оля" id="4"/>
                <DialogItem name="Андрей" id="5"/>
                <DialogItem name="Вадим" id="6"/>
            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="Как дела?" />
                <Message message="Что делаешь?" />
            </div>
        </div>
    )
}

export default Dialogs;