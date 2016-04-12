'use strict';

// angular
//-----------------------------------------------------------------

var app = angular.module("shop", ['ngRoute']);

// 路由注册
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider;
    // 列表页路由
    //.when('/', {
    //    //templateUrl: 'admin/shops/shops_list.html',
    //    //controller: 'ViewController'
    //});
}]);
//控制器
app.controller('NavController', function ($scope, $location, $http) {

    var requestData = {
        op: "all",
        shopid: $location.search()['shopid']
    };

    $http.get("/api/mobile/home?req=" + JSON.stringify(requestData)).success(function (response) {
        $scope.data = response.shops;
    });
});

//-----------------------------------------------------------------
// require
require(['echo'], function (echo) {
    echo.init();
    //end
});