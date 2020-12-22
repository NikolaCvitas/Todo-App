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

} 

export default new AuthenticationService();