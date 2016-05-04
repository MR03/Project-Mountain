require.config({
    baseUrl: '/js',
    paths: {
        'isMobile': 'lib/isMobile/isMobile',
        'jquery': 'lib/jquery/jquery-2.0.3',
        'swiper': 'lib/swiper/swiper-3.3.1.min',
        'avalon': 'lib/avalon/avalon-framework',
        'core': 'core/v1/core',
        'vue': 'lib/vue/vue',
        'cmHome': 'customer-mobile/home/v1/home',
        'awAdvs': 'admin-web/advs/v1/advs',
        'bootstrap': 'lib/bootstrap/bootstrap.min',
        'gritter': 'lib/jquery/jquery.gritter.min'
    },
    shim: {
        'core': {
            exports: '$',
            deps: ['jquery']
        },
        'bootstrap': {
            exports: '$',
            deps: ['jquery']
        },
        'gritter': {
            exports: '$',
            deps: ['jquery']
        },
        'cmHome': {
            exports: 'avalon',
            deps: ['avalon']
        },
        'awAdvs': {
            exports: 'avalon',
            deps: ['avalon']
        }
    },
    urlArgs: 'v=' +  (new Date()).getTime()
});