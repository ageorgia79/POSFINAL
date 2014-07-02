"use strict";

var ProductRouter = Parse.Router.extend({

  routes: {
    "" : "loginPage",
    "floor" : "layoutPage",
    "order" : "orderPage",
    
    

    
  },

    
  initialize: function(){

    // this.currentView = null;
  },

  loginPage: function(){
    $('.login-container').html('')
    $('.layout-container').html('')
    $('.order-container').html('')
    new LoginView();
  },

  layoutPage: function(){
    $('.layout-container').html('')
    $('.order-container').html('')
     new LayoutView();
  },

  orderPage: function(){
    $('.order-container').html('')
    new OrderView();
  },


      
});





var router = new ProductRouter();
Parse.history.start();
  

  




  



