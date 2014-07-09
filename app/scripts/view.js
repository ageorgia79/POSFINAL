"use strict";

var LoginView = Parse.View.extend({

  

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit"  : "showClockinModal",
    "click .yes"     : "showLayoutView",
    "click .number.nine": "showNine",
    
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
    
  }

 
});

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var LayoutView = Parse.View.extend({

  

  layoutTemplate: _.template($('.layout-template').text()),

  events: {

    "click .hightop1": "showOrderView",
    "click .hightop2": "showOrderView",
    "click .table": "showOrderView",
    "click .booth": "showOrderView",
    "click .stool": "showOrderView",
    

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
    router.navigate("#/categories", {trigger: true});

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

  showOrderView: function(){//Makes Modal go away//
    this.remove();
    var order = new OrderView({model: this.model});
  },

 

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



var ButtonView = Parse.View.extend({

  className: 'button',

  buttonTemplate: _.template($('.button-template').text()),
  optionsTemplate: _.template($('.options-template').text()),
  
  events: {
    'click' : 'showOptions',
    'click .button.Rare': 'showSides',
    'click .button.MedRare': "showSides",
    'click .button.Medium': "showSides",
    'click .button.MedWell': "showSides",
    'click .button.Well': "showSides",
    'click .button.Butterfly': "showSides",
    'click .button.Pittsburg': "showSides",
  },

  initialize: function(){
    $('.menu-buttons').append(this.el);
    this.render();
  },

  
  render: function(){
    var renderedTemplate = this.buttonTemplate(this.model);
    this.$el.html(renderedTemplate);

  },

  showRender: function(){
    var showTemplate = this.optionsTemplate(this.model);
    this.$el.html(showTemplate);
  },

  showOptions: function(){
      $('.menu-buttons').html('');
    console.log(this.model.options)
    var cooloptions = this.model.options;
    cooloptions.forEach(function(optionName){
      console.log(optionName)
      var div = '<a href="#/categories/' + optionName + '">' +
                    '<div class="button ' + optionName + '">' + optionName + '</div></a>'
      $('.menu-buttons').append(div);
      
    })
    //console.log('button works')
  },

  showSides: function(){

  }


    




  
});
 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



 

 










 