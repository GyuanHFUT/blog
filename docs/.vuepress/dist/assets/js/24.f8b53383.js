(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{226:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"实战-3：动态渲染-vue-文件的组件——-display"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战-3：动态渲染-vue-文件的组件——-display"}},[t._v("#")]),t._v(" 实战 3：动态渲染 .vue 文件的组件—— Display")]),t._v(" "),a("p",[t._v("你可能用过 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fjsfiddle.net%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsfiddle"),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fjsbin.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsbin"),a("OutboundLink")],1),t._v(" 之类的网站，在里面你可以用 CDN 的形式引入 Vue.js，然后在线写示例，实时运行，比如下面这个例子：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fjsfiddle.net%2Fc87yh92v%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsfiddle.net/c87yh92v/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("不过，这类网站主要是一个 html，里面包含 js、css 部分，渲染侧是用 iframe 嵌入你编写的 html，并实时更新。在这些网站写示例，是不能直接写 "),a("code",[t._v(".vue")]),t._v(" 文件的，因为没法进行编译。")]),t._v(" "),a("p",[t._v("再来看另一个网站 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Frun.iviewui.com%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("iView Run"),a("OutboundLink")],1),t._v("（之前小节也有提到），它是能够在线编写一个标准的 "),a("code",[t._v(".vue")]),t._v(" 文件，并及时渲染的，它也预置了 iView 环境，你可以使用 iView 组件库全部的组件。本小节，我们就来实现这样一个能够动态渲染 .vue 文件的 "),a("code",[t._v("Display")]),t._v(" 组件，当然，用到的核心技术就是上一节的 "),a("code",[t._v("extend")]),t._v(" 和 "),a("code",[t._v("$mount")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"接口设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口设计"}},[t._v("#")]),t._v(" 接口设计")]),t._v(" "),a("p",[t._v("一个常规的 "),a("code",[t._v(".vue")]),t._v(" 文件一般都会包含 3 个部分：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<template>")]),t._v("：组件的模板；")]),t._v(" "),a("li",[a("code",[t._v("<script>")]),t._v("：组件的选项，不包含 "),a("code",[t._v("el")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("<style>")]),t._v("：CSS 样式。")])]),t._v(" "),a("p",[t._v("回忆一下用 "),a("code",[t._v("extend")]),t._v(" 来构造一个组件实例，它的选项 "),a("code",[t._v("template")]),t._v(" 其实就是上面 "),a("code",[t._v("<template>")]),t._v(" 的内容，其余选项对应的是 "),a("code",[t._v("<script>")]),t._v("，样式 "),a("code",[t._v("<style>")]),t._v(" 事实上与 Vue.js 无关，我们可以先不管。这样的话，当拿到一个 .vue 的文件（整体其实是字符串），只需要把 "),a("code",[t._v("<template>")]),t._v("、"),a("code",[t._v("<script>")]),t._v("、"),a("code",[t._v("<style>")]),t._v(" 使用正则分割，把对应的部分传递给 extend 创建的实例就可以。")]),t._v(" "),a("p",[t._v("Display 是一个功能型的组件，没有交互和事件，只需要一个 prop：code 将 .vue 的内容传递过来，其余工作都是在组件内完成的，这对使用者很友好。当然，你也可以设计成三个 props，分别对应 html、js、css，那分割的工作就要使用者来完成。出于使用者优先原则，苦活累活当然是在组件内完成了，因此推荐第一个方案。")]),t._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("src/components")]),t._v(" 目录下创建 "),a("code",[t._v("display")]),t._v(" 目录，并新建 "),a("code",[t._v("display.vue")]),t._v(" 文件，基本结构如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" display"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"display"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("父级传递 "),a("code",[t._v("code")]),t._v(" 后，将其分割，并保存在 data 的 html、js、css 中，后续使用。")]),t._v(" "),a("p",[t._v("我们使用正则，基于 "),a("code",[t._v("<>")]),t._v(" 和 "),a("code",[t._v("</>")]),t._v(" 的特性进行分割：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// display.vue，部分代码省略\nexport default {\n  methods: {\n    getSource (source, type) {\n      const regex = new RegExp(`<${type}[^>]*>`);\n      let openingTag = source.match(regex);\n\n      if (!openingTag) return '';\n      else openingTag = openingTag[0];\n\n      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`));\n    },\n    splitCode () {\n      const script = this.getSource(this.code, 'script').replace(/export default/, 'return ');\n      const style = this.getSource(this.code, 'style');\n      const template = '<div id=\"app\">' + this.getSource(this.code, 'template') + '</div>';\n\n      this.js = script;\n      this.css = style;\n      this.html = template;\n    },\n  }\n}\n")])])]),a("p",[t._v("getSource 方法接收两个参数：")]),t._v(" "),a("ul",[a("li",[t._v("source：.vue 文件代码，即 props: code；")]),t._v(" "),a("li",[t._v("type：分割的部分，也就是 template、script、style。")])]),t._v(" "),a("p",[t._v("分割后，返回的内容不再包含 "),a("code",[t._v("<template>")]),t._v(" 等标签，直接是对应的内容，在 splitCode 方法中，把分割好的代码分别赋值给 data 中声明的 html、js、css。有两个细节需要注意：")]),t._v(" "),a("ol",[a("li",[t._v(".vue 的 "),a("code",[t._v("<script>")]),t._v(" 部分一般都是以 "),a("code",[t._v("export default")]),t._v(" 开始的，可以看到在 splitCode 方法中将它替换为了 "),a("code",[t._v("return")]),t._v("，这个在后文会做解释，当前只要注意，我们分割完的代码，仍然是字符串；")]),t._v(" "),a("li",[t._v("在分割的 "),a("code",[t._v("<template>")]),t._v(" 外层套了一个 "),a("code",[t._v('<div id="app">')]),t._v("，这是为了容错，有时使用者传递的 "),a("code",[t._v("code")]),t._v("可能会忘记在外层包一个节点，没有根节点的组件，是会报错的。")])]),t._v(" "),a("p",[t._v("准备好这些基础工作后，就可以用 "),a("code",[t._v("extend")]),t._v(" 渲染组件了，在这之前，我们先思考一个问题：上文说到，当前的 "),a("code",[t._v("this.js")]),t._v(" 是字符串，而 extend 接收的选项可不是字符串，而是一个对象类型，那就要先把 this.js 转为一个对象。")]),t._v(" "),a("p",[t._v("不卖关子，来介绍 "),a("code",[t._v("new Function")]),t._v(" 用法，先看个示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const sum = new Function('a', 'b', 'return a + b');\n\nconsole.log(sum(2, 6)); // 8\n")])])]),a("p",[t._v("new Function 的语法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("new Function ([arg1[, arg2[, ...argN]],] functionBody)\n")])])]),a("p",[t._v("arg1, arg2, ... argN 是被函数使用的参数名称，"),a("strong",[t._v("functionBody")]),t._v(" 是一个含有包括函数定义的 JavaScript 语句的"),a("strong",[t._v("字符串")]),t._v("。也就是说，示例中的字符串 "),a("code",[t._v("return a + b")]),t._v(" 被当做语句执行了。")]),t._v(" "),a("p",[t._v("上文说到，"),a("code",[t._v("this.js")]),t._v(" 中是将 "),a("em",[t._v("export default")]),t._v(" 替换为 "),a("em",[t._v("return")]),t._v(" 的，如果将 this.js 传入 new Function 里，那么 this.js 就执行了，这时因为有 return，返回的就是一个对象类型的 this.js 了。")]),t._v(" "),a("p",[t._v("如果你还不是很理解 new Function，可以到文末的扩展阅读进一步了解。除了 new Function，你熟悉的 "),a("code",[t._v("eval")]),t._v(" 函数也可以使用，它与 new Function 功能类似。")]),t._v(" "),a("p",[t._v("知道了这些，下面的内容就容易理解了：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" display"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue，部分代码省略 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"display"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderCode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splitCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parseStrToFunc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          parseStrToFunc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" parseStrToFunc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("extend 构造的实例通过 $mount 渲染后，挂载到了组件唯一的一个节点 "),a("code",[t._v('<div ref="display">')]),t._v(" 上。")]),t._v(" "),a("p",[t._v("现在 html 和 js 都有了，还剩下 css。加载 css 没有什么奇技淫巧，就是创建一个 "),a("code",[t._v("<style>")]),t._v(" 标签，然后把 css 写进去，再插入到页面的 "),a("code",[t._v("<head>")]),t._v(" 中，这样 css 就被浏览器解析了。为了便于后面在 "),a("code",[t._v("this.code")]),t._v(" 变化或组件销毁时移除动态创建的 "),a("code",[t._v("<style>")]),t._v(" 标签，我们给每个 style 标签加一个随机 id 用于标识。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("src/utils")]),t._v(" 目录下新建 "),a("code",[t._v("random_str.js")]),t._v(" 文件，并写入以下内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 生成随机字符串\nexport default function (len = 32) {\n  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';\n  const maxPos = $chars.length;\n  let str = '';\n  for (let i = 0; i < len; i++) {\n    str += $chars.charAt(Math.floor(Math.random() * maxPos));\n  }\n  return str;\n}\n")])])]),a("p",[t._v("不难理解，这个方法是从指定的 a-zA-Z0-9 中随机生成 32 位的字符串。")]),t._v(" "),a("p",[t._v("补全 renderCode 方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// display.vue，部分代码省略\nimport randomStr from '../../utils/random_str.js';\n\nexport default {\n  data () {\n    return {\n      id: randomStr()\n    }\n  },\n  methods: {\n    renderCode () {\n      if (this.html !== '' && this.js !== '') {\n        // ...\n        if (this.css !== '') {\n          const style = document.createElement('style');\n          style.type = 'text/css';\n          style.id = this.id;\n          style.innerHTML = this.css;\n          document.getElementsByTagName('head')[0].appendChild(style);\n        }\n      }\n    }\n  }\n}\n")])])]),a("p",[t._v("当 Display 组件销毁时，也要手动销毁 extend 创建的实例以及上面的 css：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// display.vue，部分代码省略\nexport default {\n  methods: {\n    destroyCode () {\n      const $target = document.getElementById(this.id);\n      if ($target) $target.parentNode.removeChild($target);\n\n      if (this.component) {\n        this.$refs.display.removeChild(this.component.$el);\n        this.component.$destroy();\n        this.component = null;\n      }\n    }\n  },\n  beforeDestroy () {\n    this.destroyCode();\n  }\n}\n")])])]),a("p",[t._v("当 "),a("code",[t._v("this.code")]),t._v(" 更新时，整个过程要重新来一次，所以要对 "),a("code",[t._v("code")]),t._v(" 进行 watch 监听：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// display.vue，部分代码省略\nexport default {\n  watch: {\n    code () {\n      this.destroyCode();\n      this.renderCode();\n    }\n  }\n}\n")])])]),a("p",[t._v("以上就是 Display 组件的所有内容。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("新建一条路由，并在 "),a("code",[t._v("src/views")]),t._v(" 下新建页面 "),a("code",[t._v("display.vue")]),t._v(" 来使用 Display 组件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("views"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("display"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("动态渲染 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue 文件的组件—— Display"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("display "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("display"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iDisplay "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../components/display/display.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" defaultCode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./default-code.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" iDisplay "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" defaultCode\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/views/default-code.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<template>\n    <div>\n        <input v-model=\"message\">\n        {{ message }}\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                message: ''\n            }\n        }\n    }\n<\/script>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果使用的是 Vue CLI 3 默认的配置，直接运行时，会抛出下面的错误：")]),t._v(" "),a("blockquote",[a("p",[t._v("[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.")])]),t._v(" "),a("p",[t._v("这涉及到另一个知识点，就是 Vue.js 的版本。在使用 Vue.js 2 时，有独立构建（standalone）和运行时构建（runtime-only）两种版本可供选择，详细的介绍请阅读文末扩展阅读 2。")]),t._v(" "),a("p",[t._v("Vue CLI 3 默认使用了 vue.runtime.js，它不允许编译 template 模板，因为我们在 Vue.extend 构造实例时，用了 "),a("code",[t._v("template")]),t._v(" 选项，所以会报错。解决方案有两种，一是手动将 template 改写为 Render 函数，但这成本太高；另一种是对 Vue CLI 3 创建的工程做简单的配置。我们使用后者。")]),t._v(" "),a("p",[t._v("在项目根目录，新建文件 "),a("code",[t._v("vue.config.js")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  runtimeCompiler: true\n};\n")])])]),a("p",[t._v("它的作用是，是否使用包含运行时编译器的 Vue 构建版本。设置为 "),a("code",[t._v("true")]),t._v(" 后就可以在 Vue 组件中使用 "),a("code",[t._v("template")]),t._v(" 选项了，但是应用额外增加 10kb 左右（还好吧）。")]),t._v(" "),a("p",[t._v("加了这个配置，报错就消失了，组件也能正常显示。")]),t._v(" "),a("p",[t._v("以上就是 Display 组件所有的内容，如果你感兴趣，可以把它进一步封装，做成 iView Run 这样的产品。")]),t._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("这个小小的 Display 组件，能做的事还有很多，比如要写一套 Vue 组件库的文档，传统方法是在开发环境写一个个的 .vue 文件，然后编译打包、上传资源、上线，如果要修改，哪怕一个标点符号，都要重新编译打包、上传资源、上线。有了 Display 组件，只需要提供一个服务来在线修改文档的 .vue，就能实时更新，不用打包、上传、上线。")]),t._v(" "),a("p",[t._v("还有一点很重要的是，可以看到，在 iView Run 里，默认是直接可以写 iView 组件库的全部组件，并没有额外引入，这是因为 Display 所在的工程，已经将 iView 安装在了全局，Vue.extend 在构造实例时，已经可以使用全局安装的插件了，如果你还全局安装了其它插件，比如 axios，都是可以直接使用的。")]),t._v(" "),a("h2",{attrs:{id:"扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FFunction",target:"_blank",rel:"noopener noreferrer"}},[t._v("new Function"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fjingsam.github.io%2F2016%2F10%2F23%2Fstandalone-vs-runtime-only-build-in-vuejs2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js 2.0 独立构建和运行时构建的区别"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);