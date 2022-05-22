import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css"

const FormControl = ({input, meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formContol + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
 
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const CreateField = (placeholder, name, validators, component, props = {}, text='' ) => {
    return <div>
        <Field placeholder={placeholder} name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
}