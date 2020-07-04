(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{231:function(t,n,e){"use strict";e.r(n);var r=e(0),a=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue编译过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue编译过程"}},[t._v("#")]),t._v(" vue编译过程")]),t._v(" "),e("p",[t._v("Vue 都是使用模板的方式来开发的。\n首先直接把模板丢到浏览器中肯定是不能运行的，模板只是为了方便开发者进行开发。Vue 会通过编译器将模板通过几个阶段最终编译为 render 函数，然后通过执行 render 函数生成 Virtual DOM 最终映射为真实 DOM。\n这个过程其中又分为三个阶段，分别为：")]),t._v(" "),e("ol",[e("li",[t._v("将模板解析为 AST")]),t._v(" "),e("li",[t._v("优化 AST")]),t._v(" "),e("li",[t._v("将 AST 转换为 render 函数")])]),t._v(" "),e("p",[t._v("在第一个阶段中，最主要的事情还是通过各种各样的正则表达式去匹配模板中的内容，然后将内容提取出来做各种逻辑操作，接下来会生成一个最基本的 AST 对象")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("{\n    // 类型\n    type: 1,\n    // 标签\n    tag,\n    // 属性列表\n    attrsList: attrs,\n    // 属性映射\n    attrsMap: makeAttrsMap(attrs),\n    // 父节点\n    parent,\n    // 子节点\n    children: []\n}\n")])])]),e("p",[t._v("然后会根据这个最基本的 AST 对象中的属性，进一步扩展 AST。")]),t._v(" "),e("p",[t._v("当然在这一阶段中，还会进行其他的一些判断逻辑。比如说对比前后开闭标签是否一致，判断根组件是否只存在一个，判断是否符合 HTML5规范等等问题。\n优化 AST 的阶段。对节点进行了静态内容提取，也就是将永远不会变动的节点提取了出来，实现复用 Virtual DOM，跳过对比算法的功能。\n最后一个阶段就是通过 AST 生成 render函数了。其实这一阶段虽然分支有很多，但是最主要的目的就是遍历整个 AST，根据不同的条件生成不同的代码罢了。")])])}),[],!1,null,null,null);n.default=a.exports}}]);