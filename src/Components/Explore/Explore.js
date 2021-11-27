import "./Explore.css"

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import Rating from "react-rating";

const Explore = () => {
    const [data, setdata] = useState([])

    const history=useHistory();

    useEffect(() => {
        //    fetch("./FakeData.json")
           fetch("https://enigmatic-depths-47239.herokuapp.com/allitem")
           .then(res=>res.json())
           .then(data=>setdata(data))
        //    console.log(data)
            }, [])
    console.log(data);



            const handleExploreIndividual=(e)=>{
                console.log(e)
                 history.push(`/services/${e}`);
            
               }



            const handleCart=(e)=>{
                console.log(e);
                history.push(`/myorder/${e}`);
            
               }


    return (
        <>
        <div  style={{marginTop:"200px",marginBottom:"300px"}}>

        <div className='row'>               
{/* <div data-aos="zoom-in" data-aos-duration="2000"  className="col-lg-4   col-12  m-3 g-4 p-3 effect mx-auto" style={{borderRadius:"30px",backgroundColor:"#f8f9fa",width:"500px"}}> */}
      
       
          {
                data.map((info,index)=><div data-aos="zoom-in" data-aos-duration="2000"  className="col-lg-4   col-12  m-3 g-4 p-3 effect mx-auto" 
                key={info._id} 
                >

            
<div className="CustomCard">
    <div className="img-section">
        <img className="img-fluid  p-4" style={{borderRadius:"30px"}} src={info.img} alt="" />

    </div>
    <div className='body'>
        <div className="description">
            <h1 className="mt-2  p-4" style={{fontFamily: 'Vesper Libre'}}>{info.name}</h1>
            {/* <p className="text-secondary d-block fw-bold">{info.res}</p> */}
            <p className="text-dark p-4">{info.description}</p>

        </div>
        <h4 className="text-primary  p-4">Price: {info.price}</h4>
        <h4 className="fw-bold  p-4"><FontAwesomeIcon className="me-2 ms-2 " icon={faClock}></FontAwesomeIcon> <span className="text-info "> Delivery-Time:</span> {info.time}</h4>
        <div className="buttons d-flex justify-content-between rounded p-2">
            <div className="brn-one">


            <button type="button" onClick={()=>handleCart(index)} class="btn btn-danger"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add to Cart</button>

            </div>
            <div className="brn-two">
            <button type="button" onClick={()=>handleExploreIndividual(info._id)} class="btn btn-danger">Show Detail</button>

        
            </div>
            <br />
          


        </div>

        <div className="text-center mt-2">
            <h5>({info.star})<Rating className='iconn '
                initialRating={info.star}  
                emptySymbol="far fa-star "
                fullSymbol="fas fa-star"
                 readonly/> </h5>
        
        
        </div>
    </div>
</div>





                </div>)
                
            }

            </div>
{/* </div> */}

           
            
          
         


      
            
          
          </div>


   
            
        </>
    );
};

export default Explore;