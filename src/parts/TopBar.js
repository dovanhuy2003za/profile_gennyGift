import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";
import { SiShopee } from "react-icons/si";

export default function TopBar() {
  return (
    <div className="w-full bg-[#8B0F0F] text-white text-sm ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-1">
        {/* Bên trái: SĐT + Địa chỉ */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-white" />
            <span>Hotline : +849-6696-9931</span>
          </div>
          <div className="w-px h-4 bg-white mt-1 sm:mt-0 mx-2" /> {/* self-closing */}
          <div className="flex items-center mt-1 sm:mt-0 gap-1">
            <FaMapMarkerAlt className="text-white" />
            <span>Khu đấu giá Phú Lương,P. Phú Lương, Hà Đông Hà Nội</span>
          </div>
        </div>

        {/* Bên phải: Mạng xã hội */}
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <span>Mạng xã hội</span>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/gennygiftvietnam" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8B0F0F] rounded-full p-2 hover:opacity-80">
              <FaFacebookF size={14} />
            </a>
            <a href="https://www.tiktok.com/@gennygift_vn" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8B0F0F] rounded-full p-2 hover:opacity-80">
              <FaTiktok size={14} />
            </a>
            <a href="https://shopee.vn/shop/1407428364" target="_blank" rel="noopener noreferrer" className="bg-white text-[#ee4d2d] rounded-full p-2 hover:opacity-80">
              <SiShopee size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
