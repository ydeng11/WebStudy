import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css'

export default class Display extends Component {
    // initial state
    state = {
        users: [],
        isFirstLoad: true,
        isLoading: false,
        err: null
    }

    componentDidMount() {
        PubSub.subscribe('SEARCH_RESULT', (_, stateUpdate) => {
            this.setState({...stateUpdate})
        })
    }

    render() {
        const {users, isFirstLoad, isLoading, err} = this.state
        console.log(users, isFirstLoad, isLoading, err)
        return (
            <div className="row">
                {
                isFirstLoad ? <h2>Start your search</h2> :
                isLoading ? <h2>Loading...</h2> :
                err ? <h2>{err.message}</h2> : 
                users.map((userObj) => {
                        return <div key={userObj.id} className="card">
                            <a rel="noreferrer" target="_blank" href={userObj.html_url}>
                                <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className='card-text'>{userObj.login}</p>
                        </div>
                    })
                }

            </div>
        );
    }
}