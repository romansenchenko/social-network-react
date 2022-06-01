import { ProfileType } from './../types/types';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "39be2bd1-17d2-4382-b7c2-756bd06e234f"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    getProfile(userId: number) {
        console.log('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data;
        });
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    }, 
    updateStatus(status: string) {
        return instance.put(`profile/status/`, { status:status } )
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile, photoFile.name);
        return instance.put(`profile/photo/`, {photo: formData}, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "API-KEY": "39be2bd1-17d2-4382-b7c2-756bd06e234f"
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile/`, profile )
    }
}

export enum ResultCodeEnam {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType ={
    data: { 
        id: number 
        email: string 
        login: string 
    }
    resultCode: ResultCodeEnam
    messages: Array<string>
}

type LoginResponseType ={
    data: { 
        userId: number 
    }
    resultCode: ResultCodeEnam | ResultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
    },
    login( email: string, password: string, rememberMe: boolean = false, captcha: null | string = null ) {
        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
        .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}