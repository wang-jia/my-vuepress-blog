
# vue骨架屏

---

### 简介
在页面完全渲染完成之前，用户会看到一个样式简单，描绘了当前页面的大致框架，感知到页面正在逐步加载，最终骨架屏中各个占位部分被完全替换，这样给用户一种很自然的过渡，不会造成页面长时间白屏或者闪烁等情况。体验良好。
![intro](https://segmentfault.com/img/bVbaoxa?w=1000&h=445)

---
### 实现思路
- 使用 Vue 预渲染骨架屏
- 将骨架屏渲染结果插入 HTML 中
- 真正的页面内容替换骨架屏

---

### 骨架屏实现的两种方式
- 预渲染 prerender
- 服务端渲染 SSR

---

### 预渲染
使用prerender-spa-plugin

github:https://github.com/chrisvfritz/prerender-spa-plugin

---

#### prerender-spa-plugin原理

在 webpack 构建阶段的最后，在本地启动一个 [phantomjs](http://javascript.ruanyifeng.com/tool/phantomjs.html)，访问配置了预渲染的路由，再将 phantomjs 中渲染的页面输出到 html 文件中，并建立路由对应的目录。
![img](https://user-gold-cdn.xitu.io/2017/10/11/5b8399cf90e421a66cd0cad47e9d9d6f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)


---
##### 预渲染-webpack配置
```
var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  // ...
  plugins: [
    new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      path.join(__dirname, '../dist'),
      // List of routes to prerender
      ['/']
    )
  ]
} 
```

---
##### 预渲染-骨架屏文件main.skeleton.vue 
```
<template>
  <div class="main-skeleton">
    <w-skeleton height="80px"></w-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <w-skeleton height="300px"></w-skeleton>
        </div>
        <w-skeleton height="45px"></w-skeleton>
      </div>
      <div class="skeleton-bottom">
        <w-skeleton height="45px"></w-skeleton>
      </div>
    </div>
  </div>
</template>
```

---
##### 预渲染-组件.vue
```
<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else></div>
  </div>
</template>
 import mainSkeleton from './main.skeleton.vue'
 export default {
    name: 'app',
    data () {
      return {
        init: false
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainSkeleton
    }
  }
```
---

#### 预渲染-项目示例
https://github.com/VV-UI/VV-UI

---

#### 预渲染-其他方案
使用vue-skeleton-loading
Github地址：https://github.com/jiingwang/vue-skeleton-loading

---

### 服务端渲染
使用SSR实现服务端渲染
#### SSR简介
Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。

https://ssr.vuejs.org/zh/

---

#### 服务端渲染-实现思路
![img](https://sfault-image.b0.upaiyun.com/272/689/2726897960-5af6536ab35fa_articlex )

---
#### 服务端渲染-Skeleton.vue
```
<template>
  <div class="skeleton page">
    <div class="skeleton-nav"></div>
    <div class="skeleton-swiper"></div>
    <ul class="skeleton-tabs">
      <li v-for="i in 8" class="skeleton-tabs-item"><span></span></li>
    </ul>
    <div class="skeleton-banner"></div>
    <div v-for="i in 6" class="skeleton-productions"></div>
  </div>
</template>
```
---
#### 服务端渲染-skeleton.entry.js

```
import Vue from 'vue'
import Skeleton from './Skeleton.vue'

export default new Vue({
  components: {
    Skeleton
  },
  template: '<skeleton />'
})
```

---
#### 服务端渲染-webpack.skeleton.conf.js
```
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
  target: 'node',
  entry: {
    skeleton: './src/skeleton.entry.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueSSRServerPlugin({
      filename: 'skeleton.json'
    })
  ]
}
```
---
#### 服务端渲染-skeleton.js
```
const fs = require('fs')
const { resolve } = require('path')

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// 读取`skeleton.json`，以`index.html`为模板写入内容
const renderer = createBundleRenderer(resolve(__dirname, './dist/skeleton.json'), {
  template: fs.readFileSync(resolve(__dirname, './index.html'), 'utf-8')
})

// 把上一步模板完成的内容写入（替换）`index.html`
renderer.renderToString({}, (err, html) => {
  fs.writeFileSync('index.html', html, 'utf-8')
})
```
---
#### 项目示例
https://github.com/jrainlau/vue-skeleton

---

#### 参考资料
- https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/
- https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html
- https://segmentfault.com/a/1190000014832185












