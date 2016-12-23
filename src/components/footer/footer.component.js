import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'

class FooterController {
  constructor () {
    this.filters = [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]
    this.filterTitles = {
      [SHOW_ALL]: 'All',
      [SHOW_ACTIVE]: 'Active',
      [SHOW_COMPLETED]: 'Completed'
    }
  }
}

export default {
  bindings: {
    completedCount: '<',
    activeCount: '<',
    filter: '@',
    onClearCompleted: '<',
    onShow: '<'
  },
  controller: FooterController,
  template: `
    <div class="footer">
      <span class="todo-count">
        <strong>{{$ctrl.activeCount || 'No'}}</strong> {{$ctrl.activeCount === 1 ? 'item' : 'items'}} left
      </span>
      <ul class="filters">
        <li ng-repeat="filter in $ctrl.filters">
          <a ng-class="{'selected': (filter === $ctrl.selectedFilter)}"
            style="cursor: pointer"
            ng-click="$ctrl.onShow(filter)">
            {{$ctrl.filterTitles[filter]}}
          </a>
        </li>
      </ul>
      <button class="clear-completed" ng-click="$ctrl.onClearCompleted()" ng-if="$ctrl.completedCount > 0">
        Clear completed
      </button>
    </div>
  `
}
