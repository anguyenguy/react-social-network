import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/Home';


class App extends Component {
    

    render () {
        return (
            <div>
                <div>
                    <Route path="/" exact component={Home} />
                </div>
            </div>
        );
    }
}

export default App;