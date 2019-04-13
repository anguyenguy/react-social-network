import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import {connect} from 'react-redux';

class App extends Component {
    

    render () {
        return (
            <div>
                <div>
                    {
                        this.props.isSignin
                        ?<div>You are accessing...</div>
                        :<Route path="/" exact component={Home} />
                    }
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        isSignin: state.isSignin
    };
}



export default connect(mapStateToProps)(App);