/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-awesome-reveal';

export default function AllTeam({ data }) {
  return (

    <section className="container mx-0 sm:mx-auto">
      <div className=" text-center mt-16 mb-8">
        <p className="uppercase text-[30px] font-bold tracking-wide">Đội ngũ lãnh đạo</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mx-16 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 justify-items-center justify-center items-center mx-auto">
        {data.map((item) => (

          <Fade bottom triggerOnce delay={200} key={item.name}>
            <div>
              <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 justify-center items-center rounded-xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                <div className="flex justify-center xl:mb-5">
                  <img src={item.imageUrl} alt="Team Member" className="flex w-32 h-32 rounded-full" />
                </div>
                <h2 className="text-theme-blue text-center text-xl">{item.name}</h2>
                <p className="font-light text-gray-400 text-center mb-3">{item.position}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
