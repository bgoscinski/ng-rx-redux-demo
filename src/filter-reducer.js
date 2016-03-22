import {createReducer} from 'ng-rx-redux'
import {constant} from './module.js'

const setFilter = (state, action) => action.filter;

constant('filter$', createReducer((state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'setFilter': return setFilter(state, action);
  }

  return state;
}))

constant('filterActions', {
  all: () => ({type: 'setFilter', filter: 'SHOW_ALL'}),
  done: () => ({type: 'setFilter', filter: 'SHOW_DONE'}),
  undone: () => ({type: 'setFilter', filter: 'SHOW_UNDONE'}),
})
