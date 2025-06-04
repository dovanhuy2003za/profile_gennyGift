/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line react/no-array-index-key
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageGallerySection({ data }) {
  return (
    <section className="container mx-auto">      
      {/* eslint-disable-next-line react/jsx-max-props-per-line */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={4}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex-col xl:w-full rounded-2xl shadow-xl sm:shadow-2xl border px-8 py-6 mx-2 mb-6 mt-6 xl:mx-auto sm:mx-6 sm:mb-12">
              <div className="flex items-center mb-5">
                <img src={item.imageUrl} alt="Testimoni" className="w-auto h-auto max-w-full max-h-[600px] object-contain mx-auto rounded-lg shadow" />
              </div>            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
