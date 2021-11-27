import "./Review.css"
import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";


const Reviews = () => {
    const { register, handleSubmit,reset } = useForm();

    const {allContext}=useAuth()
    const {user}=allContext;



    const onSubmit = (data) => {
      console.log(data);
      data.email=user?.email
      axios.post("https://enigmatic-depths-47239.herokuapp.com/post",data)
      .then(res=>{
        if(res.data.insertedId){
          alert("Congratulations!!You successfully given review");
          reset();
        }
        console.log(res);
      })
    };



    return (
        <div style={{marginTop:"350px",marginBottom:"300px"}}>
           <h1 className="text-center text-primary fw-bold my-4 "> Here You can put review.</h1>
          <div className="Form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Give us Feedback:</label>
            <br />
            <textarea type="text" className="w-100 rounded" {...register("textField", { required: true, maxLength: 100 })} />
            <br />

            <label>Give us Rating based on service:</label>
            <input className="w-100 rounded" type="number"  step="0.01" {...register("star", { min: 1, max: 5 })} />
            <br />
            <input className="mt-3 btn btn-primary " type="submit" />
            </form>
          </div>
            
        </div>
    );
};

export default Reviews;