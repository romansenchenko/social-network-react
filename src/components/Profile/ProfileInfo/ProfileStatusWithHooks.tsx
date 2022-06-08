import React, { ChangeEvent, FC, useEffect, useState } from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    setStatus?: () => void | null
}


const ProfileStatusWithHooks: FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.setStatus] );

    const activeEditMode = () => {
        setEditMode(true);
    } 

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    } 

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={ activeEditMode }>{props.status || '------'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={onStatusChange}  autoFocus={true} onBlur={ deactivateEditMode }
                    value={status} ></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;