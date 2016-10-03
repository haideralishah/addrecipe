angular.module('salesMan')
    .controller('creatSalesManController', function ($scope, $http, $rootScope, $state) {

        $scope.moreCategory = function () {
            $rootScope.recipeObject.category.push($scope.recipe.category);
            console.log($rootScope.recipeObject);
            $scope.recipe.category = '';
        }

        $scope.addNutrition = function () {
            if ($scope.recipe.category != "") {
                $rootScope.recipeObject.category.push($scope.recipe.category);
            }


            $state.go("companyprofile");
        }


    });
