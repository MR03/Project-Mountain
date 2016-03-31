// angular
//-----------------------------------------------------------------

//定义模块
var app = angular.module("accounts", ['ngRoute']);

//控制器-tableCtrl
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/' ,{
            templateUrl: 'accounts/accounts_main.html',
            controller: 'MainController'
        })
}])
app.controller('MainController', function($scope, $http) {
    $scope.moduleName = "用户管理模块";
    $scope.viewName = "用户列表界面";
    $scope.select = {};

    $scope.selectSumbit = function() {
        var url = "/api/accounts/select?" + "name=" + $scope.select.name;
        $http.get(url)
            .success(function(response) {
                $scope.data = response.data;
            }
        );
    }

    $http.get("/api/accounts")
        .success(function(response) {
            $scope.data = response.data.list;
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
