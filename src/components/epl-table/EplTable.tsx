import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../../redux/stats/stats.action.creators';

import Table from './table/Table';
import TableHead from './table-head/TableHead';
import ClubItem from './club-item/ClubItem';
import CatchError from '../catch-error/CatchError';

import './eplTable.scss';

export default () => {
  const stats = useSelector((state: any) => state.stats.table);
  const isLoading = useSelector((state: any) => state.ui.loading);
  const isError = useSelector((state: any) => state.ui.error);

  const dispatch = useDispatch();
  const fetchTable = () => dispatch(fetchData());

  useEffect(() => {
    fetchTable();
  }, []);

  const style = `${isLoading || isError ? 'content loading' : 'content'}`;

  return (
    <div className={style}>
      <CatchError isError={isError}>
        <Table isLoading={isLoading}>
          <TableHead />
          <ClubItem stats={stats} />
        </Table>
      </CatchError>
    </div>
  );
};
