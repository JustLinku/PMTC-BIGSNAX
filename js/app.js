(function(){
  var gems = [{ 
      name: 'Azurite', 
      price: 2.95,
      description: "A blue gem",
      canPurchase: true,
      soldOut: true
  },
  {
      name: 'Sapphire',
      price: 4.20,
      description: "A bluer gem",
      canPurchase: false,
      soldOut: false
  }];
  var app = angular.module('gemStore', []);
  
  app.controller('StoreController', function(){
  	this.products = gems;
  });
})();
