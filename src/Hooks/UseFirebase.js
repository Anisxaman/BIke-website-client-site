import React, { useEffect, useState } from 'react';


import { getAuth, GoogleAuthProvider,onAuthStateChanged, signInWithPopup,GithubAuthProvider, signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,sendEmailVerification,sendPasswordResetEmail, updateProfile} from "@firebase/auth";
import initialize from '../firebase/init';







initialize();

const Usefirebase = () => {

    const [user, setuser] = useState({});
    const [isLoading, setisLoading] = useState(true)
    // ---------------state for email
    const [email, setemail] = useState("");
    // ---------------state for password---------------
    
    const [passWord, setpassWord] = useState("");
    
    const [error, seterror] = useState("");
    
    const [isLogin, setisLogin] = useState(false);
    const [admin, setadmin] = useState(false);
    
    const [name, setname] = useState("");
    

    const auth = getAuth();


// -----------------------------admin activity---------------

console.log(user.email);
useEffect(() => {
  fetch(`https://enigmatic-depths-47239.herokuapp.com/getadmin/${user.email}`)
  .then(res=>res.json())
  .then(data=>setadmin(data.admin))

 
}, [user.email])








// -----------------------------admin activity---------------




// ----------------------------------------------for google authentication-----------------------------

const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle=()=>{
    setisLoading(true)
    console.log("here")
   return signInWithPopup(auth, googleProvider)

}

// ---------------------------------------------for github authentication-----------------------------


const GithubProvider=new GithubAuthProvider();

const signInUsingGithub=()=>{
    setisLoading(true)
    console.log("here")
   return signInWithPopup(auth,GithubProvider)

}

//------------------------------ emai & password login handle start-------------------------




 // -----------------------(new user email,Password)------------------------

  
 const handleRegistration=(e)=>{


     console.log("registration");
    e.preventDefault(); 
    const auth = getAuth();
    if(passWord.length<6){
      seterror("Password must in 6 character long")
      return;
    }
  
    // ------------------------(case handle)-------------------------------------
    // if(!/(?=.*?[A-Z])/.test(passWord)){
    //   seterror("password must contain upper case");
    //   return;
    // }
  
//   --------------------------------------(exist user email,Password)------------------------
  
    const processLogin=(email,passWord)=>{
      console.log("i m process")
      const auth = getAuth();
      signInWithEmailAndPassword(auth,email,passWord)
      .then(result=>{
        const user=result.user;
        console.log(user);
        seterror("");
  
  
      })
      .catch((error) => {
    seterror(error.message);
      } 
      );
      
  
    }
    
    // --------------------------------------(new user email,Password)------------------------
  
    
    const newUser=(email,passWord)=>{
      console.log("i m newUser")

      createUserWithEmailAndPassword(auth, email, passWord)
      .then((result) => {
            //-------------------------- Signed in------------------------- 
            const user = result.user;
            console.log(user);
            seterror("");
            // verifyEmail();
            setUsername();
          })
          .catch((error) => {
            console.log(error.message);
            // ..
          });
  
  }
  
  
   isLogin?processLogin(email,passWord):newUser(email,passWord);
  
  }



  const toggleLogin=(e)=>{
    setisLogin(e.target.checked);
    console.log("Toggle ",e.target.checked);
  
  }

  

// // --------------------------------handle get email ------------------------
const handleEmailChange=e=>{
    setemail(e.target.value);
    // console.log(e.target.value)
  }
  console.log("got:",email);
  
//   // --------------------------------handle get  password------------------------
  const handlePassChange=e=>{
    // console.log(e.target.value);
    setpassWord(e.target.value);
  }
  console.log("passWord:",passWord);

  
  // const verifyEmail=()=>{
  //   const auth = getAuth();
  // sendEmailVerification(auth.currentUser)
  //   .then((result) => {
  //     // Email verification sent!
  //     console.log(result);
  //   });
  // }
  
  
  //-------------------------------------------------- password reset---------------------------
  const handleresetPassword=()=>{
      console.log("from here",email)
      
    const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }


  
// ----------------------------namechange----------------------
const handleNameChange=(e)=>{
    console.log(e.target.value)
    setname(e.target.value);
  
  }
  
  
  const setUsername=()=>{
    const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
  
  
 }
  
  
  












// ------------------------------------------handle logout-------------------------------

const logOut=()=>{
    signOut(auth).then(() => {
        setuser({})
      }).catch((error) => {
      })
     .finally(()=> setisLoading(false));

}


//--------------------observe whether user auth state change or not-------------
useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setuser(user)
        
        } else {
       
        }
        setisLoading(false);
      });
    
 
}, [])

console.log(admin);


    return {
        user,
        
        handleRegistration,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        isLoading,
        setisLoading,
        handleEmailChange,
        handleNameChange,
        handleresetPassword,
         handlePassChange,
        toggleLogin,
        error,
        isLogin,
        admin


    };
};

export default Usefirebase;