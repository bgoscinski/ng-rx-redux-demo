import {component} from './module.js';

component('todosApp', {
  template: `
    <debug-cmp observe="todosApp$"></debug-cmp>
    <debug-cmp observe="todos$"></debug-cmp>
    <debug-cmp observe="filter$"></debug-cmp>
    <new-todo></new-todo>
    <todos></todos>
  `,
})
