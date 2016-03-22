import {constantFactory} from './module.js'
import {combineReducers} from 'ng-rx-redux'

constantFactory('todosApp$', (newTodo$, todos$, filter$) => combineReducers({
  newTodo: newTodo$,
  todos: todos$,
  filter: filter$
}))
