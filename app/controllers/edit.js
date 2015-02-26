app.controller('EditCtrl', function($scope, $stateParams, $state, $db){
    $db.get($stateParams.id).then(function(wine){
      $scope.$apply(function(){
      $scope.wine = wine;
      });
    });
    $scope.update = function(wine){
    //update wine to inventory
    $db.put(wine);
    //redirect back to main
    $state.go('main')
    };
});

