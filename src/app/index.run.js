(function() {
  'use strict';

  angular
    .module('hiringApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
