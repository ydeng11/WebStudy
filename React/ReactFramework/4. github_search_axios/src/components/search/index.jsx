import React, { Component } from 'react'
import axios from 'axios';
import './index.css'
export default class Search extends Component {
    handleSearch = () => {
        // Sequential destructuring of props
        const { keywordNode:{value : keyword}} = this
        this.props.updateAppState({isFirstLoad:false, isLoading: true, err: null})
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            res => {
                this.props.updateAppState({isLoading: false, err: null})
                this.props.handleSearchResult(res.data.items)},
            error => {this.props.updateAppState({isLoading: false, err: error})}
        )
        this.keywordNode.value = ''
    }

    handleInput = (event) => {
        if (event.keywordNode == 13) {
            this.handleSearch()
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search GitHub users</h3>
                <div>
                    <input ref={c => this.keywordNode = c} type="text" onKeyUp={this.handleInput} />
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}
