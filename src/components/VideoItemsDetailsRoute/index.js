import {Component} from 'react'
import Cookies from 'js-cookie'
import NavBarTop from '../NavBarTop'
import NavBarSide from '../NavBarSide'
import './index.css'

class VideoItemsDetailsRoute extends Component {
  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    try {
      const {videoId} = this.props
      const apiUrl = `https://apis.ccbp.in/videos/${videoId}`
      const token = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      }

      const response = await fetch(apiUrl, options)
      const data = await response.json() // Await the json() method

      console.log(data)
    } catch (error) {
      console.error('Error fetching video data:', error)
    }
  }

  render() {
    return (
      <div>
        <NavBarTop />
        <div>
          <NavBarSide />
        </div>
      </div>
    )
  }
}

export default VideoItemsDetailsRoute
