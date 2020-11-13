import React from 'react'
import { Link } from "gatsby"


class Page extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="page-container">
        <div className="main-page-card double-border">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Page
