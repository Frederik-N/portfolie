import React from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Page } from './Page';
import { TransitionBox } from './TransitionBox';

export const HomePage = () => (
  <Fragment>
    <Page />
    <TransitionBox />
  </Fragment>
);
