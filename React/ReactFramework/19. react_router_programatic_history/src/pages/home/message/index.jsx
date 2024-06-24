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

    pushCheck = (id, title) => {
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }

    replaceCheck = (id, title) => {
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }

    goBack = () => {
        this.props.history.goBack()
    }

    goNext = () => {
        this.props.history.goForward()
    }

    goBackTwo = () => {
        this.props.history.go(-2)
    }
    
    goNextTwo = () => {
        this.props.history.go(2)
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

              {/* Pass props using search params */}
              {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

              {/* Pass props using state */}
              {/* <Link to={{pathname:`/home/message/detail`, state:item}}>{item.title}</Link> */}
              <button onClick={() => this.pushCheck(item.id, item.title)}>Push Check</button>
              <button onClick={() => this.replaceCheck(item.id, item.title)}>Replace Check</button>
            </div>
          )
        })}

        <hr />
        
        <button onClick={()=>this.goBack()}>Prev</button>
        <button onClick={()=>this.goNext()}>Next</button>
        <button onClick={()=>this.goBackTwo()}>2 step back</button>
        <button onClick={()=>this.goNextTwo()}>2 step forward</button>

        <hr />
        
        {/* This is how params are passed to props of Detail component */}
        {/* It is saved in this.props.match.params */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* There is no need to declare the params when using search and state to pass params*/}
        {/* <Route path="/home/message/detail" component={Detail} />         */}
      </div>

    )
  }
}
