/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function HeroTeam2({ data }) {  
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-col">
            {
              data[0].map((item) => (
                <Fade bottom triggerOnce delay={500} key={item.title}>
                  <div>
                    <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                      <img src={item.imageUrl} alt="" className="w-1/3" />
                      <div className="flex-col pl-5">
                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                        <h2 className="text-gray-500 text-lg">{item.description}</h2>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {
              data[1].map((item) => (
                <Fade bottom triggerOnce delay={500} key={item.title}>
                  <div>
                    <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                      <img src={item.imageUrl} alt="" className="w-1/3" />
                      <div className="flex-col pl-5">
                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                        <h2 className="text-gray-500 text-lg">{item.description}</h2>
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
