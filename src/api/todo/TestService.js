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

    executeTestPathVariableService(name) {

         console.log('executed service')

        let username = 'nikola'
        let password = '1234'

        let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

       // let headers = new Headers();

      //  headers.append('Content-Type', 'application/json');
      //  headers.append('Accept', 'application/json');
      //  headers.append('Authorization', 'Basic ' + window.btoa(username + ":" +  password));
       // headers.append('Access-Control-Allow-Origin','*');


       return axios.get(`http://localhost:8080/test/var/${name}`,
       {headers :{ Authorization: basicAuthHeaderString }
    });
       
    }
 
}

export default new TestService();