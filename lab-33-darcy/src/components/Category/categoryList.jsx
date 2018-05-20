import React from 'react';
import {connect} from 'react-redux';

import Category from './category.jsx';

import {
  categoryCreate,
} from '../../actions/categoryAction.js';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAll = this.displayAll.bind(this);
  }

  displayAll() {
    return this.props.categories.map(category => {
      return <Category 
        key={category.catId} 
        catId={category.catId}
        name={category.name}  
        budget={category.budget}
        isEditing={category.isEditing} />;
    });
  }

  render() {
    return (
      <div id="category-list">
        {this.displayAll()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state.categories= ', state.categories);
  console.log('state.categories.categories= ', state.categories.categories);
  return {
    categories: state.categories.categories,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: value => dispatch(categoryCreate(value)),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);