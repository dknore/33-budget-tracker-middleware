import uuid from 'uuid';

import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE,
} from '../actions/expenseAction.js';

const initialState = {
  expenses: []
};

export default function expenseReducer(state = initialState, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentExpenses;
  let expenseIndex;
  let newExpense;
  let expRemove;

  switch (action.type) {
  
  case EXPENSE_CREATE:
    currentExpenses = state.expenses.slice();
    newExpense = Object.assign({}, 
      {
        timestamp: Date.now(), 
        expId: uuid(), 
        isEditing: false
      }, 
      action.value);
    console.log('newExpense= ', newExpense);
    currentExpenses.push(newExpense);
    return Object.assign(newState, state, {expenses: currentExpenses});

  case EXPENSE_UPDATE:
  console.log('EXPENSE_UPDATE action= ', action);
    currentExpenses = state.expenses.map(exp => {
      console.log('EXPENSE_UPDATE exp.expId= ', exp.expId);
      if (exp.expId === action.expense.expId) {
        return action.expense;
      } else {
        return exp;
      }
    });
    console.log('currentExpenses= ', currentExpenses);
    
    return Object.assign(newState, state, {expenses: currentExpenses});

  case EXPENSE_REMOVE:
    currentExpenses = state.expenses.slice();
    expRemove = currentExpenses.find(exp => {
      return exp.expId === action.expId;
    });
    expenseIndex = currentExpenses.indexOf(expRemove);
    currentExpenses.splice(expenseIndex, 1);
    return Object.assign(newState, state, {expenses: currentExpenses});
  
  default: return state;
  }
}