class TodoTextInputController {
  constructor () {
    this.text = ''
  }

  handleSubmit (e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.onSave(text)
      if (this.newTodo) {
        this.text = ''
      }
    }
  }

  handleBlur () {
    if (!this.newTodo) {
      this.onSave(this.text)
    }
  }
}

export default {
  bindings: {
    onSave: '<',
    text: '@?',
    placeholder: '@?',
    editing: '<?',
    newTodo: '<?'
  },
  controller: TodoTextInputController,
  template: `
    <input
      ng-class="{'edit': $ctrl.editing, 'new-todo': $ctrl.newTodo}"
      type="text"
      placeholder="{{$ctrl.placeholder}}"
      auto-focus="true"
      ng-model="$ctrl.text"
      ng-blur="$ctrl.handleBlur()"   
      ng-keydown="$ctrl.handleSubmit($event)">
  `
}
