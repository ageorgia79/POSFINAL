"use strict";

var LoginView = Parse.View.extend({

  

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit": "showClockinModal",
    "click .yes": "showLayoutView"
  },

  initialize: function(){
    $('.login-container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.loginTemplate();
    this.$el.html(renderedTemplate);
  },

  showLayoutView: function(){
    console.log('button is working')
    console.log(this.model)
    new LayoutView();
    // $('.container').append(layout);
  },

  showClockinModal: function(){
    var modal = document.getElementById('clockinoverlay');
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden":"visible";

  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var login = new LoginView();

var LayoutView = Parse.View.extend({

  

  layoutTemplate: _.template($('.layout-template').text()),

  events: {

    "click .hightop1": "showOrderView",
    "click .hightop2": "showOrderView",
    "click .table-101": "showOrderView",
    "click .table-102": "showOrderView",
    "click .table-103": "showOrderView",
    "click .table-104": "showOrderView",
    "click .booth-1": "showOrderView",
    "click .booth-2": "showOrderView",
    "click .booth-3": "showOrderView",
    "click .booth-4": "showOrderView",
    "click .stool-1": "showOrderView",
    "click .stool-2": "showOrderView",
    "click .stool-3": "showOrderView",
    "click .stool-4": "showOrderView",
    "click .stool-5": "showOrderView",
    "click .stool-6": "showOrderView",
    "click .stool-7": "showOrderView",
    "click .stool-8": "showOrderView"

  },

  initialize: function(){
    $('.login-container').empty();
    $('.layout-container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.layoutTemplate(this.model);
    this.$el.html(renderedTemplate);
  },



  showOrderView: function(){
    var order = new OrderView({model: this.model});
    //$('.container').append(order);
  }


});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var OrderView = Parse.View.extend({

  

  orderTemplate: _.template($('.order-template').text()),

  events: {

    "click .go-button": "showLoginView",
    "click .void": "showManagerModal",
    "click .numberenter": "showOrderView"
    
  },

  initialize: function(){
    $('.layout-container').empty();
    $('.order-container').append(this.el);
    this.render();
  

  },

  render: function(){
    var renderedTemplate = this.orderTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showLoginView: function(){
    this.remove();
    var login = new LoginView({model: this.model});

  },

  showManagerModal: function(){
    var modal = document.getElementById('overlay');
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden":"visible";
  },

  showOrderView: function(){
    this.remove();
    var order = new OrderView({model: this.model});
  }

 

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ProductView = Parse.View.extend({


  productTemplate: _.template($('.product-template').text()),
  

  events: {
    

  },

  initialize: function(){
  $('.menucontainer').append(this.el);
    this.render();
    var product = new ProductView();

  },

  render: function(){
    var renderedTemplate = this.productTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

});