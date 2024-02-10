import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

import {FaFire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {HiSaveAs} from 'react-icons/hi'
import './index.css'

class NavBarSide extends Component {
  state = {
    clickHome: false,
    clickTrending: false,
    clickGaming: false,
    clickSaved: false,
  }

  onClickHome = () => {
    this.setState({clickHome: true})
    this.setState({clickTrending: false})
    this.setState({clickGaming: false})
    this.setState({clickSaved: false})
  }

  onClickTrending = () => {
    this.setState({clickHome: false})
    this.setState({clickTrending: true})
    this.setState({clickGaming: false})
    this.setState({clickSaved: false})
  }

  onClickGaming = () => {
    this.setState({clickHome: false})
    this.setState({clickTrending: false})
    this.setState({clickGaming: true})
    this.setState({clickSaved: false})
  }

  onClickSavedVideos = () => {
    this.setState({clickHome: false})
    this.setState({clickTrending: false})
    this.setState({clickGaming: false})
    this.setState({clickSaved: true})
  }

  render() {
    const {clickHome, clickGaming, clickSaved, clickTrending} = this.state

    const clickedHome = clickHome
      ? 'icon-home-container icon-home-container-2'
      : 'icon-home-container'

    const boldTextHome = clickHome ? 'home-text home-text-2' : 'home-text'
    const colorIconHome = clickHome ? 'home-icon home-icon-2' : 'home-icon'

    const clickedTrending = clickTrending
      ? 'icon-home-container icon-home-container-2'
      : 'icon-home-container '

    const boldTextTrending = clickTrending
      ? 'home-text home-text-2'
      : 'home-text'
    const colorIconTrending = clickTrending
      ? 'home-icon home-icon-2'
      : 'home-icon'

    const clickedGaming = clickGaming
      ? 'icon-home-container icon-home-container-2'
      : 'icon-home-container '

    const boldTextGaming = clickGaming ? 'home-text home-text-2' : 'home-text'
    const colorIconGaming = clickGaming ? 'home-icon home-icon-2' : 'home-icon'

    const clickedSaved = clickSaved
      ? 'icon-home-container icon-home-container-2'
      : 'icon-home-container '

    const boldTextSaved = clickSaved ? 'home-text home-text-2' : 'home-text'
    const colorIconSaved = clickSaved ? 'home-icon home-icon-2' : 'home-icon'

    return (
      <nav className="nav-bar-container-2">
        <div>
          <Link to="/" className="nav-link">
            <button
              type="button"
              className={clickedHome}
              onClick={this.onClickHome}
            >
              <AiFillHome className={colorIconHome} />
              <p className={boldTextHome}>Home</p>
            </button>
          </Link>
          <Link to="/trending" className="nav-link">
            <button
              type="button"
              className={clickedTrending}
              onClick={this.onClickTrending}
            >
              <FaFire className={colorIconTrending} />
              <p className={boldTextTrending}>Trending</p>
            </button>
          </Link>
          <Link to="/gaming" className="nav-link">
            <button
              type="button"
              className={clickedGaming}
              onClick={this.onClickGaming}
            >
              <SiYoutubegaming className={colorIconGaming} />
              <p className={boldTextGaming}>Gaming</p>
            </button>
          </Link>
          <Link to="/saved" className="nav-link">
            <button
              type="button"
              className={clickedSaved}
              onClick={this.onClickSavedVideos}
            >
              <HiSaveAs className={colorIconSaved} />
              <p className={boldTextSaved}>Saved videos</p>
            </button>
          </Link>
        </div>
        <div className="bottom-container">
          <h1 className="contact-heading">CONTACT US</h1>
          <div className="facebook-twitter-linked-in-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="facebook-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="facebook-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="facebook-logo"
            />
          </div>
          <p className="last-paragraph">
            Enjoy! Now to see your
            <br />
            channels and
            <br />
            recommendations!
          </p>
        </div>
      </nav>
    )
  }
}
export default NavBarSide
