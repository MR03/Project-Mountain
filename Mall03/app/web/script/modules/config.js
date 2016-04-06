require.config({
    baseUrl: 'script/',
    paths: {
        'jquery': '/script/lib/jquery/jquery-2.0.3',
        'bootstrap': '/script/lib/bootstrap/bootstrap',
        'echo': '/script/lib/echo/echo',
        // 一定要这么写,AMD规范
        //'jquery.validate': '../plugin/validate/jquery.validate',
        //'validateHelp': '../plugin/validate/additional-methods',
    },
    shim: {
        'bootstrap': {
            exports: "$",
            deps: ['jquery']
        }
    }
});