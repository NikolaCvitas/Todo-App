
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import AuthenicatedRoute from './AutheniticatedRoute.jsx';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent' 
import LogoutComponent from './LogoutComponent' 
import ErrorComponent from "./ErrorComponent";

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">

            <Router>
            <>

            <HeaderComponent/>
            <Switch>
            <Route path="/" exact component={LoginComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <AuthenicatedRoute path="/logout" component={LogoutComponent}/>
            <AuthenicatedRoute path="/welcome/:name" component={WelcomeComponent}/>
            <AuthenicatedRoute path="/todos" component={ListTodosComponent}/>
            <Route component={ErrorComponent}/>
            </Switch>

            <FooterComponent/>
            </>
            </Router>
            
           {/* <LoginComponent/>
           <WelcomeComponent/>*/}
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