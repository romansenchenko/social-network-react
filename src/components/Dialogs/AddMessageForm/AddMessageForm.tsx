import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { NewMessageFormType as NewMessageFormValuesType } from "../Dialogs";


const maxLenth50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
     = (props) => {
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

export default reduxForm<NewMessageFormValuesType>({ form: 'dialogsAddMessageForm' })(AddMessageForm);
