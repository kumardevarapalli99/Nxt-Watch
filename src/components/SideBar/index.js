import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

import {FaFire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {HiSaveAs} from 'react-icons/hi'
import './index.css'

const SideBar = () => {
  console.log('side bar')
  return (
    <aside className="nav-bar-container-2">
      <div className="top-container">
        <Link to="/" className="nav-link">
          <button
            type="button"
            className="icon-home-container home-text"
            data-testid="home"
          >
            <AiFillHome className="home-icon" />
            Home
          </button>
        </Link>
        <Link to="/trending" className="nav-link">
          <button
            type="button"
            className="icon-home-container home-text"
            data-testid="trending"
          >
            <FaFire className="home-icon" />
            Trending
          </button>
        </Link>
        <Link to="/gaming" className="nav-link">
          <button
            type="button"
            className="icon-home-container home-text"
            data-testid="gaming"
          >
            <SiYoutubegaming className="home-icon" />
            Gaming
          </button>
        </Link>
        <Link to="/saved" className="nav-link">
          <button type="button" className="icon-home-container">
            <HiSaveAs className="home-icon" />
            <p className="home-text">Saved videos</p>
          </button>
        </Link>
      </div>
      <div className="bottom-container">
        <p className="contact-heading">CONTACT US</p>
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
          Enjoy! Now to see your channels and recommendations!
        </p>
      </div>
    </aside>
  )
}

export default SideBar
