import React, { Component } from 'react';
import { withRouter } from 'react-router'; 
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'




class HeaderComponent extends Component{
    render(){


        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

       // console.log(isUserLoggedIn);

        return(

            <div>
            <header>
            <nav className="navbar  navbar-expand-md navbar-dark bg-dark">

            <div> <a href="https://ncoun.herokuapp.com/">Todo App</a></div>
            <ul className="navbar-nav">
            { isUserLoggedIn && <li  > <Link className="nav-link" to="/welcome/nikola">Home</Link></li>}
            {isUserLoggedIn &&  <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
            { !isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
            { isUserLoggedIn && <li ><Link className="nav-link" onClick={AuthenticationService.logout} to="/logout">Logout</Link></li>}
            </ul>
            </nav>
            </header>
         
            
            </div>

       
        )
    }
}

export default withRouter(HeaderComponent);