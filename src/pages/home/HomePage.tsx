import React from 'react';

import { Link } from 'react-router-dom';

import './homePage.scss';

export default () => (
  <>
    <header className='header'>
      <div className='logo'>
        <span className='logo__title'>
          English premier league{' '}
          <span className='logo__title--number'>
            19<span className='logo__title--slash'>/</span>20
          </span>
        </span>
      </div>
      <div className='auth'>
        <a href='#' target='_blank' className='auth__action'>
          login
        </a>
        <a href='#' target='_blank' className='auth__action'>
          signup
        </a>
      </div>
    </header>
    <main className='main-content'>
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
      <section className='presentation'>
        <div className='club'>
          <img src='../../../assets/images/liverpool.jpg' alt='football club' />
        </div>
        <progress className='progress' value='50' max='100'>
          Text
        </progress>
      </section>
    </main>
  </>
);
