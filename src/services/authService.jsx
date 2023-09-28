import { requestService } from "./requester"

const baseURL = `http://localhost:3000/auth`;


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