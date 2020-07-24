import { FETCH_DATA } from './stats.types';

export const getData = (table) => ({
  type: FETCH_DATA,
  payload: table,
});
