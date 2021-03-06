import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { default as PortfolioMain } from './Components/Portfolio/Main';
import { default as Splash } from './Components/Splash/Main';

class App extends Component {
  render() {
    return (
      <div class="site-bg">
        <BrowserRouter>
          <div class="pagecont">
            <Switch>
              <Route path="/portfolio">
                <PortfolioMain />
              </Route>
              <Route path="/">
                <Splash />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
