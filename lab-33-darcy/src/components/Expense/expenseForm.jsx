import React from 'react';
import { connect } from 'react-redux';

import {
  expenseCreate,
  expenseUpdate,
} from '../../actions/expenseAction.js';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      price: '',
      catId: this.props.catId,
      timestamp: Date.now(),
      // isEditing: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this.props.mode= ', this.props.mode);
    if (this.props.mode === 'create') {
      this.props.expenseCreate(this.state);
      this.setState({
        item: '',
        price: '',
      });
    } else if (this.props.mode === 'update') {
      let newValue = Object.assign(this.state, { 
        item: this.state.item, 
        price: this.state.price,
        expId: this.props.expId,
        catId: this.props.catId,
        isEditing: false, 
      });
      this.props.expenseUpdate(newValue);
    }
  }

  handleItemChange(event) {
    let newState = {
      item: event.target.value
    };
    this.setState(newState);
  }

  handlePriceChange(event) {
    let newState = {
      price: event.target.value
    };
    this.setState(newState);
  }

  render() {
    return <form id="add-cat" onSubmit={this.handleSubmit}>
      <input
        onChange={this.handleItemChange}
        name="item"
        type="text"
        placeholder="Item"
        required="true"
        value={this.state.item}
      />

      <input
        onChange={this.handlePriceChange}
        name="price"
        type="text"
        placeholder="Price"
        required="true"
        value={this.state.price}
      />

      <button type="submit"> Add Expense </button>
    </form>;
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: value => dispatch(expenseCreate(value)),
    expenseUpdate: value => dispatch(expenseUpdate(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);