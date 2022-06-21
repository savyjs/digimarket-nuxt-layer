import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaSearch } from 'react-icons/fa';

import classes from './Top.module.scss';
import SearchModal from '../SearchModal/SearchModal';

const Top = (props: any) => {
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
      <header className="pos-relative container-4xl-w z-[3] flex w-full bg-white px-3 pt-4 pb-1">
        <div className="flex-auto">
          <div className="flex w-full items-center">
            <a href="/" className="ml-5 shrink-0">
              <img width="100" height="30" src="/dkala/logo.svg" alt="logo" />
            </a>
            <div className="ml-auto h-10 flex-auto grow">
              <div
                id="search-box"
                className={`${classes.searchBox} px-4-lg text-body-2 rounded-8p flex h-10 items-center md:w-3/4 xl:w-2/3`}
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
            </div>
          </div>
        </div>

        <div className="mr-auto flex-auto grow-0">
          <div className="flex items-center text-[11px]">
            <div className="rounded-8p flex-auto cursor-pointer border border-gray-200 py-1 px-2">
              <Link href="/login">
                <a className={`${classes.logoLogin} `}>
                  <svg className="h-5 w-5" fill="currentColor">
                    <use href="#registerationSignIn"></use>
                  </svg>

                  <span className="text-neutral-800"> ورود | ثبت‌نام</span>
                </a>
              </Link>
            </div>
            <span className="d-none d-block-lg mx-3 w-px bg-neutral-200 py-3 "></span>
            <div className="flex items-center text-neutral-500">
              <Link href="/checkout/cart">
                <a className="shrink-0">
                  <svg className="h-5 w-5" fill="currentColor">
                    <use href="#cartOff"></use>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {searchModal && <SearchModal onConfirm={closeSearchModal} />}
    </>
  );
};

export default Top;
