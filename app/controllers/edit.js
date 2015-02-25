app.controller('EditCtrl', function($scope, $stateParams, $state, wines){
  $scope.wine = wines.get($stateParams.id);
  $scope.update = function(wine) {
    //wines.update(wine);
    $state.go('main');
  }

})