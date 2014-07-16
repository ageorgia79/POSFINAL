"use strict";

var currentUser;

var LoginView = Parse.View.extend({

  

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit"     : "showLayoutView",
    "click .admin"      : "showAdminView",
    "click .checkout"   : "showReportView",
   
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

    Parse.User.logIn($('.userlogin').val(), $('.password').val(), {
      success: function(user) {
        user.set("username", $('.userlogin').val())
        user.set("password", $('.password').val())
        user.save(null, {
          success: function(user) {
            var query = new Parse.Query(Parse.User);
                query.get(user.id, {
                  success: function() {
                  
                  },
                  error: function() {
                    
                  }
                })
          },
          error: function(user, error) {
            
          }
        })
        currentUser = Parse.User.current();
        var token = Parse.User.current()._sessionToken;
        if (currentUser) {

          Parse.User.become(currentUser._sessionToken).then(function(user) {
            Parse.User._saveCurrentUser(user);
            
          }, function (error) {
              
          });


          router.navigate('#/tables', {trigger: true});
          

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
     
  },

  showReportView: function(){
   

    router.navigate('#/report', {trigger:true});
  },

 
});

    
   
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var LayoutView = Parse.View.extend({


  layoutTemplate: _.template($('.layout-template').text()),

  events: {

    "click .hightop1" : "showHightop1",
    "click .hightop2" : "showHightop2",
    "click .table101"    : "showTable101",
    "click .table102"    : "showTable102",
    "click .table103"    : "showTable103",
    "click .table104"    : "showTable104",
    "click .booth201"    : "showBooth201",
    "click .booth202"    : "showBooth202",
    "click .booth203"    : "showBooth203",
    "click .booth204"    : "showBooth204",
    "click .stool1"    : "showStool1",
    "click .stool2"    : "showStool2",
    "click .stool3"    : "showStool3",
    "click .stool4"    : "showStool4",
    "click .stool5"    : "showStool5",
    "click .stool6"    : "showStool6",
    "click .stool7"    : "showStool7",
    "click .stool8"    : "showStool8",
    

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

  showHightop1: function(){
   
    
    var table = new Parse.Object('Table');
    var hightop1 = $('.hightop1').text();
   

    table.set("hightop1", hightop1);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

  showHightop2: function(){
    var table = new Parse.Object('Table');
    var hightop2 = $('.hightop2').text();
   

    table.set("hightop2", hightop2);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

  showTable101: function(){
    var table = new Parse.Object('Table');
    var table101 = $('.table101').text();
   

    table.set("table101", table101);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

   showTable102: function(){
    var table = new Parse.Object('Table');
    var table102 = $('.table102').text();
   

    table.set("table102", table102);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

   showTable103: function(){
    var table = new Parse.Object('Table');
    var table103 = $('.table103').text();
   

    table.set("table103", table103);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

   showTable104: function(){
    var table = new Parse.Object('Table');
    var table104 = $('.table104').text();
   

    table.set("table104", table104);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

  showBooth201: function(){
    var table = new Parse.Object('Table');
    var booth201 = $('.booth201').text();
   

    table.set("booth201", booth201);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

   showBooth202: function(){
    var table = new Parse.Object('Table');
    var booth202 = $('.booth202').text();
   

    table.set("booth202", booth202);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

   showBooth203: function(){
    var table = new Parse.Object('Table');
    var booth203 = $('.booth203').text();
   

    table.set("booth203", booth203);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

   showBooth204: function(){
    var table = new Parse.Object('Table');
    var booth204 = $('.booth204').text();
   

    table.set("booth204", booth204);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

   showStool1: function(){
    var table = new Parse.Object('Table');
    var stool1 = $('.stool1').text();
   

    table.set("stool1", stool1);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

    showStool2: function(){
    var table = new Parse.Object('Table');
    var stool2 = $('.stool2').text();
   

    table.set("stool2", stool2);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

    showStool3: function(){
    var table = new Parse.Object('Table');
    var stool3 = $('.stool3').text();
   

    table.set("stool3", stool3);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

    showStool4: function(){
    var table = new Parse.Object('Table');
    var stool4 = $('.stool4').text();
   

    table.set("stool4", stool4);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

    showStool5: function(){
    var table = new Parse.Object('Table');
    var stool5 = $('.stool5').text();
   

    table.set("stool5", stool5);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

    showStool6: function(){
    var table = new Parse.Object('Table');
    var stool6 = $('.stool6').text();
   

    table.set("stool6", stool6);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

    showStool7: function(){
    var table = new Parse.Object('Table');
    var stool7 = $('.stool7').text();
   

    table.set("stool7", stool7);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },

    showStool8: function(){
    var table = new Parse.Object('Table');
    var stool8 = $('.stool8').text();
   

    table.set("stool8", stool8);
   

    table.save();


    router.navigate("#categories", {trigger: true});
  },



});
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////



var OrderView = Parse.View.extend({

  className: 'order',

  orderTemplate: _.template($('.order-template').text()),

  events: {

    
    //"click .gostaybutton": "saveOrder",
    
    
   
    
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

 

  // saveOrder: function(){
  //    var order = new Parse.Object('Order');
  //   var runner = $('.itemizer').text();
  //   var subtotal = $('.subtotal').text();
  //   var tax = $('.taxtotal').text();
  //   var total = $('.totaltotal').text();
  //   order.set('runner', runner);
  //   order.set('subtotal', subtotal);
  //   order.set('tax', tax);
  //   order.set('total', total);


  //   order.save();
  // },

 
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

    var order = new Parse.Object('Order');
    var runnername = this.model.name;
    var runnerprice = this.model.price;
    var subtotal = $('.subtotal').text();
    var tax = $('.taxtotal').text();
    var total = $('.totaltotal').text();

       
    order.set('runnername', runnername);
    order.set('runnerprice', runnerprice);
    order.set('subtotal', subtotal);
    order.set('tax', tax);
    order.set('total', total);

    


    order.save().done(function(){

    $('.menu-buttons').html('')
   router.navigate("#categories", {trigger: true});
    })

  


   
    
    

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
  var query = new Parse.Query(Order);
  query.find({
    success: function(results) {
      results.forEach(function(result){
        console.log(result)
        result.destroy({});
      })
    }
  })
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
    "click .menuenter": "addMenuItem",

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

  addMenuItem: function(){
    var data = new Parse.Object('Data');

    var category = $('.categorytitle').val();
    var name = $('.categoryname').val();
    var price = $('.price').val();

    data.set("category", category);
    data.set("name", name);
    data.set("price", price);

    data.save().done(function(){
      router.navigate('#', {trigger: true});
    })
  },


});


var RunnerView = Parse.View.extend({

  runnerTemplate: _.template($('.runner-template').text()),

  events: {
    "click .go-button"  : "showLoginView",
    "click .gostaybutton": "saveOrder",
    "click .pay"       : "showPaymentView",

  }, 

  initialize: function(){
    window.setInterval(function() {
    var elem = document.getElementById('itemizer');
    elem.scrollTop = elem.scrollHeight;
    }, 2000);

    this.subtotal = 0;
    var that = this;

    $('.container').append(this.el);
    this.render();
     var collection = new OrderCollection();

    collection.on('add', function(model){});

    collection.fetch({add:true}).done(function(){//FETCHES THE COLLECTION ON ROUTER INITIALIZATION
      collection.each(function(object){
        console.log(object)


        $('#itemizer').append(object.attributes.runnername + ' ' + '$'+ object.attributes.runnerprice);
        $('#itemizer').append('<br />', '<br />');

        that.subtotal += parseFloat(object.attributes.runnerprice)
        console.log(that.subtotal)

        var tax = parseFloat((that.subtotal * 6.75 / 100).toFixed(2)); 
        var total = parseFloat((that.subtotal + tax).toFixed(2));
    

        $('.subtotal').empty();
        $('.subtotal').append(that.subtotal.toFixed(2));

        $('.taxtotal').empty();
        $('.taxtotal').append(tax);

        $('.totaltotal').empty();
        $('.totaltotal').append(total);   


        
      })
    })

  },

  render: function(){
    var renderedTemplate = this.runnerTemplate(this.model);
    this.$el.html(renderedTemplate);
    return this;
  },

  showLoginView: function(){


    
     Parse.User.logOut();
    router.navigate("#", {trigger: true});


  },

   saveOrder: function(){
    // var order = new Parse.Object('Order');
    // var subtotal = $('.subtotal').text();
    // var tax = $('.taxtotal').text();
    // var total = $('.totaltotal').text();
    // order.set('subtotal', subtotal);
    // order.set('tax', tax);
    // order.set('total', total);


    // order.save();
  },

  showPaymentView: function(){
   

    Parse.User.logOut();
    router.navigate("#/payment", {trigger: true});
  
},



});

var ReportView = Parse.View.extend({

  reportTemplate: _.template($('.report-template').text()),

  events: {

  },

  initialize: function(){
    $('.container').html('');
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.reportTemplate(this.model);
    this.$el.html(renderedTemplate);
    return this;
  },

})