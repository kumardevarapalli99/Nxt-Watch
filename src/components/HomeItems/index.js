import {Link} from 'react-router-dom'
import './index.css'

const HomeItems = props => {
  const {videos} = props
  const {
    id,
    thumbnailUrl,
    name,
    profileImageUrl,
    publishedAt,
    title,
    viewCount,
  } = videos

  return (
    <>
      <Link to={`/videos/${id}`} className="link-item">
        <li className="list-home-items">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
          <div className="profile-title-container">
            <img
              src={profileImageUrl}
              alt="profile"
              className="profile-image"
            />
            <div>
              <p className="title">{title}</p>
              <p className="name">{name}</p>
              <div className="view-count-publish-container">
                <p className="view-count">
                  {viewCount}
                  <span className="view-span"> views</span>
                </p>
                <p className="view-count dot">.</p>
                <p className="published-date">{publishedAt}</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default HomeItems
