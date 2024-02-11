import {Route, Switch} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemsDetailsRoute from './components/VideoItemsDetailsRoute'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <ProtectedRoute exact path="/trending" component={TrendingRoute} />
    <ProtectedRoute exact path="/gaming" component={GamingRoute} />
    <ProtectedRoute exact path="/saved" component={SavedVideosRoute} />
    <Route exact path="/videos/:id" component={VideoItemsDetailsRoute} />
  </Switch>
)

export default App
