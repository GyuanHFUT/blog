(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{235:function(v,t,_){"use strict";_.r(t);var a=_(0),s=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"出租车平台性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#出租车平台性能优化"}},[v._v("#")]),v._v(" 出租车平台性能优化")]),v._v(" "),_("h2",{attrs:{id:"问题描述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[v._v("#")]),v._v(" 问题描述")]),v._v(" "),_("p",[v._v("出租车平台是一个以关注道路通行情况、交通运力为主线，实现对城市路网、公共交通、城际交通、静态交通的数据可视化展示以及统计分析的综合平台。平台以GIS为基础，围绕电子地图实现上述各个模块的功能，其中的公共交通模块需要在电子地图中展示大量的出租车，也要展现出车辆实时位置变化的效果，同时需要支持用户选择某辆具体的车辆查看详情和视频预览。一个中型城市实时运行的出租车数量往往是数以万计的，如何在保证电子地图性能前提下优雅的实现上述功能，需要我们好好设计出一个可行的实现方案。")]),v._v(" "),_("h2",{attrs:{id:"问题分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[v._v("#")]),v._v(" 问题分析")]),v._v(" "),_("p",[v._v("在电子地图同时绘制大量点数据是存在性能瓶颈的，如果直接在电子地图中添加Vector元素方式来绘制车辆，，一旦同时显示超过1000个，就会造成页面操作卡顿，给用户带来糟糕的用户体验。大量DOM元素的重绘也容易导致浏览器内存泄漏和CPU占用过高。因此针对出租车平台项目实际情况，采用直接绘制的车辆点的方式显然行不通了，必须另辟蹊径来实现功能。")]),v._v(" "),_("p",[v._v("对问题总结后，出租车平台要解决的问题主要有以下几点：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("电子地图上需要展现出大量的车辆点，同时要保证电子地图操作流畅。")])]),v._v(" "),_("li",[_("p",[v._v("用户能实现对特定车辆进行一些操作，包含查看详情和视频预览")])]),v._v(" "),_("li",[_("p",[v._v("电子地图要实时展示GPS车辆的最新位置，给用户一种车辆在动态运动的感觉。")])])]),v._v(" "),_("p",[v._v("以下是对着三个问题的具体分析：")]),v._v(" "),_("p",[v._v("针对问题1: 要保证电子地图页面操作不卡顿，别无他法，只有尽量减少电子地图页面中的DOM元素。在减少DOM元素的前提下展示出大量的GPS车辆点，目前已知的有以下两种方式：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("聚合方案：GPS车辆点聚合展示，减少电子地图中绘制元素的数量")])]),v._v(" "),_("li",[_("p",[v._v("图片方案：后台绘制含车辆点的图片，电子地图只加载该图片，这样无论图片中显示车辆点有多少，对于浏览器来说收只是一张图片。")])])]),v._v(" "),_("p",[v._v("针对问题2: 电子地图只要提供用户点击车辆图片给予响应的功能即可，即用户点击后车辆图标后弹出车辆详情面板，并在详情面板中支持视频预览。如下图：\n"),_("img",{attrs:{src:"https://s1.ax1x.com/2020/08/12/avOW60.jpg"}})]),v._v(" "),_("p",[v._v("针对问题3: 要实时显示GPS车辆实时位置变化，也只有两种方式,：定时轮询和主动推送。")]),v._v(" "),_("p",[v._v("定时轮询：浏览器定时请求后台，获取GPS车辆实时数据。")]),v._v(" "),_("p",[v._v("主动推送：后台服务器和浏览器建立长连接，后台主动向浏览器推送GPS车辆实时数据。")]),v._v(" "),_("h3",{attrs:{id:"问题一解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题一解决方案"}},[v._v("#")]),v._v(" 问题一解决方案")]),v._v(" "),_("p",[v._v("下面简单介绍一下聚合方案和图片方案的实现，以及平台方案选择")]),v._v(" "),_("p",[v._v("1.聚合方案")]),v._v(" "),_("p",[v._v("k均值聚类是最著名的划分聚类算法，由于简洁和效率使得他成为所有聚类算法中最广泛使用的。给定一个数据点集合和需要的聚类数目k，k由用户指定，k均值算法根据某个距离函数反复把数据分入k个聚类中。")]),v._v(" "),_("p",[v._v("算法原理：先随机选取K个对象作为初始的聚类中心。然后计算每个对象与各个种子聚类中心之间的距离，把每个对象分配给距离它最近的聚类中心。聚类中心以及分配给它们的对象就代表一个聚类。一旦全部对象都被分配了，每个聚类的聚类中心会根据聚类中现有的对象被重新计算。这个过程将不断重复直到满足某个终止条件。终止条件可以是以下任何一个：")]),v._v(" "),_("p",[v._v("1)没有（或最小数目）对象被重新分配给不同的聚类。")]),v._v(" "),_("p",[v._v("2)没有（或最小数目）聚类中心再发生变化。")]),v._v(" "),_("p",[v._v("3)误差平方和局部最小。")]),v._v(" "),_("p",[v._v("聚合效果展示：\n"),_("img",{attrs:{src:"https://s1.ax1x.com/2020/08/12/avO4mT.jpg"}}),v._v("\n2. 图片方案")]),v._v(" "),_("p",[v._v("图片方案具体就是在浏览器端加载一张含有车辆图标的图片，该图片的生成可以借助Geoserver地图服务器生成，然后电子地图中显示该图片，换更详细的说法就是Geoserver读取数据库中GPS车辆的坐标信息，根据地图渲染配置文件生成图片，最终WMS地图服务的形式发布，出租车平台再通过openlayers工具加载已发布WMS地图服务。")]),v._v(" "),_("p",[v._v("下图为Geoserver发布的WMS服务的示例：\n"),_("img",{attrs:{src:"https://s1.ax1x.com/2020/08/12/avOfXV.jpg",alt:"avOfXV.jpg"}})]),v._v(" "),_("p",[v._v("比较两种方案，对于出租车平台来说图片方案相比聚合方案有以下几个优点：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("更直观的展示车辆的密度分布情况")])]),v._v(" "),_("li",[_("p",[v._v("能用不同颜色的图标展示车辆的重载和空载情况")])]),v._v(" "),_("li",[_("p",[v._v("更直观的展示GPS车辆位置变化的动态效果")])])]),v._v(" "),_("h3",{attrs:{id:"问题2解决方案："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题2解决方案："}},[v._v("#")]),v._v(" 问题2解决方案：")]),v._v(" "),_("p",[v._v("之前提到电子地图为了提高页面性能，出租车展示大量GPS车辆点是采用加载图片的方式，但这种方式也有一个缺点，就是页面鼠标点击车辆GPS图标时无法响应，也就无法查看车俩的详情和进行预览视频，因此要实现这一功能就需要提供其他方式来辅助解决。")]),v._v(" "),_("p",[v._v("考虑到在车辆很密集显示情况下，鼠标点击很难定位到单个车辆，同时也没有在宏观查看车辆分布情况下再来查看详情的需求，因此出租车采取一种比较折中的解决方案：")]),v._v(" "),_("p",[v._v("配置一个显示阈值，当地图缩放层级小于阈值，显示范围较大时，电子地图显示WMS图片，车辆用圆点表示，此时不提供鼠标点击查看车辆详情功能；当地图缩放层级大于等于阈值，显示范围较小，范围内车辆数较少时，电子地图通过添加Vector的方式直接绘制车辆图标，此时再提供鼠标点击查看详情功能。\n小于阈值，圆点图标，鼠标不可点击：\n大于阈值，车型图标，鼠标可点击：\n"),_("img",{attrs:{src:"https://s1.ax1x.com/2020/08/12/avO2pn.png",alt:"avO2pn.png"}}),v._v(" "),_("img",{attrs:{src:"https://s1.ax1x.com/2020/08/12/avO6Yj.jpg",alt:"avO6Yj.jpg"}})]),v._v(" "),_("h3",{attrs:{id:"问题3解决方案："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题3解决方案："}},[v._v("#")]),v._v(" 问题3解决方案：")]),v._v(" "),_("p",[v._v("电子地图在WMS图片展示车辆时，更新采用轮询方案（也只能采用轮询方案），即电子地图定时向Geoserver服务请求WMS图片，电子地图更新图片。当电子地图放大后，显示具体车辆图标时，则使用WebSocket推送方式，电子地图重绘车辆图标。")]),v._v(" "),_("p",[v._v("注：WebSocket是为解决客户端与服务端实时通信而产生的技术。其本质是先通过HTTP/HTTPS协议进行握手后创建一个用于交换数据的TCP连接，此后服务端与客户端通过此TCP连接进行实时通信。这样服务器和客户端可以在给定的时间范围内的任意时刻，相互推送信息。在出租车项目用于从后台推送各种数据到浏览器，包含车辆GPS坐标信息。")]),v._v(" "),_("p",[v._v("定时请求WMS图片示意：\n"),_("img",{attrs:{src:"https://s1.ax1x.com/2020/08/12/avO50U.jpg",alt:"avO50U.jpg"}}),v._v("\nWebSocket推送数据后，电子地图重绘Vector图标代码示意：\n"),_("img",{attrs:{src:"https://s1.ax1x.com/2020/08/12/avOI7F.jpg",alt:"avOI7F.jpg"}}),v._v("\n注：后台WebSocket推送是每10秒推动一次，前台电子地图在重绘操作进行优化，具体优化就是把每次推送的GPS车辆数据分成20批次，电子地图每隔0.5秒重绘一个批次的数据。这种分批重绘方式既能降低浏览器的压力，减少CPU占用，同时也使电子地图中GPS车辆的动态效果更好，每隔0.5秒都有部分车辆位置发生移动，否者的话10秒才会有一次位置变化。")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("综上所述，出租车平台公共交通模块在电子地图中展示大量的出租车功能有了一个完整的实现方案，该方案既能让用户宏观的看整体车辆的密度分布情况，也能针对特定车辆查看详情和视频预览。通过刷新WMS和WebSocket推送刷新机制，也能让用户看到车辆位置的实时变化。在实现上述功能时，也兼顾了电子地图页面的性能，保证电子地图操作流畅。")])])}),[],!1,null,null,null);t.default=s.exports}}]);