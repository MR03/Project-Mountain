require.config({
    baseUrl: './js',
    paths: {
        'isMobile': 'lib/isMobile/isMobile',
        'jquery': 'lib/jquery/jquery-2.0.3',
        'swiper': 'lib/swiper/swiper-3.3.1.min',
        'Vue': 'lib/vue/vue',
        'core': 'core/v1/core',
        'cmHome': 'customer-mobile/home/v1/home'
    },
    shim: {
        'core': {
            exports: "$",
            deps: ['jquery']
        }
    },
    urlArgs: 'v=' +  (new Date()).getTime()
});