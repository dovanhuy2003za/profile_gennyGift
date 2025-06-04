/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Fade from 'react-awesome-reveal';

export default function Advantage({ data }) {
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Tại sao chọn chúng tôi?</h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
            LỢI ÍCH KHI CHỌN GENNY GIFT.
          </p>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex-col -mt-4 sm:mt-14">
            {
              data[0].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div>
                    <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                      <img src={item.imageUrl} alt="" className="w-1/3" />
                      <div className="flex-col pl-5">
                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>

                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {
              data[1].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div>
                    <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                      <img src={item.imageUrl} alt="" className="w-1/3" />
                      <div className="flex-col pl-5">
                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>

                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {
              data[2].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div>
                    <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                      <img src={item.imageUrl} alt="" className="w-1/3" />
                      <div className="flex-col pl-5">
                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>

                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
