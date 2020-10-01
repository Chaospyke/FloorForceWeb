'use strict';

angular.
    module('floorPage').
    component('floorPage',{
        templateUrl: 'floor-page/floor-page.template.html',
        controller: function floorPageController($scope,$http,floorForceCart){
            let self = this;


            
            // floorForceCart.setMsg("Testing");
            // $scope.myCollection=[
            //     floorForceCart.addItems(item,count)
            // ];


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
