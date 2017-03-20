angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "PlanesAPI", function($scope, PlanesAPI){
  $scope.title = "Look at all my planes!"
  $scope.planes = [];

  PlanesAPI.getPlanes().then(function success(res){
    console.log("We have lift off.", res);
    $scope.planes = res.data;
  }, function error(err){
    console.log("Uh oh. Crashed.", err);
  })
}])

.controller("DetailCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.plane = [];

  PlanesAPI.getPlane($stateParams.id).then(function success(res){
    console.log("Woo!", res);
    $scope.plane = res.data;
  }, function error(err){
    console.log("Boo!", err);
  })
}])
.filter("fixGrammar", function(){
  return function(input){
    if (input == 1){
      return "1 engine";
    } else {
      return input + " engines";
    }
  }
})

.controller("addCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.addPlane=function(){
    console.log("create " + this);
    var plane = {
      "manufacturer": this.manufacturer,
      "model": this.model,
      "engines": this.engine
    }
    PlanesAPI.addPlane(plane)
  }
}])

.controller("deleteCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  console.log("Delete " + ($stateParams.id));
  PlanesAPI.deletePlane($stateParams.id);
}]);

