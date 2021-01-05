class AuthenticationService {

    registerSuccessfullLogin(username, password){

        console.log("registerSuccessfulLogin ")
        console.log(username)
        console.log(password)
        sessionStorage.setItem('autheniticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('autheniticatedUser');
    }

    isUserLoggedIn(){
        let  user = sessionStorage.getItem('autheniticatedUser')
        if(user === null) return false
        return true
    }

    getLoggedInUserName(){
        let  user = sessionStorage.getItem('autheniticatedUser')
        if(user === null) return ''
        return user
    }

} 

export default new AuthenticationService();