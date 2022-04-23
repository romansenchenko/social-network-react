import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let onSendMessageClick = () => {
        //let text = newMessage.current.value;
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }
    
    let state = props.store.getState();
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.messages} />);
    
    let newMessageBody = state.dialogsPage.newMessageBody;

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