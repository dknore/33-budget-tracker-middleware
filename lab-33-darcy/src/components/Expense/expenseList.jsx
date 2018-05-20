import React from 'react';
import {connect} from 'react-redux';

import Expense from './expense.jsx';

import {
  expenseCreate,
} from '../../actions/expenseAction.js';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAll = this.displayAll.bind(this);
  }

  displayAll() {
    return this.props.expenses.map(expense => {
      if(this.props.catId === expense.catId)
        return <Expense 
          key={expense.expId} 
          expId={expense.expId}
          catId={expense.catId}
          item={expense.item}  
          price={expense.price}
          isEditing={expense.isEditing} />;
    });
  }

  render() {
    return (
      <div id="expense-list">
        {this.displayAll()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: value => dispatch(expenseCreate(value)),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);