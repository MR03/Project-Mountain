// 模块导入
import Barheader from '../../components/bar.header'

/*
 * 注册参数/DOM地图/状态管理
 * 使用基本的Flux架构处理状态
 */

// 状态store
let store = {
    state: {
        sign: true
    },
    setSign_true: function() {
        this.state.sign = true
    },
    setSign_false: function() {
        this.state.sign = false
    }
}

/*
 * 业务逻辑
 */

let spa = {} // 页面对象

// 引用组件
spa.header = function(){
    new Vue({
        el: '#header',
        components: { Barheader }
    })
}

// 注册vue实例
spa.hello = function() {
    new Vue({
        el: '#test',
        ready: function(){
            this.$http.get('/mock.json').then(
                function (response) {
                    console.log(response.data)
                },  function (response) {
                    // error callback
                });
        },
        data: {
            msg: 'hello world!'
        }
    })
}

// 初始化
let initModule = function(config) {
    console.log(config)
    spa.header()
    spa.hello()
}

/*
 * 模块出口
 */
export default initModule;

