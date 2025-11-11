import axios from 'axios';

const domain=process.env.REACT_APP_API_DOMAIN;

export const getCursos=async()=>{
    
       return await axios.get(`${domain}/courses/`);
}

export const getCursoById=async(id)=>{
    return await axios.get(`${domain}/courses/${id}/`);
}