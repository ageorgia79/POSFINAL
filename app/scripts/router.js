"use strict";

var ProductRouter = Parse.Router.extend({



  routes: {

    ""                                         : "loginPage",
    "payment"                                  : "paymentPage",
    "admin"                                    : "adminPage",
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

  adminPage: function(){
    $('.container').html('')
    new AdminView();
  },
    
  loginPage: function(){
    $('.container').html('')
  
    new LoginView();
  },

  layoutPage: function(){
    $('.container').html('')
     var query = new Parse.Query(Data);
     var tableArray = [];
     query.find({
      success: function(results) {
        results.forEach(function(result){
          tableArray.push(result.attributes.table)
          console.log(result.attributes.table)
        })
        new LayoutView();
      }
     })
  },

  categoriesPage: function(){
    $('.container').html('')
    new OrderView();
    new RunnerView();
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
        
       $('.button').click(function(){
        $('.menu-buttons').html('')
        var query = new Parse.Query(Data);
        var categoryArray = [];
        query.find({
          success: function(results) {
            results.forEach(function(result){
              categoryArray.push(result.attributes.category)
            })
            categoryArray = _.union(categoryArray)
            categoryArray.forEach(function(category){
              //new ButtonView({model: category})
              router.navigate("#categories", {trigger: true});
            })
          }
        })
      })
     }//this curly brace and the next two belong to category page prior to $('.button').click//NODELETE//
  })
},

  paymentPage: function(){
    //$('.container').html('')
    var total = $('.totaltotal').text();
    console.log(total)
   
    new PaymentView();
    $('.finalbalance').append(total);
  },

 


          
});//end of router//do not delete//


 
var router = new ProductRouter();
Parse.history.start();

  
 



   

      



  
 


  








   


  
   
   



 
  
  
        



        
        

  

        
      




        
      
  


 








      
 
    

    






  




  



