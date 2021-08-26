(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];

    function ItemsController(items) {
        console.log("started Controller");
        var mainList = this;
        mainList.items = items['menu_items'];
        console.log('Items:');
        console.log(mainList.items);
    }


})();