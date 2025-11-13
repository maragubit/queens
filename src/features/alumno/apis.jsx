import axios from "axios";
const domain=process.env.REACT_APP_API_DOMAIN;

export const getMe=async(access)=>{
    return await axios.get(`${domain}/students/me/`,{headers: {'Authorization': `Bearer ${access}`}}); 
}

export const updateMyClassrooms=async(id,access,classrooms)=>{
    return await axios.patch(`${domain}/students/${id}/`,{classroom_ids:classrooms},{headers: {'Authorization': `Bearer ${access}`}}); 
}