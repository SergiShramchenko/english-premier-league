import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchData, cleanUpData } from '../redux/stats/stats.action.creators';

export default () => {
  const dispatch = useDispatch();
  const fetchTable = () => dispatch(fetchData());
  const cleanTable = () => dispatch(cleanUpData());

  useEffect(() => {
    fetchTable();

    return () => {
      cleanTable();
    };
  }, []);
};
