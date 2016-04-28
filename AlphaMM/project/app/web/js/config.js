require.config({
    baseUrl: './js',
    paths: {
        'isMobile': 'lib/isMobile/isMobile',
        'jquery': 'lib/jquery/jquery-2.0.3',
        'swiper': 'lib/swiper/swiper-3.3.1.min'
    },
    urlArgs: 'v=' +  (new Date()).getTime()
});