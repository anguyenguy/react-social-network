import React from 'react';
import "./LogoImage.css";

const logoImage = () => {
    return(
        <div className="LogoImage pt-5 pr-5">
            <div className="text-success font-weight-bold"><h4>Youse giúp bạn kết nối và chia sẻ với 
                mọi người trong cuộc sống của bạn.</h4></div>
            <img src="../src/assets/homeImage.png" />
        </div>
    );
}

export default logoImage;