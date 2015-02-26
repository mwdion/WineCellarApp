app.constant('$db', new PouchDB('wines'))
  .controller('ShowCtrl', function($scope, $state, $stateParams, $state, $db){
    $db.get($stateParams.id).then(function(wine){
      $scope.$apply(function(){
      $scope.wine = wine;
      });
    });
    $scope.remove = function(wine){
    //remove wine from list
      if (confirm('are you sure?')) {
        wines.remove(wine.id);
        $state.go('main');
      }
    }
})
