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
    $scope.select = {
        name: '',
        email: '',
        tel: ''
    };
    $scope.selectSumbit = function() {
        var url = "/api/accounts/select?" + "name=" + $scope.select.name + "&email=" + $scope.select.email + "&tel=" + $scope.select.tel;
        $http.get(url)
            .success(function(response) {
                $scope.data = response.data;
            }
        );

    }

    $scope.check = false;


    $scope.deleteSumbit = function() {
        var params = {};
        for(var i in  $scope.data) {
            if($scope.data[i].check) {
                params[i] = $scope.data[i].account_id;
            }
        }

        var url = "/api/accounts/delete?" + "id=" + JSON.stringify(params);
        console.log(url)
        $http.get(url)
            .success(function(response) {

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
require(['echo'], function(echo) {

        echo.init();
//end
    });
