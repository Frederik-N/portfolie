import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      css={css`
        background-color: #382f25;
        box-shadow: 4px 10px 10px black;
      `}
    >
      <a className="navbar-brand" href="home">
        Dev.Frederik
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="about">
              CV
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolie">
              Portfolie
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="skills">
              Skills
            </a>
          </li>
        </ul>
      </div>
      <a
        className="navbar-brand align-right"
        href="https://www.linkedin.com/in/frederik-nielsen-0b00ab1a7/"
      >
        <SvgIcon>
          <LinkedInIcon />
        </SvgIcon>
      </a>
      <a
        className="navbar-brand align-right"
        href="https://twitter.com/DevFrederik"
      >
        <SvgIcon>
          <TwitterIcon />
        </SvgIcon>
      </a>
    </nav>
  );
}
