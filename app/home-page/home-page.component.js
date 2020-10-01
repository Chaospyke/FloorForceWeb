'use strict';

angular.
    module('homePage').
    component('homePage',{
        templateUrl: 'home-page/home-page.template.html',
        controller: 
            function homePageController($scope,$http,floorForceCart){
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
