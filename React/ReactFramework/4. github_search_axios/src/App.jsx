import React from 'react'
import Search from './components/search';
import Display from './components/display'

export default class App extends React.Component {

    // initial state
    state = {
        users: [],
        isFirstLoad: true,
        isLoading: false,
        err: null
    }

    handleSearchResult = (results) => {
        const newUsers = results.map((result) => {
            return {
                avatar: result.avatar_url,
                name: result.login,
                url: result.html_url
            }
        })
        this.setState({users : newUsers})
    }

    updateAppState = (newState) => {
        this.setState(newState)
    }

    render() {
        return (
            <div  className="container">
                <Search handleSearchResult={this.handleSearchResult} updateAppState={this.updateAppState}/>
                <Display {...this.state}/>
            </div>
            )
        }
}