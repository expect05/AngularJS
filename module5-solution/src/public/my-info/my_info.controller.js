(function() {
    "use strict";

    angular.module('public')
        .controller('InformationController', InformationController);

    InformationController.$inject = ['SignupService'];

    function InformationController(SignupService) {
        var infCtrl = this;

        if (SignupService.getFirstName() === undefined) {
            infCtrl.noAccount = true;
        } else {
            infCtrl.noAccount = false;
        }
        infCtrl.firstName = SignupService.getFirstName();
        infCtrl.lastName = SignupService.getLastName();
        infCtrl.email = SignupService.getEmail();
        infCtrl.phone = SignupService.getPhone();
        infCtrl.favDishShortName = SignupService.getFavDishShortName();
        infCtrl.favDishName = SignupService.getFavDishName();
        infCtrl.favDishDescription = SignupService.getFavDishDescription();
    }
})();