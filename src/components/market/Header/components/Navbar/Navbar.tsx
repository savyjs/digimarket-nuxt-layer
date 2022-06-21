import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import classes from './Navbar.module.scss';
import CitiesModal from '../CitiesModal/CitiesModal';
import MegaMenu from '../MegaMenu/MegaMenu';

const Navbar = (props: any) => {
  const [showNavbar, toggleNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        toggleNavbar(false);
      } else {
        // if scroll up show the navbar
        toggleNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [citiesModal, toggleCitiesModal] = useState(false);
  const closeCitiesModal = () => {
    toggleCitiesModal(false);
  };

  return (
    <>
      <div className={`${classes.showNav} ${!showNavbar && classes.hideNav}`}>
        <nav className={classes.nav}>
          <ul className="flex items-end md:text-[12px] lg:text-[13px]">
            <li className="hoverable">
              <button className="flex items-center gap-1 font-bold text-gray-800">
                <svg className="h-4 w-4" fill="currentColor">
                  <use href="#hamburgerMenu"></use>
                </svg>

                <span> دسته‌بندی کالا</span>
              </button>
              <MegaMenu />
            </li>
            <div className="py-2 pr-3">
              <span className="mx-3 block h-4 w-px bg-neutral-200"></span>
            </div>
            <li className="">
              <Link href="/best-selling">
                <a className="flex items-center gap-1 text-[12px] text-gray-500">
                  <svg className="h-4 w-4" fill="currentColor">
                    <use href="#searchTrend"></use>
                  </svg>
                  پرفروش‌ترین‌ها
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/promotion-center">
                <a className="flex items-center gap-1 text-[12px] text-gray-500">
                  <svg className="h-4 w-4" fill="currentColor">
                    <use href="#discount"></use>
                  </svg>
                  تخفیف‌ها و پیشنهادها
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/incredible-offers">
                <a className="flex items-center gap-1 text-[12px] text-gray-500">
                  <svg className="h-4 w-4" fill="currentColor">
                    <use href="#amazing"></use>
                  </svg>
                  شگفت‌انگیزها
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/faq">
                <a className="text-[12px] text-gray-500">سوالی دارید؟</a>
              </Link>
            </li>
            <li className="">
              <Link href="/faq">
                <a className="text-[12px] text-gray-500">فروشنده شوید!</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="pl-4">
          <button
            className="flex items-center justify-between gap-1 text-gray-600"
            onClick={() => {
              toggleCitiesModal(true);
            }}
          >
            <span>
              <svg className="h-4 w-4" fill="currentColor">
                <use href="#pin"></use>
              </svg>
            </span>
            <span className="text-[11px]">لطفا شهر خود را انتخاب کنید</span>
          </button>
        </div>
      </div>

      {citiesModal && <CitiesModal onConfirm={closeCitiesModal} />}
    </>
  );
};

export default Navbar;
