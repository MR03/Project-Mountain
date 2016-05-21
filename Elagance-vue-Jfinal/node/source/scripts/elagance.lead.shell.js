import Vue from 'vue'
import core from './elagance.core'
import page from 'page'
import resource from 'vue-resource'

/*
 * 注册参数/DOM地图/状态管理
 * 使用基本的Flux架构处理状态
 */


// 注册参数
let configMap
// DOM地图
let queryMap
// 状态store
let store


configMap = {

}


queryMap = {

}

store = {
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

// 注册lead-vue
let setVM_lead
// 转场事件
let cut
// 注册sign-vue
let setVM_sign

cut = function() {
    core.$('cut').setAttribute("class","cut-container cutto");
    page('#sign')
}

setVM_lead = function() {
    let vm = new Vue({
        el:'#view-lead',
        data: {
            privateState: {},
            publicState: store.state
        },
        methods: {
            signInTo: function(e) {
                store.setSign_true()
                cut()

            },
            signUpTo: function(e) {
                store.setSign_false()
                cut()
            }
        }
    })
}

setVM_sign = function() {
    let vm = new Vue({
        el:'#view-sign',
        data: {
            privateState: {
                mobile: '',
                password: ''
            },
            publicState: store.state
        },
        methods: {
            toSignUp: function(e) {
                store.setSign_false()
            },
            toSignIn: function(e) {
                store.setSign_true()
            },
            sign: function(e) {
                // 格式化提交参数
                let postMap = core.postMap({
                    url: '/api/test',
                    data: {
                        flag: 'sign',
                        mobile: '测试数据',
                        password: '123456789qwertui111'
                    }
                });

                // ajax提交检查
                this.$http.post(postMap).then(
                    function (response) {
                        // success callback
                        window.location = '/home'
                        core.log(response.data)
                    },  function (response) {
                        // error callback
                    });

                // 根据状态登录/注册
                if(store.state.sign) {
                    // 登录逻辑
                }
                else if (!store.state.sign) {
                    // 注册逻辑
                }
                else {
                    core.log('未知的错误')
                }
            }
        }
    })
}

// 初始化
let initModule = function(){
    // 注册通信插件
    Vue.use(resource)
    // 注册Vue VM
    setVM_lead()
    setVM_sign()
}

// 模块出口
export default initModule;



