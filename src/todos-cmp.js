import {component} from './module.js';

component('todos', {
  controllerAs: 'todos',
  controller: class TodosController {
    constructor(todos$) {
      this.todos$ = todos$;
    }
  },
  template: `
    <div rx-if="::todos.todos$ as todos : !todos.length">Add todo :)</div>
    <div rx-if="::todos.todos$ as todos : todos.length">
      <todo rx-repeat="::todos.todos$ as todos : todo in todos track by todo.value.id" data="::todo"></todo>
    </div>
  `
})
