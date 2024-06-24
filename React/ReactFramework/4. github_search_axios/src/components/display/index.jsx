import React, { Component } from 'react';
import './index.css'

export default class Display extends Component {

    render() {
        const {users, isFirstLoad, isLoading, err} = this.props
        return (
            <div className="row">
                {isFirstLoad ? <h2>Start your search</h2> :
                isLoading ? <h2>Loading...</h2> :
                err ? <h2>{err.message}</h2> :
                users.map((userObj) => {
                        <div key={userObj.id} className="card">
                            <a rel="noreferrer" target="_blank" href={userObj.url}>
                                <img alt="avatar" src={userObj.avatar} style={{width: '100px'}}/>
                            </a>
                            <p className='card-text'>{userObj.name}</p>
                        </div>
                    })}
            </div>
        );
    }
}