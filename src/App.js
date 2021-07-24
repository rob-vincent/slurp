import axios from 'axios'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Error, Home, About, Menu, Contact } from './pages'
import { Navbar, Footer } from './components'
import { getProducts } from './reducer/middleware/getProducts'

function App({ getProducts, switchPage, setWindowSize }) {
  useEffect(() => {
    const slashLocation = window.location.href.indexOf('/', 8)
    let tempSlug = window.location.href.substring(slashLocation)

    switchPage(tempSlug)
    getProducts() // should call only once
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(window.innerWidth))
    return () => {
      window.removeEventListener('resize', () => setWindowSize(window.innerWidth))
    }
  }, [])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/about-us' children={<About />} />
        <Route path='/contact-us'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    switchPage: (slug) => dispatch({ type: 'SWITCH_PAGE', payload: slug }),
    setWindowSize: (winSize) => dispatch({ type: 'SET_WINDOW_SIZE', payload: winSize }),
  }
}

export default connect(null, mapDispatchToProps)(App)
