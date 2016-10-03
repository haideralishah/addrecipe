angular.module('salesMan')
    .controller('homeController', function ($rootScope, $scope, $http, $state) {

        $scope.recipes = [];

        $http.post("/checkRecipe")
            .then(function (success) {
                //          $rootScope.uID = success._id;

                //$scope.recipes = success.data[0].dish;
                for(var i = 0; i < success.data.length; i++){
                    success.data[i].matchingIngrd = 0;
                    if(!success.data[i].serve){
                        success.data[i].serve = "";
                    }
                    $scope.recipes.push(success.data[i]);

                }

                console.log($scope.recipes);
                // $scope.recipes.category = success.data.category;
                // $scope.recipes.dishImg = success.data.dishImg;
                // $scope.recipes.dishTime = success.data.dishTime;
                // $scope.recipes.ingrnQty = success.data.ingrnQty;
                // $scope.recipes.ingrd = success.data.ingrd;
                // $scope.recipes.dish = success.data.dish;

                // for (var key in $scope.recipes) {
                //     console.log(key);
                //     for (var iKey in $scope.recipes[key]) {
                //         console.log(iKey);
                //     }
                // }

                //             console.log("Responded Recipes", $scope.recipes);





            }, function (err) {
                $scope.recipes = err;
                console.log("failed To Send" + err);
            });




    });
