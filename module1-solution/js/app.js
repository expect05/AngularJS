(function() {
    'use strict';
    angular.module('LunchCheck', [])

    .controller('MyController', MyController);

    MyController.$inject = ["$scope"];

    function MyController($scope) {
        $scope.LunchCheckController = function() {
            $scope.displayMessage = "";
            if ($scope.lunches == undefined) {
                $scope.displayMessage = "Please enter data first!";
            } else {
                var lunchesArray = $scope.lunches.split(",");
                if (lunchesArray.length <= 3) {
                    $scope.displayMessage = "Enjoy!";
                } else {
                    $scope.displayMessage = "Too much!";
                }
            }
        }


    }
})();