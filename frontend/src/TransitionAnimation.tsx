import { render } from 'react-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { useTransition, animated, config } from 'react-spring';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const TransitionAnimation = () => {
  const pages: string[] = [
    'hello, My Name Is Frederik',
    'I am a software Developer',
    'My main tools are C# and react',
  ];

  const [index, set] = useState(0);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: config.molasses,
  });

  useEffect(() => {
    const intervalId = setInterval(() => set((state) => (state + 1) % 3), 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.h1
            style={props}
            key={key}
            css={css`
              background-size: cover;
              background-position: center;
              will-change: opacity;
              margin: 0 5px 24px;
              font-family: 'Libre Baskerville', serif;
            `}
          >
            {pages[item]}
          </animated.h1>
        );
      })}
    </div>
  );
};
