import React from 'react';
import { useSelector } from 'react-redux';

import useTableData from '../../custom-hooks/useTableData';

import ClubList from '../club-list/ClubList';
import CatchError from '../../components/catch-error/CatchError';

import './clubIinfo.scss';

export default () => {
  useTableData();

  const stats = useSelector((state: any) => state.stats.table);
  const isLoading = useSelector((state: any) => state.ui.loading);
  const isError = useSelector((state: any) => state.ui.error);

  return (
    <CatchError isError={isError}>
      <ClubList stats={stats} isLoading={isLoading} />
    </CatchError>
  );
};
