import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../../redux/stats/stats.action.creators';

import TableHead from './table-head/TableHead';
import ClubItem from './club-item/ClubItem';

import './eplTable.scss';

export default () => {
  const stats = useSelector((state: any) => state.stats.table);

  const dispatch = useDispatch();
  const fetchTable = () => dispatch(fetchData());

  useEffect(() => {
    fetchTable();
  }, []);

  return (
    <div className='content'>
      <table>
        <TableHead />
        <ClubItem stats={stats} />
      </table>
    </div>
  );
};
