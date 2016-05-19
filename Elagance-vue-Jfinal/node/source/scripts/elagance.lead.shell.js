import Vue from 'vue'
import core from './elagance.core'
import page from 'page'
import resource from 'vue-resource'

/*
 * 注册参数/DOM地图/状态管理
 */

let configMap
let queryMap
let stateMap

// 注册参数
configMap = {

}

// DOM地图
queryMap = {

}

// stateMap
stateMap = {
    to_sign: true
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
}

setVM_lead = function() {
    let vm = new Vue({
        el:'#view-lead',
        data: stateMap,
        methods: {
            signInTo: function(e) {
                stateMap.to_sign = true
                cut()
                page('#signin')
            },
            signUpTo: function(e) {
                stateMap.to_sign = false
                cut()
                page('#signon')
            }
        }
    })
}

setVM_sign = function() {
    let vm = new Vue({
        el:'#view-sign',
        data: stateMap,
        methods: {
            toSignUp: function(e) {
                stateMap.to_sign = false
            },
            toSignIn: function(e) {
                stateMap.to_sign = true
            },
            sign: function(e) {
                if(stateMap.to_sign) {
                    // 登录逻辑
                    this.$http.get({url: '/api/test'}).then(
                        function (response) {
                            // success callback
                            core.log(response)


                        },  function (response) {
                            // error callback
                        });
                }
                else if (!stateMap.to_sign) {
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
    setVM_lead()
    setVM_sign()
}

// 模块出口
export default initModule;



