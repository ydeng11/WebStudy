import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

class Header extends Component {

  goBack() {
    this.props.history.goBack()
  }

  goNext() {
    this.props.history.push('/next')
  }
  
  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
        <button onClick={()=>this.goBack()}>Prev</button>
        <button onClick={()=>this.goNext()}>Next</button>
      </div>
    )
  }
}

export default withRouter(Header)