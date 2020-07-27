import React from 'react';
import { useSelector } from 'react-redux';

import useTableData from '../../custom-hooks/useTableData';

import Table from './table/Table';
import TableHead from './table-head/TableHead';
import ClubItem from './club-item/ClubItem';
import CatchError from '../catch-error/CatchError';

import './eplTable.scss';

export default () => {
  useTableData();

  const stats = useSelector((state: any) => state.stats.table);
  const isLoading = useSelector((state: any) => state.ui.loading);
  const isError = useSelector((state: any) => state.ui.error);

  const style = `${isLoading || isError ? 'content center' : 'content'}`;

  return (
    <div className={style}>
      <CatchError isError={isError}>
        <Table isLoading={isLoading}>
          <TableHead stats={stats} />
          <ClubItem stats={stats} />
        </Table>
      </CatchError>
    </div>
  );
};
