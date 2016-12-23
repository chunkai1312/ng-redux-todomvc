import './todo-item.css'

class TodoItemController {
  constructor () {
    this.editing = false
  }

  $onChanges () {
    this.checked = this.todo.completed
  }

  handleDoubleClick = () => {
    this.editing = true
  }

  handleSave = (text) => {
    if (text.length === 0) {
      this.deleteTodo(this.todo.id)
    } else {
      this.editTodo(this.todo.id, text)
    }
    this.editing = false
  }
}

export default {
  bindings: {
    todo: '<',
    editTodo: '<',
    deleteTodo: '<',
    completeTodo: '<'
  },
  controller: TodoItemController,
  template: `
    <li ng-class="{'completed': $ctrl.todo.completed, 'editing': $ctrl.editing}">
      <todo-text-input
        ng-show="$ctrl.editing"
        text="{{$ctrl.todo.text}}"
        editing="$ctrl.editing"
        on-save="$ctrl.handleSave">
      </todo-text-input>
      <div class="view" ng-hide="$ctrl.editing">
        <input 
          class="toggle"
          type="checkbox"
          ng-model="$ctrl.checked"
          checked="$ctrl.todo.completed"
          ng-change="$ctrl.completeTodo($ctrl.todo.id)">
        <label ng-dblclick="$ctrl.handleDoubleClick()">
          {{$ctrl.todo.text}}
        </label>
        <button class="destroy" ng-click="$ctrl.deleteTodo($ctrl.todo.id)"></button>
      </div>
    </li>
  `
}
