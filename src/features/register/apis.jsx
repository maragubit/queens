import axios from "axios";

const domain = process.env.REACT_APP_API_DOMAIN;


export const registerUser = async (formData) => {
    return await axios.post(`${domain}/users/register/`, formData);
}
