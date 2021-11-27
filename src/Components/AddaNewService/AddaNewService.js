import React from 'react';
import "./AddaNewService.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddaNewService = () => {



const { register, handleSubmit,reset } = useForm();


  const onSubmit=data => {
      console.log(data);
      axios.post("https://enigmatic-depths-47239.herokuapp.com/manage",data)
      .then(res=>{
        if(res.data.insertedId){
          alert("Inserted successfully");
          reset();
        }
        console.log(res);
      })
  }



    return (
        <div style={{backgroundColor:"rgb(0, 64, 128)"}}>

         <div className="setForm"  >
            


            <form onSubmit={handleSubmit(onSubmit)} className="w-50" style={{marginTop:"200px",marginBottom:"200px"}}>
           <div className="text-center"> <h1 className="text-danger fw-bolder ">Add a new Service</h1></div>
        <label className="my-2 text-danger fw-bolder" >User Name</label>
        <br />
      <input className="w-100 rounded" {...register("name", { required: true, maxLength: 20 })} />
      <br />
      <label className="my-2 text-danger fw-bolder">Description</label>
      <br />
      <textarea className="w-100 rounded" {...register("description")} />
      <br />


      <label className="my-2 text-danger fw-bolder">Price</label>
      <br />
     <input type="number " className="rounded" {...register("price", { min: 18, max: 99 })} />
      <br />


      <label className="my-2 text-danger fw-bolder">Set-rating:</label>
      <br />
     <input type="number" className="rounded" step="0.01" {...register("star", { min: 1, max: 99 })} />
      <br />



      <label className="my-2 text-danger fw-bolder">Set Image Url</label>
      <br />
      <input className="w-100 rounded"  {...register("img", { min: 18, max: 99 })} />
      <br />


      <input className="mt-3 btn btn-danger"  type="submit" />
    </form>

            </div> 





            
        </div>
    );
};

export default AddaNewService;