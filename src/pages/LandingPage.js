/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios, Advantages, Testimonials, steps,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import TopBar from 'parts/TopBar';
import Process from 'parts/Process';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <TopBar />
        <Header />
        <div className="h-[88px]" />
        <Hero />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Process
          steps={steps}
          title="Quy trình hoạt động tại Genny Gift"
          subtitle="GENNY GIFT PROVIDES OPTIMAL GIFT SOLUTIONS"
        />
        <Testimonial data={Testimonials} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
