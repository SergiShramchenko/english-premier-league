import React from 'react';

import ClubPoster from '../club-poster/ClubPoster';
import ProgressBar from '../progress-bar/ProgressBar';

import './clubView.scss';

export default () => (
  <section className='view'>
    <ClubPoster />
    <ProgressBar />
  </section>
);
