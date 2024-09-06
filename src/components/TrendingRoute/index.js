import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import TrendingItems from '../TrendingItems'

import './index.css'

class TrendingRoute extends Component {
  state = {trendingData: []}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))

      this.setState({trendingData: updatedData})
    }
  }

  render() {
    const {trendingData} = this.state
    console.log(trendingData)
    return (
      <div>
        <NavBar />
        <SideBar />
        <div className="nav-bar-side-trending-container">
          <div className="trending-container">
            <div className="icon-trending-name-container">
              <div className="fire-container">
                <FaFire className="fire-icon" />
              </div>
              <h1 className="trending-heading">Trending</h1>
            </div>
            <ul className="ul-container">
              {trendingData.map(each => (
                <TrendingItems trending={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TrendingRoute
