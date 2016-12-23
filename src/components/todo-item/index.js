import angular from 'angular'
import todoItemComponent from './todo-item.component'

export default angular
  .module('todoApp.components.todoItem', [])
  .component('todoItem', todoItemComponent)
  .name
