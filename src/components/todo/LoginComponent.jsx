
import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : 'nikola',
            password : '',
            hasLoginFailed: false,
            showSuccessMessage: false

        }


        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }



    handleChange(event){
        console.log(this.state)
        this.setState({ [event.target.name] : event.target.value})
    }

    loginClicked(){
        console.log('LOGIN CLICKED_________')
        console.log(this.state.username)
        console.log(this.state.password)

        if(this.state.username ==='nikola' && this.state.password ==='1234'){

            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password );
            console.log('Successful')
            this.props.history.push(`/welcome/${this.state.username}`);
           
          // this.setState({showSuccessMessage : true})
           //this.setState({hasLoginFailed : false})
        }else{
            console.log('Invalid')
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
    }

    render(){
        return (
            <div>
            <h1>Login</h1>
            <div className="container">
           
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
        <LoginSuccess showSuccessMessage={this.state.showSuccessMessage }/>*/}
             {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
             {this.state.showSuccessMessage && <div> Login Successful</div>}
            User Name: <input type="text" name="username" value = {this.state.username} onChange = {this.handleChange}></input>
            Password: <input type="password" name="password" value = {this.state.password} onChange = {this.handleChange}></input>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button> 
            </div>
            </div>

        )
    }
}

export default LoginComponent;