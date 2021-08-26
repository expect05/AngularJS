(function() {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService)

    MenuDataService.$inject = ['$q', '$http'];

    function MenuDataService($q, $http) {
        var service = this;


        service.getAllCategories = function() {
            var deferred = $q.defer();
            var allCategories = [];
            var result = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            });
            result.then(function(response) {
                    deferred.resolve(response.data);
                    //console.log(allCategories);
                })
                .catch(function(error) {
                    console.log("Something went wrong getting all categories");
                });
            return deferred.promise;
        };

        service.getItemsForCategory = function(categoryShortName) {
            var itemsForCategory = [];
            var result = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                params: { 'category': categoryShortName }
            });
            result.then(function(response) {
                    itemsForCategory.push(response.data);
                    console.log(itemsForCategory);
                })
                .catch(function(error) {
                    console.log("Something went wrong getting items for category");
                });
            return itemsForCategory;
        };
    }
})();