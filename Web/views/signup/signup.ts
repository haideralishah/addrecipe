

angular.module('salesMan')

  .controller('signupController', ($scope, $http) => {
    $scope.userDetails = [];

    $scope.addUserData = function () {
      // $scope.userDetails.push($scope.userData);
      // console.log($scope.userDetails);

      console.log($scope.recipe);

      // $http.post("/signup", $scope.recipe)
      // .then(function(success){
      //   console.log("suceeded")
      //   console.log(success);
      // },
      // function(err){
      //   console.log("failed To Send" + err)
      // });





    }


  })