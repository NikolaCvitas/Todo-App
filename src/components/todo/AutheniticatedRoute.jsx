
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

import React, {Component} from 'react'


class AuthenicatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
          return  <Route {...this.props}/>
        }else{
           return <Redirect  to="/login"/>
        }

    }
}


export default AuthenicatedRoute;