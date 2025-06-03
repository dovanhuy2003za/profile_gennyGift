/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Team from 'assets/images/hero/team.png';

export default function HeroTeam() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">

      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            GIỚI THIỆU
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            Trong thế giới bận rộn ngày nay, một món quà không chỉ để tặng – mà còn để kết nối,
            tri ân và khắc ghi cảm xúc.
            GENNY GIFT ra đời với sứ mệnh giúp mỗi món quà trở thành cầu nối tinh tế
            giữa con người và thương hiệu, giữa tình cảm và giá trị bền vững.

            Là đơn vị chuyên cung cấp giải pháp quà tặng cá nhân hóa và
            quà tặng doanh nghiệp, chúng tôi không đơn thuần bán sản phẩm,
            mà mang đến trải nghiệm trọn vẹn –
            từ khâu ý tưởng, thiết kế, đóng gói cho đến cảm xúc khi người nhận mở quà.

            Với sự am hiểu thị trường và tinh thần sáng tạo không ngừng,
            GENNY GIFT tự tin đồng hành cùng các cá nhân, doanh nghiệp và
            tổ chức trong các chiến dịch:
            tri ân khách hàng, quà Tết, kỷ niệm thương hiệu, quà nhân viên,
            sự kiện, sinh nhật, tỏ tình,…
            Chúng tôi tin rằng, một món quà được trao đúng lúc –
            sẽ mở ra những kết nối đúng người.

            Rất mong có cơ hội đồng hành cùng Quý khách hàng và
            Quý doanh nghiệp trong hành trình lan tỏa giá trị, vun đắp mối quan hệ và
            nâng tầm thương hiệu qua từng món quà ý nghĩa.
          </p>
        </Fade>
      </div>
      <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img src={Team} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
