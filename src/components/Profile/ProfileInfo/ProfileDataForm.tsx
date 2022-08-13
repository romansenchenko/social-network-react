import React, { FC } from "react";
import { Field, InjectedFormProps } from "redux-form";
import { reduxForm } from "redux-form";
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';
import { required } from "../../../utils/validators/validators";
import { GetStringKeys, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { ProfileType } from "../../../types/types";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<PropsType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
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
                        component={Input} /></b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile', enableReinitialize: true })(ProfileDataForm)

export default ProfileDataFormReduxForm;