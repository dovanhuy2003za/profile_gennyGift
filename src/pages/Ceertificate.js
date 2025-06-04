/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import CertificateSection from 'parts/CertificateSection';
import Footer from 'parts/Footer';
import TopBar from 'parts/TopBar';
import ImageGallerySection from 'parts/ImageGallerySection';
import { ac } from 'json/CeertificateData';

export default class Ceertificate extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <TopBar />
        <Header />
        <div className="h-[88px]" />
        <h1 className="text-center text-2xl font-bold my-8">
          Bản công bố sản phẩm GENNY GIFT</h1>
        <div className="h-[88px]" />
        <CertificateSection /> 
        <div className="h-[88px]" />
         <h1 className="text-center text-1xl font-bold my-4">
            1. Phiếu công bố sản phẩm AURORA WHISPER
          </h1>
        <ImageGallerySection data={ac} />
        <Footer />
      </>
    );
  }
}
