import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { PageNotFound } from './PageNotFound';
import { PortfoliePage } from './PortfoliePage';

function App() {
  return (
    <BrowserRouter>
      {' '}
      <div>
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/portfolie" component={PortfoliePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
