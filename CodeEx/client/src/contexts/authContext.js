import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import axios from 'axios';
import { apiURL } from './constants';

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [userId, setUserId] = useState('');


    const register = async (infor) => {

        try {
            const res = await axios.post(`${apiURL}/user/register`, infor );
            return res;
        } catch (error) {
            return error;
        }
    }

    const login = async (infor) => {

        try {
            const res = await axios.post(`${apiURL}/user/login`, infor );
            return res;
        } catch (error) {
            return error;
        }
    }

    const authContextData = {
        register,
        login,
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;