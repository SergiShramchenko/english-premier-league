import { combineReducers } from 'redux';

import uiReducer from './ui/ui.reducer';
import tableReducer from './stats/stats.reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  stats: tableReducer,
});

export default rootReducer;
