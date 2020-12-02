import React from "react"
import Card from "../components/Card"
import Header from "../components/Header"
import ImageListener from "../components/ImageListener"

class Design extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      snippetsCompressed: false,
      selectedSnippet: null,
      openCard: null
    }
    this.imageListener = React.createRef()
    this.sourceDetail = React.createRef()
    this.heraldDetail = React.createRef()
    this.kalixDetail = React.createRef()
    this.ariadneDetail = React.createRef()
    this.idToCardRef = {
      'source': this.sourceDetail,
      'herald': this.heraldDetail,
      'kalix': this.kalixDetail,
      'ariadne': this.ariadneDetail
    }
    this.onSnippetClicked = this.onSnippetClicked.bind(this)
    this.onBigCardClosed = this.onBigCardClosed.bind(this)
    this.expandImage = this.expandImage.bind(this)
  }

  onSnippetClicked(e) {
    this.setState({snippetsCompressed: true})

    // If there's already an option selected, close it first
    if (this.state.openCard) {
      this.state.openCard.current.hide()
    }
    if (this.state.selectedSnippet) {
      this.state.selectedSnippet.classList.remove('selected')
    }

    /* find relevant expanded-detail card & show it */
    let bigCardRef = this.idToCardRef[e.currentTarget.id]
    if (bigCardRef && bigCardRef.current) {
      bigCardRef.current.show()
      /* make snippet image colored */
      let imgClicked = e.currentTarget.getElementsByClassName('design-snippet-img')[0]
      this.setState({
        selectedSnippet: imgClicked,
        openCard: bigCardRef
      })
      imgClicked.classList.add('selected')
    } else {
      console.log('failed to find card for id ' + e.currentTarget.id)
    }
  }

  onBigCardClosed(cardName) {
    // If this call came from the card's content, this function will be called
    // with a parameter of which card to close; otherwise this function was
    // called from the Card component, which will have closed itself already
    // TODO this is sloppy as fuck
    if (cardName) {
      let card = this.idToCardRef[cardName]
      card.current.hide()
    }
    this.state.selectedSnippet.classList.remove('selected')
    this.setState({snippetsCompressed: false, selectedSnippet: null})
  }

  expandImage(e) {
    this.imageListener.current.expandImage(e.currentTarget)
  }

  render() {
    return(
      <div>
      <ImageListener ref={this.imageListener} />
      <div className="full-page-container">
        <Header currentPage={'design'} />
        <div className="page-container design-page">
          <div className={'design-snippets' + (this.state.snippetsCompressed ? ' small-snippets' : '')}>
            <Card fullBleed={true} className="design-card" onClick={this.onSnippetClicked} id="source">
              <img className="design-snippet-img" src="/source-snippet.png" alt="source" tabindex="0" />
            </Card>

            <Card fullBleed={true} className="design-card" onClick={this.onSnippetClicked} id="herald">
              <img className="design-snippet-img" src="/herald-snippet.png" alt="herald" tabindex="0" />
            </Card>

            <Card fullBleed={true} className="design-card" onClick={this.onSnippetClicked} id="kalix">
              <img className="design-snippet-img" src="/kalix-snippet.png" alt="source" tabindex="0" />
            </Card>

            <Card fullBleed={true} className="design-card" onClick={this.onSnippetClicked} id="ariadne">
              <img className="design-snippet-img" src="/ariadne-snippet.png" alt="herald" tabindex="0" />
            </Card>
          </div>

          {this.renderBigCard('source')}
          {this.renderBigCard('herald')}
          {this.renderBigCard('kalix')}
          {this.renderBigCard('ariadne')}

        </div>
      </div>
    </div>
    )
  }

  renderBigCard(cardId) {
    return (
      <Card closeable={true} ref={this.idToCardRef[cardId]} hidden={true} className="big-design-card"
        cardClosedCallback={this.onBigCardClosed} >
        {cardId === 'source' && this.renderSourceContent()}
        {cardId === 'herald' && this.renderHeraldContent()}
        {cardId === 'kalix' && this.renderKalixContent()}
        {cardId === 'ariadne' && this.renderAriadneContent()}
      </Card>
    )
  }


  renderSourceContent() {
    return (
      <div>
        <div className="card-heading">
          <h2 className="card-title">Source Mobile Surveys</h2>
          <div className="card-subtitle">April 2020</div>
        </div>
        <div className="card-content">
          <div className="source-headline-imgs">
            <img src="/source/source-welcome@2x.png" onClick={this.expandImage} className="design-detail-img" />
            <img src="/source/source-q1@2x.png" onClick={this.expandImage} className="design-detail-img" />
            <img src="/source/source-q2@2x.png" onClick={this.expandImage} className="design-detail-img" />
          </div>

          <div className="card-section noflex-mob">
            <div style={{flexBasis: '50%'}}>
              <p>
                Source is a project to guide and promote the use of cannabis as a functional drug for non-recreational purposes including creativity, focus, and general mood improvements.
              </p>
              <p>
                As part of its alpha launch, Source needed a survey to gauge how a variety of cannabis compounds affected participants. The survey would be an <a href="https://pubmed.ncbi.nlm.nih.gov/18509902/" target="_blank">ecological momentary assessment</a>, catching people at random times of day to get a representative sample of their experiences both on and off the drug.
              </p>
            </div>
            <div className="vr"></div>
            <div style={{flexBasis: '50%', marginTop: '18px'}}>
              <div className="overline">Design inputs</div>
              <ul>
                <li>List of unedited questions compiled by staff psychologist</li>
                <li>Color scheme and brand identity</li>
              </ul>
              <br />
              <br />
              <div className="overline">Outputs</div>
              <ul>
                <li>Polished mobile survey UX smooth enough even for stoners</li>
                </ul>
            </div>
          </div>

          <hr />

          <div className="source-proto-desktop">
            <div className="source-proto-phone-frame">
              <iframe className="source-figma-proto" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FP6bvor0CQKKki5isrBKWMj%2Fsource-ema%3Fnode-id%3D0%253A1443%26viewport%3D151%252C562%252C0.3077608644962311%26scaling%3Dscale-down-width%26hide-ui=1" allowFullScreen></iframe>
            </div>
            <p className="caption">
              Interactive prototype&mdash;click around! (Or <a href="https://www.figma.com/proto/P6bvor0CQKKki5isrBKWMj/source-ema?node-id=0%3A1443&viewport=559%2C934%2C0.8683169484138489&scaling=scale-down">view in Figma</a>)
            </p>
          </div>
          <div className="source-proto-mobile">
              Here's an interactive <a href="https://www.figma.com/proto/P6bvor0CQKKki5isrBKWMj/source-ema?node-id=0%3A1443&viewport=559%2C934%2C0.8683169484138489&scaling=scale-down">Figma prototype</a> for the first few questions.
            <div className="design-detail-image-gallery">
                        </div>
          </div>

          <hr />

          <h3 className="card-section-header">Highlights</h3>
          <p className="caption center-text">
                Click to expand images
              </p>

          <div className="highlight-section noflex-mob">
            <div className="highlight-words" style={{maxWidth: '50%'}}>
              <div>
                <h4>Designed for rushed, imprecise phone use</h4>
                <p>Most answers are one-tap and advance immediately, with a clear back/undo button, to cut down on total clicks to finish.</p>
                <p>All questions are multiple-choice when possible&mdash;tapping on a tiny keyboard is hard enough sober.</p>
                <p>Multiple-choice questions have large tap targets, possible for a thumb to reach from either side of the screen.</p>
              </div>
            </div>
            <div className="highlight-images design-img-container" style={{flexbasis: '50%', maxWidth: '30%'}}>
              <img src="/source/source-q6@2x.png" onclick={this.expandimage} className="design-detail-img" />
            </div>
          </div>

          <div className="highlight-section">
            <div className="highlight-images" style={{maxWidth: '70%'}}>
              <div className="design-img-container" style={{marginRight: '10%'}}>
                <img src="/source/source-q4-edible@2x.png" onClick={this.expandImage} className="design-detail-img" />
              </div>
              <div className="design-img-container" style={{marginRight: '10%'}}>
                <img src="/source/source-q4-smoke@2x.png" onClick={this.expandImage} className="design-detail-img" />
              </div>
            </div>
            <div className="highlight-words">
              <h4>Simplified complex inputs</h4>
              <p>Source allowed participants to use any cannabis they wanted outside of the Source-provided doses, and tracked that use in the survey. But the variety of ways of ingesting cannabis, and the ambiguity of dosing, made this a complicated confound to track.</p>
              <p>We created an implicit flowchart and composed a UI of controls that would work regardless of mode of use.</p>
            </div>
          </div>

          <hr />

          <div>
            <p className="caption" style={{textAlign: 'center'}}>
              Full flow of final mocks in Figma
            </p>
            <div className="design-img-container" style={{width: '70%', margin: 'auto'}}>
              <img src="/source/source-figma-board.png" className="design-detail-img framed-img"
                   onClick={this.expandImage} />
            </div>
          </div>

          <div style={{marginTop: '4em', textAlign: 'center'}}>
            <a href="#" className="button" onClick={(e) => {this.onBigCardClosed('source')}}>
              Close Source
            </a>
          </div>

        </div>
      </div>
    )
  }

  renderHeraldContent() {
    return (
      <div>
        <p>
          Herald is a project to guide and promote the use of cannabis as a functional drug for non-recreational purposes including creativity, focus, and general mood improvements.
        </p>
        <p>
          Herald herald herald heaald
        </p>
      </div>
    )
  }

  renderKalixContent() {
    return (
      <div>
        <p>
          Kalix
        </p>
      </div>
    )
  }

  renderAriadneContent() {
    return (
      <div>
        <p>
          Ariadne
        </p>
      </div>
    )
  }

}

export default Design
