import React from 'react';
import { Link } from 'react-router-dom';

import './menuNav.scss';

export default () => (
  <nav className='navigation'>
    <ul className='menu-list'>
      <Link to='/table'>
        <li className='menu-list__item'>table</li>
      </Link>
      <Link to='/clubs'>
        <li className='menu-list__item'>clubs</li>
      </Link>
      <Link to='/best_matches'>
        <li className='menu-list__item'>best matches</li>
      </Link>
      <Link to='/goalscorers'>
        <li className='menu-list__item'>goalscorers</li>
      </Link>
      <Link to='/assistants'>
        <li className='menu-list__item'>assistants</li>
      </Link>
    </ul>
  </nav>
);
