'use strict';

// angular
//-----------------------------------------------------------------

// 定义模块
var app = angular.module("shops", ['ngRoute']);

// 路由注册
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // 列表页路由
    .when('/', {
        templateUrl: 'admin/shops/shops_list.html',
        controller: 'ViewController'
    });
}]);

// 控制器
app
// 头部信息
.controller('HeadController', function ($scope) {
    $scope.headConfig = {
        title: '店铺管理',
        keywords: 'angular,电子商城',
        description: '这是一个angular商城项目'
    };
})
// 主视图
.controller('ViewController', function ($scope) {
    $scope.breadcrumb = {
        moduleName: '模块名称',
        viewName: '界面名称'
    };
})
// 主视图->列表视图
.controller('ListController', function ($scope) {
    $scope.breadcrumb = {
        moduleName: '商品管理模块',
        viewName: '列表界面'
    };
})
// 主视图->列表视图->过滤器视图
.controller('FilterController', function ($scope, $http) {
    $scope.find = {
        name: '',
        status: '',
        sumbit: function sumbit() {
            u.log($scope.find.name);
            var url = "/api/shops?op=find" + "&name=" + this.name + "&status=" + this.status;
            u.log(url);
            $http.get(url).success(function (response) {
                $scope.data = response.data;
            });
        }
    };
})
// 主视图->列表视图->表格视图
.controller('TableController', function ($scope, $http) {
    $http.get("/api/shops?op=all").success(function (response) {
        $scope.data = response.data.list;
    });
});
//-----------------------------------------------------------------

// require
//-----------------------------------------------------------------
require(['echo'], function (echo) {
    echo.init();
    //end
});