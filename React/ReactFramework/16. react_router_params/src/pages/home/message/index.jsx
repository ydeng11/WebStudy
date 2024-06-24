import React, { Component } from 'react'
import Detail from './detail'
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min'

export default class Message extends Component {
    state = {
        news: [
            {
                id: 1,
                title: 'News 1',
            },
            {
                id: 2,
                title: 'News 2',
            },
            {
                id: 3,
                title: 'News 3',
            }
        ]
    }
  render() {
    const {news} = this.state
    return (
      <div>
        {news.map((item) => {
          return (
            <div key={item.id}>
              {/* Pass props using params */}
              <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                {item.title}
              </Link>
            </div>
          )
        })}
        {/* This is how params are passed to props of Detail component */}
        {/* It is saved in this.props.match.params */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>

    )
  }
}
