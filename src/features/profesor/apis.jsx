import axios from "axios";

const domain=process.env.REACT_APP_API_DOMAIN;

export const getProfesores = async () => {
    return await axios.get(`${domain}/teachers/`);
}
