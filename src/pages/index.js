import React from "react"
import Header from "../components/Header"
import Page from "../components/Page"

export default function Home() {
  return (
    <div>
      <Header currentPage={'home'} />
      <div className="page-container">
        <div className="double-border">design page</div>
      </div>
    </div>
  )
}
