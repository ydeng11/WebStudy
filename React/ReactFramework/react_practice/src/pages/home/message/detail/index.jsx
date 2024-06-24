import React, { Component } from 'react'

export default class Detail extends Component {


    contents = [
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

    getContent = (id) => {
        return this.contents.find(item => item.id === Number(id)).content || {};
    }


    render() {
        console.log(this.props)
        // in case the state is null, we should use an empty data to destructure so the app could still continue
        
        const {id, title} = this.props.match.params || {};
        
        // const {id, title} = this.props.location.state || {};

        return (
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{this.getContent(id)}</li>
            </ul>
        )
    }
}
