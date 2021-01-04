import axios from "axios"; 

class TestService {

    executeTestService() {

        // console.log('executed service')

       return axios.get('http://localhost:8080/test/');
       
    }
 
}

export default new TestService();