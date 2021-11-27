import React from 'react';

import img_one from "../../images/7.jpg"
import img_two from "../../images/5.jpg"
import img_three from "../../images/1.jpg"
// import img_four from "../../images/2.jpg"
import img_five from "../../images/4.jpg"
import img_six from "../../images/10.jpg"
import img_seven from "../../images/15.jpg"
import img_eight from "../../images/11.jpg"
// import img_nine from "../../images/12.jpg"
// import img_ten from "../../images/13.jpg"
import img_eleven from "../../images/14.jpg"

const Shops = () => {
    return (
        <div className="" style={{marginTop:"80px"}}>
                   <div className="row g-0">
                <div className="row g-0">
                <div className="col-4">
                <img className="img-fluid" src={img_seven} alt="" />

                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src={img_one} alt="" />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src={img_two} alt="" />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-6">
                        <img className="img-fluid" src={img_three} alt="" />
                    </div>
                    <div className="col-6">
                        <img  className="img-fluid" src={img_five} alt="" />
                    </div>
                   
                </div>
                <div className="row g-0">
                    <div className="col-4">
                    <img className="img-fluid" src={img_six} alt="" />
                    </div>
                    <div className="col-4">
                    <img className="img-fluid" src={img_eight} alt="" />

                    </div>
                    <div className="col-4">
                    <img className="img-fluid" src={img_eleven} alt="" />

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Shops;