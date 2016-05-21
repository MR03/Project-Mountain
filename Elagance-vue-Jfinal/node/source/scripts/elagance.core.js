let sizzle = require('./lib/sizzle.js')

// 数据区
// ----------------------------------

let core = {}; // 核心对象
let doc = window.document; // 文档对象

// 私有方法声明
// ----------------------------------

let log // 打印语句
let toQueryString // 格式化json
let cloneObject // 深拷贝对象

// 方法实现区
// ----------------------------------

core.log = log = function(msg) {
    console.log(msg)
};

// 用id选择Dom元素,快
core.$ = function(el) {
    let result = document.getElementById(el) || sizzle();
    return result;
}

// 事件监听器,不兼容IE8了
core.on = function(node, type, listener) {
    if(node.addEventListener) {
        node.addEventListener(type, listener, false);
    }
    return false;
}

// 使用sizzle选择器
core.sizzle = sizzle

// dom就绪后执行
core.ready = function(fn) {
    if(doc.readyState != 'loading') {
        fn()
    } else {
        doc.addEventListener('DOMContentLoaded', fn);
    }
}

// json处理函数
core.toQueryString = toQueryString = function(obj) {
    for(let index in obj) {
        obj[index] = encodeURIComponent(obj[index]);
    }

    obj = JSON.stringify(obj)
    return obj
}


core.cloneObject = cloneObject = function(obj) {
    let clone = {}

    for(let index in obj) {
        // 递归
        clone[index] = typeof obj[index] === 'object' ? cloneObject(obj[index]) : obj[index]
    }

    return clone
}


// 参数处理
core.postMap = function(obj) {
    let reformat = obj;
    let data = cloneObject(obj.data);

    if(
        reformat.url === '' ||
        !reformat.url ||
        reformat.data === '' ||
        !reformat.data
    ) {
        log('url参数或data数据有问题')
    } else {
        reformat.url = encodeURI(obj.url)
        reformat['data']= {};
        reformat['data']['jd'] = toQueryString(data);
    }
    return reformat;
}


// 模块出口
export default core


