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
            }
        }
    })
