spa.chat = (function(){
    var configMap = {
        main_html: String() +
                '<div style="padding:1em; color: #fff;">' +
                'Sya hello to chat' +
                '</div>',
        settable_map: {}
    };
    var stateMap = {
        $container: null
    };
    var jqueryMap = {};
    // 功能函数
    var setJqueryMap;
    var configModule;
    var initModule;

    setJqueryMap = function() {
        var $container = stateMap.$container;
        jqueryMap = {
            $container: $container
        };
    }

    configModule = function(input_map) {
        spa.util.setConfigMap({
            input_map: input_map,
            settable_map: configMap.settable_map,
            config_map: configMap
        });
        return true;
    }

    initModule = function($container) {
        $container.html(configMap.main_html);
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    }

    return {
        configModule: configModule,
        initModule: initModule
    }
}())
