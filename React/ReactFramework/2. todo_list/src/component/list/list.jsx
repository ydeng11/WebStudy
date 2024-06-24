import React, { Component } from 'react';
import PropType from 'prop-types'
import Item from '../item/item'
import './list.css'

export default class List extends Component {

    // Static keyword is essential for class level properties
    static propTypes = {
        todos : PropType.array.isRequired,
        updateTodo : PropType.func.isRequired,
        deleteTodo : PropType.func.isRequired
    }

    render() {
        const {todos, updateTodo, deleteTodo} = this.props;
        console.log(todos)
        return (
                <ul className="todo-main" >
                    {todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })}
                </ul>
        );
    }
}