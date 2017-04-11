var init = require('../../../redux/actions/demo').init;

module.exports = [
  '$log',
  '$ngRedux',
  function WebpackDemoController(
    $log,
    $ngRedux
  ) {
    $log.log('WebpackDemoController');

    const mapState = (state) => {
      return state;
    }

    $ngRedux.connect(mapState, {
      onClick: init
    })(this);


    this.$onInit = init;
  }
]
