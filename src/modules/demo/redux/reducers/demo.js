const angular = require('angular');
const $injector = angular.injector(['ng']);

const $http = $injector.get('$http');

const initialState = {
  initialized: false
};

module.exports.demo = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT':
    $http.get(
      'http://google.com'
    );
    return Object.assign(state, {
      initialized: true
    });
  default:
    return state;
  }
};
