import React from 'react';
import Helmet from 'react-helmet';
import Container from '../components/Container/Container';
import config from '../../config/SiteConfig';

const Index = () => (
  <div className="container about-container">
    <Helmet title={`${config.siteTitle} | Product Designer`} />
    <Container text>
      <h1 className="animated-title">
        Hola,
        <br /> I'm Diego!
      </h1>
      <p>I’m a digital product designer who loves crafting experiences.</p>
      <p>
        I'm Currently working at
        <a href="//www.auryc.com/"> Auryc</a>, a Customer Experience Analytics Platform.
      </p>
      <p>
        My process is data-driven. I believe in balancing creativity with analytics, eliminating assumptions and
        delivering functional aesthetic products.
      </p>
      <p>
        My motto is «ancora imparo» (I’m still learning) because that’s what I do everyday, gain valuable lessons from
        every experience.
      </p>
      <p>Oh, BTW, I can code and make magic with CSS.</p>
    </Container>
  </div>
);

export default Index;
