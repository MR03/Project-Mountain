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

    // 获得Url
    var getUrl = function(route, args) {
        var argsJson = JSON.stringify(args);
        var url = configOptions.apiPath + route + '?' + configOptions.jsonFlag + '=' + argsJson;
        return url;
    }

    // ajax的JSON封装
    var json = function(route, args, callback, type, hasloading) {
        var url = type? getUrl(route): getUrl(route,args);
        var flow = {
            url: url,
            type: type?'post':'get',
            dataType: 'json',
            error:function(){
                log('数据异常,异常点:' + url);
            }
        }

        if(callback) {
            flow.success = function(data) {
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

