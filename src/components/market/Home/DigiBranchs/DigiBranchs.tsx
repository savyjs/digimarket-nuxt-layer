import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import classes from './DigiBranchs.module.scss';

const DigiBranchs = () => {
  const branchs = [
    {
      key: 'digiJet',
      title: 'دیجی جت',
      src: '/assets/img/landing/DigiBranchs/digijet.png',
    },
    {
      key: 'digiclub',
      title: 'دیجی کلاب',
      src: '/assets/img/landing/DigiBranchs/digiclub.png',
    },
    {
      key: 'digimehr',
      title: 'دیجی‌کالا مهر',
      src: '/assets/img/landing/DigiBranchs/digimehr.png',
    },
    {
      key: 'digipay',
      title: 'دیجی پی',
      src: '/assets/img/landing/DigiBranchs/digipay.png',
    },
    {
      key: 'digiplus',
      title: 'دیجی پلاس',
      src: '/assets/img/landing/DigiBranchs/digiplus.png',
    },

    {
      key: 'digistyle',
      title: 'دیجی استایل',
      src: '/assets/img/landing/DigiBranchs/digistyle.png',
    },
    {
      key: 'missions',
      title: 'ماموریت‌ها',
      src: '/assets/img/landing/DigiBranchs/missions.png',
    },
  ];
  return (
    <div className="container flex items-center justify-between py-5 lg:px-20">
      {branchs.map((branch) => {
        return (
          <Link key={branch.key} href={branch.key}>
            <a className="">
              <img
                src={branch.src}
                alt={branch.title}
                width="52"
                height="52"
                className="mx-auto"
              />
              <span className="text-[10px]">{branch.title}</span>
            </a>
          </Link>
        );
      })}
      <Link key="showmore" href="">
        <a className="text-center">
          <div
            className={`${classes.showmore} flex items-center justify-center rounded-full bg-gray-200 text-gray-500`}
          >
            <svg className="h-5 w-5" fill="currentColor">
              <use href="#moreHoriz"></use>
            </svg>
          </div>
          <span className="text-[10px]">بیشتر</span>
        </a>
      </Link>
    </div>
  );
};

export default DigiBranchs;
