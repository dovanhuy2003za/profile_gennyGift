/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import heroPortfolio from 'assets/images/hero/portfolioHero.png';

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">CAM KẾT</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            Với cam kết mang đến những sản phẩm quà tặng chỉn chu –
            ý nghĩa – cá nhân hóa, GENNY GIFT luôn nỗ lực sáng tạo để mang lại
            giải pháp phù hợp nhất với từng đối tượng khách hàng và mục tiêu sử dụng.
            Chúng tôi tin rằng, món quà đúng không chỉ là một vật phẩm –
            mà là một thông điệp cảm xúc, là cách gắn kết bền vững giữa người trao và
            người nhận, giữa thương hiệu và trái tim khách hàng.
          </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <Fade direction="up" triggerOnce>
          <img src={heroPortfolio} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
