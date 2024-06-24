import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropType from 'prop-types'
import  './header.css'

export default class Header extends Component {

    // Add requirements to the field of Header
    static propTypes = {
        addTodo : PropType.func.isRequired
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            const name = e.target.value
            if (!name.trim()) {
                alert("The content cannot be empty!")
                return
            }
            const todoObj = {id : nanoid(), name, completed:false}
            this.props.addTodo(todoObj)
            e.target.value = ''
        }
    }
    render() {
        return (
            <div className ="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="To do..."/>
            </div>
        )
    }
}
