import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import "./Registration.css"

const Registration = () => {

    const {allContext}=useAuth()


const {signInUsingGoogle, setisLoading,signInUsingGithub,handleRegistration,handlePassChange,toggleLogin,error,isLogin,handleNameChange,handleEmailChange} =allContext;
const history=useHistory()
const location=useLocation();

const redirectUri=location.state?.from|| "/home"; 




console.log(signInUsingGoogle);

const handleGoogleLogin=()=>{
    signInUsingGoogle()
      .then((result) => {
  console.log(result.user);
  history.push(redirectUri);


})


.finally(()=>setisLoading(false));
}




const handleGithubLogin=()=>{
    signInUsingGithub()
      .then((result) => {
  console.log(result.user);
  history.push(redirectUri);


})


.finally(()=>setisLoading(false));
}























    return (
        <div style={{backgroundColor:"rgb(242, 242, 243)"}}>
         <div className="register-form" style={{marginTop:"178px",marginBottom:"90px"}}>
{/* //----------------------------------------------------------- */}
             {/* <form  onSubmit={handle}>
                 <input type="submit" value="submit" />
                
                 <input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <input type="password" onBlur={handlePassChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                


             </form> */}
   
{/* //----------------------------------------------------------- */}



{/* ---------------------------------------------------------------------- */}
            <form onSubmit={handleRegistration} >
            <h2 className="fw-bolder text-success"> Create an Account</h2>
            <div class="mb-3">
                <label  htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" onBlur={handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label  htmlFor="exampleInputEmail1"  class="form-label">User Name</label>
                <input type="text" onBlur={handleNameChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label  htmlFor="exampleInputPassword1"  class="form-label">Password</label>
                <input type="password" onBlur={handlePassChange}  class="form-control" id="exampleInputPassword1"/>
            </div>
            {/* <div class="mb-3">
                <label  htmlFor="exampleInputPassword1" onBlur={handlePassChange}  class="form-label">Re-Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div> */}
            {/* <div class="mb-3 form-check">
                <input type="checkbox" onChange={toggleLogin} class="form-check-input" id="exampleCheck1"/>



                <label class="form-check-label" html htmlFor="exampleCheck1">Already Registerd?</label>
            </div> */}
            <div className="text-danger">
          {error}
        </div>
            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
            <input type="submit" class="btn btn-primary" value="submit" />


            <p>Already have an account? <Link to="/login">Login</Link></p>
                <br />
               
               <div className="d-flex justify-content-between rounded">
               <button  onClick={handleGoogleLogin} className="btn  btn-primary me-3"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Sign In</button>
                <button  onClick={ handleGithubLogin} className="btn  btn-secondary "><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> gitub sign In</button>
               </div>
            </form>
        </div>
            
        </div>
    );
};

export default Registration;