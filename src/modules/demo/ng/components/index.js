const angular = require('angular');

const MODULE = 'demo.components';

angular.module(MODULE, []);

angular.module(MODULE)
  .component('webpackDemo', require('./WebpackDemo/WebpackDemo'));

module.exports = MODULE;
