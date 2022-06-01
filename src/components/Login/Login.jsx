import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />;
    }

    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);