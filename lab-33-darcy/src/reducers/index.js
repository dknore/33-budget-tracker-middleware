import {combineReducers} from 'redux';

import categoryReducer from './categoryReducer.js';
import expenseReducer from './expenseReducer.js';

export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer
});