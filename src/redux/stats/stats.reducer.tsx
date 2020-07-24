import { FETCH_DATA } from './stats.types';

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
    default:
      return state;
  }
};
