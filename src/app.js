import {createStore} from 'ng-rx-redux';
import {constantFactory} from './module.js';
import thunkMiddleware from 'redux-thunk'; // redux compatible!

import './debug-cmp.js'

import './new-todo-cmp.js'
import './new-todo-reducer.js'

import './filter-reducer.js'

import './todo-cmp.js'
import './todo-reducer.js'

import './todos-cmp.js'
import './todos-reducer.js'

import './todos-app-cmp.js'
import './todos-app-reducer.js'


constantFactory('store', (todosApp$) => {
  return createStore(todosApp$, [
    thunkMiddleware
  ])
})
