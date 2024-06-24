import React from 'react'
import {NavLink, BrowserRouter, Route} from 'react-router-dom'
// import router component from pages
import Home from './pages/home'
import About from './pages/about'
// import regular component from components
import Header from './components/header'

export default class App extends React.Component {
    render(){
        return ( 
            <div>
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
                        {/* HTML uses <a href> to go to different links */}
                        {/* React uses <Link to="path"> to go to different links */}
                        {/* Router components will receive props from router
                            including location, history and match */}
                        {/* use activeClassName to add the custom css attribute to the element for highlight */}
                        <NavLink activeClassName="active" to="/home" className="list-group-item">Home</NavLink>
                        <NavLink activeClassName="active" to="/about" className="list-group-item">About</NavLink>
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