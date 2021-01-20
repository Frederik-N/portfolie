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
          background-repeat: no-repeat;
          height: 800px;
          background-size: cover;
          opacity: 0.7;
        `}
      ></div>
    </div>
  );
};
