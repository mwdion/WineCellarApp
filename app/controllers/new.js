app.controller('NewCtrl', function($scope, $state, wines){
  $scope.add = function(wine){
    //add wine to inventory
    wines.add(wine);
    //redirect back to main
    $state.go('main')
    };
  });