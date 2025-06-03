/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroTeam from 'parts/HeroTeam';
import AllTeam from 'parts/AllTeam';
import Footer from 'parts/Footer';
import TopBar from 'parts/TopBar';
import HeroTeam2 from 'parts/HeroTeam2';

import { TeamMembers, Introdata } from 'json/landingPageData';

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <TopBar />
        <Header />
        <div className="h-[88px]" />
        <HeroTeam />
        <HeroTeam2 data={Introdata} />
        <AllTeam data={TeamMembers} />
        <Footer />
      </>
    );
  }
}
