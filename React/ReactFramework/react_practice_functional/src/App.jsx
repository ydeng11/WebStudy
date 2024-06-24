import React, { Fragment } from 'react'
import {useRoutes, Outlet} from "react-router-dom"
import MyNavLink from './components/myNavLink'
import Header from './components/header'
import MyRoutes from './routes'


export default function App() {
    const elements = useRoutes(MyRoutes);
  return (
    <Fragment>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className='page-header'>
                        <Header />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <MyNavLink to="/home">Home</MyNavLink>
                        <MyNavLink to="/about">About</MyNavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {elements}
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}