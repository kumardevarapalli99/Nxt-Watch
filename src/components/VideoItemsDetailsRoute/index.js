import {Component} from 'react'
import Cookies from 'js-cookie'
import NavBarTop from '../NavBarTop'
import NavBarSide from '../NavBarSide'
import './index.css'

class VideoItemsDetailsRoute extends Component {
  state = {videosUpdatedData: []}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    try {
      const apiUrl = `https://apis.ccbp.in/videos/${id}`
      const token = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      }

      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const data = await response.json()
        const updatedData = {
          description: data.video_details.description,
          id: data.video_details.id,
          publishedAt: data.video_details.published_at,
          thumbnailUrl: data.video_details.thumbnail_url,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          viewCount: data.video_details.view_count,
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        }
        this.setState({videosUpdatedData: updatedData})
      }
    } catch (error) {
      console.error('Error fetching video data:', error)
    }
  }

  render() {
    const {videosUpdatedData} = this.state
    const videoId = String(videosUpdatedData.videoUrl)
    const urlId = videoId.split('=')[1]
    console.log(videosUpdatedData)
    return (
      <div>
        <NavBarTop />
        <div>
          <NavBarSide />
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${urlId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItemsDetailsRoute
