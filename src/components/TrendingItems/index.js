import {Link} from 'react-router-dom'
import './index.css'

const TrendingItems = props => {
  const {trending} = props
  console.log(trending)
  const {id, publishedAt, thumbnailUrl, title, viewCount, name} = trending
  return (
    <>
      <Link to={`/videos/${id}`} className="link">
        <li className="list-trending-container">
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="thumbnail-trending-image"
          />
          <div className="title-name-container">
            <p className="title">{title}</p>
            <p className="name">{name}</p>
            <div className="view-count-published-container">
              <p className="view-count">
                {viewCount}
                <span className="views">views</span>
              </p>
              <p className="dot">.</p>
              <p className="published-at">{publishedAt}</p>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default TrendingItems
