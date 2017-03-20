angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.title = "Look at all my planes!"
  $scope.planes = [];
  $scope.searchResults = [];

  PlanesAPI.getPlanes().then(function success(res){
    console.log("We have lift off.", res);
    $scope.planes = res.data;
  }, function error(err){
    console.log("Uh oh. Crashed.", err);
  })

  $scope.search = function(){
    console.log("searching for " + this.searchTerm);
    PlanesAPI.getPlanes().then(function success(res){
      $scope.searchResults = res.data;
    }, function error(err){
      console.log("Crash and burn. " + err);
    })
  }

}])

.controller("DetailCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.plane = {};

  PlanesAPI.getPlane($stateParams.id).then(function success(res){
    console.log("Woo!", res);
    $scope.plane = res.data;
  }, function error(err){
    console.log("Boo!", err);
  })

  $scope.updatePlane = function(){
    console.log($scope.plane);
    PlanesAPI.updatePlane($scope.plane).then(function success(res){
      console.log("Modifications made.", res);
    }, function error(err){
      console.log("Oh planes.", err)
    })
  }
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
      "engines": this.engines,
      "image": this.image
    }
    PlanesAPI.addPlane(plane)
    this.manufacturer = "",
    this.model = "",
    this.engines = 0,
    this.image = ""
  }
}])

.controller("deleteCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  console.log("Delete " + ($stateParams.id));
  PlanesAPI.deletePlane($stateParams.id);
}]);

