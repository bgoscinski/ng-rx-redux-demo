import {createReducer} from 'ng-rx-redux'
import {constant} from './module.js';

const updateForm = (oldFormData, newformData) => ({
  ...oldFormData,
  ...newformData
})

constant('newTodo$', createReducer((state = {}, action) => {
  switch (action.type) {
    case 'updateForm': return updateForm(state, action.payload);
  }

  return state;
}))

constant('newTodoActions', {
  update: (payload) => ({type: 'updateForm', payload})
})
