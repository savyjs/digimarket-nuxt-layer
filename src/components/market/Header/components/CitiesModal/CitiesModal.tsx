import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaSearch } from 'react-icons/fa';
import classes from './CitiesModal.module.scss';

const CitiesModal = (props: any) => {
  const Provinces = (props: any) => {
    const dummyData = [
      {
        key: '1',
        title: 'آذربایجان شرقی',
      },
      {
        key: '2',
        title: 'آذربایجان غربی',
      },
      {
        key: '3',
        title: 'اردبیل',
      },
      {
        key: '4',
        title: 'اصفهان',
      },
      {
        key: '5',
        title: 'البرز',
      },
      {
        key: '6',
        title: 'ایلام',
      },
      {
        key: '7',
        title: 'بوشهر',
      },
      {
        key: '8',
        title: 'تهران',
      },
      {
        key: '9',
        title: 'چهارمحال و بختیاری',
      },
    ];

    return (
      <div className="h-80 overflow-y-scroll px-2">
        {dummyData.map((province) => {
          return (
            <div
              key={province.key}
              className="mr-2 flex cursor-pointer items-center justify-between border-b
             border-gray-100 p-2 py-4 text-sm font-bold text-gray-800"
            >
              <span>{province.title}</span>
              <svg className="h-5 w-5" fill="currentColor">
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
      <div className="fixed top-32 z-50 h-full w-96 md:h-auto">
        <div className="relative rounded-lg bg-white p-3 shadow dark:bg-gray-700">
          <div className="flex items-center justify-between border-b border-gray-200 pt-2 pb-3 text-sm">
            <span className="text-h5 color-900 font-bold">انتخاب شهر</span>
            <button onClick={props.onConfirm}>
              <svg className="h-5 w-5" fill="currentColor">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
          <div className="pt-3">
            <span className="text-sm text-sky-400">مکان یابی خودکار</span>
          </div>
          <div className="pt-3">
            <Provinces />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById('overlay-root')!
      )}
    </>
  );
};

export default CitiesModal;
