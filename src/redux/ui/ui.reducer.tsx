import { START_LOADING } from './ui.types';

export type initianStateType = {
  loading: boolean;
  image: string;
};

const initialState: initianStateType = {
  loading: false,
  image: 'red',
};

export default (state = initialState, action: any): initianStateType => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
