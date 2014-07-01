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

  showProducts: function() {
    this.swap( new ProductView() );  
    },

  showEntrees: function(){
    
    var query = new Parse.Query(Data);
    query.equalTo("category", "Entrees");
    query.find({
      success: function(results) {
        console.log("successfully retrieved" + results.length + "entrees.");
      },
      error: function(error) {
       alert("Error: " + error.code + " " + error.message);
      }
    });
  },

  loginView: function() {
    this.swap( new LoginView() );

  }, 

  swap: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    this.currentView.render();

  }

 })


// var query = new Parse.Query(Data);
// query.equalTo("category", "Entrees");
// query.find({
  
//   success: function(results) {
//     alert("Successfully retrieved " + results.length + " Entrees.");
//     // Do something with the returned Parse.Object values
    
    
//   },
//   error: function(error) {
//     alert("Error: " + error.code + " " + error.message);
//   }
// });


 