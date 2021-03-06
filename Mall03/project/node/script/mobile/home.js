// angular
//-----------------------------------------------------------------
var app = angular.module("home", ['ngRoute']);

// 路由注册
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // 列表页路由
        .when('/' ,{
            //templateUrl: 'admin/shops/shops_list.html',
            //controller: 'ViewController'
        })
}]);
//控制器
app
.controller('MainController', function($scope, $http) {
        var requestData = {
            op : "all",
            size: 4
        }

        var url = "/api/mobile/home?req=" + JSON.stringify(requestData);
        $http.get(url).success(function(response) {
            $scope.data = response;
        })

        $scope.snap = function() {
            alert("跳转至抢购页面")
        }
})

//-----------------------------------------------------------------
// require
require(['jquery', 'echo', 'swiper'], function($, echo, swiper) {

    $(function(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 3000,
            pagination: '.swiper-pagination',
            loop : true
        })
    })

//end
});