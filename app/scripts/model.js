'use strict';

Parse.initialize("LFJ3QGbWShkk4EL9OPC9RBzsM1beJbuSzZ3m8F0f", "h9DNGD2Piozeww9Il1F9zS85gQh17uJXZnqf2l7V");



//model
var Data = Parse.Object.extend("Data");

//collection of data
var ProductCollection = Parse.Collection.extend({
  model: 'Data',
});

//instance of your collection
var collection = new ProductCollection();

/////////////////////////////////////////////////////////////////////////////////////////////////////     


