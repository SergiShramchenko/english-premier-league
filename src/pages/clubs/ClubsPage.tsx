import React from 'react';

import Header from '../../components/header/Header';
import CurrentPage from '../../components/current-page/CurrentPage';
import ClubInfo from '../../components/club-info/ClubInfo';

export default () => (
  <>
    <Header />
    <CurrentPage page_name={'clubs'} />
    <ClubInfo />
  </>
);
