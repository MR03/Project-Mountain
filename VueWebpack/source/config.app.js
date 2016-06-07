/*
 * 应用定义
 */

// 应用初始化和参数注册
let app = {
    // 注册Resource组件
    configVueResource: function() {
        Vue.use(resource)
    },
    // 初始化
    init: function() {
        this.configVueResource()
    },
    configMap: {
        baseUrl: 'http://localhost:3000/'
    }
}

// 输出
export default app