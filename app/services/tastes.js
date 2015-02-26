app.factory('tastes', function(){
  var tastes = [];
  var taste = {
    flavor: [],
    style: []
  };
  var c = 0;
  return {
    tasteIndex: function() {
      return tastes;
    },
    add: function(taste) {
      console.log(taste);
      // taste.id = c;
      tastes.push(taste);
      // c++;
    }
  }
});