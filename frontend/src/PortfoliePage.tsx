import React from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Page } from './Page';
import cv from './pictures/cv.jpg';
import { animated, useSpring } from 'react-spring';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const PortfoliePage = () => {
  return (
    <Fragment>
      <Page />
      <h1
        css={css`
          left: 50%;
          top: 50%;
          color: white;
          position: absolute;
          transform: translate(-50%, -40%);
        `}
      >
        Nothing here yet..
      </h1>
    </Fragment>
  );
};
