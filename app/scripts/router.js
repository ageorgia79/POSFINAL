"use strict";

var ProductRouter = Parse.Router.extend({



  routes: {

    ""        : "loginPage",
    "floor"   : "layoutPage",
    "categories"   : "categoriesPage",
    "categories/:category"   : "categoryPage",
    
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
    // new ButtonsView();
    var query = new Parse.Query(Data);
    window.categoryArray = [];
    query.find({        
      success: function(results) {
        results.forEach(function(result){  
          categoryArray.push(result.attributes.category)
        })
        window.categoryArray = _.union(categoryArray) 
        console.log(categoryArray)
        categoryArray.forEach(function(category){
            
          var div = '<a href="#/categories/' + category + '">' +
                    '<div class="button ' + category + '">' + category + '</div></a>'
          console.log(div)
          $('.menu-buttons').append(div)
        }) 
      }
    })
  },//separation of route functions//do not delete//
  
});//end of router//do not delete//
        

var router = new ProductRouter();
Parse.history.start();



        
        

  

        
      




        
      
  


 








      
 
    

    






  




  



