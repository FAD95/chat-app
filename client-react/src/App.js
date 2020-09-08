import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './styles/GlobalStyles'

import Join from './components/Join'
import Chat from './components/Chat'

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Route path='/' exact component={Join}></Route>
      <Route path='/chat' component={Chat}></Route>
    </Router>
  </>
)
export default App
