require(['jquery', 'swiper','avalon', 'core'],function($, swiper, avalon, core){
    var thisModel = {
        all: function(callback) {
            var par = {
                op: 'all'
            };
            core.json('admin/advs', par, callback);
        }
    }

    var homeController = {
        render: thisModel.all(function(data){
            // 获得数据
            var $scope = data;

            // 渲染
            var vm = avalon.define({
                $id: "banner",
                list: $scope.banner
            })
            avalon.scan();
        })
    };
});