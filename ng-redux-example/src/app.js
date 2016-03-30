import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import {counter} from './components/counter';
console.log(counter)
angular.module('app', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducers, [thunk]);
  })
  .component('ngrCounter', counter)
;