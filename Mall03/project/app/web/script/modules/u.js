/* ========================================================================
 * public util function v0.0.1
 * u = utils
 * 支持浏览器: IE8+
 * ======================================================================== */

(function(){

// 命名空间
//----------------------------
    if(!window.u) { window.u = window.util = {}; }

// 集中声明
//----------------------------
    window.u.test = test();
    window.u.log = log;
    window.u.dir = dir;

//方法实现
//----------------------------

    // 测试库链接
    function test() {
        log("util is linking");
        return null;
    }

	// 打印信息
    function log (msg) {
        console.log(msg);
    }

	// 打印对象
    function dir(obj) {
        console.dir(obj);
    }

    function get() {

    }


//---
})( window );
