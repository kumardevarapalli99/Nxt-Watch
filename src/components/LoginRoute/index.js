import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    check: false,
    showSubmitError: false,
    error: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showSubmitError: true, error})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
      console.log(data)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeCheck = () => {
    this.setState(prevState => ({check: !prevState.check}))
  }

  render() {
    const {username, password, check, showSubmitError, error} = this.state
    const checking = check ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt-watch"
            className="nxt-watch-logo"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <label htmlFor="username" className="username-label">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="username-input"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="username-label">
              PASSWORD
            </label>
            <input
              id="password"
              type={checking}
              placeholder="Password"
              className="username-input"
              value={password}
              onChange={this.onChangePassword}
            />
            <div className="checkbox-label-container">
              <input
                id="checkbox"
                type="checkbox"
                className="checkbox-input"
                onChange={this.onChangeCheck}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                Show Password
              </label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError ? <p className="error-message">*{error}</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
