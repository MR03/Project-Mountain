// angular
//-----------------------------------------------------------------

//定义模块
var app = angular.module("users", ['ngRoute', 'myApp.services']);

// ajax修改
app.config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for(name in obj) {
            value = obj[name];

            if(value instanceof Array) {
                for(i=0; i<value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value instanceof Object) {
                for(subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };
    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
});


// 路由注册
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // 列表页路由
        .when('/' ,{
            templateUrl: 'admin/users/users_list.html',
            controller: 'MainController'
        })
        // 新建页路由
        .when('/create' ,{
            templateUrl: 'admin/users/users_update.html',
            controller: 'CreateController'
        })
        // 更新页路由
        .when('/update' ,{
            templateUrl: 'admin/users/users_update.html',
            controller: 'UpdateController'
        })
}]);
// 定义全局变量
app.constant('headtitle', '店铺管理')
//控制器
app
    .controller('IndexController', function($scope, $http) {
        $scope.updateId = {};
    })
    .controller('MainController', function($scope, $http, usersService) {

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


    $scope.createView = function() {
        window.location = '/users/#/create';
    }

    $scope.updateView = function(i) {
        $scope.updateId.data = i;
        console.log($scope.updateId.data)
        window.location = '/users/#/update';
    }

    var getdata  = function() {
        usersService.usersaAllRequest('/api/users').success(function(response) {
            $scope.data = response.data.list;
        })
    }
    getdata();

})
    .controller('CreateController', function($scope, $http){
        $scope.cancel = function() {
            history.back();
        }


        $scope.updateSumbit = function() {
            json = {
                code: 'create',
                name: $scope.name,
                email: $scope.email,
                tel: $scope.tel,
                pwd: $scope.pwd
            };
            json = JSON.stringify(json);

            $http.post('/api/accounts/create',  "post=" + json).success(function(data) {
                alert('添加成功')
            })
        }
    })
    .controller('UpdateController', function($scope, $http){
        var getData = function() {
            var url = "/api/accounts/one?" + "id=" + $scope.updateId.data;
            $http.get(url)
                .success(function(response) {
                    $scope.id = response.data.account_id;
                    $scope.name = response.data.account_name;
                    $scope.email = response.data.email;
                    $scope.tel = response.data.tel;
                }
            );
        };
        getData();

        $scope.cancel = function() {
            history.back();
        }

        $scope.updateSumbit = function() {

            var url = "/api/accounts/myupdate?" + "id=" + $scope.id + "&name=" + $scope.name + "&email=" + $scope.email + "&tel=" + $scope.tel;
            $http.get(url)
                .success(function(response) {
                    alert("修改成功")
                }
            );

        }
    })

//-----------------------------------------------------------------
// require
require(['echo'], function(echo) {

        echo.init();
//end
    });
