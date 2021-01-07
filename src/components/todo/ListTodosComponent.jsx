import React, { Component } from 'react';

import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            todos : [],
            message : ''
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }


    componentDidMount(){

        this.refreshTodos()

    }

    refreshTodos(){

        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retreiveAllTodos(username)
        .then(
            response => {
                this.setState({todos :response.data})
            }
        )
    }

    deleteTodoClicked(id){

        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({ message : `Delete of todo ${id} succesful`})

                this.refreshTodos()

            }
        )
    }

    updateTodoClicked(id){

        console.log('update '+ id)

        this.props.history.push(`/todos/${id}`);
    }


    render(){
        return(
            <div>
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div class="container">
            <table class="table">
            <thead>
            <tr>
            
            <th>Description</th>
            <th>Is completed?</th>
            <th>Target Date</th>
            <th>Update</th>
            <th>Delete</th>

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
                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
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