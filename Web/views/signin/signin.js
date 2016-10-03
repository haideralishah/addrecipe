angular.module('salesMan')
    .controller('signinController', function ($rootScope, $scope, $http, $state) {
        console.log($rootScope.recipeObject);

        $scope.addRecipe = function () {

            
            // $rootScope.recipeObject.category = $scope.recipe.category;
            $rootScope.recipeObject.recipeMethod = $scope.recipe.recipeMethod;
            $rootScope.recipeObject.dishImg = $scope.recipe.dishImg;
            $rootScope.recipeObject.dishTime = $scope.recipe.dishTime;
            $rootScope.recipeObject.dishImgType = $scope.recipe.dishImgType;
            $rootScope.recipeObject.serve = $scope.recipe.serve;

            $http.post("/addrecipe", $rootScope.recipeObject)
                .then(function (success) {
                    console.log(success);
                }, function (err) {
                    console.log(err);
                })
        }



        // $scope.userDetails = [];
        // $scope.signIn = function () {
        //     $http.post("/signIn", $scope.userData)
        //         .then(function (success) {
        //         // console.log(success);
        //         var userData = success;
        //         console.log(userData.data._id);
        //         localStorage.setItem("token", success.data._id);
        //         $rootScope.userData = userData.data;
        //         $http.post('/checkCoExist', userData)
        //             .then(function (successsec) {
        //             //  console.log(successsec);
        //             if (successsec.data == false) {
        //                 $rootScope.userData = success;
        //                 $state.go("home");
        //             }
        //             else {
        //                 $rootScope.userData = success;
        //                 $rootScope.companyData = successsec;
        //                 // console.log(successsec);
        //                 $state.go("companyprofile");
        //             }
        //             // $rootScope.userData = success;
        //             // $state.go("home");
        //         }, function (err) {
        //             console.log("failed To Send" + err);
        //         });
        //     }, function (err) {
        //         console.log("failed To Send" + err);
        //     });
        // };
    });
