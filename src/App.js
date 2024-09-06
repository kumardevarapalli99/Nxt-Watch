import {Route, Switch, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import GamingRoute from './components/GamingRoute'
import TrendingRoute from './components/TrendingRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemsDetailsRoute from './components/VideoItemsDetailsRoute'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <ProtectedRoute exact path="/" component={HomeRoute} />
      <ProtectedRoute exact path="/trending" component={TrendingRoute} />
      <ProtectedRoute exact path="/gaming" component={GamingRoute} />
      <ProtectedRoute
        exact
        path="/videos/:id"
        component={VideoItemsDetailsRoute}
      />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
