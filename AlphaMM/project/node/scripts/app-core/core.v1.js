var log = function(msg) {
    console.log(msg);
};

define(function(){

    // 项目注册信息
    var configOptions = {
        devMode: 'true',
        jsonFlag: 'jd',
        apiPath: 'http://localhost:8080/api/'
    }

    // 打印信息
    var log = function(msg) {
        console.log(msg);
    };


    var toQueryString = function(obj) {
        for(var index in obj) {
            obj[index] = encodeURIComponent(obj[index]);
        }

        return obj;
    }

    // 获得Url
    var getUrl = function(route, args) {
        var argsJson = JSON.stringify(toQueryString(args));

        var url = configOptions.apiPath + route + '?' + configOptions.jsonFlag + '=' + argsJson;
        url = encodeURI(url);
        return url;
    }

    // ajax的JSON封装
    var json = function(route, args, callback, type, hasloading) {

        var url = type? getUrl(route): getUrl(route,args);
        var flow = {
            url: url,
            type: type?'post':'get',
            dataType: 'JSON',
            error:function(){
                // 开发模式下打印数据接口
                if(configOptions.devMode){ log('数据异常,异常接口:' + url)};
            }
        }

        if(callback) {
            flow.success = function(data) {
                // 开发模式下打印数据接口
                if(configOptions.devMode){log('后台接口:' + url)};
                callback(data);
            }
        }

        $.ajax(flow);
    };


    // 对外暴露接口
    return {
        log: log,
        json: json
    }
})

