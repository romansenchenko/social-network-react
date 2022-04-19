import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> ); 
    let messagesElements =props.messages.map( m => <Message message={m.messages} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
                <div>
                <textarea ref={newMessage} name="" id="" cols="50" rows="2"></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Отправить</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;