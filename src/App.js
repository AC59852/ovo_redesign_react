import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './views/Home'
import Shop from './views/Shop'
import Product from './views/Product'
import Stores from './views/Stores'
import Checkout from './views/Checkout'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/shop">
            <Shop />
        </Route>
        <Route path="/products/:id">
            <Product />
        </Route>
        <Route path="/stores">
            <Stores />
        </Route>
        <Route path="/checkout">
            <Checkout />
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
