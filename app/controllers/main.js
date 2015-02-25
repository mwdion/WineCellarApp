app.controller('MainCtrl', function($scope, wines){
  $scope.wines = wines.inventory();
  });