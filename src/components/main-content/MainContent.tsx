import React from 'react';

import './mainContent.scss';

export default ({ children }: JSX.ElementChildrenAttribute): JSX.Element => (
  <main className='main-content'>{children}</main>
);
