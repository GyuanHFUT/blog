(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{217:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"实战-7：树形控件——tree"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战-7：树形控件——tree"}},[t._v("#")]),t._v(" 实战 7：树形控件——Tree")]),t._v(" "),e("p",[t._v("本小节基于 Vue.js 的递归组件知识，来开发一个常见的树形控件—Tree。")]),t._v(" "),e("p",[t._v("Tree 组件是递归类组件的典型代表，它常用于文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。")]),t._v(" "),e("p",[t._v("本节要实现的 Tree 组件具有以下功能：")]),t._v(" "),e("p",[t._v('![img](data:image/svg+xml;utf8,<?xml version="1.0"?>'),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"428",height:"364"}}),t._v(")")]),t._v(" "),e("ul",[e("li",[t._v("节点可以无限延伸（递归）；")]),t._v(" "),e("li",[t._v("可以展开 / 收起子节点；")]),t._v(" "),e("li",[t._v("节点可以选中，选中父节点，它的所有子节点也全部被选中，同样，反选父节点，其所有子节点也取消选择；")]),t._v(" "),e("li",[t._v("同一级所有子节点选中时，它的父级也自动选中，一直递归判断到根节点。")])]),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("p",[t._v("Tree 是典型的数据驱动型组件，所以节点的配置就是一个 data，里面描述了所有节点的信息，比如图片中的示例数据为：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("data: [\n  {\n    title: 'parent 1',\n    expand: true,\n    children: [\n      {\n        title: 'parent 1-1',\n        expand: true,\n        children: [\n          {\n            title: 'leaf 1-1-1'\n          },\n          {\n            title: 'leaf 1-1-2'\n          }\n        ]\n      },\n      {\n        title: 'parent 1-2',\n        children: [\n          {\n            title: 'leaf 1-2-1'\n          },\n          {\n            title: 'leaf 1-2-1'\n          }\n        ]\n      }\n    ]\n  }\n]\n")])])]),e("p",[t._v("每个节点的配置（props：data）描述如下：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("title")]),t._v("：节点标题（本例为纯文本输出，可参考 Table 的 Render 或 slot-scope 将其扩展）；")]),t._v(" "),e("li",[e("strong",[t._v("expand")]),t._v("：是否展开直子节点。开启后，其直属子节点将展开；")]),t._v(" "),e("li",[e("strong",[t._v("checked")]),t._v("：是否选中该节点。开启后，该节点的 Checkbox 将选中；")]),t._v(" "),e("li",[e("strong",[t._v("children")]),t._v("：子节点属性数组。")])]),t._v(" "),e("p",[t._v("如果一个节点没有 children 字段，那它就是最后一个节点，这也是递归组件终结的判断依据。")]),t._v(" "),e("p",[t._v("同时再提供一个是否显示多选框的 props：showCheckbox，以及两个 events：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("on-toggle-expand")]),t._v("：展开和收起子列表时触发；")]),t._v(" "),e("li",[e("strong",[t._v("on-check-change")]),t._v("：点击复选框时触发。")])]),t._v(" "),e("p",[t._v("因为是数据驱动，组件的 API 都比较简单，这一点跟 Table 组件是一样的，它们复杂的逻辑都在组件本身。")]),t._v(" "),e("h2",{attrs:{id:"入口-tree-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入口-tree-vue"}},[t._v("#")]),t._v(" 入口 tree.vue")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("src/components")]),t._v(" 中新建目录 "),e("code",[t._v("tree")]),t._v("，并在 tree 下创建两个组件 "),e("code",[t._v("tree.vue")]),t._v(" 和 "),e("code",[t._v("node.vue")]),t._v("。tree.vue 是组件的入口，用于接收和处理数据，并将数据传递给 node.vue；node.vue 就是一个递归组件，它构成了每一个"),e("strong",[t._v("节点")]),t._v("，即一个可展开 / 关闭的按钮（+或-）、一个多选框（使用第 7 节的 Checkbox 组件）、节点标题以及递归的下一级节点。可能现在听起来比较困惑，不要慌，下面逐一分解。")]),t._v(" "),e("p",[t._v("tree.vue 主要负责两件事：")]),t._v(" "),e("ol",[e("li",[t._v("定义了组件的入口，即组件的 API；")]),t._v(" "),e("li",[t._v("对接收的数据 props：data 初步处理，为了在 tree.vue 中不破坏使用者传递的源数据 data，所以会克隆一份数据（cloneData）。")])]),t._v(" "),e("p",[t._v("因为传递的数据 data 是一个复杂的数组结构，克隆它要使用深拷贝，因为浅拷贝数据仍然是引用关系，会破坏源数据。所以在工具集 "),e("code",[t._v("src/utils/assist.js")]),t._v(" 中新加一个深拷贝的工具函数 "),e("code",[t._v("deepCopy")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// assist.js，部分代码省略\nfunction typeOf(obj) {\n  const toString = Object.prototype.toString;\n  const map = {\n    '[object Boolean]'  : 'boolean',\n    '[object Number]'   : 'number',\n    '[object String]'   : 'string',\n    '[object Function]' : 'function',\n    '[object Array]'    : 'array',\n    '[object Date]'     : 'date',\n    '[object RegExp]'   : 'regExp',\n    '[object Undefined]': 'undefined',\n    '[object Null]'     : 'null',\n    '[object Object]'   : 'object'\n  };\n  return map[toString.call(obj)];\n}\n// deepCopy\nfunction deepCopy(data) {\n  const t = typeOf(data);\n  let o;\n\n  if (t === 'array') {\n    o = [];\n  } else if ( t === 'object') {\n    o = {};\n  } else {\n    return data;\n  }\n\n  if (t === 'array') {\n    for (let i = 0; i < data.length; i++) {\n      o.push(deepCopy(data[i]));\n    }\n  } else if ( t === 'object') {\n    for (let i in data) {\n      o[i] = deepCopy(data[i]);\n    }\n  }\n  return o;\n}\n\nexport {deepCopy};\n")])])]),e("p",[t._v("deepCopy 函数会递归地对数组或对象进行逐一判断，如果某项是数组或对象，再拆分继续判断，而其它类型就直接赋值了，所以深拷贝的数据不会破坏原有的数据（更多深拷贝与浅拷贝的内容，可阅读扩展阅读 1）。")]),t._v(" "),e("p",[t._v("先来看 tree.vue 的代码：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" src"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node\n      v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(item, index) in cloneData"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("show"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("checkbox"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showCheckbox"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TreeNode "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./node.vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" deepCopy "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../utils/assist.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tree'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TreeNode "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      showCheckbox"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cloneData"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rebuildData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    watch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rebuildData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rebuildData")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloneData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deepCopy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("在组件 created 时（以及 watch 监听 data 改变时），调用了 "),e("code",[t._v("rebuildData")]),t._v(" 方法克隆源数据，并赋值给了 "),e("code",[t._v("cloneData")]),t._v("。")]),t._v(" "),e("p",[t._v("在 template 中，先是渲染了一个 node.vue 组件（"),e("code",[t._v("<tree-node>")]),t._v("），这一级是 Tree 的根节点，因为 cloneDate 是一个数组，所以这个根节点不一定只有一项，有可能是并列的多项。不过这里使用的 node.vue 还没有用到 Vue.js 的递归组件，它只处理第一级根节点。")]),t._v(" "),e("p",[e("code",[t._v("<tree-node>")]),t._v(" 组件（node.vue）接收两个 props：")]),t._v(" "),e("ol",[e("li",[t._v("showCheckbox：与 tree.vue 的 showCheckbox 相同，只是进行传递；")]),t._v(" "),e("li",[t._v("data：node.vue 接收的 data 是一个 Object 而非 Array，因为它只负责渲染当前的一个节点，并递归渲染下一个子节点（即 children），所以这里对 cloneData 进行循环，将每一项节点数据赋给了 tree-node。")])]),t._v(" "),e("h2",{attrs:{id:"递归组件-node-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#递归组件-node-vue"}},[t._v("#")]),t._v(" 递归组件 node.vue")]),t._v(" "),e("p",[t._v("node.vue 是树组件 Tree 的核心，而一个 tree-node 节点包含 4 个部分：")]),t._v(" "),e("ol",[e("li",[t._v("展开与关闭的按钮（+或-）；")]),t._v(" "),e("li",[t._v("多选框；")]),t._v(" "),e("li",[t._v("节点标题；")]),t._v(" "),e("li",[t._v("递归子节点。")])]),t._v(" "),e("p",[t._v("先来看 node.vue 的基本结构：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" src"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tree-ul"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tree-li"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tree-expand"')]),t._v(" @click"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handleExpand"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.children && data.children.length && !data.expand"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.children && data.children.length && data.expand"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("checkbox\n        v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showCheckbox"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.checked"')]),t._v("\n        @input"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handleCheck"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("checkbox"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node\n        v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.expand"')]),t._v("\n        v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(item, index) in data.children"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("show"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("checkbox"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showCheckbox"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iCheckbox "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../checkbox/checkbox.vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TreeNode'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" iCheckbox "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      showCheckbox"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    padding"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("expand"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cursor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pointer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[e("code",[t._v("props：data")]),t._v(" 包含了当前节点的所有信息，比如是否展开子节点（expand）、是否选中（checked）、子节点数据（children）等。")]),t._v(" "),e("p",[t._v("第一部分 expand，如果当前节点不含有子节点，也就是没有 children 字段或 children 的长度是 0，那就说明当前节点已经是最后一级节点，所以不含有展开 / 收起的按钮。")]),t._v(" "),e("p",[t._v("多选框直接使用了第 7 节的 Checkbox 组件（单用模式），这里将 prop: value 和事件 @input 分开绑定，没有使用 "),e("code",[t._v("v-model")]),t._v(" 语法糖。value 绑定的数据 "),e("code",[t._v("data.checked")]),t._v(" 表示当前节点是否选中，在点击多选框时，handleCheck 方法会修改 data.checked 数据，下文会分析。这里之所以不使用 "),e("code",[t._v("v-model")]),t._v("而是分开绑定，是因为 @input 里要额外做一些处理，不是单纯的修改数据。")]),t._v(" "),e("p",[t._v("上一节我们说到，一个 Vue.js 递归组件有两个必要条件：name 特性和终结条件。name 已经指定为 "),e("code",[t._v("TreeNode")]),t._v("，而这个终结递归的条件，就是 "),e("code",[t._v('v-for="(item, index) in data.children"')]),t._v("，当 "),e("code",[t._v("data.children")]),t._v(" 不存在或为空数组时，自然就不会继续渲染子节点，递归也就停止了。")]),t._v(" "),e("p",[t._v("注意，这里的 "),e("code",[t._v('v-if="data.expand"')]),t._v(" 并不是递归组件的终结条件，虽然它看起来像是一个可以为 "),e("code",[t._v("false")]),t._v("的判断语句，但它的用处是判断当前节点"),e("strong",[t._v("的子节点")]),t._v("是否展开（渲染），如果当前节点不展开，那它所有的子节点也就不会展开（渲染）。")]),t._v(" "),e("p",[t._v("上面的代码保留了两个方法 "),e("code",[t._v("handleExpand")]),t._v(" 与 "),e("code",[t._v("handleCheck")]),t._v("，先来看前者。")]),t._v(" "),e("p",[t._v("点击 + 号时，会展开直属子节点，点击 - 号关闭，这一步只需在 "),e("code",[t._v("handleExpand")]),t._v(" 中修改 data 的 expand 数据即可，同时，我们通过 Tree 的根组件（tree.vue）触发一个自定义事件 "),e("code",[t._v("@on-toggle-expand")]),t._v("（上文已介绍）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// node.vue，部分代码省略\nimport { findComponentUpward } from '../../utils/assist.js';\n\nexport default {\n  data () {\n    return {\n      tree: findComponentUpward(this, 'Tree')\n    }\n  },\n  methods: {\n    handleExpand () {\n      this.$set(this.data, 'expand', !this.data.expand);\n\n      if (this.tree) {\n        this.tree.emitEvent('on-toggle-expand', this.data);\n      }\n    },\n  }\n}\n// tree.vue，部分代码省略\nexport default {\n  methods: {\n    emitEvent (eventName, data) {\n      this.$emit(eventName, data, this.cloneData);\n    }\n  }\n}\n")])])]),e("p",[t._v("在 node.vue 中，通过 "),e("code",[t._v("findComponentUpward")]),t._v(" 向上找到了 Tree 的实例，并调用它的 "),e("code",[t._v("emitEvent")]),t._v(" 方法来触发自定义事件 "),e("code",[t._v("@on-toggle-expand")]),t._v("。之所以使用 "),e("code",[t._v("findComponentUpward")]),t._v(" 寻找组件，而不是用 "),e("code",[t._v("$parent")]),t._v("，是因为当前的 node.vue，它的父级不一定就是 tree.vue，因为它是递归组件，父级有可能还是自己。")]),t._v(" "),e("p",[t._v("这里有一点需要注意，修改 data.expand，我们是通过 Vue 的 "),e("code",[t._v("$set")]),t._v(" 方法来修改，并没有像下面这样修改：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("this.data.expand = !this.data.expand;\n")])])]),e("p",[t._v("这样有什么区别呢？如果直接用上面这行代码修改，发现数据虽然被修改了，但是视图并没有更新（原来是 + 号，点击后还是 + 号）。要理解这里，我们先看下，到底修改了什么。这里的 "),e("code",[t._v("this.data")]),t._v("，是一个 props，它是通过上一级传递的，这个上一级有两种可能，一种是递归的 node.vue，一种是根组件 tree.vue，但是递归的 node.vue，最终也是由 tree.vue 传递的，追根溯源，要修改的 "),e("code",[t._v("this.data")]),t._v("事实上是 tree.vue 的 "),e("code",[t._v("cloneData")]),t._v("。cloneData 里的节点数据，是不一定含有 "),e("code",[t._v("expand")]),t._v(" 或 "),e("code",[t._v("checked")]),t._v(" 字段的，如果不含有，直接通过 "),e("code",[t._v("this.data.expand")]),t._v(" 修改，这个 expand 就不是可响应的数据，Vue.js 是无法追踪到它的变化，视图自然不会更新，而 "),e("code",[t._v("$set")]),t._v(" 的用法就是对可响应对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。总结来说，如果 expand 字段一开始是存在的（不管 true 或 false），不管用哪种方式修改都是可以的，否则必须用 "),e("code",[t._v("$set")]),t._v(" 修改，结合起来，干脆直接用 $set 了。同理，后文的 "),e("code",[t._v("checked")]),t._v(" 也是一样。")]),t._v(" "),e("p",[t._v("接下来是整个 Tree 组件最复杂的一部分，就是处理节点的响应状态。你可能会问，不就是选中或取消选中吗，跟 expand 一样，修改数据就行了？如果只是考虑一个节点，的确这样就可以了，但树组件是有上下级关系的，它们分为两种逻辑，当选中（或取消选中）一个节点时：")]),t._v(" "),e("ol",[e("li",[t._v("它下面的所有子节点都会被选中；")]),t._v(" "),e("li",[t._v("如果同一级所有子节点选中时，它的父级也自动选中，一直递归判断到根节点。")])]),t._v(" "),e("p",[t._v("第 1 个逻辑相对简单，当选中一个节点时，只要递归地遍历它下面所属的所有子节点数据，修改所有的 "),e("code",[t._v("checked")]),t._v(" 字段即可：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// node.vue，部分代码省略\nexport default {\n  methods: {\n    handleCheck (checked) {\n      this.updateTreeDown(this.data, checked);\n\n      if (this.tree) {\n        this.tree.emitEvent('on-check-change', this.data);\n      }\n    },\n    updateTreeDown (data, checked) {\n      this.$set(data, 'checked', checked);\n\n      if (data.children && data.children.length) {\n        data.children.forEach(item => {\n          this.updateTreeDown(item, checked);\n        });\n      }\n    }\n  }\n}\n")])])]),e("p",[t._v("updateTreeDown 只是向下修改了所有的数据，因为当前节点的数据里，是包含其所有子节点数据的，通过递归遍历可以轻松修改，这也是第 1 种逻辑简单的原因。")]),t._v(" "),e("p",[t._v("再来看第 2 个逻辑，它的难点在于，无法通过当前节点数据，修改到它的父节点，因为拿不到。写到这里，正常的思路应该是在 "),e("code",[t._v("this.updateTreeDown(this.data, checked);")]),t._v(" 的下面再写一个 "),e("code",[t._v("updateTreeUp")]),t._v("的方法，向上遍历，问题就是，怎样向上遍历，一种常规的思路是，把 "),e("code",[t._v("updateTreeUp")]),t._v(" 方法写在 tree.vue 里，并且在 node.vue 的 "),e("code",[t._v("handleCheck")]),t._v(" 方法里，通过 this.tree 调用根组件的 "),e("code",[t._v("updateTreeUp")]),t._v("，并且传递当前节点的数据，在 tree.vue 里，要找到当前节点的位置，那还需要一开始在 cloneData 里预先给每个节点设置一个唯一的 key，后面的逻辑读者应该能想到了，就是通过 key 找到节点位置，并向上递归判断……但是，这个方法想着就麻烦。")]),t._v(" "),e("p",[t._v("正常的思路不太好解决，我们就换个思路。一个节点，除了手动选中（或反选），还有就是第 2 种逻辑的被动选中（或反选），也就是说，如果这个节点的所有直属子节点（就是它的第一级子节点）都选中（或反选）时，这个节点就自动被选中（或反选），递归地，可以一级一级响应上去。有了这个思路，我们就可以通过 "),e("code",[t._v("watch")]),t._v(" 来监听当前节点的子节点是否都选中，进而修改当前的 "),e("code",[t._v("checked")]),t._v(" 字段：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// node.vue，部分代码省略\nexport default {\n  watch: {\n    'data.children': {\n      handler (data) {\n        if (data) {\n          const checkedAll = !data.some(item => !item.checked);\n          this.$set(this.data, 'checked', checkedAll);\n        }\n      },\n      deep: true\n    }\n  }\n}\n")])])]),e("p",[t._v("在 watch 中，监听了 data.children 的改变，并且是深度监听的。这段代码的意思是，当 "),e("code",[t._v("data.children")]),t._v(" 中的数据的某个字段发生变化时（这里当然是指 checked 字段）,也就是说它的某个子节点被选中（或反选）了，这时执行绑定的句柄 handler 中的逻辑。"),e("code",[t._v("const checkedAll = !data.some(item => !item.checked);")]),t._v(" 也是一个巧妙的缩写，checkedAll 最终返回结果就是当前子节点是否都被选中了。")]),t._v(" "),e("p",[t._v("这里非常巧妙地利用了递归的特性，因为 node.vue 是一个递归组件，那每一个组件里都会有 watch 监听 "),e("code",[t._v("data.children")]),t._v("，要知道，当前的节点有两个”身份“，它既是下属节点的父节点，同时也是上级节点的子节点，它作为下属节点的父节点被修改的同时，也会触发上级节点中的 watch 监听函数。"),e("strong",[t._v("这就是递归")]),t._v("。")]),t._v(" "),e("p",[t._v("以上就是 Tree 组件的所有内容，完整的代码见： "),e("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Ficarusion%2Fvue-component-book%2Ftree%2Fmaster%2Fsrc%2Fcomponents%2Ftree",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/icarusion/v…"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("用例："),e("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Ficarusion%2Fvue-component-book%2Fblob%2Fmaster%2Fsrc%2Fviews%2Ftree.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/icarusion/v…"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),e("p",[t._v("递归就像人类繁衍一样，蕴藏了无限可能，充满着神奇与智慧。")]),t._v(" "),e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5b5dcf8351882519790c9a2e",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅拷贝与深拷贝"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("注：本节部分代码参考 "),e("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fiview%2Fiview%2Fblob%2F2.0%2Fsrc%2Futils%2Fassist.js%23L114",target:"_blank",rel:"noopener noreferrer"}},[t._v("iView"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);