'use strict';

Parse.initialize("LFJ3QGbWShkk4EL9OPC9RBzsM1beJbuSzZ3m8F0f", "h9DNGD2Piozeww9Il1F9zS85gQh17uJXZnqf2l7V");



var Product = Parse.Object.extend({
  className: "Product"
});



//////////////////////////////////////////////////////////////////////////////////////


var ProductCollection = Parse.Collection.extend({

  model: Product,
});

var collection = new ProductCollection();

/////////////////////////////////////////////////////////////////////////////////////////////////////     


 collection.on('add', function(model){
    
    
  });
  collection.fetch({add:true}).done(function(){
    collection.each(function(productModel) {
      new ProductView({model: productModel})
    });
  })




  


  
  
   
 
  

