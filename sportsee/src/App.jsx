import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import User from './page/User'
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/stats/:userId" element={<User />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
