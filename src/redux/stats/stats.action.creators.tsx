import { getData, clearData } from './stats.actions';
import { startLoading, stopLoading, setError } from '../ui/ui.actions';

const apiUrl =
  process.env.PROXY_URL +
  `${process.env.FOOTYSTAT_URL}${process.env.FOOTYSTAT_API_KEY}${process.env.EPL}`;

export const fetchData = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const res = await fetch(apiUrl);
    const dataJSON = await res.json();
    const table = await dataJSON.data;
    const epl = await table.specific_tables;
    dispatch(getData(epl));
  } catch (error) {
    dispatch(setError());
  }
  dispatch(stopLoading());
};

export const cleanUpData = () => clearData();
