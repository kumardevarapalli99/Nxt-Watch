import {Component} from 'react'
import NavBarTop from '../NavBarTop'
import NavBarSide from '../NavBarSide'
import './index.css'

class SavedVideosRoute extends Component {
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

export default SavedVideosRoute
