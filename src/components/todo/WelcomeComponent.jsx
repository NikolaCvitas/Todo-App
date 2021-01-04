import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this)
    }
    render(){
        return(

            <>

            <h1>Welcome!</h1>
            <div className="container">
            Welcome {this.props.match.params.name} .
             You can manage your todos <Link to="/todos">here</Link>.
            </div>

            <div className="container">
            Click here to get customized welcome message.
            <button onClick={this.retreiveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
            </div>
            </>

        )
    }

    retreiveWelcomeMessage() {

        console.log("retreive clicked")
    }
}



export default WelcomeComponent; 