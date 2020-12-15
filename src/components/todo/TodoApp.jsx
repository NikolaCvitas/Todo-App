import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">

            <Router>
            <>
            <Switch>
            <Route path="/" exact component={LoginComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/welcome/:name" component={WelcomeComponent}/>
            <Route path="/todos" component={ListTodosComponent}/>
            <Route component={ErrorComponent}/>
            </Switch>

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
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
        <LoginSuccess showSuccessMessage={this.state.showSuccessMessage }/>*/}
             {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
             {this.state.showSuccessMessage && <div> Login Successful</div>}
            User Name: <input type="text" name="username" value = {this.state.username} onChange = {this.handleChange}></input>
            Password: <input type="password" name="password" value = {this.state.password} onChange = {this.handleChange}></input>
            <button onClick={this.loginClicked}>Login</button> 
            </div>

        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>Welcome {this.props.match.params.name}</div>
        )
    }
}

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            todos : 
            [
                { id : 1, description : 'Learn React'},
                { id : 2, description : 'Learn Java'},
                { id : 2, description : 'Learn Git'}
            ]
        }
    }
    render(){
        return(
            <div>
            <h1>List Todos</h1>
            <table>
            <thead>
            <tr>
            <th>id</th>
            <th>description</th>

            </tr>
            </thead>
            <tbody>
            {

                this.state.todos.map (
                    todo =>
                    <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    </tr>
                )

            }

            </tbody>
            </table>
            
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