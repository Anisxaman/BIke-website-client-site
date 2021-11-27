import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuth = () => {
    

   return useContext(AuthContext);
    const {allContext,data}=useContext(AuthContext);

//    return allContext;
    
};

export default useAuth;