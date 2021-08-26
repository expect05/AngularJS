(function() {
    'use strict';

    angular.module('Data')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];

    function CategoriesController(categories) {
        var mainList = this;
        mainList.categories = categories;
        console.log('THis is:');
        console.log(mainList.categories);
    }


})();