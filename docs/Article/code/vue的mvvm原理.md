# vue的mvvm原理

## 简述版
vue是采用数据劫持配合发布者-订阅者模式，通过object.defineProperty来劫持各个属性的set和get，在数据变动时，发布信息给依赖收集器，去通知观察者，做出对应的回调函数，区更新视图。
Mvvm作为绑定的入口，整合observe，compile和watcher三者，通过observe来监听model的数据变化，通过compile来解析编译模板指令，最终利用watcher搭起observe和compile的桥梁，做到双向绑定。

## 实现
Vue 内部使用了 Object.defineProperty() 来实现数据响应式，通过这个函数可以监听到 set 和 get 的事件。

    function observe(obj) {
      // 判断类型
      if (!obj || typeof obj !== 'object') {
        return
      }
      Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
      })
    }
    
    function defineReactive(obj, key, val) {
      // 递归子属性
      observe(val)
      let dp = new Dep()
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          console.log('get value')
          // 将 Watcher 添加到订阅
          if (Dep.target) {
            dp.addSub(Dep.target)
          }
          return val
        },
        set: function reactiveSetter(newVal) {
          console.log('change value')
          val = newVal
          // 执行 watcher 的 update 方法
          dp.notify()
        }
      })

依赖收集，才能在属性更新的时候派发更新，所以接下来我们需要先触发依赖收集。Dep一个属性只有一个，用来存放watcher

    // 通过 Dep 解耦属性的依赖和更新操作
    class Dep {
      constructor() {
        this.subs = []
      }
      // 添加依赖
      addSub(sub) {
        this.subs.push(sub)
      }
      // 更新
      notify() {
        this.subs.forEach(sub => {
          sub.update()
        })
      }
    }
    // 全局属性，通过该属性配置 Watcher
    Dep.target = null
当需要依赖收集的时候调用 addSub，当需要派发更新的时候调用 notify。
vue在组件挂载时，会先对所有需要的属性调用 Object.defineProperty()，然后实例化 Watcher，传入组件更新的回调。在实例化过程中，会对模板中的属性进行求值，触发依赖收集。

    class Watcher {
      constructor(obj, key, cb) {
        // 将 Dep.target 指向自己
        // 然后触发属性的 getter 添加监听
        // 最后将 Dep.target 置空
        Dep.target = this
        this.cb = cb
        this.obj = obj
        this.key = key
        this.value = obj[key]
        Dep.target = null
      }
      update() {
        // 获得新值
        this.value = this.obj[this.key]
        // 调用 update 方法更新 Dom
        this.cb(this.value)
      }
    }
以上就是 Watcher 的简单实现，在执行构造函数的时候将 Dep.target 指向自身，从而使得收集到了对应的 Watcher，在派发更新的时候取出对应的 Watcher 然后执行 update 函数。
测试

    var data = { name: 'yck' }
    observe(data)
    function update(value) {
      document.querySelector('div').innerText = value
    }
    // 模拟解析到 `{{name}}` 触发的操作
    new Watcher(data, 'name', update)
    // update Dom innerText
    data.name = 'yyy' 