"use strict";

var currentUser;

var LoginView = Parse.View.extend({

  

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit"     : "showLayoutView",
    "click .admin"      : "showAdminView",
   
  },

  initialize: function(){
    $('.container').append(this.el);
    this.render();

  },

  render: function(){
    var renderedTemplate = this.loginTemplate();
    this.$el.html(renderedTemplate);
  },

  showLayoutView: function() {

    var user = new Parse.User();

    Parse.User.logIn($('.userlogin').val(), $('.loginpassword').val(), {
      success: function(user) {
        user.set("username", $('.userlogin').val())
        user.set("password", $('.loginpassword').val())
        user.save(null, {
          success: function(user) {
            var query = new Parse.Query(Parse.User);
                query.get(user.id, {
                  success: function() {
                    //console.log("yeah user set!")
                  },
                  error: function() {
                    //console.log("failed")
                  }
                })
          },
          error: function(user, error) {
            //console.log("nope")
          }
        })
        currentUser = Parse.User.current();
        var token = Parse.User.current()._sessionToken;
        if (currentUser) {

          Parse.User.become(currentUser._sessionToken).then(function(user) {
            Parse.User._saveCurrentUser(user);
              //console.log(user.id)
          }, function (error) {
              
          });
     

          router.navigate('#/tables', {trigger: true});
          //console.log(currentUser, currentUser._sessionToken, currentUser.attributes.score)

          //console.log(currentUser.attributes.username)

        } else {
          
        }
      },
      error: function(user, error) {
        alert("Error" + error.code + " " + error.message)
      }
    })  
  },

  showAdminView: function(){

    router.navigate('#/admin', {trigger:true});
     
  }

 
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
    router.navigate("#categories", {trigger: true});
  },

});
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////



var OrderView = Parse.View.extend({

  className: 'order',

  orderTemplate: _.template($('.order-template').text()),

  events: {

    "click .go-button"  : "showLoginView",
    "click .pay"       : "showPaymentView",
    
   
    
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
    Parse.User.logOut();
    router.navigate("#", {trigger: true});
  

  },

  showPaymentView: function(){
    router.navigate("#/payment", {trigger: true});
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

    
    $('.itemizer').append(this.model.name + ' ' +  '$'+this.model.price)
    $('.itemizer').append('<br>','<br>')



    var subtotal = $('.subtotal').val() + this.model.price;
    var tax = (subtotal * 6.75 / 100).toFixed(2); 
    var total = parseFloat(subtotal) + parseFloat(tax);
    


    $('.subtotal').append(subtotal);
    $('.taxtotal').append(tax);
    $('.totaltotal').append(total); 
    
    

  },
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PaymentView = Parse.View.extend({

  paymentTemplate: _.template($('.payment-template').text()),

  events: {
    "click .credit-amex": "showLoginView",
    "click .credit-visa": "showLoginView",
    "click .credit-master": "showLoginView",
    "click .credit-discover": "showLoginView",
    "click .cash": "showCashModal",
    "click .numberenter": "showPaymentView",
    "click .check": "showCashModal",
    "click .gift": "showCashModal",
    "click .manager": "showCashModal",
    


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

  showLoginView: function(){
    router.navigate("#", {trigger: true});
  },

  showCashModal: function(){
     var modal = document.getElementById('overlay');
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden":"visible";
  },

  showPaymentView: function(){
    var modal = document.getElementById('overlay');
    modal.style.visibility = "hidden";
  },

 
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var AdminView = Parse.View.extend({

  adminTemplate: _.template($('.admin-template').text()),

  events: {

    "click .codeenter": "signUpUser",
    

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.adminTemplate(this.model);
    this.$el.html(renderedTemplate);
    return this;
  },

  signUpUser: function() {
    var user = new Parse.User();
    user.set("username", $('.code').val())
    user.set('password', $('.userpassword').val())
    

    user.signUp(null, {
      success: function(user) {
        var currentUser = Parse.User.current();
        if (currentUser) {
          router.navigate('#', {trigger: true});
          console.log(currentUser)
        } else {
          console.log("did not sign up")
        }
      },
      error: function(user, error) {
        alert("Error" + error.code + " " + error.message);
      } 
    })
  },




})

 

 










 