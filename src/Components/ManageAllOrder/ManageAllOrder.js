import "./ManageAllOrder.css"

import React, { useEffect, useState } from 'react';
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faThumbsUp, faTimes } from "@fortawesome/free-solid-svg-icons";

const ManageAllOrder = () => {

    const [services, setservices] = useState([]);
    const [click, setclick] = useState(false);
    const [cart, setcart] = useState([]);
    const {allContext}=useAuth()
    const {user}=allContext;

    useEffect(() => {
        fetch(`https://enigmatic-depths-47239.herokuapp.com/allitem`)
        .then(res=>res.json())
        .then(data=>setservices(data))
    }, [])



    // -----------------------get all single orders----------
useEffect(() => {
  fetch(`https://enigmatic-depths-47239.herokuapp.com/singleuser`)
  .then(res=>res.json())
  .then(data=>setcart(data))
}, [cart])


    const handleDelete=(id)=>{
  const processed=window.confirm("Are you sure you want to delete?")
  if(processed){
    const url=`https://enigmatic-depths-47239.herokuapp.com/allitem/${id}`

    fetch(url,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount){
            alert("Deleted Successfully")
            const remaining=services.filter(service=>service._id !==id);
            setservices(remaining);

        }
       
    })
  }

    }


    const handlepending=(awk)=>{
      setclick(awk);
    }



    return (
        <>


        <div style={{marginTop:"200px",marginBottom:"300px"}}>

{/* ------------------------------manage all order---------------- */}
<div style={{marginTop:"20px",marginBottom:"40px"}}>
<h2 className="text-center"><span className="fw-bold text-primary">Manage All Orders</span></h2>

</div>





<h1 className="my-5 text-center fw-bold "><span className="text-success ">Order Place by:</span> {user?.email}</h1>


{/* <h2 className="text-center fw-bold my-4"><span className="text-primary"> Order by : </span>{user?.email}</h2>  */}
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
                <h1 className="mt-2 fs-4" style={{fontFamily: 'Vesper Libre'}}>{item.name}</h1>
                <p className="text-secondary d-block fw-bold">{item.res}</p>
                <p className="text-dark">{item.description}</p>

            </div>
            <h4 className="text-primary">Price: {item.price}</h4>
            <div className="buttons d-flex justify-content-between rounded p-2">
               
                {/* <div className="mx-auto">
                <button type="button" onClick={()=>handlepending(true)} class="btn btn-danger"><FontAwesomeIcon className="text-white me-3" icon={faClock}></FontAwesomeIcon> Pending </button>

                </div> */}


                {
                  click?<div className="mx-auto">
                  <button type="button" onClick={()=>handlepending(true)} class="btn btn-danger"><FontAwesomeIcon className="text-white me-3" icon={faThumbsUp}></FontAwesomeIcon> Approved </button>
  
                  </div>
                  :
                  <div className="mx-auto">
                  <button type="button" onClick={()=>handlepending(true)} class="btn btn-danger"><FontAwesomeIcon className="text-white me-3" icon={faClock}></FontAwesomeIcon> Pending </button>
  
                  </div>



                }


            </div>
            
        </div>
    </div>
           </div>
                )
        }




<div className=" text-center">
                  <button type="button" onClick={()=>handlepending(true)} class="btn btn-danger my-5 w-25 rounded"><FontAwesomeIcon className="text-white me-3" icon={faThumbsUp}></FontAwesomeIcon> Approve All </button>
  
                  </div>
    </div>


{/* ------------------------------manage Services---------------- */}


        {/* <h2 className="text-center my-5"><span className="fw-bold text-primary">Manage Services</span></h2>
          <div className="row">
          {
                services.map(service=><div  className="col-lg-3 col-sm-6 col-12 border p-5 text-center" key={service._id}>

                    <div>Name: {service.name}</div>
                    <div>Restaurant: {service.res}</div>
                   <div className="text-center">
                   <button onClick={()=>handleDelete(service._id)} className="btn btn-danger mt-4">Delete</button>
                   </div>





                </div>)
            }

          </div> */}
        </div>
          
            
        </>
    );
};

export default ManageAllOrder;