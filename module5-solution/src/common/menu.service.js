(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$q', '$http', 'ApiPath'];

    function MenuService($q, $http, ApiPath) {
        var service = this;

        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };


        service.getMenuItems = function(category) {
            var config = {};
            if (category) {
                config.params = { 'category': category };
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
                return response.data;
            });
        };

        service.getMenuItem = function(short_name) {
            var deferred = $q.defer();
            var result = $http({
                method: "GET",
                url: (ApiPath + '/menu_items/' + short_name + '.json')
            });
            result.then(function(response) {
                    deferred.resolve(response);
                })
                .catch(function(error) {
                    deferred.resolve(error);
                })
            return deferred.promise;

        };

    }



})();