import * as CounterActions from '../actions';

class CounterController {
  constructor($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }
  mapStateToThis(state) {
    return {
      value: state.counter
    };
  }
}

export const counter = {
    controllerAs: 'counter',
    controller: CounterController,
    template: `
      <div>
        <p>Clicked: {{counter.value}} times </p>
        <button ng-click='counter.increment()'>+</button>
        <button ng-click='counter.decrement()'>-</button>
      </div>
    `
};

