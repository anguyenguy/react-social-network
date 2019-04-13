import React, { Component } from 'react';
import Navigation from '../../components/Home/Navigation/Navigation';
import Logo from '../../components/Home/LogoImage/LogoImage';
import Register from '../../components/Home/Register/Register';
import Footer from '../../components/Home/Footer/Footer';
import './Home.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';


class Home extends Component {

    constructor(props) {
        super(props);
        
    }

    state={
        isSign:false
    }


    render(){
        return(
            <div>
                <Navigation clickA={() => this.props.onSubmit()}/>
                <div className="d-flex HomeBody justify-content-center">
                    <Logo />
                    <Register />
                </div>
                <Footer />
    
            </div>
     
            );
        }

    }

    const mapStateToProps = state => {
        return{
           
        };

    }

    const mapDispatchToProps = dispatch => {

        return{
            onSubmit: () => dispatch({type:actionTypes.CLICK_SIGNIN})
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Home);