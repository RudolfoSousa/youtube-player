import React, {Component} from "react";

require("../assets/css/home.css");

class Home extends Component {
    render(){
        return(
            <div className="home">
                <div className="container">
                    <h1>Youtube Player</h1>
                    <input type="text" placeholder="Tell me your name" />
                    <button>Login</button>
                </div>
            </div>
        )
    }
}

export default Home;