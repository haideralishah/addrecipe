angular.module('salesMan')
    .controller('orderDetailsController', function ($rootScope, $scope, $state) {

        $scope.gotoaddrecipe = function(){

            $state.go('creatProduct');

        }  
});
