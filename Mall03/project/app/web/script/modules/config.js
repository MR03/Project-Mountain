require.config({
    baseUrl: 'script/',
    paths: {
        'jquery': '/script/lib/jquery/jquery-2.0.3',
        'bootstrap': '/script/lib/bootstrap/bootstrap',
        'echo': '/script/lib/echo/echo',
        'swiper': '/script/lib/swiper/swiper'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'swiper': {
            deps: ['jquery']
        }
    }
});