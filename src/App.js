import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import NavBar from './NavBar'

function App () {
  return (
    <div>
      <NavBar />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
        </Switch>
    </div>
  )
}

export default App
