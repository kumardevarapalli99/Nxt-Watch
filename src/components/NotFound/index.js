import {Component} from 'react'

import NavBar from '../NavBar'
import SideBar from '../SideBar'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
        <div className="nav-bar-side-trending-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not found"
          />
          <h1>Page Not Found</h1>
          <p>we are sorry, the page you requested could not be found.</p>
        </div>
      </div>
    )
  }
}

export default NotFound
