import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { PageNotFound } from './PageNotFound';
import { PortfoliePage } from './PortfoliePage';
import { Page } from './Page';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Page />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolie" component={PortfoliePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
