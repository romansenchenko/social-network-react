import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        //let text = newMessage.current.value;
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.messages} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={ onMessageChange }
                        ref={newMessage}
                        name="" id="" cols="50" rows="2">
                    </textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;