"use strict";

var ProductRouter = Parse.Router.extend({

  routes: {

    ""        : "loginPage",
    "floor"   : "layoutPage",
    "order"   : "orderPage",
    
    
    
    
  },
    

  initialize: function(){
    var collection = new ProductCollection();

    collection.on('add', function(model){});

    collection.fetch({add:true}).done(function(){
      collection.each(function(object){
        console.warn(object);
      })
    })
   
     
  },

  loginPage: function(){
    $('.container').html('')
    new LoginView();
  },

  layoutPage: function(){
    $('.container').html('')
     new LayoutView();
  },

  orderPage: function(){
    $('.container').html('')
    new OrderView();
    var query = new Parse.Query(Data);
    query.equalTo("category", "Entrees");
    query.find({
      success: function(results) {
        alert("found" + results.length + "entrees");
      }
    })
  

  },

 

});







      
 
    

var router = new ProductRouter();
Parse.history.start();
  
    






  




  



