import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './LogoImage/LogoImage';
import Register from './Register/Register';


const home = () => {
    return(
        <div>
            <Navigation />
            <Logo />
            <Register />
        </div>
 
    );
}

export default home;