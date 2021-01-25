'use strict';

angular.
  module('floorForceApp').
  config(['$routeProvider', '$provide',
    function config($routeProvider,$provide) {
      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/floors', {
          template: '<floor-page></floor-page>'
        }).
        when('/cabinets', {
          template: '<cabinet-page></cabinet-page>'
        }).
        when('/walls', {
          template: '<wall-page></wall-page>'
        }).
        when('/checkout', {
          template: '<checkout-page></checkout-page>'
        }).
        otherwise('/home');

        
    
    },
  ]).factory('floorForceCart',function(){
    let total = 0;
    let addedItems = [];
    // let additem = function(item,price){
      
    // }

    return{
      addItems:function(item,count){
        let exist =false;
        let newCount = $("#input-"+item.itemNo).val();

        if(newCount && newCount>0){
          count = newCount;
        }

        $.each(addedItems,function(i,v){
          if(v.itemNo === item.itemNo){
            exist = true;
            v.count = parseInt(v.count) + parseInt(count);
            total = total + (item.itemPrice*v.count);
          }
        });

        if(!exist){
          let toPush = {};
          toPush.itemNo = item.itemNo;
          toPush.count = count;
          toPush.itemName = item.itemName;
          toPush.itemPrice = item.itemPrice;
          addedItems.push(toPush);
          total = total + (item.itemPrice*count);
        }

        console.log("Cart:",addedItems);
        console.log("Total:",total);
      },
      removeItems: function(item,count){
        $.each(addedItems,function(i,v){
          if(v.itemNo === item.itemNo){
            v.count = v.count - count;
            total = total - (item.itemPrice * count);
            if(v.count == 0){
              addedItems.splice(i,0);
            }
          }
        });
      },
      getTotal:function(){
        return total;
      },
      getCart:function(){
        return addedItems;
      },
      checkout:function(){
        total = 0;
        addedItems = [];
        
        console.log("Check out successful.");
        console.log("Total:",total,"Cart:",addedItems);
        alert("Checkout Successful!");
      }
    };
  });

