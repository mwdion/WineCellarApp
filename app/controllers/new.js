app.controller('NewCtrl', function($scope, $state, $db){
  $scope.add = function(wine){
    //add wine to inventory
    $db.post(wine, function(err, res){
      if(err) { console.log(err);}
      wine._id = res.id;
      wine._rev = res.rev;
    });
    //redirect back to main
    $state.go('main')
    };
  });