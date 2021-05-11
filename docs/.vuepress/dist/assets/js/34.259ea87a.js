(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{236:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端路由原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由原理"}},[t._v("#")]),t._v(" 前端路由原理")]),t._v(" "),a("p",[t._v("前端路由本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新页面。目前前端使用的路由就只有两种实现方式。")]),t._v(" "),a("ul",[a("li",[t._v("Hash 模式")]),t._v(" "),a("li",[t._v("History 模式")])]),t._v(" "),a("h2",{attrs:{id:"hash-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[t._v("#")]),t._v(" Hash 模式")]),t._v(" "),a("p",[t._v("www.test.com/#/ 就是 Hash URL，当 # 后面的哈希值发生变化时，可以通过 hashchange 事件来监听到 URL 的变化，从而进行跳转页面，并且无论哈希值如何变化，服务端接收到的 URL 请求永远是 www.test.com。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("window.addEventListener('hashchange', () => {\n  // ... 具体逻辑\n})\n")])])]),a("h2",{attrs:{id:"history-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-模式"}},[t._v("#")]),t._v(" History 模式")]),t._v(" "),a("p",[t._v("History 模式是 HTML5 新推出的功能，主要使用 history.pushState 和 history.replaceState 改变 URL。\n通过 History 模式改变 URL 同样不会引起页面的刷新，只会更新浏览器的历史记录。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("// 新增历史记录\nhistory.pushState(stateObject, title, URL)\n// 替换当前历史记录\nhistory.replaceState(stateObject, title, URL)\n")])])]),a("h2",{attrs:{id:"两种模式对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种模式对比"}},[t._v("#")]),t._v(" 两种模式对比")]),t._v(" "),a("ul",[a("li",[t._v("Hash 模式只可以更改 # 后面的内容，History 模式可以通过 API 设置任意的同源 URL")]),t._v(" "),a("li",[t._v("History 模式可以通过 API 添加任意类型的数据到历史记录中，Hash 模式只能更改哈希值，也就是字符串")]),t._v(" "),a("li",[t._v("Hash 模式无需后端配置，并且兼容性好。History 模式在用户手动输入地址或者刷新页面的时候会发起 URL 请求，后端需要配置 index.html 页面用于匹配不到静态资源的时候")])])])}),[],!1,null,null,null);s.default=r.exports}}]);