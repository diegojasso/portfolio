import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import { FaInstagram, FaBehance, FaDribbble, FaLinkedin } from 'react-icons/lib/fa';
import { slide as Menu } from 'react-burger-menu';
import { Fade } from 'react-reveal';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';
import './Headroom.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <header>
        <Headroom calcHeightOnResize disableInlineStyles>
          <Fade down duration={2000} className={styles.wrapper}>
            <nav className={styles.navigation}>
              <span>
                <Link to="/" >Home</Link>
                <Link to="/portfolio" activeClassName="active">
                  Portfolio
                </Link>
                {/* <Link to="/about" activeClassName="active">
                  About Me
                </Link> */}
              </span>
            </nav>
            <div className={styles.socialMedia}>
              <span>
                <a href="https://www.instagram.com/diegojasso_" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://dribbble.com/diego_" target="_blank" rel="noopener noreferrer">
                  <FaDribbble />
                </a>
                <a href="https://www.linkedin.com/in/diegojasso/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </span>
            </div>
          </Fade>
        </Headroom>
        <div className={styles.mobileNav}>
          <div className={styles.menu}>
            <Menu isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="100%">
              <Link to="/" onClick={() => this.closeMenu()}>
                Home
              </Link>
              <Link to="/portfolio" activeClassName="active" onClick={() => this.closeMenu()}>
                Portfolio
              </Link>
              {/* <Link to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                About Me
              </Link> */}
              <div className={styles.mobileNavSocialMedia}>
                <a href="https://www.instagram.com/diegojasso_" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://dribbble.com/diego_" target="_blank" rel="noopener noreferrer">
                  <FaDribbble />
                </a>
              </div>
            </Menu>
          </div>
        </div>
      </header>
    );
  }
}
