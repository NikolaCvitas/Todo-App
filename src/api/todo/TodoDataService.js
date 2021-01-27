import axios from "axios"; 

class TodoDataService{

    retreiveTodo(name,id) {

        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
        
     }


    retreiveAllTodos(name) {

       return axios.get(`http://localhost:8080/users/${name}/todos`);
       
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

}

export default new TodoDataService();