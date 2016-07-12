import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    // See react-router tutorial (https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links)
    return <Link {...this.props} activeClassName="active" onlyActiveOnIndex={true}/>
  }
})