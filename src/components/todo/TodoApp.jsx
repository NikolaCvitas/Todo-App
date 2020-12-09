import React, { Component } from 'react';

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
            
            <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : 'nikola',
            password : ''
        }

       // this.handleUsernameChange = this.handleUsernameChange.bind(this);
      //  this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleUsernameChange (event){
        console.log(event.target.value);
        this.setState( { username : event.target.value } )

    }

    handlePasswordChange(event){
        this.setState({ password : event.target.value})
    }

    handleChange(event){
        this.setState({ [event.target.name] : event.target.value})
    }

    render(){
        return (
            <div>
            User Name: <input type="text" name="username" value = {this.state.username} onChange = {this.handleChange}></input>
            Password: <input type="password" name="password" value = {this.state.password} onChange = {this.handleChange}></input>
            <button>Login</button> 
            </div>

        )
    }
}

export default TodoApp