import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { FilterType } from "../../redux/users-reducer";
import { getUsersFilter } from "../../redux/users-selectors";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type PropsType = { 
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: FC<PropsType> = React.memo((props) => {
    
    const filter = useSelector(getUsersFilter)
    
    const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => {
        props.onFilterChanged(values) 
        setSubmitting(false)  
    }

    

    return <div>  
        <Formik
            enableReinitialize
            initialValues={{ term: filter.term, friend: filter.friend  }}
            validate={usersSearchFormValidate}
            onSubmit={submit} >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <Field name='friend' as='select'>
                        <option value='null'>All</option>
                        <option value='true'>Only followed</option>
                        <option value='false'>Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>;
})
