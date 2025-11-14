import axios from "axios";
const domain = process.env.REACT_APP_API_DOMAIN;


export const updateUser= async(id,img,access)=>{

   return axios.patch(`${domain}/users/${id}/`,img,{
         headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "multipart/form-data",
        }
})
}