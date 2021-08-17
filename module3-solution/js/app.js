(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('BasePathApi', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundList.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;

    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;

        menu.filterButton = function() {
            try {
                menu.found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
            } catch (error) {
                menu.errorMessage = error.message;
            }
        };

        menu.removeItem = function(itemIndex) {
            MenuSearchService.removeItem(itemIndex);
        };
    }

    MenuSearchService.$inject = ['$http', 'BasePathApi'];

    function MenuSearchService($http, BasePathApi) {
        var service = this;

        var foundItems = [];
        service.getMenuItems = function() {
            var response = $http({
                method: "GET",
                url: (BasePathApi + "/menu_items.json")
            });
            return response;
        };

        service.getMatchedMenuItems = function(searchTerm) {
            var promise = service.getMenuItems();

            promise.then(function(response) {
                    for (var i = 0; i < response.data['menu_items'].length; i++) {
                        if (response.data['menu_items'][i]['description'].toLowerCase().search(searchTerm.toLowerCase()) != -1) {
                            foundItems.push(response.data['menu_items'][i]);
                        }
                    }
                    console.log(foundItems);
                })
                .catch(function(error) {
                    console.log("something went wrong");
                });
            return foundItems;
        };

        service.removeItem = function(itemIndex) {
            foundItems.splice(itemIndex, 1);
        };
    }
})();