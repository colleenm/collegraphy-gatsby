import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Page from "../components/Page"

export default function PageNotFound() {
  return (
    <div className="full-page-container">
      <Header currentPage={'404'} />
      <Page>
        <br />
        <div style={{textAlign: 'center'}}>
          <img src="/labyrinth.svg" height="200" alt="labyrinth" />
          <br />
          <br />
          Seems like you've wandered into a place that doesn't exist.
          <br />
          <br />
          <Link href="/" className="button">Way out</Link>
        </div>
      </Page>
    </div>
  )
}
