import React from 'react';

import './catchError.scss';

export default ({ isError, children }): any =>
  isError ? (
    <h1 className='error-message'>
      <span>ERROR!</span> Please try again later :(
    </h1>
  ) : (
    { ...children }
  );
