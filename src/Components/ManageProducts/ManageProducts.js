import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

import "./ManageProducts.css"

const ManageProducts = () => {

    const [services, setservices] = useState([]);
    // const [click, setclick] = useState(false);
    // const [cart, setcart] = useState([]);
    const {allContext}=useAuth()
    // const {user}=allContext;

    useEffect(() => {
        fetch(`https://enigmatic-depths-47239.herokuapp.com/allitem`)
        .then(res=>res.json())
        .then(data=>setservices(data))
    }, [])



    
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
      
      
        //   const handlepending=(awk)=>{
        //     setclick(awk);
        //   }



    return (
        <div  style={{marginTop:"200px",marginBottom:"300px"}}>
              <h2 className="text-center my-5"><span className="fw-bold text-primary">Manage Services</span></h2>
          <div className="row">
          {
                services.map(service=><div  className="col-lg-3 col-sm-6 col-12 border p-5 text-center" key={service._id}>

                    <div>Name: {service.name}</div>
                    {/* <div>Restaurant: {service.res}</div> */}
                   <div className="text-center">
                   <button onClick={()=>handleDelete(service._id)} className="btn btn-danger mt-4">Delete</button>
                   </div>





                </div>)
            }

          </div>

            
        </div>
    );
};

export default ManageProducts;