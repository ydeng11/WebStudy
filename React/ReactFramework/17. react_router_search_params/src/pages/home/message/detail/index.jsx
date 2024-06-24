import React, { Component } from 'react'
import qs from 'query-string'

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
        console.log(this.props)

        const {search} = this.props.location
        // Use query-string to parse the query to get the params
        const {id, title} = qs.parse(search.slice(1))
        return (
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{this.getContent(id)}</li>
            </ul>
        )
    }
}
