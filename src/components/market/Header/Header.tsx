import React, { useState, useEffect } from 'react';
import classes from './Header.module.scss';

import Top from './components/Top/Top';
import TopMobile from './components/TopMobile/TopMobile';
import Navbar from './components/Navbar/Navbar';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 mb-3 h-fit w-full bg-white pb-1">
      <section className="hidden md:block">
        <Top />
      </section>
      <section className="md:hidden">
        <TopMobile />
      </section>
      <section className="hidden md:block">
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
