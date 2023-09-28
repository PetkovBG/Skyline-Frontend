import { requestService } from "./requester";

const baseURL = 'http://localhost:3000/users';

const userServiceFactory = () => {

    const request = requestService();

    const getUser = async (userId) => {
        const user = await request.get(`${baseURL}/${userId}`);
        return user;
    }

    return {
        getUser,
    }

}

export default userServiceFactory;