import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './views/Home'
import Shop from './views/Shop'

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
      </Switch>

      </Router>
    </div>
  );
}

export default App;
