import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {

    state = {isMouseIn: false}

    handleMouseState = (state) => {
        return () => this.setState({isMouseIn : state})
    }

    handleCheckUpdate = (id) => {
        return (e) => {
            const completed = e.target.checked
            this.props.updateTodo(id, completed)
        }
    }

    handleDelete = (todos) => {
        return () => {
            if (window.confirm("Are you sure you want to delete this item?")) {
                todos.map((todo) => {
                    if (todo.completed) {
                        this.props.deleteTodo(todo.id)
                    }
                })
            }
        }
    }

    render() {
        const {id, name, completed} = this.props
        const {isMouseIn} = this.state
        return (
            <li style = {{backgroundColor: isMouseIn ? "#ddd" : "white"}}
            onMouseEnter={this.handleMouseState(true)}
            onMouseLeave={this.handleMouseState(false)}>
                <label>
                    <input type="checkbox" 
                    checked={completed}
                    onChange={this.handleCheckUpdate(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" 
                style={{display:isMouseIn?"block":"none"}}
                onClick={this.handleDelete(id)}>Delete</button>
            </li>
        )
    }
}
