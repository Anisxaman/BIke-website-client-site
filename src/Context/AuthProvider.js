import React, { createContext, useEffect, useState } from 'react';
import Usefirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext();
console.log(AuthContext);


 const AuthProvider = ({children}) => {

    // -----------------------set context for data----------------
    const [data, setdata] = useState([])

    useEffect(() => {
        // fetch("/FakeData.json")
        fetch("https://enigmatic-depths-47239.herokuapp.com/allitem")
        .then(res=>res.json())
        .then(data=>setdata(data))
        console.log(data)
         }, [])
    // -----------------------set context for authentication----------------

     const allContext=Usefirebase();

    // const {children}=props;
    return (
        <AuthContext.Provider value={{allContext,data}}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;