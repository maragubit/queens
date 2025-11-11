import axios from "axios";
import { useAuth } from "../../AuthProvider";


const domain=process.env.REACT_APP_API_DOMAIN;




export const loginUser = async (email, password) => {
    return await axios.post(`${domain}/login/`, {
        username: email,
        password: password
    });
   
}

export const getMyUser = async (access) => {
    return await axios.get(`${domain}/users/me/`, {
        headers: {
            Authorization: `Bearer ${access}`
        }
    });
}