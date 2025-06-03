/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import logo from '../assets/images/logov1.jpg';
import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="mb-2">🏠 Address: Khu đấu giá Phú Lương, P. Phú Lương, Hà Đông, Hà Nội</p>
            <p className="mb-2">📞 Hotline: +849-6696-9931</p>
            <p className="mb-2">📧 Email: gennygiftvietnam@gmail.com</p>
            <p className="mb-2">🌐 Website: https://gennygiftvn.com</p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
            {/* Logo */}
            <img src={logo} alt="Genny Gift Logo" className="w-20 h-20 mb-2" />
            <p className="font-bold text-lg">GENNY GIFT</p>
            <p className="text-sm mt-1">GENNY GIFT MANG ĐẾN GIẢI PHÁP QUÀ TẶNG TỐI ƯU</p>
            <p className="text-xs italic">GENNY GIFT PROVIDES OPTIMAL GIFT SOLUTIONS</p>
          </div>
          <div className="w-full md:w-1/4 px-16 mt-2 md:mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2 text-center">
              Social
            </h1>
            <Button
              href="https://www.facebook.com/profile.php?id=61572720106070"
              type="link"
              target="_blank"
              className="flex items-center justify-center bg-[#f7f5df] text-[#14332b] font-bold text-base uppercase rounded-full px-8 py-3 m-2 shadow-none hover:bg-[#ece9c6] transition"
              isExternal
            >
              Facebook
            </Button>
            <Button
              href="https://www.tiktok.com/@gennygift_vn"
              type="link"
              target="_blank"
              className="flex items-center justify-center bg-[#f7f5df] text-[#14332b] font-bold text-base uppercase rounded-full px-8 py-3 m-2 shadow-none hover:bg-[#ece9c6] transition"
              isExternal
            >
              Tiktok
            </Button>
            <Button
              href="https://shopee.vn/shop/1407428364"
              type="link"
              target="_blank"
              className="flex items-center justify-center bg-[#f7f5df] text-[#14332b] font-bold text-base uppercase rounded-full px-8 py-3 m-2 shadow-none hover:bg-[#ece9c6] transition"
              isExternal
            >
              Shopee
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright ©  2025 - All rights reserved - GennyGift
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/dovanhuy2003za" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Đỗ Văn Huy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
