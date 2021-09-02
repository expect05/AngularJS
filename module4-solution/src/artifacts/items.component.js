(function() {
    'use strict';

    angular.module('MenuApp')
        .component('itemsView', {
            templateUrl: 'src/templates/items.template.html',
            bindings: {
                items: '<'
            }
        });
})();