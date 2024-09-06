import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import GamingItems from '../GamingItems'
import './index.css'

class GamingRoute extends Component {
  state = {gamingData: []}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    const trendingApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(trendingApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        viewCount: each.view_count,
        thumbnailUrl: each.thumbnail_url,
      }))

      this.setState({gamingData: updatedData})
    }
  }

  render() {
    const {gamingData} = this.state

    return (
      <div>
        <NavBar />
        <SideBar />
        <div className="nav-bar-side-trending-container">
          <div className="trending-container">
            <div className="icon-trending-name-container">
              <div className="fire-container">
                <SiYoutubegaming className="fire-icon" />
              </div>
              <h1 className="trending-heading">Gaming</h1>
            </div>
            <ul className="ul-container">
              {gamingData.map(each => (
                <GamingItems gaming={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GamingRoute
