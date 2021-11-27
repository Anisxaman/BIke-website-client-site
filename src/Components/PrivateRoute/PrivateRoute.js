import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {

    console.log(children);
  
        let {allContext} = useAuth();
        const {isLoading}=allContext;

        if(isLoading){
            return (<div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>)
        }




        
        let auth=allContext;
    return (
        <Route
            {...rest}
            render={({ location }) =>
              auth.user.email ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
    );
};

export default PrivateRoute;