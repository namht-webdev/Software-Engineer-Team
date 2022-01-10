import React from 'react'
import { createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

function AuthContextProvider(props){

    

    return (
        <AuthContext.Provider value={1}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;