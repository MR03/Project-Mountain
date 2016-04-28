define(function(){
    var configOptions = {
        jsonFlag: 'jd',
        apiPath: 'http://localhost:8080/api/'
    }

    return {
        // 打印信息
        log: function(msg) {
            console.log(msg);
        },
        // ajax的JSON封装
        json: function(route, args, callback,type, hasloading) {

        }
    }
})

