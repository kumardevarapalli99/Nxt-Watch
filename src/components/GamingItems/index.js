import './index.css'

const GamingItems = props => {
  const {gaming} = props
  const {viewCount, thumbnailUrl, title} = gaming
  return (
    <>
      <li className="gaming-list-container">
        <img src={thumbnailUrl} alt="thumbnail" className="gaming-images" />
        <h1 className="gaming-title">{title}</h1>
        <p className="gaming-views">{viewCount} Watching worldwide</p>
      </li>
    </>
  )
}

export default GamingItems
