import { UserType } from './../types/types';
import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "39be2bd1-17d2-4382-b7c2-756bd06e234f"
    }
});

export enum ResultCodeEnam {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnam {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponceType<D = {}, RC = ResultCodeEnam> = {
    data: D
    messages: Array<string>
    resultCode: RC
}