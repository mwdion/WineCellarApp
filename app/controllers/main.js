app.constant('$db', new PouchDB('wines'))
  .controller('MainCtrl', function($scope, $db) {
    function inventory() {
      $db.allDocs({include_docs: true, descending: true})
        .then(function(res) {
          $scope.$apply(function() {
            $scope.wines = res.rows.map(function(row) { return row.doc; }); 
          });
        });
    }
    inventory();
    function checkChanges(){
      $db.changes({
        since: 'now',
        live: true
      }).on('change', inventory);
    }
    checkChanges();
});

