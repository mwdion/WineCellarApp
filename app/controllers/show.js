app.controller('ShowCtrl', function($scope, $state, wines, $stateParams, $state){
  $scope.wine = wines.get($stateParams.id);
  $scope.remove = function(wine){
  //remove wine from list
    if (confirm('are you sure?')) {
      wines.remove(wine.id);
      $state.go('main');
    }
  }
})