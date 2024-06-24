import React, { Component } from 'react'

export default class Detail extends Component {


    state = {
        contents : [
            {
                id: 1,
                content: 'This is news 1'
            },
            {
                id: 2,
                content: 'This is news 2'
            },
            {
                id: 3,
                content: 'This is news 3'
            }
        ]
    }

    getContent = (id) => {
        const {contents} = this.state
        return contents.find(item => item.id === Number(id)).content;
    }
    
    render() {
        const { id, title } = this.props.match.params;
        console.log(this.props)
        return (
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{this.getContent(id)}</li>
            </ul>
        )
    }
}
