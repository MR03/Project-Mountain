require.config({
    baseUrl: './js',
    paths: {
        'isMobile': 'lib/isMobile/isMobile',
        'jquery': 'lib/jquery/jquery-2.0.3',
        'swiper': 'lib/swiper/swiper-3.3.1.min',
        'avalon': 'lib/avalon/avalon-framework',
        'core': 'core/v1/core',
        'cmHome': 'customer-mobile/home/v1/home'
    },
    shim: {
        'core': {
            exports: '$',
            deps: ['jquery']
        },
        'cmHome': {
            exports: 'avalon',
            deps: ['avalon']
        }
    },
    urlArgs: 'v=' +  (new Date()).getTime()
});