// 数据区
// ----------------------------------

let utils = {}; // 工具对象
let doc = window.document; // 文档对象

// 方法实现区
// ----------------------------------

utils.ready = function(fn) {
    if(doc.readyState != 'loading') {
        fn()
    } else {
        doc.addEventListener('DOMContentLoaded', fn);
    }
};

// 模块出口
module.exports = utils;





