import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const contents = [
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
    const {id, title} = useParams() || {};
    const content = contents.find(item => item.id === Number(id)).content || {};
    return (
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
    )
}