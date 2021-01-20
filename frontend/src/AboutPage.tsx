import React from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Page } from './Page';
import cv from './pictures/cv.jpg';
import { animated, useSpring } from 'react-spring';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const AboutPage = () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });
  return (
    <Fragment>
      <Page />
      <animated.div
        style={animation}
        css={css`
          left: 50%;
          top: 50%;
          background-image: url(${cv});
          background-repeat: no-repeat;
          height: 700px;
          width: 500px;
          background-size: contain;
          position: absolute;
          transform: translate(-50%, -40%);
          padding: 10px;
          border: 10px inset black;
          border-radius: 25px;
          box-shadow: 50px 50px 10px black;
        `}
      ></animated.div>
    </Fragment>
  );
};
