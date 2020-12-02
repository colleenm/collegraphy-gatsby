import React from 'react'

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hidden: this.props.hidden
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.hideWithCallback = this.hideWithCallback.bind(this)
  }

  show() {
    this.setState({hidden: false})
  }

  hide() {
    this.setState({hidden: true})
  }

  hideWithCallback() {
    this.hide()
    this.props.cardClosedCallback()
  }

  render() {
    return (
      <div className={'double-border-outer ' + this.props.className + ' ' + (this.state.hidden ? ' hidden' : '')}
           onClick={this.props.onClick} id={this.props.id}>
           <div className={'double-border-inner' + (this.props.fullBleed ? ' full-bleed' : '')}>
             {this.props.closeable == true &&
               <div className="card-close-icon" onClick={this.hideWithCallback}>
                 <div className="card-close-icon-left"></div>
                 <div className="card-close-icon-right"></div>
               </div>
             }

             <div className="bordered-content">
               {this.props.children}
             </div>
        </div>
      </div>
    )
  }
}

export default Card
