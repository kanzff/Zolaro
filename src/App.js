import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'
import {
  Home,
  ProductDetail
} from "./pages"

export default function App() {
    return (
      <Router>
        <div className="App container-fluid">
          <Switch>
            <Route path="/products/:id">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}
