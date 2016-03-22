import {createCombiningReducer} from 'ng-rx-redux'
import {factory, constantFactory} from './module.js'

constantFactory('todos$', (todoFactory) => {
  let todosUUID = -1;

  const addTodo = (state, {msg, done}) => {
    return state.concat(todoFactory({
      msg,
      done,
      id: ++todosUUID,
    }));
  }

  const delTodo = (state, {id}) => {
    return state.filter((t) => t.value.id !== id);
  }

  return createCombiningReducer((state = [], action) => {
    switch (action.type) {
      case 'addTodo': return addTodo(state, action);
      case 'delTodo': return delTodo(state, action);
    }

    return state
  })
})


factory('todosActions', ($timeout) => ({
  add: (msg = '', done = false) => ({type: 'addTodo', msg, done}),
}))
