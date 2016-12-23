import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSectionController {
  constructor () {
    this.filter = SHOW_ALL
  }

  $onChanges () {
    this.showTodos()
  }

  handleClearCompleted = () => {
    this.actions.clearCompleted()
  }

  handleShow = (filter) => {
    this.filter = filter
    this.showTodos()
  }

  showTodos = () => {
    this.filteredTodos = this.todos.filter(TODO_FILTERS[this.filter])
    this.completedCount = this.todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
    this.activeCount = this.todos.length - this.completedCount
  }
}

export default {
  bindings: {
    todos: '<',
    actions: '<'
  },
  controller: MainSectionController,
  template: `
    <section class="main">
      <input 
        class="toggle-all"
        type="checkbox"
        ng-model="$ctrl.all"
        checked="$ctrl.completedCount === $ctrl.todos.length"
        ng-change="$ctrl.actions.completeAll()">
      <ul class="todo-list">
        <todo-item
          ng-repeat="todo in $ctrl.filteredTodos"
          todo="todo"
          edit-todo="$ctrl.actions.editTodo"
          delete-todo="$ctrl.actions.deleteTodo"
          complete-todo="$ctrl.actions.completeTodo">
        </todo-item>
      </ul>
      <footer
        ng-if="$ctrl.todos.length > 0"
        completed-count="$ctrl.completedCount"
        active-count="$ctrl.activeCount"
        filter="{{$ctrl.filter}}"
        on-clear-completed="$ctrl.handleClearCompleted"
        on-show="$ctrl.handleShow">
      </footer>
    </section>
  `
}
