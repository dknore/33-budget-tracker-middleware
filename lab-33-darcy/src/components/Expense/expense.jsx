import React from 'react';
import {connect} from 'react-redux';

import {
  expenseUpdate,
  expenseRemove
} from '../../actions/expenseAction.js';

import ExpenseForm from './expenseForm.jsx';

class Expense extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleUpdateOff = this.toggleUpdateOff.bind(this);
  }

  handleRemove(event, expId) {
    event.preventDefault();
    this.props.expenseRemove(this.props.expId);
  }

  toggleUpdate(event) {
    event.preventDefault();
    console.log('EXPENSE  event=', event);
    this.props.expenseUpdate({
      item: this.props.item,
      price: this.props.price,
      expId: this.props.expId,
      catId: this.props.catId,
      isEditing: true,
    });
  }

  toggleUpdateOff(event) {
    event.preventDefault();
    this.props.expenseUpdate({
      item: this.props.item,
      price: this.props.price,
      expId: this.props.expId,
      isEditing: false,
    });

  }

  render() {
    console.log('this.props.isEditing= ',this.props.isEditing);
    if (this.props.isEditing === true) {
      return ( 
        <div>
          <ExpenseForm 
            expId={this.props.expId} 
            catId={this.props.catId}
            mode="update"
            item={this.props.item} 
            price={this.props.price} />
          <button id="cancel-button" onClick={this.toggleUpdateOff}> Cancel </button>
        </div>
      );
    }
    return (
      <li>
        {this.props.item}: ${this.props.price}
        <button id="remove-button" onClick={this.handleRemove}> Remove </button>
        <button onClick={this.toggleUpdate}> Update </button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
    expenseRemove: (id) => dispatch(expenseRemove(id)),
  };
};

export default connect(null, mapDispatchToProps)(Expense);