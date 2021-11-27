import "./Login.css"
import React, { useState } from 'react';
import { Link,useHistory,useLocation} from "react-router-dom";
// import Usefirebase from "../../Hooks/UseFirebase";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";





const Login = () => {
const {allContext}=useAuth()

// const [needpass, setneedpass] = useState(true)

const {signInUsingGoogle, setisLoading,signInUsingGithub,handleRegistration,handlePassChange,toggleLogin,error,isLogin,handleEmailChange,handleresetPassword}=allContext;
const history=useHistory()
const location=useLocation();

const redirectUri=location.state?.from||"/home"; 




console.log(signInUsingGoogle);

const handleGoogleLogin=()=>{
    signInUsingGoogle()
      .then((result) => {
  console.log(result.user);
  history.push(redirectUri);

// setuser(result.user); 
// [module:59-8]

})


.finally(()=>setisLoading(false));
}




const handleGithubLogin=()=>{
    signInUsingGithub()
      .then((result) => {
  console.log(result.user);
  history.push(redirectUri);

// setuser(result.user); [module:59-8]

})


.finally(()=>setisLoading(false));
}






// const toggle=(e)=>{
//     setisLogin(e.target.checked);
//     console.log("Toggle ",e.target.checked);
  
//   }







    






    return (
        <>

        <div className="container login-form mb-5" style={{marginTop:"240px"}}>










            {/* //----------------------------------------------------------- */}
       
   
{/* //----------------------------------------------------------- */}







        <form onSubmit={handleRegistration}>
            <h1>Please Login</h1>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onFocus={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onFocus={handlePassChange} className="form-control" id="exampleInputPassword1"/>
            </div>
          
            <button type="submit" className="btn btn-primary">Submit</button>
            <div class="mb-3 form-check">

                <input type="checkbox" onChange={toggleLogin} class="form-check-input" id="exampleCheck1"/>
               



                <label class="form-check-label" html htmlFor="exampleCheck1">Already Registerd? <small className="text-danger">Required must</small></label>
            </div>
            <button onClick={handleresetPassword} type="button" className="btn btn-secondary btn-sm">Reset password</button>


            <p>new to Scrambler Ducati <Link to="/register">Create Account</Link></p>
                <br />
                
               <div className="d-flex justify-content-between ">
               <button onClick={handleGoogleLogin} type="button"  className="btn  btn-primary me-3"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Sign In</button>
                <button onClick={handleGithubLogin} type="button"  className="btn  btn-warning"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub Sign In</button>
               </div>
               
                
            </form>
        </div>

       


            
        </>
    );
};

export default Login;




