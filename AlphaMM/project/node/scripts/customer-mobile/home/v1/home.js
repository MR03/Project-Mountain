require(['jquery', 'swiper','vue'],function($, swiper, Vue){
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

    new Vue({
        el: '#searchText',
        data: {
            message: '搜索Vue.js!'
        }
    })


});