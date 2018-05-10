![cf](https://i.imgur.com/7v5ASc8.png) 33: Redux Middleware
======

## Submission Instructions
* continue working on the fork you created from lab 32
* open a **new branch** for today's assignment
* upon completion, create a **new pull request** in github
* submit a link to your PR in canvas

## Learning Objectives
* students will be able to create and implement custom middleware for redux

## Requirements
#### Configuration  
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`

## Requirements  
#### Feature Tasks
* complete all remaining lab 31 and 32 feature tasks
* add a reporter middleware to your application's redux store
* add validation to your redux reducers

Decide what validation you want to add to your reducers. Ideas might include:

* Prevent an item from being added if it's over budget.
* Prevent a budget from being created with zero or less dollars.
* Prevent a budget or item from being created without a name.

## Example Validation Middleware
Here's an example validating middleware for an application that implements a
[kanban board](https://leankit.com/learn/kanban/kanban-board/).

This middleware ensures that data attached to the action satisfies requirements,
like having certain properties (id, content, categoryId).

```js
const validateCard = store => next => action => {
  const isCard = action.type && action.type.startsWith('CARD');
    if (isCard) {
      try {
        const card = action.payload;
        const notValid = !card.id || !card.content || !card.categoryID;
        if (notValid) {
          throw new Error('VALIDATION ERROR: card must include id, content, and categoryID');
        } else {
          return next(action);
        }
      } catch (err) {
        console.error(err);
    } 
  } else {
    return next(action);
  }
}

export default validateCard;
```
