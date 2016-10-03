angular.module('salesMan')
    .controller('companyprofileController', function ($timeout, $rootScope, $scope, $http, $state, $firebaseArray) {
        console.log($rootScope.recipeObject);

        $scope.recipe = {
            kcal: '',
            fat: '',
            saturates: '',
            carbs: '',
            sugars: '',
            fibre: '',
            protein: '',
            salt: ''
        }




        $scope.enterRecipe = function () {

            $rootScope.recipeObject.nutrition.kcal = $scope.recipe.kcal;
            $rootScope.recipeObject.nutrition.fat = $scope.recipe.fat;
            $rootScope.recipeObject.nutrition.saturates = $scope.recipe.saturates;
            $rootScope.recipeObject.nutrition.carbs = $scope.recipe.carbs;
            $rootScope.recipeObject.nutrition.sugars = $scope.recipe.sugars;
            $rootScope.recipeObject.nutrition.fibre = $scope.recipe.fibre;
            $rootScope.recipeObject.nutrition.protein = $scope.recipe.protein;
            $rootScope.recipeObject.nutrition.salt = $scope.recipe.salt;
            console.log($rootScope.recipeObject);
            $state.go("signin");
        };

    });
