import React, { Fragment } from 'react'
import {Outlet} from 'react-router-dom'
import MyNavLink from '../../components/myNavLink'

export default function Home() {
  return (
    <Fragment>
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
        <Outlet />
    </Fragment>
  )
}
