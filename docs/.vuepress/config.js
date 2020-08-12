module.exports = {
    base: '/',
    port: '9999',
    title: '源于生活',
    description: 'write something',
    themeConfig: {
        // nav: [
        // ],
        sidebar: [
            {
                "title": "关于code",
                "collapsable": true,
                "children": [
                    "/Article/code/实现小型打包工具",
                    "/Article/code/NextTick 原理分析",
                    "/Article/code/Service Worker",
                    "/Article/code/Vue 和 React 之间的区别",
                    "/Article/code/vue的mvvm原理",
                    "/Article/code/前端路由原理",
                    "/Article/code/vue编译过程",
                    "/Article/code/浏览器的缓存策略",
                    "/Article/code/浏览器缓存位置",
                    "/Article/code/多语言",
                    "/Article/code/地图学习",
                    "/Article/code/数据双向绑定的分析和简单实现",
                    "/Article/code/多语言",
                    "/Article/code/出租车平台性能优化",
                    "/Article/code/通过队列和栈实现深度优先遍历和广度优先遍历",
                    "/Article/code/DSN解析",
                    "/Article/code/Web单张大图浏览缓慢问题解决",
                ]
            },
            {
                "title": "vue组件",
                "collapsable": true,
                "children": [
                    "/Article/code/vue组件精讲/1.vue.js的精髓--组件",
                    "/Article/code/vue组件精讲/2.基础：Vue.js 组件的三个 API：prop、event、slot",
                    "/Article/code/vue组件精讲/4.组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法",
                    "/Article/code/vue组件精讲/5.实战 1：具有数据校验功能的表单组件——Form",
                    "/Article/code/vue组件精讲/6.组件的通信 3：找到任意组件实例——findComponents 系列方法",
                    "/Article/code/vue组件精讲/7.实战 2：组合多选框组件——CheckboxGroup & Checkbox",
                    "/Article/code/vue组件精讲/8.Vue 的构造器——extend 与手动挂载——$mount",
                    "/Article/code/vue组件精讲/9.实战 3：动态渲染 .vue 文件的组件—— Display",
                    "/Article/code/vue组件精讲/10.实战 4：全局提示组件——$Alert",
                    "/Article/code/vue组件精讲/11.更灵活的组件：Render 函数与 Functional Render",
                    "/Article/code/vue组件精讲/12.实战 5：可用 Render 自定义列的表格组件——Table",
                    "/Article/code/vue组件精讲/13.实战 6：可用 slot-scope 自定义列的表格组件——Table",
                    "/Article/code/vue组件精讲/14.递归组件与动态组件",
                    "/Article/code/vue组件精讲/15.实战 7：树形控件——Tree",
                    "/Article/code/vue组件精讲/16.拓展：Vue.js 容易忽略的 API 详解",
                    "/Article/code/vue组件精讲/17.拓展：Vue.js 面试、常见问题答疑",
                    "/Article/code/vue组件精讲/18.拓展：如何做好一个开源项目（上篇）",
                    "/Article/code/vue组件精讲/19.拓展：如何做好一个开源项目（下篇）",
                    "/Article/code/vue组件精讲/20.写在最后",


                ]
            }
            // {
            //     "title": "关于生活",
            //     "collapsable": false,
            //     "children": [
            //         "/Article/life/选房"
            //     ]
            // }
        ]
    },
    plugins: [
        "vuepress-plugin-cat"
    ]
}