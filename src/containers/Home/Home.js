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
        email: "",
        password: ""
    }

    checkSubmit = () => {
        fetch('http://localhost:3000/',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
            user: this.props.userS
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data==='success') this.props.onSubmit()
            else window.alert("Please! Check your information again!")
        }
            )
        .catch(err => console.log(err));
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        }, function(){
            this.props.onChangeAccount(this.state.email,this.state.password);
        });
        
    }
    updatePassword = (e) =>  {
        this.setState({
            password: e.target.value
        }, function(){
            this.props.onChangeAccount(this.state.email,this.state.password);
        });
    }

    render(){
        return(
            <div>
                <Navigation 
                    clickA={() => this.checkSubmit()}
                    changeEmail={(e)=>this.updateEmail(e)}
                    changePassword={(e)=>this.updatePassword(e)}
                />
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
            userS: state.user       
        };

    }

    const mapDispatchToProps = dispatch => {
        return{
            onSubmit: () => dispatch({type:actionTypes.CLICK_SIGNIN}),
            onChangeAccount : (email,password) => dispatch({type:actionTypes.CHANGE_ACCOUNT, 
                email:email,password:password})
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Home);