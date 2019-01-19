import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import currency from './common/reducer';

const rootReducer = combineReducers({
  currency,
  form: formReducer,
});

export default rootReducer;
