import React, {Component} from "react";
import { connect } from "react-redux";
import {login} from "../actions/login";
import $ from "jquery";

require("../assets/css/home.css");

class Home extends Component {

    login(){
        var user = $("#username").val();
        this.props.dispatch(login(user));
    }

    render(){
        console.log(this.props.login)
        const {loading, error} = this.props.login;
        return(
            <div className="home">
                <div className="container">
                    <h1>Youtube Player</h1>
                    <input id="username" type="text" placeholder="Tell me your name" />
                    <button onClick={() => this.login()}>Login</button>
                    {error ? "Usuário já cadastrado" : ""}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    login: state.login
})

export default connect(mapStateToProps)(Home);