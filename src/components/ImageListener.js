import React from 'react'

class ImageListener extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      galleryMode: false,
      expandedImg: null
    }
    this.imgContainer = React.createRef()
    this.exitGallery = this.exitGallery.bind(this)
  }

  expandImage(img) {
    console.log('expando!')
    let expandedImgEl = img.cloneNode()
    expandedImgEl.classList.add('expanded-image')
    this.setState({galleryMode: true, expandedImg: expandedImgEl})
    this.imgContainer.current.appendChild(expandedImgEl)

  }

  exitGallery() {
    console.log('byebye')
    this.state.expandedImg.remove()
    this.setState({galleryMode: false, expandedImg: null})

  }

  render() {
    return (
      <div>
        <div className={'scrim' + (this.state.galleryMode ? '' : ' hidden')}
          onClick={this.exitGallery}>
        </div>
        <div className={'gallery-close-icon' + (this.state.galleryMode ? '' : ' hidden')}
          onClick={this.exitGallery}>
          <div className="gallery-close-icon-left"></div>
          <div className="gallery-close-icon-right"></div>
        </div>
        <div className={'expanded-image-vert-container' + (this.state.galleryMode ? '' : ' hidden')}>
          <div className="expanded-image-container" ref={this.imgContainer}></div>
        </div>
      </div>
    )
  }
}

export default ImageListener
