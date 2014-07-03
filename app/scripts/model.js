'use strict';

Parse.initialize("LFJ3QGbWShkk4EL9OPC9RBzsM1beJbuSzZ3m8F0f", "h9DNGD2Piozeww9Il1F9zS85gQh17uJXZnqf2l7V");




var Data = Parse.Object.extend("Data");


var ProductCollection = Parse.Collection.extend({
  model: 'Data',
});


var collection = new ProductCollection();

  