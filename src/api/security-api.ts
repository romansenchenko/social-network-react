import { instance } from "./api";

type GerCaptchaUrlResponceType = {
    url: string    
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GerCaptchaUrlResponceType>(`security/get-captcha-url`)
        .then(res => res.data)
    }
};
