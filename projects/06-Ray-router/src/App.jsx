import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import './App.css'
import SearchPage from './components/Search.jsx'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}
