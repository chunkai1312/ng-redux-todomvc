import { bindActionCreators } from 'redux'
import * as TodoActions from '../../actions'

class AppController {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this)
    $scope.$on('$destroy', unsubscribe)
  }

  mapStateToThis = (state) => ({
    todos: state.todos
  })

  mapDispatchToThis = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
}

export default {
  controller: AppController,
  template: `
    <div class="todoapp">
      <header add-todo="$ctrl.actions.addTodo"></header>
      <main-section todos="$ctrl.todos" actions="$ctrl.actions"></main-section>
    </div>  
  `
}
