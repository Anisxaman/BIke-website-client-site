import "./AboutUs.css"

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
    return (
        < >
        <div className="about d-flex align-items-center flex-column justify-content-center text" >
                   <h1 className="text-warning"><span className="text-warning text-bolder">Address:</span>California,22 holdindin street.</h1>
                   <h2 className="text-white"><span className="text-warning text-bolder"> Road No:</span>1/2  B-Block</h2>
                   <h2 className="text-white"><span className="text-white text-bolder"> Phone Number:</span><FontAwesomeIcon className="text-white fs-1" icon={faPhone}></FontAwesomeIcon>56454545,45457457,454574574</h2>
                <h2 className="text-white"><span className="text-white text-bolder"> Email Address:</span> afaf@gmai.com
                   sdgsgs@gmai.com
                  asdgsdg@gmai.com</h2>

        </div>
            
        </>
    );
};

export default AboutUs;