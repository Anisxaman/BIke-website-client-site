import "./Services.css"

import React, { useEffect } from 'react';
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Services = () => {
   const {bonus}= useParams();

   const [result, setresult] = useState({})



useEffect(() => {
  fetch(`https://enigmatic-depths-47239.herokuapp.com/allitem/${bonus}`)
  .then(res=>res.json())
  .then(data=>setresult(data));
}, [])













const {allContext}=useAuth();

const {isLoading}=allContext;
if(isLoading){
    return (<div class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>)
}
// const{img,name,description,phone,mail}=result;

 
    return (
        <>
            <div className="d-flex justify-content-center align-items-center " style={{marginTop:"200px",marginBottom:"300px"}}>

              

                {/* <h1>This is services</h1>
                <h2>{bonus}</h2>
                <h2>{result.name}</h2> */}

<div class="card "style={{width: "38rem"}}>
  <img src={result?.img} class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-primary fs-2 fw-bold">{result?.name}</h5>
    <p class="card-text  fw-bold"><span className="text-info fs-4"> Restaurent:</span> {result?.res}</p>
    <p class="card-text  fw-bold"><span className="text-info fs-4">Description:</span> {result?.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><span className="text-secondary fs-4 fw-bold">Price:</span> {result?.price} tk</li>
    <li class="list-group-item fs-4 fw-bold "><FontAwesomeIcon className="me-2 text-primary" icon={faClock}></FontAwesomeIcon><span className="text-primary"> Delivery-Time: </span>{result?.time}</li>
    
    
  </ul>
  {/* <div class="card-body">
    <Link href="#" class="card-link">Card link</Link>
    <Link href="#" class="card-link">Another link</Link>
    <div className="d-flex justify-content-between">
    
    <h3>{result?.phone}<FontAwesomeIcon className="fw-3 text-danger ms-3" icon={faPhone}></FontAwesomeIcon></h3>
    
    <h3><FontAwesomeIcon className="fw-3 text-danger me-3" icon={faAt}></FontAwesomeIcon>{result?.price}</h3>

    </div>
  </div> */}
</div>
           

            </div>
         
        </>
    );
};

export default Services;