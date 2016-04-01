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
        .when('/update' ,{
            templateUrl: 'accounts/accounts_update.html',
            controller: 'UpdateController'
        })
}])
app
    .controller('MainController', function($scope, $http) {
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
        var ids = [];
        for(var i in  $scope.data) {
            if($scope.data[i].check) {
                ids.push($scope.data[i].account_id);
            }
        }
        if(ids.length <= 0){
            alert("没有选中任何一项!")
            return;
        }

        $http({
            method: 'GET',
            url: "/api/accounts/delete",
            params : {
                code: 'delete',
                id: ids
            }
        }).success(function(data) {
            getdata();
        })

    }


    $scope.updateView = function() {
        window.location = '/accounts/#/update';
    }

    var getdata  = function() {
        $http.get("/api/accounts")
            .success(function(response) {
                $scope.data = response.data.list;
            }
        );
    }
    getdata();

})
    .controller('UpdateController', function($scope, $http){
        $scope.cancel = function() {
            history.back();
        }


        $scope.updateSumbit = function() {

            $http({
                method: 'POST',
                url: '/api/accounts/create',
                data : {
                    code: 'create',
                    name: $scope.name,
                    email: $scope.email,
                    tel: $scope.tel,
                    pwd: $scope.pwd
                }
            }).success(function(data) {
                alert('添加成功')
            })
        }
    })
//-----------------------------------------------------------------
// require
require(['echo'], function(echo) {

        echo.init();
//end
    });
