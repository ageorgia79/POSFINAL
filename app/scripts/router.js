"use strict";

var ProductRouter = Parse.Router.extend({

  routes: {

    ''        : "loginView",
    'products': 'showProducts',
    "entrees" : "showEntrees",
    
  },


  initialize: function(){
    this.$el = $('.menucontainer');
    this.currentView = null;
  },

  loginView: function() {
    this.swap( new LoginView() );

  }, 


  showProducts: function(){
    var query = new Parse.Query(Data);
    query.equalTo("category");
    query.find({
      success: function(results) {
        alert("successfully retrieved" + results.length + "entrees.");
      },
      error: function(error) {
       alert("Error: " + error.code + " " + error.message);
      }
    });
  },
  

  showEntrees: function() {
    this.swap( new ProductView() );  
    },


  swap: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    this.currentView.render();

  }

 })


  




var router = new ProductRouter();
Parse.history.start();





    



 