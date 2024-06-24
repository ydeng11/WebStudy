import React, { Component } from 'react'
import {Route, Routes} from 'react-router-dom'
import Message from './message'
import News from './news'
import MyNavLink from '../../components/myNavLink'

// This is a router component so we put it under pages
export default class Home extends Component {
  render() {
    return (
      
      <div>
        <h2>This is Home!</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/home/news" element={News} />
          <Route path="/home/message" element={Message} />
          <Route path="/" navigateTo="/home/news" />
        </Routes>
      </div>
    )
  }
}
