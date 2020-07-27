import { FETCH_DATA, CLEAR_DATA } from './stats.types';

export type initianStateType = {
  table: any;
};

const initialState: initianStateType = {
  table: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, table: action.payload };
    case CLEAR_DATA:
      return { ...state, table: null };
    default:
      return state;
  }
};
