import React from 'react';

import Logo from '../logo/Logo';
import Auth from '../auth/Auth';

import './header.scss';

export default () => (
  <header className='header'>
    <Logo />
    <Auth />
  </header>
);
