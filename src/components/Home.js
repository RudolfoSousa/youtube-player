import React, {Component} from "react";
import { connect } from "react-redux";
import {login} from "../actions/login";

require("../assets/css/home.css");

class Home extends Component {

    login(){
        this.props.dispatch(login());
    }

    render(){
        return(
            <div className="home">
                <div className="container">
                    <h1>Youtube Player</h1>
                    <input type="text" placeholder="Tell me your name" />
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state
})

export default connect(mapStateToProps)(Home);