import angular from 'angular'
import mainSection from './main-section'
import todoItem from './todo-item'
import todoTextInput from './todo-text-input'
import header from './header'
import footer from './footer'

export default angular
  .module('todoApp.components', [mainSection, todoItem, todoTextInput, header, footer])
  .name
