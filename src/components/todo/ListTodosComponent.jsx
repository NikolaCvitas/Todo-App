import React, { Component } from 'react';

import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            todos : 
            [
/*                 { id : 1, description : 'Learn React', done :false, targetDate : new Date()},
                { id : 2, description : 'Learn Java', done :false, targetDate : new Date()},
                { id : 3, description : 'Learn Git', done :false, targetDate : new Date()},
                { id : 4, description : 'Rowing', done :false, targetDate : new Date()},
                { id : 5, description : 'Running', done :false, targetDate : new Date()} */
            ]
        }
    }


    componentDidMount(){

        let username = AuthenticationService.getLoggedInUserName
        TodoDataService.retreiveAllTodos(username)
        .then(
            response => {
                this.setState({todos :response.data})
            }
        )

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
                    <td>{todo.targetDate}</td>
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

export default ListTodosComponent;