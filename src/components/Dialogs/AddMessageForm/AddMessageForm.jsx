import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLenth50 = maxLengthCreator(50);


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                    validate = {[required, maxLenth50]}
                    name='newMessageBody' 
                    placeholder='Введите сообщение' />
            </div>
            <div><button>Отправить</button></div>
        </form>
    )
}

export default reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm);
