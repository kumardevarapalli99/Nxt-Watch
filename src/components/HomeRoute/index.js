import {Component} from 'react'
import Cookies from 'js-cookie'
import {FiPlus} from 'react-icons/fi'
import {FaSearch} from 'react-icons/fa'
import NavBarTop from '../NavBarTop'
import NavBarSide from '../NavBarSide'
import './index.css'
import HomeItems from '../HomeItems'

class HomeRoute extends Component {
  state = {
    videosData: [],
    cancelClicked: false,
    searchInput: '',
    response: '',
  }

  componentDidMount() {
    this.getHomeDetails()
  }

  getHomeDetails = async () => {
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    this.setState({response: response.status})
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({videosData: updatedData})
    }
  }

  onClickCancel = () => {
    this.setState({cancelClicked: true})
  }

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderBanner = () => (
    <>
      <div className="banner">
        <div className="logo-cancel-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="Nxt Watch"
            className="nxt-watch-logo"
          />
          <FiPlus className="cancel-button" onClick={this.onClickCancel} />
        </div>
        <p className="banner-para">
          Buy Nxt Watch Premium prepaid plans with
          <br />
          UPI
        </p>
        <button type="button" className="banner-button">
          GET IT NOW
        </button>
      </div>
    </>
  )

  renderEmptyBackground = () => (
    <div className="no-videos">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="no-videos-image"
      />
    </div>
  )

  renderFailureView = () => (
    <div className="no-videos">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
        className="no-videos-image"
      />
    </div>
  )

  renderListOfVideos = () => {
    const {videosData, searchInput} = this.state
    console.log(videosData)
    const searchResults = videosData.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul className="ul-list-container">
        {searchResults.map(each => (
          <HomeItems key={each.id} videos={each} />
        ))}
      </ul>
    )
  }

  renderFailureAndResponse = () => {
    const {response} = this.state
    console.log(response)
    let failed
    if (response === 200) {
      failed = this.renderListOfVideos()
    } else if (response === 401) {
      failed = this.renderFailureView()
    }

    return failed
  }

  render() {
    const {videosData, cancelClicked, searchInput} = this.state

    const searchResults = videosData.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let empty
    if (searchResults.length !== 0) {
      empty = false
    } else {
      empty = true
    }

    return (
      <div>
        <NavBarTop />
        <div className="nav-para">
          <NavBarSide />
          <div className="home-inner">
            {cancelClicked ? '' : this.renderBanner()}
            <div className="home-items-inner-container">
              <div className="search-icon-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-box"
                  onChange={this.changeInput}
                  value={searchInput}
                />
                <div className="icon-container">
                  <FaSearch
                    className="search-icon"
                    onClick={this.onClickSearch}
                  />
                </div>
              </div>
              {empty
                ? this.renderEmptyBackground()
                : this.renderFailureAndResponse()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeRoute
