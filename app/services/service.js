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
    },
    get: function(id) {
      var wine = null;
      for(var i = 0; i < wines.length; i++) {
        if (wines[i].id === parseInt(id, 10)) {
          wine = wines[i];
        }
      }
      return wine;
    },
    update: function(wine) {
      for(var i = 0;i < wines.length; i++) {
        if ( wine.id === wines[i].id) {
          wines[i] = wine;
        }
      }
    },
  }
});