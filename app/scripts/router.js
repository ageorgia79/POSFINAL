"use strict";

var ProductRouter = Parse.Router.extend({



  routes: {

    ""                                         : "loginPage",
    "payment"                                  : "paymentPage",
    "floor"                                    : "layoutPage",
    "admin"                                    : "adminPage",
    "refresh"                                  : "refreshPage",
    "categories"                               : "categoriesPage",
    "categories/:category"                     : "categoryPage",
    
    
    
    
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

  paymentPage: function(){
    $('.container').html('')
    new PaymentView();
  },

  adminPage: function(){
    $('.container').html('')
    new AdminView();
  },

  refreshPage: function(){
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
          new ButtonView({model: category})
        })
      }
    })
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
          //console.log(categoryArray)
        })
        categoryArray = _.union(categoryArray) 
        //console.log(categoryArray)
        categoryArray.forEach(function(category){
          //console.log(category)
            new ButtonView({model: category})
          

        }) 
      }
    })
  },

  categoryPage: function(category){
    $('.menu-buttons').html('')
    var query = new Parse.Query(Data);
    var nameArray = [];
    //console.log(category)
    query.equalTo("category", category);
    query.find({
      success: function(results) {
        console.log(results)
        results.forEach(function(result){
          console.log(result)
          nameArray.push(result.attributes.name)
          console.log(result.attributes)
          new EntreeView({model: result.attributes}); 
        })
        
        // nameArray.forEach(function(entreeName){
          // console.log(entreeName)

        // })
      }
    })
  },



          
});//end of router//do not delete//


 
var router = new ProductRouter();
Parse.history.start();

  
 



   

      



  
 


  








   


  
   
   



 
  
  
        



        
        

  

        
      




        
      
  


 








      
 
    

    






  




  



