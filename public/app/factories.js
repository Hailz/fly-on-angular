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
      $http.post("/api/airplanes", plane)
        .then(function success(res){
          // console.log("We did it! " + res);
          return res.data;
        }, function error(err){
          // console.log("This plane has been grounded." + err);
          return null;
        })
    },
    deletePlane: function(id){
      // console.log("Delete");
      $http.delete("/api/airplanes/"+id)
      .then(function success(res){
        // console.log("removed plane: " + res.data);
        return res.data;
      }, function error(err){
        // console.log("error: " + err);
        return null;
      })
    },
    updatePlane: function(plane){
      // console.log("Update: ");
      return $http.put("api/airplanes/" + plane._id, plane)
      .then(function success(res){
        // console.log("Lift off " + res)
        return res.data;
      }, function error(err){
        // console.log("Crash..." + err)
        return null;
      })
    }
  }
}]);
