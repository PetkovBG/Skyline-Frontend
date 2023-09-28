import { requestService } from "./requester"

const baseURL = `https://skyline-estate-api.onrender.com/auth`;


export const authServiceFactory = () => {
    const request = requestService();


    return {
        login: (loginData) => {
            return request.post(`${baseURL}/login`, loginData)
        },
        register: (registerData) => {
            return request.post(`${baseURL}/register`, registerData)
        },
        logout: () => request.get(`${baseURL}/logout`)
    }
}
