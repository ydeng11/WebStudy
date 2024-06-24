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
              {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                {item.title}
              </Link> */}

              {/* Pass props using search params */}
              {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

              {/* Pass props using state */}
              {/* This could integrate with the above two ways to provide path w/t params or search params and state */}
              <Link to={{pathname:`/home/message/detail`, state:item}}>{item.title}</Link>
            </div>
          )
        })}
        {/* This is how params are passed to props of Detail component */}
        {/* It is saved in this.props.match.params */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* There is no need to declare the params when using search and state to pass params*/}
        <Route path="/home/message/detail" component={Detail} />
      </div>

    )
  }
}
