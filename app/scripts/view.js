"use strict";

var LoginView = Parse.View.extend({

  

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit": "showClockinModal",
    "click .yes": "showLayoutView"
  },

  initialize: function(){
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.loginTemplate();
    this.$el.html(renderedTemplate);
  },

  showLayoutView: function(){
    router.navigate("#/floor", {trigger: true});

    // $('.container').append(layout);
  },

  showClockinModal: function(){
    var modal = document.getElementById('clockinoverlay');
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden":"visible";

  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


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
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.layoutTemplate(this.model);
    this.$el.html(renderedTemplate);
  },



  showOrderView: function(){
    router.navigate("#/order", {trigger: true});

    //$('.container').append(order);
  },

 

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var OrderView = Parse.View.extend({

  className: 'order',

  orderTemplate: _.template($('.order-template').text()),

  events: {

    "click .go-button": "showLoginView",
    "click .void": "showManagerModal",
    "click .numberenter": "showOrderView",
    
    
  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  

  },

  render: function(){
    var renderedTemplate = this.orderTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showLoginView: function(){
    router.navigate("#", {trigger: true});
  

  },

  showManagerModal: function(){
    var modal = document.getElementById('overlay');
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden":"visible";
  },

  showOrderView: function(){
    this.remove();
    var order = new OrderView({model: this.model});
  },

 

 

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ProductView = Parse.View.extend({


  className: 'products',

  productTemplate: _.template($('.product-template').text()),
  

  events: {
    

  },

  initialize: function(){
 
  
  $('.buttons').append(this.el);
    this.render();

  },

  
  render: function(){
    var renderedTemplate = this.productTemplate(this.model.attributes);
    this.$el.html(renderedTemplate);
  },

  





});

    // collection.on('change', function(model){});
    //   collection.fetch({add:true}).done(function(){
    //     collection.each(function(productModel) {
    //       new ProductView({model: productModel})
    //     });
    //   })



 