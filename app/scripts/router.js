"use strict";

var ProductRouter = Parse.Router.extend({

  routes: {

    "items": "showItems",
    "items/:id": "showItem"
  },

  showItem: function(){

  },

  initialize: function(){
    this.$el = $('.menucontainer');
    this.currentView = null;
  },

 })

 