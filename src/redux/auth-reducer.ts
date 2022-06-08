import { BaseThunkType, InferActionsType } from './redux-store';
import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeEnam, ResultCodeForCaptchaEnam } from "../api/api";
import { securityAPI } from "../api/security-api";
import { authAPI } from "../api/auth-api";

let initialState = {
    id: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};
const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/auth/SET_USER_DATA', payload: { id, email, login, isAuth }
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS',
    payload: { captchaUrl }
    } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me();

    if (meData.resultCode === ResultCodeEnam.Success) {
        let { email, id, login } = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodeEnam.Success) {
        dispatch(getAuthUserData());
    }
    else {
        if (data.resultCode === ResultCodeForCaptchaEnam.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let messages = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit('login', { _error: messages }));
    } 
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>