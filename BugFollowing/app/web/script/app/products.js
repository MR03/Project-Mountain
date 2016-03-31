// angular
//-----------------------------------------------------------------

//定义模块
var app = angular.module("products", ['ngRoute']);

//控制器-tableCtrl
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/' ,{
            templateUrl: 'products/main.html',
            controller: 'MainController'
        })
}])
app.controller('MainController', function($scope, $http) {
    $scope.moduleName = "产品管理模块";
    $scope.viewName = "产品列表界面";

    $http.get("/api/accounts")
        .success(function(response) {
            $scope.data = response.data;
            console.log($scope.data);
        }
    );

})

//-----------------------------------------------------------------
// require
require(
    [],

    function() {

//end
    });
