(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        // Premade categories page
        .state('mainList', {
            url: '/mainList',
            templateUrl: 'src/templates/main-categories.template.html',
            controller: 'CategoriesController as mainList',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        //Items page
        .state('items', {
            url: '/items/{categoryID}',
            templateUrl: '/src/templates/main-items.template.html',
            controller: 'ItemsController as mainList',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryID);
                }]
            }
        });
    }

})();