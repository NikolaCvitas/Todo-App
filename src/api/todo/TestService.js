import axios from "axios"; 

class TestService {

    executeTestService() {

        // console.log('executed service')

       return axios.get('http://localhost:8080/test');
       
    }

    executeTestBeanService() {

        // console.log('executed service')

       return axios.get('http://localhost:8080/test-bean');
       
    }
 
}

export default new TestService();