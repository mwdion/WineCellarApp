app.factory($db, function(){
  var wines = [];
  var wine = {
    id: Math.uuid(),
    name: [],
    quantity:[],
    vintage:[],
    country: [],
    region: [],
    purveyor: [],
    grape: [],
    style: []
  };
  return {
    inventory: function() {
      $db.allDocs({include_docs: true})
      .then(function(res){
        $scope.$apply(function(){
          $scope.wines = res.rows.map(function(row){ return row.doc; });
        });
      });
    },
    $scope.add = function(wine) {
      $scope.wines.push(wine);
      $scope.wine = null;
      $db.post(wine, function(err, res) {
        if (err) { console.log(err); }
        wine._id = res.id;
        wine._rev = res.rev;
      });
    }; 
});