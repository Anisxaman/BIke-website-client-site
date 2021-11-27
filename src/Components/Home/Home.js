// import { faInfo,checkSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Footer from '../../images/bottom.PNG';
import img1 from "../../images/10.jpg"
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router';
import Reviews from '../Review/Reviews';
import DisplayReview from '../DisplayReview/DisplayReview';
AOS.init();

const Home = () => {

    const [data, setdata] = useState([])



    useEffect(() => {
    //    fetch("./FakeData.json")
       fetch("https://enigmatic-depths-47239.herokuapp.com/item")
       .then(res=>res.json())
       .then(data=>setdata(data))
       console.log(data)
        }, [])

const history=useHistory();
const handleGet=()=>{
    history.push("/services/any")

}



// console.log("DataIndex",data[3]);




    return (
        <div className="overflow-hidden">
            <Banner></Banner>

            <h1 className="text-white fw-bold p-5 text-center bg-success" style={{fontFamily: 'Vesper Libre'}}>Meet the Family</h1>
            {/* <hr style={{width:"20px"}} className="fs-6 fw-bolder w-50 text-center mx-auto"></hr> */}

          <div className='row'>
          {
                data.map((info,index)=><Body
                key={info._id}
                info={info}
                index={index}
                
                
                
                
                
                ></Body>)
            }
            
          
          </div>
           <div>

         <div className="text-center">
         <h1 className="fw-bold py-5 ">Stories from the  <span className="text-success fs-1 fw-bolder" data-aos="zoom-in-left" data-aos-duration="3000" >Land of Joy</span></h1>
         <hr style={{height:"5px"}} className="fs-6 text-dark fw-bolder w-50 text-center mx-auto"></hr>
         </div>
               <div className="row g-0">
                   <div className="col-lg-8 col-12">
                       <img  className="img-fluid" src={img1}  alt="" />

                   </div>
                   <div className="col-lg-4 col-12 bg-info p-4 " >
                     <div style={{marginTop:"200px"}}>
                     <h1 className="fw-bold text-black"><span className="text-danger">The Land of Joy </span> </h1>
                     <hr style={{height:"20px"}} className="fs-6 fw-bolder w-50 text-center mx-auto"></hr>

                    <h4  className="text mt-5" data-aos="zoom-in-left" data-aos-duration="3000">
                    The light guide along the outer circumference, powered by an LED source that acts as a position light, is a DRL (Daytime Running Light), which allows the Scrambler 1100 Sport PRO to be easily recognizable even during the day. Taking inspiration from the tape that was applied to the headlights in the 1970s to preserve the light cluster, a black metal “X” was recreated inside the headlight. At the rear, the optical group is of the full LED type with a diffusion effect and uses a technology that is unique in the world of two wheels.
                    </h4>
                     </div>


                    


                        <ul className="fs-3 p-3">
                                <p data-aos="fade-left" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>World Class Bike</span></p>
                                <p  data-aos="fade-right" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Easily Reach to Customer</span></p>
                                <p  data-aos="fade-left" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Easy Upgrade</span></p>
                                <p  data-aos="fade-right" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>24/7 Services</span></p>
                            </ul> 


        <button type="button" onClick={handleGet} class="btn btn-danger mt-2">GET STARTED <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></button>

                   </div>
               </div>



               <div>
                   <img src={Footer} alt="" />
               </div>
              
           </div>


           <DisplayReview></DisplayReview>

            
        </div>
    );
};

export default Home;