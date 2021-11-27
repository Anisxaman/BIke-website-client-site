import { faClock, faShoppingCart, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./Body.css"

const Body = (props) => {
   const {name,description,img,_id,price,time,star}=props.info
  const {index}=props;

console.log(props);
console.log(index);

const history=useHistory();
// const {bonus}= useParams();
   const {data}= useAuth();
   console.log(data)


   const handleIndividual=()=>{


    history.push(`/services/${_id}`);

   }





   const handleCart=()=>{
    history.push(`/myorder/${index}`);

   }



console.log()




    return (
        <div data-aos="zoom-in" data-aos-duration="2000"  className="col-lg-4   col-12  m-3 g-4 p-3 effect mx-auto" style={{borderRadius:"30px",backgroundColor:"#f8f9fa",width:"500px"}}>

            
            <div className="CustomCard">
                <div className="img-section">
                    <img className="img-fluid" style={{borderRadius:"30px"}} src={img} alt="" />

                </div>
                <div className='body'>
                    <div className="description">
                        <h1 className="mt-2" style={{fontFamily: 'Vesper Libre'}}>{name}</h1>
                        {/* <p className="text-secondary d-block fw-bold">{res}</p> */}
                        <p className="text-dark">{description}</p>

                    </div>
                    <h4 className="text-primary">Price: {price}</h4>
                    <h4 className="fw-bold"><FontAwesomeIcon className="me-2 ms-2 " icon={faClock}></FontAwesomeIcon> <span className="text-info "> Delivery-Time:</span> {time}</h4>
                    <div className="buttons d-flex justify-content-between rounded p-2">
                        <div className="brn-one">
                        <button type="button" onClick={()=>handleCart(_id)} class="btn btn-danger"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add to Cart</button>

                        </div>
                        <div className="brn-two">
                        <button type="button" onClick={handleIndividual} class="btn btn-danger">Show Detail</button>


                        </div>


                    </div>

                            <div className="text-center mt-2">
                             <h5>({star})<Rating className='iconn '
                        initialRating={star}  
                        emptySymbol="far fa-star "
                        fullSymbol="fas fa-star"
                        readonly/> </h5>
                        
                        
                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default Body;