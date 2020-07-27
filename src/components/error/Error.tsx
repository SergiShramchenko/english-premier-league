import React from 'react';

import './error.scss';

export default ({ name, code, text }) => (
  <h1 className='error-message'>
    <span className='error-message__name'>{name}</span>{' '}
    <span className='error-message__code'>{code}</span>{' '}
    <span className='error-message__text'>{text}</span>
  </h1>
);
