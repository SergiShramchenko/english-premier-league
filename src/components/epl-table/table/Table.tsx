import React from 'react';

import Spinner from '../../spinner/Spinner';

import './table.scss';

export default ({ isLoading, children }): any =>
  isLoading ? <Spinner /> : <table>{...children}</table>;
