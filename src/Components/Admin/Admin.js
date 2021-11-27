import React, { useState } from 'react';
import "./Admin.css"
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const Admin = () => {
    const { register, handleSubmit,reset } = useForm();

    const {allContext}=useAuth()
    const {user}=allContext;

const [email,setemail] = useState("")


// const handleAdminSubmit=e=>{
//   e.preventDefault();
// }





    const onSubmit = (data) => {
      console.log(data);

      fetch(`https://enigmatic-depths-47239.herokuapp.com/userinfo/admin`,{
        method:"PUT",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(data)
        
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.acknowledged){
          alert("Make admin successfully");
        }
      })

  
    };

    return (
        <>
        <div  style={{marginTop:"350px",marginBottom:"300px"}}>

         


          <h1 className="text-center text-primary fw-bold my-4 ">Make Admin:</h1>
          <div className="AForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <label>Input AdminName:</label>
            <br />
            <input type="text" className="w-100 rounded px-4 py-2" {...register("textField", { required: true, maxLength: 100 })} />
            <br /> */}

            <label>Input Email Id:</label>
            <input className="w-100 rounded px-4 py-2" type="email"   {...register("email", { min: 1, max: 5 })} />
            <br />
            <input className="mt-3 btn btn-primary " type="submit" />
            </form>
          </div>





        </div>
            
        </>
    );
};

export default Admin;