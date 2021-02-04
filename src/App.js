import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {
  Home,
  ProductDetail,
  Favorites
} from "./pages"

export default function App() {
    return (
      <Router>
        <div className="App container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h3 className="navbar-brand">Zolaro</h3>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">Favorites</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/products/:id">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/favorites">
              <Favorites></Favorites>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}
