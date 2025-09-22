import client from "./api";
import { SERVICE_NAMES } from "../utils/serviceNames";


export const getUsers = async (reqBody:any) => {
    try{
        const response = await client.post(SERVICE_NAMES.URL_GET_USERS,reqBody);
        return response.data;
    }catch(error){
        throw error;
    }
}

export default {
    getUsers
}