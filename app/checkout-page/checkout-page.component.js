'use strict';

angular.
    module('checkoutPage').
    component('checkoutPage',{
        templateUrl: 'checkout-page/checkout-page.template.html',
        controller: function checkOutController($scope,$http,floorForceCart){
            let self = this;
            $scope.total = floorForceCart.getTotal();
            $scope.cart = floorForceCart.getCart();


            $scope.checkOut = function(){
                floorForceCart.checkout();
                $scope.total = floorForceCart.getTotal();
                $scope.cart = floorForceCart.getCart();
            }

            $scope.increaseCount = function(item){
                floorForceCart.addItems(item,1);
                $scope.total = floorForceCart.getTotal();
            }

            $scope.decreaseCount = function(item){
                floorForceCart.removeItems(item,1);
                $scope.total = floorForceCart.getTotal();
            }
        }
    })
