app.controller('NewTasteCtrl', function($scope, $state, $db){
  $scope.addTaste = function(taste){
    //add taste to db
    $db.post(taste);
    console.log(taste);
    //redirect back to main
    $state.go('main')
    };
  });