import {Component} from 'react'
import NavBarTop from '../NavBarTop'
import NavBarSide from '../NavBarSide'
import './index.css'

class SavedVideosRoute extends Component {
  render() {
    const {initialSavedList} = this.props

    return (
      <div>
        <NavBarTop />
        <div>
          <NavBarSide />
          <div>
            {Array.isArray(initialSavedList) && initialSavedList.length > 0 ? (
              initialSavedList.map(savedItem => (
                <div key={savedItem.id}>
                  <img src={savedItem.profileImageUrl} alt="profile" />
                  <div>
                    <img src={savedItem.thumbnailUrl} alt="thumbnail" />
                    <div>
                      <h1>{savedItem.title}</h1>
                      <p>{savedItem.name}</p>
                      <div>
                        <p>
                          {savedItem.viewCount}
                          <span> views</span>
                        </p>
                        <p>.</p>
                        <p>{savedItem.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No saved videos</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default SavedVideosRoute
