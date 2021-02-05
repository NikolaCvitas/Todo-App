import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import TestService from '../../api/todo/TestService.js';

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleSuccessfuhandleErrorlResponse = this.handleError.bind(this)
        
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

       // TestService.executeTestBeanService()
       // .then(response => this.handleSuccessfulResponse(response))

        TestService.executeTestPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(response => this.handleError(response))

       
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage : response.data.message})

    }

    handleError(error){
        console.log(error.response);
        let errorMessage = '';

        if(error.message){
            errorMessage += error.message
        }

        if(error.response && error.response.data){
            errorMessage += error.message
        }

        this.setState({welcomeMessage : errorMessage})
    }
}



export default WelcomeComponent; 