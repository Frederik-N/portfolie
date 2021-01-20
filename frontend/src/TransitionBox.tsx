import React, { Fragment } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { animated, useSpring } from 'react-spring';
import { TransitionAnimation } from './TransitionAnimation';

export const TransitionBox = () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });

  return (
    <animated.div
      style={animation}
      className="container"
      css={css`
        width: auto;
        background-color: #444b44;
        color: white;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        border: 10px inset black;
        border-radius: 25px;
        box-shadow: 50px 50px 10px black;
      `}
    >
      <Fragment>
        <TransitionAnimation />
      </Fragment>
    </animated.div>
  );
};
