require(['jquery', 'swiper','vue','core'],function($, swiper, Vue, core){
    var mySwiper = new Swiper('.banner', {
        autoplay: 3000,//可选选项，自动滑动
        loop : true,
        loopAdditionalSlides : 1,
        pagination : '.swiper-pagination',
        paginationBulletRender: function (index, className) {
            return '<span class="banner-pagination ' + className + '">' + '</span>';
        }
    })

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
    })


    var $scope = {
        data : "test"
    }

    var tes = new Vue({
        el: '#searchText',
        data: {
            message: $scope.data
        }
    })


    var par = {
        op: 'all'
    }


    $.ajax({
        url: 'http://localhost:8080/api/mobile/home?jd=' + JSON.stringify(par),
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            core.log(data)
        }
    })


});