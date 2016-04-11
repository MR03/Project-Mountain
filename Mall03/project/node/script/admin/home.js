// angular
//-----------------------------------------------------------------

//定义模块
var app = angular.module("home", ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/' ,{
            templateUrl: 'admin/home/main.html',
            controller: 'ViewController'
        })
}])
// 控制器
app.controller('HeadController', function ($scope) {
    $scope.headConfig = {
        title: '店铺管理',
        keywords: 'angular,电子商城',
        description: '这是一个angular商城项目'
    };
})
// 主视图
.controller('ViewController', function($scope, $http) {
        $scope.breadcrumb = {
            moduleName: '首页管理模块',
            viewName: '选项界面'
        };
})








//-----------------------------------------------------------------
// require
require(
    [],

    function() {

//end
    });
