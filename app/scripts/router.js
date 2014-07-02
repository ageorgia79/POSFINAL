"use strict";

var ProductRouter = Parse.Router.extend({

  routes: {

    "" : "loginPage",
    "floor" : "layoutPage",
    "order" : "orderPage",
    "product" : "productButtons",
    
    
  },
    

  initialize: function(){

    // this.currentView = null;
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
  },

  productButtons: function(){
    $('.buttons').html('')
    new ProductView();
  },




      
});
    

var router = new ProductRouter();
Parse.history.start();
  
    






  




  



