

require(['jquery', 'swiper','Vue', 'core'],function($, swiper, Vue, core){
    var homeModel = {
        all: function(callback) {
            var par = {
                op: 'all'
            };
            core.json('mobile/home', par, callback);
        }
    }

    var homeController = {
        banner: function(){
            var mySwiper = new Swiper('.banner', {
                autoplay: 3000,//可选选项，自动滑动
                loop : true,
                loopAdditionalSlides : 1,
                pagination : '.swiper-pagination',
                paginationBulletRender: function (index, className) {
                    return '<span class="banner-pagination ' + className + '">' + '</span>';
                }
            })
        }(),
        menu: function(){
            $('#pageUp').click(function(){
                $('body').scrollTop(0);
            });

            $('#plus').click(function(){
                $('#plusNav').css('display', 'block');
                $(this).css('display', 'none');
                $('.overlay-black').css('display', 'block');
            });

            $('#plusNavClose, .overlay-black').click(function(){
                $('#plusNav').css('display', 'none');
                $('#plus').css('display', 'block');
                $('.overlay-black').css('display', 'none');
            });
        },
        data: homeModel.all(function(res){
                var $scope = res.data;
                core.log($scope.pageSize)
                // 直接覆盖前端已部署文件
                new Vue({
                    el: '#searchText',
                    data: {
                        message: 'dfsfs1111'
                    }
                });
        })
    };

});