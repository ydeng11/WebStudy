import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return (
        // Create custom NavLink which has defaults so we could reduce some duplicate codes
        // use activeClassName to add the custom css attribute to the element for highlight
      <NavLink {...this.props} activeClassName="active" className="list-group-item" />
    )
  }
}
