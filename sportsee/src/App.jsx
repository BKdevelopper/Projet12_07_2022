import { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Dashboard from './page/Dashboard'
import User from './page/User'
import ErrorPage from './components/Error'
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Routes>
            <Route path="/stats/:id" element={<User />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/404" exact element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
