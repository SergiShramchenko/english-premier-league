import React from 'react';

import Error from '../../components/error/Error';

import './pageNotFound.scss';

export default () => (
  <div className='error'>
    <Error name='ERROR!' code='404' text='page not found' />
  </div>
);
