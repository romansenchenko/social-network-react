import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';
import { required } from "../../../utils/validators/validators";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        { error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
        <div>
            <b>Full name:</b> <Field placeholder="Full name" name={'fullName'}
                validate={[required]}
                component={Input} />
        </div>
        <div>
            <b>Looking for a job:</b> <Field placeholder="Looking for a job" name={'lookingForAJob'}
                component={Input}
                type={"checkbox"} />
        </div>
        <div>
            <b>My proffesional skills:</b> 
            <Field placeholder="My proffesional skills" name={'lookingForAJobDescription'}
                validate={[required]}
                component={Textarea} />
        </div>
        <div>
            <b>About me:</b> 
            <Field placeholder="About me" name={'aboutMe'}
                validate={[required]}
                component={Textarea} />
        </div>

        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: <Field placeholder={key} name={`contacts.${key}`}
                /* validate={[required]} */
                component={Input} /></b> 
                </div>
/*                 <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
 */            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile', enableReinitialize: true })(ProfileDataForm)

export default ProfileDataFormReduxForm;