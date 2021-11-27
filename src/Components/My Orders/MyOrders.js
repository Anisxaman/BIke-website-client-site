import "./MyOrder.css"

import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const MyOrders = () => {
    const { register, handleSubmit,reset } = useForm();

    const {bonus}= useParams();
    const [services, setservices] = useState([]);
    const [cart, setcart] = useState([]);

    const {allContext}=useAuth()
  const {user}=allContext;
 



    useEffect(() => {
        fetch(`https://enigmatic-depths-47239.herokuapp.com/allitem`)
        .then(res=>res.json())
        .then(data=>setservices(data))
    }, [])

console.log(bonus);
console.log(services);

const get=services[bonus];
console.log(get);

if(get){
            const mail=user?.email;
            get.email=mail;
            // console.log(email);
            console.log(get);


            fetch("https://enigmatic-depths-47239.herokuapp.com/addorder",{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(get),
            })
            .then(res=>res.json())
            .then(data=>console.log(data));

}

// -----------------------get all single orders----------
useEffect(() => {
    fetch(`https://enigmatic-depths-47239.herokuapp.com/singleuser?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setcart(data))
}, [cart])

// ----------------------handle delete----------------------------------

const handleDelete=(id)=>{
    console.log(id);
    const processed=window.confirm("Are you sure you want to delete?")
    if(processed){
      const url=`https://enigmatic-depths-47239.herokuapp.com/singleuser/${id}`;
      fetch(url,{
          method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.deletedCount){
              alert("Successfully Deleted")
            const remaining=cart.filter(card=>card._id!==id);
            setcart(remaining);

          }
          
      })
  
    
    }
  
      }



      const onSubmit=data => {
        //   data.preventDefault();
        console.log(data);
        console.log(data);
        axios.post("https://enigmatic-depths-47239.herokuapp.com/userinfo",data)
        .then(res=>{
          if(res.data.insertedId){
            alert("Congratulations!!You successfully place the order");
            reset();
          }
          console.log(res);
        })




        // alert("Congratulations!!You successfully place the order")
      
    }













    return (
        <>
        <div style={{marginTop:"200px",marginBottom:"300px"}}>
{/* -------------------------------form start--------------------*/}

        <div className="setForm"  >
            
            <form onSubmit={handleSubmit(onSubmit)} className="w-50" style={{marginTop:"200px",marginBottom:"200px"}}>
            <h1 className="text-primary fw-bold text-center">Plz  Enter your Info</h1>
                            {/* ------------------- */}
        <label className="my-2" >User Name</label>
        <br />
      <input className="w-100" placeholder={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                         {/* ------------------------- */}
      <br />
      <label className="my-2">Email</label>
      <br />
      <input placeholder={user.email}  className="w-100" {...register("email")} />
                {/* -------------------------------- */}

      <label className="my-2">Phone Number</label>
      <br />
      <input placeholder="ex: 01xxxxxxxxxx" className="w-100" {...register("Phone Number")} />

                {/* -------------------- */}

      <label className="my-2"> Address</label>
      <br />
      <textarea type="text" placeholder=" address" className="w-100" {...register("Address")} />
      <br />




      <input className="mt-3 btn btn-danger"  type="submit" />
    </form>

            </div> 


{/* -------------------------------form end --------------------*/}


    <h1 className="my-5 text-center text-success fw-bold ">Check out Orders</h1>


        <h2 className="text-center fw-bold my-4"><span className="text-primary"> Order by : </span>{user?.email}</h2> 
        <h3 className="text-center">
            Total Order : {cart.length}
        </h3>
            <div className="row">
           
                {
                    cart.map(item=><div className="col-lg-3 col-sm-6 col-12 border p-5 text-center"
                    key={item._id}>
                          
<div className="CustomCard">
                <div className="img-section">
                    <img className="img-fluid" style={{borderRadius:"30px"}} src={item.img} alt="" />

                </div>
                <div className='body'>
                    <div className="description">
                        <h3 className="mt-2" style={{fontFamily: 'Vesper Libre'}}>{item.name}</h3>
                        <p className="text-secondary d-block fw-bold">{item.res}</p>
                        <p className="text-dark">{item.description}</p>

                    </div>
                    <h4 className="text-primary">Price: {item.price}</h4>
                    <div className="buttons d-flex justify-content-between rounded p-2">
                       
                        <div className="mx-auto">
                        <button type="button" onClick={()=>handleDelete(item._id)} class="btn btn-danger"><FontAwesomeIcon className="text-dark me-3" icon={faTimes}></FontAwesomeIcon>Cancel </button>

                        </div>


                    </div>
                </div>
            </div>
                   </div>
                        )
                }
            </div>



        </div>
            
        </>
    );
};

export default MyOrders;