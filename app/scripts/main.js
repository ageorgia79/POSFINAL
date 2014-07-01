'use strict';

Parse.initialize("LFJ3QGbWShkk4EL9OPC9RBzsM1beJbuSzZ3m8F0f", "h9DNGD2Piozeww9Il1F9zS85gQh17uJXZnqf2l7V");





 collection.on('add', function(model){
    

//actually fetching data from server  
  });
  collection.fetch({add:true}).done(function(){
    collection.each(function(productModel) {
      new ProductView({model: productModel})
    });
  })


//////////////////////////////////////////////////////////////////////////////////////


var router = new ProductRouter();
Parse.history.start();




  


  
  
   
 
  

