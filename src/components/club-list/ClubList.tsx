import React from 'react';

import ClubItem from '../club-item/ClubItem';
import Spinner from '../spinner/Spinner';

import './clubList.scss';

export default ({ stats, isLoading }) => {
  const style = isLoading ? 'clubs-content center' : 'clubs-content';

  return (
    <div className={style}>
      {isLoading ? <Spinner /> : <ClubItem stats={stats} />}
    </div>
  );
};
