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
            console.log('Successful')
           
           this.setState({showSuccessMessage : true})
           this.setState({hasLoginFailed : false})
        }else{
            console.log('Invalid')
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
    }

    render(){
        return (
            <div>
            <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
            <LoginSuccess showSuccessMessage={this.state.showSuccessMessage }/>
            User Name: <input type="text" name="username" value = {this.state.username} onChange = {this.handleChange}></input>
            Password: <input type="password" name="password" value = {this.state.password} onChange = {this.handleChange}></input>
            <button onClick={this.loginClicked}>Login</button> 
            </div>

        )
    }
}

function LoginSuccess(props){
    if(props.showSuccessMessage){
        return <div> Login Successful</div>
    }
    return null
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null
}

export default TodoApp