import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './LogoImage/LogoImage';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import './Home.css';


const home = () => {
    return(
        <div>
            <Navigation />
            <div className="d-flex HomeBody justify-content-center">
                <Logo />
                <Register />
            </div>
            <Footer />

        </div>
 
    );
}

export default home;