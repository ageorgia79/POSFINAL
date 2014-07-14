"use strict";

var ProductRouter = Parse.Router.extend({



  routes: {

    ""                                         : "loginPage",
    "payment"                                  : "paymentPage",
    "admin"                                    : "adminPage",
    "refresh"                                  : "refreshPage",

    "tables"                                    : "layoutPage",
    "categories"                               : "categoriesPage",
    "categories/:category"                     : "categoryPage",
    
    
    
    
 },
    
    
  initialize: function(){
    var collection = new OrderCollection();

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

  paymentPage: function(){
    $('.container').html('')
    new PaymentView();
  },

  adminPage: function(){
    $('.container').html('')
    new AdminView();
  },

  categoriesPage: function(){
    $('.container').html('')
    new OrderView();
    var query = new Parse.Query(Data);
    var categoryArray = [];
    query.find({        
      success: function(results) {
        results.forEach(function(result){  
          categoryArray.push(result.attributes.category)
          
        })
        categoryArray = _.union(categoryArray) 
       
        categoryArray.forEach(function(category){
        
            new ButtonView({model: category})
          

        }) 
      }
    })
  },

  categoryPage: function(category){
    $('.menu-buttons').html('')
    var query = new Parse.Query(Data);
    var nameArray = [];
    
    query.equalTo("category", category);
    query.find({
      success: function(results) {
       
        results.forEach(function(result){
          
          nameArray.push(result.attributes.name)
         
          new EntreeView({model: result.attributes}); 
        })
        
       
      }
    })
  },

   // refreshPage: function(){
  //   $('.menu-buttons').html('')
  //   var query = new Parse.Query(Data);
  //   var categoryArray = [];
  //   query.find({
  //     success: function(results) {
  //       results.forEach(function(result){
  //         categoryArray.push(result.attributes.category)
  //       })
  //       categoryArray = _.union(categoryArray)
  //       categoryArray.forEach(function(category){
  //         new ButtonView({model: category})
  //       })
  //     }
  //   })
  // },



          
});//end of router//do not delete//


 
var router = new ProductRouter();
Parse.history.start();

  
 



   

      



  
 


  








   


  
   
   



 
  
  
        



        
        

  

        
      




        
      
  


 








      
 
    

    






  




  



