import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'
import HeaderComponent from './HeaderComponent'

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
            <Route path="/logout" component={LogoutComponent}/>
            <Route path="/welcome/:name" component={WelcomeComponent}/>
            <Route path="/todos" component={ListTodosComponent}/>
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

class WelcomeComponent extends Component{
    render(){
        return(

            <>

            <h1>Welcome!</h1>
            <div className="container">
            Welcome {this.props.match.params.name} . You can manage your todos <Link to="/todos">here</Link>.
            </div>
            </>

        )
    }
}

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            todos : 
            [
                { id : 1, description : 'Learn React', done :false, targetDate : new Date()},
                { id : 2, description : 'Learn Java', done :false, targetDate : new Date()},
                { id : 3, description : 'Learn Git', done :false, targetDate : new Date()},
                { id : 4, description : 'Rowing', done :false, targetDate : new Date()},
                { id : 5, description : 'Running', done :false, targetDate : new Date()}
            ]
        }
    }
    render(){
        return(
            <div>
            <h1>List Todos</h1>
            <div class="container">
            <table class="table">
            <thead>
            <tr>
            
            <th>Description</th>
            <th>Is completed?</th>
            <th>Target Date</th>

            </tr>
            </thead>
            <tbody>
            {

                this.state.todos.map (
                    todo =>
                    <tr key={todo.id}>
                    
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toDateString()}</td>
                    </tr>
                )

            }

            </tbody>
            </table>
            </div>
            
            </div>
        )
        }
}



class FooterComponent extends Component{
    render(){
        return(

            <footer className="footer">
             <span className="text-muted"> All Rights Reserved 2020. Nikola Cvitaš</span>
            </footer>

        )
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <>
            <h1>You are logged out</h1>
            <div className="container">
            Thank you for using our Application.
            </div>
            </>
        )
    }
}

function LoginSuccess(props){
    if(props.showSuccessMessage){
        return <div> Login Successful</div>
    }
    return null
}

function ErrorComponent(){
   
        return <div> Error occured.</div>
    
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null
}

export default TodoApp