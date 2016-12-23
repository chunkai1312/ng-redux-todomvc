class HeaderController {
  handleSave = (text) => {
    if (text.length !== 0) {
      this.addTodo(text)
    }
  }
}

export default {
  bindings: { addTodo: '<' },
  controller: HeaderController,
  template: `
    <div class="header">
      <h1>todos</h1>
      <todo-text-input
        new-todo="true"
        on-save="$ctrl.handleSave"
        placeholder="What needs to be done?">
      </todo-text-input>
    </div>
  `
}
