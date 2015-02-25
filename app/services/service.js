app.factory('wines', function(){
  var wines = [];
  var c = 0;
  return {
    inventory: function() {
      return wines;
    },
    add: function(wine) {
      wine.id = c;
      wines.push(wine);
      c++;
    }
  }
});