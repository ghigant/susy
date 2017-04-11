const angular = require('angular');

const MODULE = 'demo';

const ngRedux = require('ng-redux');

const createLogger = require('redux-logger').createLogger;
const reducers = require('./redux');

angular.module(MODULE, [
  ngRedux.default,
  require('./ng/components')
]).config(($ngReduxProvider) => {
  $ngReduxProvider.createStoreWith(reducers, [createLogger()]);
}).run(() => {
  let init = require('./redux/actions/demo').init;
  init();
});

angular.bootstrap(
  document.getElementById('viewport'),
  [MODULE]
);
