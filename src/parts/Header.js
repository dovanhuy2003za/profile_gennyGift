/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Fade } from 'react-awesome-reveal';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{ marginTop: isScrolled ? 0 : '0.5rem' }}
      className={`header fixed left-0 w-full z-50 bg-white shadow-md transition-all duration-300
      ${isScrolled ? 'top-0' : 'top-18 sm:top-14 lg:top-7'} h-12 lg:h-14
      `}
    >
      <div className="flex justify-between px-4 lg:px-0 py-0 items-center h-full">
        <BrandIcon />

        <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul className="hidden text-theme-pink tracking-widest items-center lg:flex flex-row mt-0 text-sm">
        <li>
          <Button
            className={`${path === '/' ? 'active-link' : ''} font-medium px-3 no-underline hover:underline`}
            type="link"
            href="/"
          >
            Trang chủ
          </Button>
        </li>
        <li className="py-1 lg:py-0">
          <Button
            className={`${path === '/team' ? 'active-link' : ''} font-medium px-3 no-underline hover:underline`}
            type="link"
            href="/team"
          >
            Giới thiệu về GennyGift
          </Button>
        </li>
        <li className="py-1 lg:py-0">
          <Button
            className={`${path === '/project' ? 'active-link' : ''} font-medium px-3 no-underline hover:underline`}
            type="link"
            href="/project"
          >
            Sản phẩm
          </Button>
        </li>
        <li className="py-1 lg:py-0">
          <Button
            className={`${path === '/ceertificate' ? 'active-link' : ''} font-medium px-3 no-underline hover:underline`}
            type="link"
            href="/ceertificate"
          >
            Giấy kiểm định
          </Button>
        </li>        
        <li>
          <Button
            className="font-medium mx-auto ml-2 px-4 py-1.5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 text-sm"
            type="link"
            href="/discuss-project"
          >
            Liên hệ
          </Button>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">
          <ul className="z-50 flex flex-col text-theme-pink tracking-widest my-3 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-1 bg-white">
              <Button
                className={`${path === '/' ? 'active-link' : ''} font-medium px-6 no-underline hover:underline text-sm`}
                type="link"
                href="/"
              >
                Trang chủ
              </Button>
            </li>
            <li className="py-1 bg-white">
              <Button
                className={`${path === '/team' ? 'active-link' : ''} font-medium px-6 no-underline hover:underline text-sm`}
                type="link"
                href="/team"
              >
                Về chúng tôi
              </Button>
            </li>
            <li className="py-1 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-6 no-underline hover:underline text-sm`}
                type="link"
                href="/project"
              >
                Sản phẩm
              </Button>
            </li>
            <li className="py-1 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-6 no-underline hover:underline text-sm`}
                type="link"
                href="/ceertificate"
              >
                Giấy kiểm định
              </Button>
            </li>
            <li className="mx-auto my-6 bg-white">
              <Button
                className="font-bold mx-auto px-4 py-1.5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 text-sm"
                type="link"
                href="/discuss-project"
              >
                Liên hệ
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
}
