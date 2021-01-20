import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import woodbg from './pictures/wood.jpg';

export const Background = () => {
  return (
    <div
      css={css`
        background: #373b38;
      `}
    >
      <div
        css={css`
          background-image: url(${woodbg});
          height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.7;
        `}
      ></div>
    </div>
  );
};
