(function() {
    "use strict";

    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['MenuService', 'SignupService'];

    function RegistrationController(MenuService, SignupService) {
        var regCtrl = this;

        regCtrl.submit = function(favoriteDish) {
            regCtrl.completed = true;
            regCtrl.favDish = MenuService.getMenuItem(favoriteDish);
            regCtrl.favDish.then(function(response) {
                if (response.status == 500) {
                    regCtrl.errorFromServer = true;
                } else {
                    regCtrl.favDish.name = response.data.name;
                    regCtrl.favDish.description = response.data.description;

                    //save data in Service
                    SignupService.setFirstName(regCtrl.user.firstname);
                    SignupService.setLastName(regCtrl.user.lastname);
                    SignupService.setEmail(regCtrl.user.email);
                    SignupService.setPhone(regCtrl.user.phone);
                    SignupService.setFavDishShortName(regCtrl.user.favoriteDish);
                    SignupService.setFavDishName(regCtrl.favDish.name);
                    SignupService.setFavDishDescription(regCtrl.favDish.description);
                }
            });
        }
    }

})();