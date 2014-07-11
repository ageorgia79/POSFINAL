"use strict";

var LoginView = Parse.View.extend({

  

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit"     : "showClockinModal",
    "click .yes"        : "showLayoutView",
    "click .number.nine": "showNine",
    "click .number.eight": "showEight",
    "click .number.seven": "showSeven",
    "click .number.six": "showSix",
    "click .number.five": "showFive",
    "click .number.four": "showFour",
    "click .number.three": "showThree",
    "click .number.two": "showTwo",
    "click .number.one": "showOne",
    "click .number.zero": "showZero",
    
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

   
  },

  showClockinModal: function(){
    var modal = document.getElementById('clockinoverlay');
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden":"visible";

  },

  showNine: function(){
    console.log('button works')
    var numbernine = $('.number.nine').val();
    $('.loginpassword').append(numbernine)
  },

  showEight: function(){
    var numbereight = $('.number.eight').val();
    $('.loginpassword').append(numbereight)
  },
  showSeven: function(){
    var numberseven = $('.number.seven').val();
    $('.loginpassword').append(numberseven)
  },
  showSix: function(){
    var numbersix = $('.number.six').val();
    $('.loginpassword').append(numbersix)
  },
  showFive: function(){
    var numberfive = $('.number.five').val();
    $('.loginpassword').append(numberfive)
  },
  showFour: function(){
    var numberfour = $('.number.four').val();
    $('.loginpassword').append(numberfour)
  },
  showThree: function(){
    var numberthree = $('.number.three').val();
    $('.loginpassword').append(numberthree)
  },
  showTwo: function(){
    var numbertwo = $('.number.two').val();
    $('.loginpassword').append(numbertwo)
  },
  showOne: function(){
    var numberone = $('.number.one').val();
    $('.loginpassword').append(numberone)
  },
  showZero: function(){
    var numberzero = $('.number.zero').val();
    $('.loginpassword').append(numberzero)
  },

 
});

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var LayoutView = Parse.View.extend({


  layoutTemplate: _.template($('.layout-template').text()),

  events: {

    "click .hightop1" : "showOrderView",
    "click .hightop2" : "showOrderView",
    "click .table"    : "showOrderView",
    "click .booth"    : "showOrderView",
    "click .stool"    : "showOrderView",
    

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
    //console.log('button works')
    //$('.table101').css('background-image', 'url(http://img2.findthebest.com/sites/default/files/2307/media/images/Bright_Green_429748_i0.png)')
    router.navigate("#/categories", {trigger: true});

   
  },

});
  

    

//////////////////////////////////////////////////////////////////////////////////////////////////////////



var OrderView = Parse.View.extend({

  className: 'order',

  orderTemplate: _.template($('.order-template').text()),

  events: {

    "click .go-button"  : "showLoginView",
    "click .pay"       : "showPaymentView",
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

  showPaymentView: function(){
    router.navigate("#/payment", {trigger: true});
  },
  

  showOrderView: function(){//Makes Modal go away//
    this.remove();
    var order = new OrderView({model: this.model});
  },

 

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



var ButtonView = Parse.View.extend({

  className: 'button',
  
  buttonTemplate: _.template($('.button-template').text()),
  
  events: {
    'click': "showCategoryName",
    
  
  },

  initialize: function(){

    $('.menu-buttons').append(this.el);
    this.render();
  },

  
  render: function(){
    var renderedTemplate = this.buttonTemplate(this.model);
    this.$el.html(renderedTemplate);

  },

  showCategoryName: function(){
 
    router.navigate("#/categories/" + this.model, {trigger: true});
  },

 
});

/////////////////////////////////////////////////////////////////////////////////////////


var EntreeView = Parse.View.extend({

  className: 'button',

  entreeTemplate: _.template($('.entree-template').text()),

  events: {
    "click": "showPricing",

  },

  initialize: function(){
    $('.menu-buttons').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.entreeTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showPricing: function(){
  console.log('the button works')

    $('.itemizer').append(this.model.name + ' ' +  this.model.price)
    $('.subtotal').append(this.model.price)
    var tax = this.model.price;
    var taxafter = (tax * 6 / 100).toFixed(2); 
    var total = parseFloat(tax) + parseFloat(taxafter);
    $('.taxtotal').append(taxafter);
    $('.totaltotal').append(total);    

  },
});
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PaymentView = Parse.View.extend({

  paymentTemplate: _.template($('.payment-template').text()),

  events: {

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.paymentTemplate(this.model);
    this.$el.html(renderedTemplate);
  },
})

 

 










 