angular.module('salesMan')
    .controller('creatProductController', function ($rootScope, $scope, $http, $state) {

        $rootScope.recipeObject = {
            dish: '',
            category: [],
            ingrd: [],
            ingrnQty: [],
            Recipe: '',
            dishImg: '',
            dishTime: '',
            matchingIngrd: 0,
            serve: '',
            nutrition: {
                kcal: '',
                fat: '',
                saturates: '',
                carbs: '',
                sugars: '',
                fibre: '',
                protein: '',
                salt: ''
            }
        }

        $scope.recipeCheck = function () {
            if ($scope.recipe.dish != "") {
                $rootScope.recipeObject.dish = $scope.recipe.dish;
            }

            $http.post("/checkRecipeName", $rootScope.recipeObject)
                .then(function (success) {
                    console.log(success);
                    if (success.data == false) {
                        $state.go("signup");
                    } else {
                        $state.go("orderDetails");
                    }


                }, function (err) {
                    console.log(err);
                });
        };
    });
