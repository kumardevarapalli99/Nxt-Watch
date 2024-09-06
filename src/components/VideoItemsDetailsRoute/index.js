import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiSaveAs} from 'react-icons/hi'
import NavBar from '../NavBar'
import SideBar from '../SideBar'

import './index.css'

class VideoItemsDetailsRoute extends Component {
  state = {
    videosUpdatedData: [],
    like: false,
    disLike: false,
    save: false,
    initialSavedList: [],
  }

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
    this.setState({like: true})
    this.setState({disLike: false})
  }

  onClickDisLike = () => {
    this.setState({like: false})
    this.setState({disLike: true})
  }

  onClickSave = () => {
    const {videosUpdatedData, initialSavedList} = this.state

    // Check if the video is already in the saved list
    const isVideoAlreadySaved = initialSavedList.some(
      each => each.id === videosUpdatedData.id,
    )

    if (!isVideoAlreadySaved) {
      // If not, add it to the list
      this.setState(prevState => ({
        initialSavedList: [...prevState.initialSavedList, videosUpdatedData],
        save: !prevState.save,
      }))
    }
  }

  render() {
    const {
      videosUpdatedData,
      like,
      disLike,
      save,
      initialSavedList,
    } = this.state
    console.log(initialSavedList)
    const videoId = String(videosUpdatedData.videoUrl)
    const urlId = videoId.split('=')[1]
    console.log(videosUpdatedData)

    const likingIcon = like ? 'like-icon icon' : 'like-icon'
    const likingText = like ? 'like-text text' : 'like-text'

    const disLikingIcon = disLike ? 'like-icon icon' : 'like-icon'
    const disLikingText = disLike ? 'like-text text' : 'like-text'

    const saveIcon = save ? 'like-icon icon' : 'like-icon'
    const saveText = save ? 'like-text text' : 'like-text'

    return (
      <div>
        <NavBar />
        <SideBar />
        <div className="nav-para">
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
                  className={`like-like-text-container ${likingText}`}
                  onClick={this.onClickLike}
                >
                  <AiOutlineLike className={likingIcon} />
                  Like
                </button>
                <button
                  type="button"
                  className={`like-like-text-container ${disLikingText}`}
                  onClick={this.onClickDisLike}
                >
                  <AiOutlineDislike className={disLikingIcon} />
                  Dislike
                </button>
                <button
                  type="button"
                  className={`like-like-text-container ${saveText}`}
                  onClick={this.onClickSave}
                >
                  <HiSaveAs className={saveIcon} />
                  {save ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
            <hr className="horizontal-line" />
            <div className="profile-container">
              <img
                src={videosUpdatedData.profileImageUrl}
                alt="channel logo"
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
