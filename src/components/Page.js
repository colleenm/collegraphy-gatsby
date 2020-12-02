import React from 'react'
import Card from "../components/Card"

class Page extends React.Component {

  render() {
    return (
      <div className="page-container full-page">
        <Card className="main-page-card">
          {this.props.children}
        </Card>
      </div>
    )
  }
}

export default Page
