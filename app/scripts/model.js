//model
var Data = Parse.Object.extend("Data");

//collection of data
var ProductCollection = Parse.Collection.extend({
  model: 'Data',
});

//instance of your collection
var collection = new ProductCollection();

/////////////////////////////////////////////////////////////////////////////////////////////////////     


