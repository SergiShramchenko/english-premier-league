import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ClubPoster from '../club-poster/ClubPoster';
import ProgressBar from '../progress-bar/ProgressBar';

import { startLoading } from '../../redux/ui/ui.actions';

import './clubView.scss';

export default () => {
  const [loading, setLoading]: any = useState(false);

  // Actions with react-redux hook useDispatch
  const dispatch = useDispatch();
  const someLoadingAction = () => dispatch(startLoading());

  // Get selector from store with useSelector from react-redux hook
  const image = useSelector((state: any) => state);
  // console.log(image);

  return (
    <section className='view' onClick={() => someLoadingAction()}>
      <ClubPoster />
      <ProgressBar />
    </section>
  );
};
