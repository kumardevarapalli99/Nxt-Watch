import {FaMoon} from 'react-icons/fa'
import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const NavBar = props => {
  const onClickConfirm = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="nxt-watch-logo-2"
          />
        </Link>
        <div className="dark-profile-logout-container">
          <button
            type="button"
            className="night-mode-button"
            data-testid="theme"
          >
            <FaMoon className="dark-mode-icon" />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            className="profile-logo"
          />
          <Popup
            trigger={
              <button type="button" className="logout-button">
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
                    onClick={onClickConfirm}
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
    </>
  )
}

export default withRouter(NavBar)
