import { FETCH_DATA, CLEAR_DATA } from './stats.types';

export const getData = (table) => ({
  type: FETCH_DATA,
  payload: table,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});
