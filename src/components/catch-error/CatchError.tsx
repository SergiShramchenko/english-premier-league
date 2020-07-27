import React from 'react';

import Error from '../error/Error';

export default ({ isError, children }): any =>
  isError ? (
    <Error name='' code='ERROR!' text='Sorry, something went wrong...' />
  ) : (
    { ...children }
  );
