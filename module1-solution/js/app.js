(function() {
    'use strict';
    angular.module('LunchCheck', [])

    .controller('MyController', MyController);

    MyController.$inject = ["$scope"];

    function MyController($scope) {
        $scope.LunchCheckController = function() {
            var lunchesArray = $scope.lunches.split(",");
            if (lunchesArray.length <= 3) {
                $scope.displayMessage = "Enjoy!";
            } else {
                $scope.displayMessage = "Too much!";
            }
        }
    }
})();