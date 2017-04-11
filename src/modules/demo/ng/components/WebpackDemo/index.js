const angular = require('angular');
const MODULE = "Modules.WebpackDemo";

angular.module(MODULE, []);

angular.module(MODULE)
  .component('webpackDemo', require('./WebpackDemo'));

module.exports =  MODULE;
