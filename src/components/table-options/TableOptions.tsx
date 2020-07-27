import React from 'react';

import CurrentPage from '../current-page/CurrentPage';

import './tableOptions.scss';

export default () => (
  <div className='table-options'>
    <CurrentPage page_name={'table'} />
    <div className='tours'>
      <div className='tours__timeline'>
        <div className='tours__timeline__slick'></div>
      </div>
    </div>
  </div>
);
