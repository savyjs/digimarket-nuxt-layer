import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaSearch } from 'react-icons/fa';
import classes from './SearchModal.module.scss';

const SearchModal = (props: any) => {
  const SearchTags = (props: any) => {
    const dummyData = [
      {
        key: '1',
        title: 'زیبو',
      },
      {
        key: '1',
        title: 'سیدونا',
      },
      {
        key: '1',
        title: 'کلوتو',
      },
      {
        key: '1',
        title: 'mango',
      },
      {
        key: '1',
        title: 'ورزشی زنانه',
      },
    ];

    return (
      <div className="mt-3 flex">
        {dummyData.map((tag) => {
          return (
            <div className="mr-2 flex items-center rounded-3xl border border-gray-300 p-2 text-sm text-gray-600">
              <span className="pr-2">{tag.title}</span>
              <svg className="h-4 w-4" fill="currentColor">
                <use href="#chevronLeft"></use>
              </svg>
            </div>
          );
        })}
      </div>
    );
  };

  const Backdrop = (props: any) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props: any) => {
    return (
      <div id="searchModal" className="relative z-50 h-full w-full md:h-auto">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="ml-auto h-10 flex-auto grow">
            <div
              id="search-box"
              className="text-body-2 rounded-8p w-full items-center overflow-y-auto bg-white px-3 pb-3"
            >
              <div className="flex w-full items-center border-b border-blue-400">
                <span className="px-2 text-[13px] text-gray-400">
                  <FaSearch />
                </span>
                <input
                  className="rounded-8p w-full border-none px-1 text-[12px] text-gray-700 ring-0 focus:ring-0"
                  placeholder="جستجو"
                  type="text"
                  autoFocus
                />
              </div>
              <div className="p-1">
                <div className="text-body-2 rounded-8p ">
                  <div className="mt-3 text-right">
                    <span>جستجوهای پرطرفدار</span>
                  </div>
                  <SearchTags />
                </div>
                <div className="mt-3">
                  <img
                    className="rounded"
                    src="/assets/img/searchModal-banner.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-searchModal')!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById('overlay-searchModal')!
      )}
    </>
  );
};

export default SearchModal;
