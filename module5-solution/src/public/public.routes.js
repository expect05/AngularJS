(function() {
    'use strict';

    angular.module('public')
        .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('public', {
                abstract: true,
                templateUrl: 'src/public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: 'src/public/home/home.html'
            })
            .state('public.menu', {
                url: '/menu',
                templateUrl: 'src/public/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl',
                resolve: {
                    menuCategories: ['MenuService', function(MenuService) {
                        return MenuService.getCategories();
                    }]
                }
            })
            .state('public.menuitems', {
                url: '/menu/{category}',
                templateUrl: 'src/public/menu-items/menu-items.html',
                controller: 'MenuItemsController',
                controllerAs: 'menuItemsCtrl',
                resolve: {
                    menuItems: ['$stateParams', 'MenuService', function($stateParams, MenuService) {
                        return MenuService.getMenuItems($stateParams.category);
                    }]
                }
            })
            .state('public.sign_up', {
                url: '/sign_up',
                templateUrl: 'src/public/sign-up/sign_up.html',
                controller: 'RegistrationController',
                controllerAs: 'regCtrl'
            })
            .state('public.my_info', {
                url: '/my_info',
                templateUrl: 'src/public/my-info/my_info.html',
                controller: 'InformationController',
                controllerAs: 'infCtrl'
            });
    }
})();