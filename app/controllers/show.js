app.constant('$db', new PouchDB('wines'))
  .controller('ShowCtrl', function($scope, $state, $stateParams, $state, $db){
    $db.get($stateParams.id).then(function(wine){
      $scope.$apply(function(){
      $scope.wine = wine;
      });
    });
    $scope.remove = function(wine){
      $db.get($stateParams.id).then(function(wine){
      return $db.remove(wine);
    }).catch(function(err){
  });
    $state.go('main');
  } 
})



