import React from 'react'
import { Link } from "gatsby"


class Header extends React.Component {
  constructor() {
    super()
    this.pages = ['home', 'research', 'cv', 'about']
    this.pageUrls = {
      'home': '/',
      'research': '/research/',
      'cv': '/cv/',
      'about': '/about/'
    }
    this.pageNames = {
      'home': 'Design',
      'research': 'Research',
      'cv': 'CV',
      'about': 'Me'
    }
    this.navIcon = React.createRef()
    this.navMenu = React.createRef()
    this.navOpen = false
  }

  toggleNav() {
    const navIcon = this.navIcon.current
    const navMenu = this.navMenu.current
    console.log(navMenu)
    if (this.navOpen) {
      navIcon.classList.remove('nav-open')
      navMenu.classList.remove('nav-open')
      console.log('nav closed')
      this.navOpen = false
    } else {
      navIcon.classList.add('nav-open')
      navMenu.classList.add('nav-open')
      console.log('nav opened')
      this.navOpen = true
    }
  }

  render() {
    let navLinks = []

    for (const page of this.pages) {
      if (page === this.props.currentPage) {
        navLinks.push(<li key={page}><span className="button nav-current-page">
            {this.pageNames[page]}</span></li>)
      } else {
        navLinks.push(
          <li key={page}><Link className="button" to={this.pageUrls[page]}>
              {this.pageNames[page]}</Link></li>)
      }
    }

    return (
      <div>
        <div className="header">
          <div className="nav-icon-and-title">
            <div className="nav-icon" ref={this.navIcon} onClick={() => this.toggleNav()}>
              <div className="nav-icon-left"></div>
              <div className="nav-icon-right"></div>
            </div>
            <div className="page-title"><Link to="/">collegraphy</Link></div>
          </div>
          <div className="page-subtitle">
            work &amp; writing by <Link to="/about/" id="subtitle-name-link">
              Colleen McKenzie</Link></div>
        </div>

        <div className="nav-menu" ref={this.navMenu}>
          <ul>
            {navLinks}
          </ul>
          <div className="social">
            <a href="https://twitter.com/collegraphy" target="_blank">
              <img src="/twitter.svg"  alt="twitter icon"/>
            </a>
            <a href="https://github.com/colleenm" target="_blank">
              <img src="/github.svg" alt="github icon"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
