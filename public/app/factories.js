angular.module("FlyApp")
.factory("PlanesAPI", ["$http", function($http){
  return {
    getPlanes: function(){
      return $http.get("/api/airplanes");
    },
    getPlane: function(id){
      return $http.get("/api/airplanes/" + id);
    },
    addPlane: function(plane){
      //alter this so it has image etc, mongo stuffs
      $http.post("/api/airplanes", plane)
        .then(function success(res){
          console.log("We did it! " + res);
          return res.data;
        }, function error(err){
          console.log("This plane has been grounded." + err);
          return null;
        })
    },
    deletePlane: function(id){
      console.log("Delete");
      $http.delete("/api/airplanes/"+id)
      .then(function success(res){
        console.log("removed plane: " + res.data);
        return res.data;
      }, function error(err){
        console.log("error: " + err);
        return null;
      })
    },
    updatePlane: function(plane){
      console.log("Update: " + res)
    }
  }
}]);
