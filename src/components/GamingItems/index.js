import {Link} from 'react-router-dom'
import './index.css'

const GamingItems = props => {
  const {gaming} = props
  const {id, viewCount, thumbnailUrl, title} = gaming
  return (
    <>
      <Link to={`/videos/${id}`} className="link">
        <li className="gaming-list-container">
          <img src={thumbnailUrl} alt="thumbnail" className="gaming-images" />
          <h1 className="gaming-title">{title}</h1>
          <p className="gaming-views">{viewCount} Watching worldwide</p>
        </li>
      </Link>
    </>
  )
}

export default GamingItems
