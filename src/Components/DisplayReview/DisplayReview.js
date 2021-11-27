import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const DisplayReview = () => {
    const [feedback, setfeedback] = useState([]);
    
    useEffect(() => {
        fetch(`https://enigmatic-depths-47239.herokuapp.com/review`)
        .then(res=>res.json())
        .then(data=>setfeedback(data))
    }, [])







    return (
        <div style={{marginTop:"200px",marginBottom:"300px"}}>
            <h1 className="text-center text-primary fw-bold">Our Reviews</h1>
            <h1 className="text-center">{feedback.length}</h1>
            <div className="row">
                
                    {
                        feedback.map(feed=><div  className="col-lg-4 col-12 border  text-center">
                            <div>
                                <h3 className=" fw-bold p-5 ">
                                <div class=" text-success text-wrap fw-bolder userMail">
                                            <h4>{feed?.email}</h4>
                                            </div>
                                   </h3>
                            </div>
                            <div>
                                <h6>{feed?.textField}</h6>

                            </div>


                            <div className="text-center mt-2">
                                <h5>({feed.star})<Rating className='iconn '
                                    initialRating={feed.star}  
                                    emptySymbol="far fa-star "
                                    fullSymbol="fas fa-star"
                                    readonly/> </h5>
                            </div>

                        </div>)
                    }
                    {/* <div>
                        <div>
                            <h1>Your Email:{}</h1>
                        </div>
                    </div> */}


            </div>
            
        </div>
    );
};

export default DisplayReview;