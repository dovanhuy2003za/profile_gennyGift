/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function HeroTeam2({ data }) {  
  const flatData = [...data[0], ...data[1]];

  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 xl:px-24 items-stretch">
          {flatData.map((item, idx) => (
            <Fade bottom triggerOnce delay={500 * idx} key={item.title}>
              <div className="h-full flex">
                <div className="bg-white flex flex-row items-center p-6 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105 w-full h-full min-h-[260px]">
                  <img src={item.imageUrl} alt="" className="w-1/4 max-w-[80px] object-contain" />
                  <div className="flex flex-col pl-5 justify-center flex-1">
                    <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                    <h2 className="text-gray-500 text-lg">{item.description}</h2>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
