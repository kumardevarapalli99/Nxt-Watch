import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

class NavBarTop extends Component {
  onClickConfirm = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="NxtWatch"
          className="nxt-watch-logo-2"
        />
        <div className="dark-profile-logout-container">
          <FaMoon className="dark-mode-icon" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            className="profile-logo"
          />
          <Popup
            trigger={
              <button
                type="button"
                className="logout-button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            }
            modal
            nested
          >
            {close => (
              <div className="modal">
                <p className="paragraph">Are you sure, you want to logout?</p>
                <div className="buttons-container">
                  <button
                    type="button"
                    className="close"
                    onClick={this.onClickConfirm}
                  >
                    Confirm
                  </button>
                  <div className="actions">
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        console.log('modal closed ')
                        close()
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBarTop)
