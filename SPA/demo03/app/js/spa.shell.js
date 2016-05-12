spa.shell = (function(){

    // 参数map
    var configMap = {
        anchor_schema_map: {
            chat: {
                opened: true,
                closed: true
            }
        },
        main_html: String() +
        '    <div id="spa">'+
        '        <div class="spa-shell-head">'+
        '            <div class="spa-shell-head-logo"></div>'+
        '            <div class="spa-shell-head-acct"></div>'+
        '            <div class="spa-shell-head-search"></div>'+
        '        </div>'+
        '        <div class="spa-shell-main">'+
        '            <div class="spa-shell-main-nav"></div>'+
        '            <div class="spa-shell-main-content"></div>'+
        '        </div>'+
        '        <div class="spa-shell-foot"></div>'+
        '        <div class="spa-shell-modal"></div>'+
        '    </div>',
        chat_retract_time: 300,
        chat_retract_height: 15,
        chat_retracted_title: '点击展开',
        chat_extend_time: 250,
        chat_extend_height: 450,
        chat_extended_title: '点击收起'
    };
    // 状态map
    var stateMap = {
        anchor_map: {},
    };
    // JQmap
    var jqueryMap = {};

    // 函数
    // -----------------------------
    // 复制对象
    var copyAnchorMap;
    // 设置JqueryMap
    var setJqueryMap;
    // 滑动事件
    var toggleChat;
    // url锚
    var changeAnchorPart;
    // 路由改变
    var onHashchange;
    // 聊天滑块事件
    var onClickChat;
    // 初始模块
    var initModule;


    copyAnchorMap = function() {
        return $.extend(true, {}, stateMap.anchor_map);
    };

    changeAnchorPart = function(arg_map) {
        var anchor_map_revise = copyAnchorMap(),
            bool_return = true,
            key_name,
            key_name_dep;

        KEYVAL:
        for( key_name in arg_map ) {
            if( arg_map.hasOwnProperty( key_name) ) {
                if( key_name.indexOf( '_') === 0) {
                    continue KEYVAL;
                }

                anchor_map_revise[key_name] = arg_map[key_name];

                key_name_dep = '_' + key_name;

                if( arg_map[key_name_dep]) {
                    anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
                }
                else {
                    delete anchor_map_revise[key_name_dep];
                    delete anchor_map_revise['_s' + key_name_dep];
                }
            }
        }

        try {
            $.uriAnchor.setAnchor(anchor_map_revise);
        }
        catch( error ) {
            $.uriAnchor.setAnchor(stateMap.anchor_map, null, true);
            bool_return = false;
        }

        return bool_return;
    };


    // 这个函数有问题,暂时不用
    onHashchange = function(event) {
        var anchor_map_previous = copyAnchorMap(),
            anchor_map_proposed,
            _s_chat_previous,
            _s_chat_proposed,
            s_chat_proposed;

        try {
            anchor_map_previous = $.uriAnchor.makeAnchorMap();
        }
        catch( error ) {
            $.uriAnchor.setAnchor(anchor_map_previous, null, true);
            return false;
        }
        stateMap.anchor_map = anchor_map_proposed;

        _s_chat_previous = anchor_map_previous._s_chat;
        _s_chat_proposed = anchor_map_proposed._s_chat;

        if( !anchor_map_previous || _s_chat_proposed !== _s_chat_proposed) {
            s_chat_proposed = anchor_map_proposed.chat;
            switch ( s_chat_proposed ) {
                case 'open':
                    toggleChat(true);
                    break;
                case 'closed':
                    toggleChat(false);
                    break;
                default :
                    toggleChat(false);
                    delete anchor_map_proposed.chat;
                    $.uriAnchor.setAnchor( anchor_map_proposed, null, true);
            }
        }

        return false;
    }


    setJqueryMap = function() {
        var $container = stateMap.$container;
        jqueryMap = {
            $container: $container
        };
    };

    toggleChat = function(do_extend, callback) {
        var px_chat_ht = jqueryMap.$chat.height(),
            is_open = (px_chat_ht === configMap.chat_extend_height),
            is_closed = (px_chat_ht === configMap.chat_retract_height),
            is_sliding = (!is_open && !is_closed);

        if( is_sliding ) {return false;}

        if( do_extend ) {
            jqueryMap.$chat.animate(
                { height: configMap.chat_extend_height },
                configMap.chat_extend_time,
                function() {
                    jqueryMap.$chat.attr('title', configMap.chat_extended_title);
                    stateMap.is_chat_retracted = false;
                    if( callback) { callback( jqueryMap.$chat); }
                }
            );
            return true;
        } else { // 个人认为这样明确分支好些
            jqueryMap.$chat.animate(
                {height: configMap.chat_retract_height},
                configMap.chat_retract_time,
                function() {
                    jqueryMap.$chat.attr('title', configMap.chat_retracted_title);
                    stateMap.is_chat_retracted = true;
                    if(callback) { callback(jqueryMap.$chat); }
                }
            );
            return true;
        }
    };


    onClickChat = function(event) {
        if(toggleChat(stateMap.is_chat_retracted)) {
            changeAnchorPart({
                chat: (stateMap.is_chat_retracted ? 'open': 'closed')
            });
        }
        return false;
    }

    initModule = function($container) {
        // 布局容器
        stateMap.$container = $container;
        // 主布局文件
        $container.html(configMap.main_html);
        // 设置JqueryMap
        setJqueryMap();
        // 设置属性并添加事件onClickChat
        jqueryMap.$chat.attr('title', configMap.chat_retracted_title).click(onClickChat);
        //

        // chat模块配置和初始化
        spa.chat.configModule({
            set_chat_anchor: set_chat_anchor,
            chat_model: spa.model.chat,
            people_model: spa.model.people
        });
        spa.chat.initModule(jqueryMap.$container);

    };

    return {initModule: initModule};
}())
