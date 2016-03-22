import {bindActionCreators} from 'ng-rx-redux';
import {component} from './module.js';

component('newTodo', {
  controllerAs: 'newTodo',
  controller: class NewTodoController {
    constructor(newTodo$, newTodoActions, todosActions, store) {
      this.newTodo$ = newTodo$;

      this.addTodo = bindActionCreators(todosActions.add, store.dispatch);
      this.update = bindActionCreators(newTodoActions.update, store.dispatch);
    }

    submit() {
      const {msg, done} = this.newTodo$.value;
      this.addTodo(msg, done);
    }
  },

  template: `
    <form ng-submit="newTodo.submit()">
      <label for="msg">Message:</label>
      <input type="text" name="msg"
        rx-model="newTodo.newTodo$ as form : form.msg"
        on-next="newTodo.update({msg: value})"
      ><br>

      <label for="done">Done:</label>
      <input type="checkbox" name="done"
        rx-model="newTodo.newTodo$ as form : form.done"
        on-next-form="newTodo.update(value)"
      >
    </form>
    <debug-cmp observe="form" observable="newTodo.newTodo$"></debug-cmp>
  `
})
