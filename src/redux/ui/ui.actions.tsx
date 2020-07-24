import { START_LOADING } from './ui.types';

type startLoadingType = {
  type: typeof START_LOADING;
};

export const startLoading = (): startLoadingType => ({
  type: START_LOADING,
});
