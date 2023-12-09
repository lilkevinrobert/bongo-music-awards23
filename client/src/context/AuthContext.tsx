import React, {createContext, ReactNode, useContext, useState} from "react";
import axios from '../api/axios.ts'

const AuthContext = createContext({});
export const AuthProvider:React.FC<{ children: ReactNode }>  = ({children}) => {

    const [user, setUser] = useState(null)
    //const navigate = useNavigate();
    const csrf = async () => axios.get('/sanctum/csrf-cookie')
    const getUser = async () => {
        const {data} = await axios.get("/api/user");
        console.log(data)
        setUser(data);
    }

    const login = async ({email, password}: { email: string; password: string }) => {
        await csrf();

        try {
            await axios.post('/login', {email, password})
                .then((response) => {
                    console.log(response);

                    // Extract the token from the response
                    const token = response.data.data.token;

                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    console.log("Response:Token "+response.data.data.token)

                    getUser();
                    //navigate('/admin/dashboard')
                })
                .catch((errors) => {
                    if (errors.response.status === 422) {
                        console.log(errors.response.data.errors)
                        //setErrors(errors.response.data.errors)
                    }
                })

        } catch (errors) {
            console.log(errors)
        }
    }

    return <AuthContext.Provider value={{user, getUser, login}}>
        {children}
    </AuthContext.Provider>

}

export default function useAuthContext () {
  return useContext(AuthContext);

}


