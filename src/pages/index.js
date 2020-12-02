import React from "react"
import Header from "../components/Header"
import Page from "../components/Page"

export default function Home() {
  return (
    <div className="full-page-container">
      <Header currentPage={'home'} />
      <Page>
        hi it's a homepage!
      </Page>
    </div>
  )
}
