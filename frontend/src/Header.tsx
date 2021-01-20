import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import SvgIcon from '@material-ui/core/SvgIcon';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item align-left">
            <a className="nav-link disabled" href="about">
              CV
            </a>
          </li>
          <li className="nav-item align-left">
            <a className="nav-link disabled" href="contact">
              Contact
            </a>
          </li>
          <li className="nav-item align-left">
            <a className="nav-link" href="portfolie">
              Portfolie
            </a>
          </li>
          <li className="nav-item align-left">
            <a className="nav-link disabled" href="skills">
              Skills
            </a>
          </li>
        </ul>
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
      </div>
    </nav>
  );
}
