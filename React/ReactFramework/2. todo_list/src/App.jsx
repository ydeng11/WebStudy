//创建外壳组件APP
import React,{Component} from 'react'
import './App.css'
import Footer from './component/footer/footer'
import Header from './component/header/header'
import List from './component/list/list'

export default class App extends Component{
    /*
        The state related methods should stay with the state
        e.g. the state in at App component, the CRUD methods should be in the App component
        
        The state is shared by multiple sub-components so we should initialize it at app
        if it is only used by one component, we should move it to the specific component
    */
    state = { todos: [
        {
            id:1,
            name:'Dinner',
            completed:true
        },
        {
            id:2,
            name:'Study',
            completed:false
        },
        {
            id:3,
            name:'Game',
            completed:false
        }]
    }

    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos]
        this.setState({todos : newTodos})
    }

    updateTodo = (id, completed) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed}
            }
            return todo
        })
        this.setState({todos : newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => todo.id!== id)
        this.setState({todos : newTodos})
    }

    checkAllTodo = (completed) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            return {...todo, completed}
        })
        console.log(newTodos)
        this.setState({todos : newTodos})
    }

    deleteAllCompleted = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => todo.completed === false)
        this.setState({todos : newTodos})
    }

    render(){
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo = {this.addTodo}/>
                    <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
                    <Footer todos = {todos} checkAllTodo = {this.checkAllTodo} deleteAllCompleted = {this.deleteAllCompleted}/>
                </div>
            </div>
        )
    }
}