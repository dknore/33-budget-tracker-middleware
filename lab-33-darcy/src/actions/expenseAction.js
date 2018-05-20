export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export function expenseCreate(value) {
  return {type: EXPENSE_CREATE, value: value};
}

export function expenseUpdate(expense) {
  return {type: EXPENSE_UPDATE, expense: expense};
}

export function expenseRemove(id) {
  return {type: EXPENSE_REMOVE, id};
}