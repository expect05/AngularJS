(function() {
    "use strict";

    angular.module('common')
        .service('SignupService', SignupService);

    function SignupService() {
        var service = this;


        service.setFirstName = function(firstName) {
            service.firstName = firstName;
        };
        service.setLastName = function(lastName) {
            service.lastName = lastName;
        };
        service.setEmail = function(email) {
            service.email = email;
        };
        service.setPhone = function(phone) {
            service.phone = phone;
        };
        service.setFavDishShortName = function(favDishShortName) {
            service.favDishShortName = favDishShortName;
        };
        service.setFavDishName = function(favDishName) {
            service.favDishName = favDishName;
        };
        service.setFavDishDescription = function(favDishDescription) {
            service.favDishDescription = favDishDescription;
        };

        service.getFirstName = function() {
            return service.firstName;
        };
        service.getLastName = function() {
            return service.lastName;
        };
        service.getEmail = function() {
            return service.email;
        };
        service.getPhone = function() {
            return service.phone;
        };
        service.getFavDishShortName = function() {
            return service.favDishShortName;
        };
        service.getFavDishName = function() {
            return service.favDishName;
        };
        service.getFavDishDescription = function() {
            return service.favDishDescription;
        };
    }

})();