import React from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './Header';
import { Background } from './Background';

export const Page = () => (
  <Fragment>
    <Header />
    <Background />
  </Fragment>
);
