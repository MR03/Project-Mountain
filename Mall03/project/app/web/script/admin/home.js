'use strict';

// angular
//-----------------------------------------------------------------
//定义模块
var app = angular.module("home", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'admin/home/main.html',
        controller: 'ViewController'
    }).when('/banner', {
        templateUrl: 'admin/home/banner.html',
        controller: 'ViewController'
    });
}]);
// 控制器
app.controller('HeadController', function ($scope) {
    $scope.headConfig = {
        title: '店铺管理',
        keywords: 'angular,电子商城',
        description: '这是一个angular商城项目'
    };
}).controller('MainController', function ($scope) {
    $scope.breadcrumb = {
        moduleName: '首页管理模块',
        viewName: '选项界面'
    };

    $scope.HomeBanner = function () {
        window.location = "/admin/#/banner";
    };
})
// 主视图
.controller('ViewController', function ($scope, $http) {})
// banner管理
.controller('BannerController', function ($scope, $http) {

    $scope.createView = function () {
        alert(11111);
    };
});

//-----------------------------------------------------------------
// require
require([], function () {

    //end
});