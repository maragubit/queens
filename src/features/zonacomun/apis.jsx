import axios from "axios";

const domain = process.env.REACT_APP_API_DOMAIN;

export const getLibros= async (access) => {
  
    return await axios.get(`${domain}/resources/books/`,{
        headers: {
        Authorization: `Bearer ${access}`
    }
});
};

export const getLibroById= async (id, access) => {
    return await axios.get(`${domain}/resources/books/${id}/`,{
        headers: {
        Authorization: `Bearer ${access}`
    }
});
};