import React from "react";
import { Field, InjectedFormProps } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"
import { AppStateType } from "../../redux/redux-store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Email" name={'email'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder="Password" name={'password'} type={'password'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={"checkbox"} /> Remember me
            </div>

            {captchaUrl && <img alt="captchaImg" src={captchaUrl} />}
            {captchaUrl && <Field placeholder="Symbols from image" name={'captcha'}
                validate={[required]}
                component={Input} />
            }

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)


export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector( (state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector( (state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()
    
    const onSubmit = (formData: LoginFormValuesType) => {

        dispatch( login(formData.email, formData.password, formData.rememberMe, formData.captcha) as unknown as AnyAction)
    }

    if (isAuth) {
        return <Navigate to='/profile' />;
    }

    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
}