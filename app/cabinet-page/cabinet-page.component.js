'use strict';

angular.
    module('cabinetPage').
    component('cabinetPage',{
        templateUrl: 'cabinet-page/cabinet-page.template.html',
        controller: function cabinetPageController($scope,$http,floorForceCart){
            let self = this;
            self.orderProp = 'itemType';


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
