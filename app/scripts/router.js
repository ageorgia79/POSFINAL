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

    collection.fetch({add:true}).done(function(){//FETCHES THE COLLECTION ON ROUTER INITIALIZATION
      collection.each(function(object){
        
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
    window.categoryArray = [];
    console.log(categoryArray)
    query.find({        //CREATES AN ARRAY OF 75 "RESULTS" OF PARSE.OBJECT
      success: function(results) {
        results.forEach(function(result){  //ITERATES OVER THE 75 OBJECTS IN THE ARRAY
          categoryArray.push(result.attributes.category)
        })
        
        window.categoryArray = _.union(categoryArray) 
        console.log(categoryArray)
      }
    })
    categoryArray.forEach

  },//separation of route functions//do not delete//
  //NEXT ROUTE FUNCTION GOES HERE IDIOT!!//
});//end of router//do not delete//
        
        

var router = new ProductRouter();
Parse.history.start();
  

        
      




        
      
  


 








      
 
    

    






  




  



