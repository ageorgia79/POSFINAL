'use strict';

Parse.initialize("LFJ3QGbWShkk4EL9OPC9RBzsM1beJbuSzZ3m8F0f", "h9DNGD2Piozeww9Il1F9zS85gQh17uJXZnqf2l7V");




var Data = Parse.Object.extend("Data");

var User = Parse.Object.extend("User");

var Order = Parse.Object.extend("Order");

var Table = Parse.Object.extend("Table");

var Report = Parse.Object.extend('Report');




var DataCollection = Parse.Collection.extend({
  model: Data
});

var UserCollection = Parse.Collection.extend({
  model: User
});

var OrderCollection = Parse.Collection.extend({
  model: Order
});

var TableCollection = Parse.Collection.extend({
  model: Table
})

var ReportCollection = Parse.Collection.extend({
  model: Report
})






  