import './index.css'

const TrendingItems = props => {
  const {trending} = props
  const {publishedAt, thumbnailUrl, title, viewCount, name} = trending
  return (
    <>
      <li className="list-trending-container">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-trending-image"
        />
        <div className="title-name-container">
          <h1 className="title">{title}</h1>
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
    </>
  )
}

export default TrendingItems
