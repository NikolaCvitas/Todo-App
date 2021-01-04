import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import TestService from '../../api/todo/TestService.js';

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.state ={
            welcomeMessage : ''
        }
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

            <div className="container">
            {this.state.welcomeMessage}
            </div>

            </>

        )
    }

    retreiveWelcomeMessage() {

        TestService.executeTestBeanService()
        .then(response => this.handleSuccessfulResponse(response))

       
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage : response.data.message})

    }
}



export default WelcomeComponent; 