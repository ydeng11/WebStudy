import React from 'react'
import Search from './components/search';
import Display from './components/display'

export default class App extends React.Component {
    render() {
        return (
            <div  className="container">
                <Search />
                <Display />
            </div>
            )
        }
}