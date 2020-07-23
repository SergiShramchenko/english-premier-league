import React from 'react';

import Header from '../../components/header/Header';
import MenuNav from '../../components/menu-nav/MenuNav';
import ClubView from '../../components/club-view/ClubView';
import MainContent from '../../components/main-content/MainContent';

export default () => (
  <>
    <Header />
    <MainContent>
      <MenuNav />
      <ClubView />
    </MainContent>
  </>
);
