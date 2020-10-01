'use strict';

angular.
    module('wallPage').
    component('wallPage',{
        templateUrl: 'wall-page/wall-page.template.html',
        controller: function headerBarController($scope,$http,floorForceCart){
            let self = this;


            $http.get('/items/floorForceData.json').then(function(resp){
                self.items = resp.data;
            });

            $scope.addItem = function(item,count){
                // console.log("adding Item");
                console.log("Item:",item," Count:",count);
                // console.log($scope.myCollection[0]);
                floorForceCart.addItems(item,count);
            }
        }
    })
