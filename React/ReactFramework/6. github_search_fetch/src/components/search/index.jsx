import React, { Component } from 'react'
import axios from 'axios';
import PubSub from 'pubsub-js';
import './index.css'
export default class Search extends Component {
    handleSearch = async () => {
        
        // Sequential destructuring of props
        const { keywordNode:{value : keyword}} = this
        PubSub.publish("SEARCH_RESULT", {isFirstLoad:false, isLoading: true, err: null})
        //#region Use axios to send requests
        // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        //     res => {PubSub.publish("SEARCH_RESULT", {users: res.data.items,isLoading: false, err: null})},
        //     error => {PubSub.publish("SEARCH_RESULT", {isLoading: false, err: error})}
        // )
        //#endregion

        // Use fetch and await to send requests asynchronously
        // await must has async keyword in the front of the function
        // await must use before a promise instance
        try {
            const res = await fetch(`https://api.github.com/search/users?q=${keyword}`)
            const data = await res.json()
            PubSub.publish("SEARCH_RESULT", {users: data.items,isLoading: false, err: null})
        } catch (error) {
            PubSub.publish("SEARCH_RESULT", {isFirstLoad:false, isLoading: false, err: error})
        }
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
