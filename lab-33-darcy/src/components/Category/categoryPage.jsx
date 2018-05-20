import React from 'react';

import CategoryForm from './categoryForm.jsx';
import CategoryList from './categoryList.jsx';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: 'Budget Tracker',
    };
  }

  render() {
    return <div>
      <h1>{this.state.appName}</h1>
      <CategoryForm mode='create' />
      <CategoryList />
    </div>;
  }
}

export default CategoryPage;