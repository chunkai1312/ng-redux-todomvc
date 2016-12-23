import 'babel-polyfill'
import 'todomvc-app-css/index.css'
import angular from 'angular'
import store from './store'
import containers from './containers'
import components from './components'

angular.module('todoApp', [store, containers, components])
angular.element(document).ready(() => angular.bootstrap(document, ['todoApp'], { strictDi: true }))
