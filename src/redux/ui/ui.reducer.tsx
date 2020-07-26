import { START_LOADING, STOP_LOADING, SET_ERROR } from './ui.types';

export type initianStateType = {
  loading: boolean;
  error: boolean;
};

const initialState: initianStateType = {
  loading: true,
  error: false,
};

export default (state = initialState, action: any): initianStateType => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
