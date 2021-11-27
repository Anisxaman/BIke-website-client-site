import "./Banner.css"
import React from 'react';
import 'animate.css';


import slide1 from "../../images/slider/1.jpg"
import slide2 from "../../images/slider/2.jpg"
import slide3 from "../../images/slider/3.jpg"
import slide4 from "../../images/slider/4.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarry, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import Home from "../Home/Home";

const Banner = () => {

const history=useHistory();

    const handleReadMore=()=>{
        history.push("/aboutUs")

    }

    const handleLogin=()=>{
        history.push("/login")
    }



    

    return (
        <>
                <div >



<div id="carouselExampleIndicators" className="carousel slide space" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide1} className="d-block w-100"   alt="..."/>
    </div>
        <div class="carousel-content">
        
        <div className="img-text ">
                    {/* <span  data-aos="fade-right" data-aos-duration="2000" className="px-5 py-3 fs-4 rounded fw-bold" style={{backgroundColor:"#2ec8a6"}}>Food</span> */}
                    {/* <span  data-aos="fade-left" data-aos-duration="2000" className="p-3 fs-4 rounded fw-bold" style={{backgroundColor:"white",color:"black"}}>DELIVERY</span> */}
                    
                   
                    
        </div>
               <h1 className="fw-bolder text-info" style={{WebkitTextStroke: "1px black"}}>1100  <span  data-aos="zoom-in" data-aos-duration="2000" className=" text-danger health" style={{fontSize:"4rem"}}> Tribute PRO <br /> </span>A new chapter of the story.</h1>
               
               <p className="fw-bolder d-block ">
               Latest facts and feelings from the Land of Joy. Ducati Scrambler is the essence of motorcycling and a world filled with freedom, joy and self-expression.
               </p>
     </div>

  <div className="buttons" style={{display:"flex"}} >
        <div className="button1">
                 <button  data-aos="fade-right" data-aos-duration="3000" type="button" onClick={handleReadMore} class="btn btn-danger px-5 py-2"><FontAwesomeIcon className="text-dark fw-bold me-2" icon={faPeopleCarry}></FontAwesomeIcon>Pick-Up</button>

        </div>
        <div className="button2">
                 {/* <button  type="button" class="btn btn-warning px-5 py-2"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Purchase</button> */}


                <button  data-aos="fade-left" data-aos-duration="3000"  type="button" class="btn btn-primary  px-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal"> <FontAwesomeIcon className="text-dark fs-5 fw-bold me-3" icon={faTruck}></FontAwesomeIcon>Delivery
                </button>

     </div>
    
  </div>

{/*----------------------------------- modal starts------------------------------- */}
  {

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">WELCOME</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <span className="text-danger"> DO YOU WANT TO DElivery or Order SOMETHING? </span><br/>
        PLEAE LOGIN FIRST
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleLogin} type="button" class="btn btn-primary" data-bs-dismiss="modal">Log in</button>
      </div>
    </div>
  </div>
</div>


                 }



{/*----------------------------------- modal ends------------------------------- */}




    
    <div className="carousel-item">
        
    <img src={slide2} className="d-block w-100" alt="..."/>
    </div>
  
    <div className="carousel-item">
    <img  src={slide3} className="d-block w-100"  alt="..."/>
    </div>
 
    <div className="carousel-item">
    <img  src={slide4} className="d-block w-100"  alt="..."/>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span style={{backgroundColor:"black"}} className="carousel-control-prev-icon  rounded-circle p-4" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark  rounded-circle p-4" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
               

                </div>

               
           
        </>
    );
};

export default Banner;