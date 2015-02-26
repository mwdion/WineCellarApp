app.controller('NewCtrl', function($scope, $state, $db){
  $scope.add = function(wine){
    //add wine to inventory
    $db.post(wine);
    //redirect back to main
    $state.go('main')
    };
  });