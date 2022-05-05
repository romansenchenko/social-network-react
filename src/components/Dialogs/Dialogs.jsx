import React from 'react';
import { Navigate } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.messages} />);
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements} </div>
                <div>
                    <textarea onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder='Введите сообщение'
                        name="" id="" cols="50" rows="2">
                    </textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Отправить</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;