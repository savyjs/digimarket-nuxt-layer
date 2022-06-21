import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaSearch } from 'react-icons/fa';

import classes from './TopMobile.module.scss';
import SearchModal from '../SearchModal/SearchModal';

const TopMobile = (props: any) => {
  const [searchModal, toggleSearchModal] = useState(false);

  const showSearchModal = (showModalEvent: boolean) => {
    toggleSearchModal(showModalEvent);
    if (typeof window !== 'undefined') {
      const searchbox = document.getElementById('search-box');

      if (showModalEvent) {
        searchbox?.classList.remove('items-center');
      } else {
        searchbox?.classList.add('items-center');
      }
    }
  };

  const closeSearchModal = () => {
    showSearchModal(false);
  };

  return (
    <>
      <header className="container-4xl-w relative z-[3] w-full bg-white px-4 pt-4 pb-1">
        <div className="flex justify-between pb-3">
          <svg className="h-6 w-6" fill="currentColor">
            <use href="#hamburgerMenu"></use>
          </svg>
          <a href="/" className="ml-5 shrink-0">
            <img width="100" height="30" src="/dkala/logo.svg" alt="logo" />
          </a>

          <svg className="h-6 w-6" fill="currentColor">
            <use href="#question"></use>
          </svg>
        </div>
        <div className="flex items-center justify-between border-t pt-3">
          <div
            id="search-box"
            className={`${classes.searchBox} px-4-lg text-body-2 rounded-8p flex h-10 w-3/4 items-center`}
            onClick={() => showSearchModal(!searchModal)}
          >
            {!searchModal && (
              <span className="pr-2 pl-3 text-[13px] text-gray-400">
                <FaSearch />
              </span>
            )}
            {!searchModal && (
              <span className="cursor-text text-[12px] text-gray-400">
                جستجو
              </span>
            )}
            <div id="backdrop-searchModal"></div>
            <div
              id="overlay-searchModal"
              className="relative h-full w-full md:h-auto"
            ></div>
          </div>

          <div className="rounded-8p cursor-pointer p-1 text-neutral-700">
            <Link href="/login">
              <a className={classes.logoLogin}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>

                <span> ورود </span>
              </a>
            </Link>
          </div>
          <div className="text-neutral-700">
            <Link href="/checkout/cart">
              <a className="shrink-0">
                <svg className="h-6 w-6" fill="currentColor">
                  <use href="#cartOff"></use>
                </svg>
              </a>
            </Link>
          </div>
        </div>{' '}
      </header>
      {searchModal && <SearchModal onConfirm={closeSearchModal} />}
    </>
  );
};

export default TopMobile;
