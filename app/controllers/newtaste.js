app.controller('NewTasteCtrl', function($scope, $state, wines, tastes){
  $scope.add = function(taste){
    //add taste to db
    tastes.add(taste);
    //redirect back to main
    $state.go('main')
    };
  });