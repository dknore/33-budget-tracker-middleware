import React from 'react';
import {connect} from 'react-redux';

import {
  categoryUpdate,
  categoryRemove
} from '../../actions/categoryAction.js';

import CategoryForm from './categoryForm.jsx';
import ExpenseForm from '../Expense/expenseForm.jsx';
import ExpenseList from '../Expense/expenseList.jsx';
import { O_SYMLINK } from 'constants';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleUpdateOff = this.toggleUpdateOff.bind(this);
  }

  handleRemove(event, catId) {
    event.preventDefault();
    this.props.categoryRemove(this.props.catId);
  }

  toggleUpdate(event) {
    event.preventDefault();
    this.props.categoryUpdate({
      name: this.props.name,
      budget: this.props.budget,
      catId: this.props.catId,
      isEditing: true,
    });
  }

  toggleUpdateOff() {
    event.preventDefault();
    this.props.categoryUpdate({
      name: this.props.name,
      budget: this.props.budget,
      catId: this.props.catId,
      isEditing: false,
    });

  }

  render() {
    if (this.props.isEditing === true) {
      return ( 
        <div>
          <CategoryForm 
            mode="update"
            catId={this.props.catId} 
            name={this.props.name} 
            budget={this.props.budget} />
          <button id="cancel-button" onClick={this.toggleUpdateOff}> Cancel </button>
        </div>
      );
    }
    return (
      <ol id="catList">
        {this.props.name}<span>:</span> ${this.props.budget}
        <button id="remove-button" onClick={this.handleRemove}> Remove </button>
        <button onClick={this.toggleUpdate}> Update </button>
        <ExpenseForm 
          mode="create" 
          // mode="update"
          expId={this.props.expId}
          catId={this.props.catId} 
          item={this.props.item} 
          price={this.props.price}/>
        <ExpenseList 
          catId={this.props.catId}
          expId={this.props.expId} />
      </ol>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryRemove: (catId) => dispatch(categoryRemove(catId)),
  };
};

export default connect(null, mapDispatchToProps)(Category);