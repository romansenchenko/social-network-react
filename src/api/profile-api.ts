import { PhotosType, ProfileType } from '../types/types';
import { instance, APIResponceType } from './api';

type SavePhotoResponceDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponceType>(`profile/status/`, { status: status })
            .then(res => res.data)
    },
    savePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append("image", photoFile, photoFile.name);
        return instance.put<APIResponceType<SavePhotoResponceDataType>>(`profile/photo/`, { photo: formData }, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "API-KEY": "39be2bd1-17d2-4382-b7c2-756bd06e234f"
            }
        }).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponceType>(`profile/`, profile).then(res => res.data)
    }
};
