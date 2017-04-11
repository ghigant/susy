const WebpackDemoController = require('./WebpackDemoController');

module.exports = {
  template: `
    <h1>Welcome</h1>
    <button ng-click="$ctrl.onClick($event)"></button>
  `,
  controller: WebpackDemoController
};
