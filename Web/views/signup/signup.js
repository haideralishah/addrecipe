angular.module('salesMan')
    .controller('signupController', function ($scope, $http, $rootScope, $state) {
      
        $scope.moreIngreients = function () {            
            $rootScope.recipeObject.ingrd.push($scope.recipe.ingredient);
            $rootScope.recipeObject.ingrnQty.push($scope.recipe.ingredient + " " + $scope.recipe.qty);

            console.log($rootScope.recipeObject);
            $scope.recipe.ingredient = '';
            $scope.recipe.qty = '';

        }

        $scope.addCategory = function () {
            if ($scope.recipe.ingredient != "") {
                $rootScope.recipeObject.ingrd.push($scope.recipe.ingredient);
                $rootScope.recipeObject.ingrnQty.push($scope.recipe.ingredient + " " + $scope.recipe.qty);
            }


            $state.go("creatSalesMan");
        }




        // $scope.addUserData = function () {
        //     // $scope.userDetails.push($scope.userData);
        //     // console.log($scope.userDetails);
        //     $http.post("/signup", $scope.userData)
        //         .then(function (success) {
        //             console.log("suceeded");
        //             console.log(success);
        //         }, function (err) {
        //             console.log("failed To Se   nd" + err);
        //         });
        // };
    });
