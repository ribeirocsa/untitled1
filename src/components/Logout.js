import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loggedIn = sessionStorage.setItem('loggedin', 'false');
    }

    render() {
        // this.loggedIn = sessionStorage.setItem('loggedin', 'false');
        return (
            <Redirect to={"/portfolio"}/>
        )
    }
}

export default Logout;
