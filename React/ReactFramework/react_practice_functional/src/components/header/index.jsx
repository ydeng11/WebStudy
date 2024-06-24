import React, { Component } from 'react'

class Header extends Component {

  // goBack() {
  //   this.props.history.goBack()
  // }

  // goNext() {
  //   this.props.history.push('/next')
  // }
  
  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
        {/* <button onClick={()=>this.goBack()}>Prev</button>
        <button onClick={()=>this.goNext()}>Next</button> */}
      </div>
    )
  }
}

export default Header