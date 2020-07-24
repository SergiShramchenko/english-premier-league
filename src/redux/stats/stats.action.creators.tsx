import { getData } from './stats.actions';

export const fetchData = () => async (dispatch) =>
  await fetch(
    process.env.PROXY_URL +
      `${process.env.FOOTYSTAT_URL}${process.env.FOOTYSTAT_API_KEY}${process.env.EPL}`
  )
    .then((res) => res.json())
    .then((res) => res.data.specific_tables)
    .then((res) => dispatch(getData(res)))
    .then((err) => console.log(err));
