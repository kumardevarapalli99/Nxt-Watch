import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiSaveAs} from 'react-icons/hi'
import NavBarTop from '../NavBarTop'
import NavBarSide from '../NavBarSide'
import SavedVideosRoute from '../SavedVideosRoute'
import './index.css'

class VideoItemsDetailsRoute extends Component {
  state = {videosUpdatedData: [], like: false, disLike: false, save: false}

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

  onClickLike = () => {
    this.setState(prevState => ({like: !prevState.like}))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({disLike: !prevState.disLike}))
  }

  onClickSave = () => {
    this.setState(prevState => ({save: !prevState.save}))
  }

  render() {
    const {videosUpdatedData, like, disLike, save} = this.state
    const videoId = String(videosUpdatedData.videoUrl)
    const urlId = videoId.split('=')[1]
    console.log(videosUpdatedData)

    const likingIcon = like ? 'like-icon icon' : 'like-icon'
    const likingText = like ? 'like-text text' : 'like-text'

    const disLikingIcon = disLike ? 'like-icon icon' : 'like-icon'
    const disLikingText = disLike ? 'like-text text' : 'like-text'

    const saveIcon = save ? 'like-icon icon' : 'like-icon'
    const saveText = save ? 'like-text text' : 'like-text'
    const savedText = save ? 'Saved' : 'Save'

    return (
      <div>
        <NavBarTop />
        <div className="nav-para">
          <NavBarSide />
          <div className="video-container">
            <iframe
              width="1150"
              height="500"
              src={`https://www.youtube.com/embed/${urlId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="title">{videosUpdatedData.title}</p>
            <div className="views-likes-container">
              <div className="views-published-container">
                <p className="views">
                  {videosUpdatedData.viewCount}
                  <span className="views-span"> views</span>
                </p>
                <p className="dot">.</p>
                <p className="published">{videosUpdatedData.publishedAt}</p>
              </div>
              <div className="like-dislike-container">
                <button
                  type="button"
                  className="like-like-text-container"
                  onClick={this.onClickLike}
                >
                  <AiOutlineLike className={likingIcon} />
                  <p className={likingText}>Like</p>
                </button>
                <button
                  type="button"
                  className="like-like-text-container"
                  onClick={this.onClickDisLike}
                >
                  <AiOutlineDislike className={disLikingIcon} />
                  <p className={disLikingText}>Dislike</p>
                </button>
                <button
                  type="button"
                  className="like-like-text-container"
                  onClick={this.onClickSave}
                >
                  <HiSaveAs className={saveIcon} />
                  <p className={saveText}>{savedText}</p>
                </button>
              </div>
            </div>
            <hr className="horizontal-line" />
            <div className="profile-container">
              <img
                src={videosUpdatedData.profileImageUrl}
                alt="profile"
                className="profile-image"
              />
              <div className="name-description-container">
                <div className="name-subscriber-count">
                  <p className="name">{videosUpdatedData.name}</p>
                  <p className="subscriber-count">
                    {videosUpdatedData.subscriberCount}
                    <span className="subscriber-span"> subscribers</span>
                  </p>
                </div>
                <p className="description">{videosUpdatedData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItemsDetailsRoute
