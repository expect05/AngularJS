(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];

    function ItemsController(items) {
        var mainList = this;
        mainList.items = items['menu_items'];
    }


})();