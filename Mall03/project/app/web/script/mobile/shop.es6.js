'use strict';

// angular
//-----------------------------------------------------------------

var app = angular.module("shop", ['ngRoute']);

// 路由注册
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // 列表页路由
    //.when('/', {
    //    //templateUrl: 'admin/shops/shops_list.html',
    //    //controller: 'ViewController'
    //});
}]);
//控制器
app.controller('NavController', function ($scope ,$location) {
    $scope.thisname = $location.path('/shop');

    //$scope.shopid = $location.search()['shop'];
    console.log($location.search())

    //$http.get("/api/shops?op=all").success(function(response) {
    //    $scope.data = response.data.list;
    //})
});