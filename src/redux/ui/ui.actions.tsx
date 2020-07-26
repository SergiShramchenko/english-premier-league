import { START_LOADING, STOP_LOADING, SET_ERROR } from './ui.types';

type startLoadingType = {
  type: typeof START_LOADING;
};
type stopLoadingType = {
  type: typeof STOP_LOADING;
};
type setErrorType = {
  type: typeof SET_ERROR;
};

export const startLoading = (): startLoadingType => ({
  type: START_LOADING,
});
export const stopLoading = (): stopLoadingType => ({
  type: STOP_LOADING,
});
export const setError = (): setErrorType => ({
  type: SET_ERROR,
});
