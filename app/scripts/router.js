"use strict";

var ProductRouter = Parse.Router.extend({



  routes: {

    ""        : "loginPage",
    "floor"   : "layoutPage",
    "categories"   : "categoriesPage",
    "categories/:category"   : "categoryPage",
    "options": "optionsPage",
    
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
            
          var div = '<a href="#/categories/' + category + '">' +
                    '<div class="button ' + category + '">' + category + '</div></a>'
          
          $('.menu-buttons').append(div)
        }) 
      }
    })
  },

  categoryPage: function(category){
    $('.container').html('')
    new OrderView();
    var query = new Parse.Query(Data);
    var entreesArray = [];
    query.equalTo("category", category);
    query.find({
      success: function(results) {
        results.forEach(function(result){
          
          entreesArray.push(result.attributes)

        })
        entreesArray.forEach(function(entree){

          console.log(entree)
          new ButtonView({model: entree})   

          
        })
      }
    })
  },

 


          
});//end of router//do not delete//


 
var router = new ProductRouter();
Parse.history.start();

  
 



   

      



  
 


  








   


  
   
   



 
  
  
        



        
        

  

        
      




        
      
  


 








      
 
    

    






  




  



