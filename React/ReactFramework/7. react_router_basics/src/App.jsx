import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'

export default class App extends React.Component {
    render(){
        return ( 
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className='page-header'><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* HTML uses <a href> to go to different links */}
                        {/* React uses <Link to="path"> to go to different links */}
                        <Link to="/home" className="list-group-item">Home</Link>
                        <Link to="/about" className="list-group-item">About</Link>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* Register route */}
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}