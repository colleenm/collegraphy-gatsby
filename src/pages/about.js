import React from "react"
import Header from "../components/Header"
import Page from "../components/Page"

export default function About() {
  return (
    <div>
      <Header currentPage={'about'} />
      <Page>
        <div style={{display: 'flex'}}>
          <div>
            <p>
              [Colleen is a product designer and researcher interested in exploring and improving humans' interactions with technology in a variety of contexts. She has worked as a PM at Google, as Chief of Staff at the Center for Humane Technology, and as product & UX lead for distributed computing startup Kalix Systems.
            </p>
            <p>
              She also co-founded the Median Group, a scientific research nonprofit, where she explores technological trends and their societal impacts. Colleen holds a bachelor's degree in computer science and neuroscience from Columbia University.]
            </p>
          </div>
          <img src="/headshot-bw.jpeg" className="framed-img headshot" height="300"
               style={{marginLeft: '24px'}} />
        </div>
      </Page>
    </div>
  )
}
