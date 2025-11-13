import { createContext, useState, useContext } from "react"; 
import axios from "axios";
import Cookies from "js-cookie";
const domain=process.env.REACT_APP_API_DOMAIN;

const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState(null);
    const [access, setAccess] = useState(null);

    const get_user_variables = async (access) => {
        const response = await axios.get(`${domain}/users/me/`, {
            headers: { Authorization: `Bearer ${access}` }
        });
        setUser(response.data);
    }

    const new_access_token = async () => {
        const refresh = Cookies.get('refresh');
        try {
        const response = await axios.post(`${domain}/token/refresh/`, { refresh });
        setAccess(response.data.access);
        await get_user_variables(response.data.access);
        } catch (error) {
            
            logout();
        }
       
    }

    const logout = () => {
        setUser(null);
        setAccess(null);
        Cookies.remove('refresh');
        window.location.href = '/login';
    }

    

    return ( <AuthContext.Provider value={{ user, setUser, access, setAccess, new_access_token,logout, get_user_variables }}> {children} </AuthContext.Provider> );
}
export function useAuth() { return useContext(AuthContext); }