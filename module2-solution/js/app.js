(function() {
    'use strict';

    angular.module('MyShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController)
        .controller('ShoppingListController2', ShoppingListController2)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ShoppingListController.$inject = ['ShoppingListCheckOffService'];

    function ShoppingListController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getBuyList();
        toBuyList.itemName = "";
        toBuyList.quantity = "";

        toBuyList.addBought = function(itemIndex, itemName, quantity) {
            ShoppingListCheckOffService.addBought(itemIndex, itemName, quantity);
        }
    }

    ShoppingListController2.$inject = ['ShoppingListCheckOffService'];

    function ShoppingListController2(ShoppingListCheckOffService) {
        var alreadyBoughtList = this;

        alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtList();
        console.log(alreadyBoughtList.items);

    }

    function ShoppingListCheckOffService() {
        var service = this;

        //Array with tobuy items
        var toBuy = [
            { name: "cookies", quantity: 10 },
            { name: "haribo", quantity: 5 },
            { name: "apples", quantity: 4 },
            { name: "potatoes", quantity: 20 },
            { name: "onions", quantity: 2 },
        ];


        //Array with already bought items
        var alreadyBought = [];

        service.addBought = function(itemIndex, itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            alreadyBought.push(item);
            console.log(alreadyBought);
            toBuy.splice(itemIndex, 1);
        };

        service.getBuyList = function() {
            return toBuy;
        };

        service.getAlreadyBoughtList = function() {
            return alreadyBought;
        }
    }
})();