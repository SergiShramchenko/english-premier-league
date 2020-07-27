import React from 'react';

import './currentPage.scss';

export default ({ page_name }) => (
  <div className='page'>
    <span className='page__title'>{page_name}</span>
  </div>
);
