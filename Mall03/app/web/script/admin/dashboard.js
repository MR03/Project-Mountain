// angular
//-----------------------------------------------------------------

//定义模块
var app = angular.module("dashboard", ['ngRoute']);

//控制器-tableCtrl
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/' ,{
            templateUrl: 'admin/dashboard/main.html',
            controller: 'MainController'
        })
}])
app.controller('MainController', function($scope, $http) {
    $scope.name = "这是导航模块";
})

//-----------------------------------------------------------------
// require
require(
    [],

    function() {

//end
    });
