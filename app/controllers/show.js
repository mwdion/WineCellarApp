app.controller('ShowCtrl', function($scope, $state, wines, $stateParams, $state){
  $scope.wine = wines.get($stateParams.id);
  
})