
# 数据可视化

---

### 概要
数据可视化主要旨在借助于图形化手段，清晰有效地传达与沟通信息。

---

![data](https://gw.alipayobjects.com/zos/rmsportal/IqZzsvOEgBErgBAeAZWg.png)

---
### 底层技术规范

- SVG：用于描述二维矢量图形的一种图形格式。
- Canvas 2D：Canvas 通过 JavaScript 来绘制 2D 图形，通过逐像素来进行渲染
- Canvas 3D WebGL：WebGL是一个 JavaScript API，用于在任何兼容的 Web 浏览器中渲染 3D 图形

---

### SVG
基于XML来绘制矢量图形，SVG可以通过定义必要的线和形状来创建一个图形，也可以修改已有的位图，或者将这两种方式结合起来创建图形。
图形和其组成部分可以变形，可以合成，还可以通过滤镜完全改变外观。

---
### 例子
```
<svg width="200px" height="160px">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="100" cy="80" r="60" fill="green" />
  <ellipse cx="22" cy="20" rx="20" ry="10" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
  <text x="100" y="100" text-anchor="middle" fill="white">SVG</text>
  <line x1="10" x2="20" y1="0" y2="40" style="stroke-width:3;stroke:rgb(0,0,0)"/>
  <polyline points="0,0 0,20 20,20 20,40 40,40 40,60" style="stroke:red;stroke-width:2"/>
  <path d="M 20 130 Q 40 105, 50 130 T 90230" style="stroke-width:1;stroke:rgb(0,0,0)"/>
</svg>
```

### SVG  Path
```
<path d="M 20 130 m 10 10 Q 40 105, 50 130 T 90230" style="stroke-width:1;stroke:rgb(0,0,0)"/>
```
path元素是SVG基本形状中最强大的一个。
它是通过属性d定义的，d的值是一个“命令+参数”的序列

---
### Path常用指令
```
M x y  // move to
L x y (or l dx dy) // line
H x (or h dx) // H，绘制平行线。V，绘制垂直线
V y (or v dy)
C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)  // 贝塞尔曲线
A rx ry x-axis-rotation large-arc-flag sweep-flag x y  // 弧线
```

---
### Canvas
canvas是一个可以使用脚本(通常为JavaScript)来绘制图形的 HTML 元素.
```
<canvas id="canvas" width="150" height="150"></canvas>
```

---
### 示例 
```
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); //渲染上下文
//矩形
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 55, 50);
//线
ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(100,75);
ctx.lineTo(100,25);
ctx.fill();
//圆
ctx.arc(75,75,50,0,Math.PI*2,true);
// 二次贝塞尔曲线
ctx.beginPath();
ctx.moveTo(75,25);
ctx.quadraticCurveTo(25,25,25,62.5);
ctx.quadraticCurveTo(25,100,50,100);
ctx.quadraticCurveTo(50,120,30,125);
ctx.stroke();
```

---

### SVG与Canvas区别

![diff](https://pic3.zhimg.com/80/b00e22b6281710f76bb784fe13ff9243_hd.jpg)
Canvas 更适合绘制图形元素数量非常大（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉 特效。但是，在不少场景中，SVG 具有重要的优势：它的内存占用更低（这对移动端尤其重要）、渲染性能略高、并且用户使用浏览器内置的缩放功能时不会模糊。

---
### WebGL
http://taobaofed.org/blog/2015/12/21/webgl-handbook/

---

### Web数据可视化类库
- D3
- Highcharts
- ECharts
- ChartIQ

---

### D3
- 全称（Data-Driven Documents）
- 一个 JavaScript 的函数库
- 基于SVG
- 官网：https://d3js.org/

---
### API 功能分类
选择元素： 基于DOM进行一些操作，选择DOM，修改属性等
数据类型： 对原始数据进行处理
格式化：格式化显示数据，如日期时间格式等
加载数据：提供基本的http请求方法
数据映射：定义两种数据的转换关系
图形几何：用图形表示数据
布局：定义图形之间的排列关系
动态交互：响应事件，动画效果等

---
### 示例
一般绘制步骤：准备数据，创建DOM, 绑定数据，设置属性
```
var data = [30, 86, 168, 281, 303, 365];
d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });
 ```

---
### Highcharts
- 基于SVG
- 纯 JavaScript实现
- 文档API详细
- 支持iPhone，iPad 和 IE6 以上的版本，在 IOS 和 Android 系统中 Highcharts 支持多点触摸功能
- 图表类型：直线图、曲线图、区域图、柱状图、饼状图、散状点图、仪表图等20 种图表
- 国外，开源，商业使用收费
---
### 一些配置
chart：图表区、图形区和通用图表配置选项
colors：图表数据列颜色配置，是一个颜色数组
legend：图例，用不同形状、颜色、文字等 标示不同数据列，通过点击标示可以显示或隐藏该数据列
loading：加载中，加载选项控制覆盖绘图区的加载屏的外观和文字
navigation：导航，导出模块按钮和菜单配置选项组
series：数据列，图表上一个或多个数据系列
title：标题，包括即标题和副标题，其中副标题为非必须的，
tooltip：数据点提示框，当鼠标滑过某点时，以框的形式提示改点的数据
Axis：坐标轴，包括x轴和y轴

---
![diff](https://img.hcharts.cn/static/highcharts/images/docs/hc-anatomy.png)

### 示例
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/line-basic/

---
### ECharts
- 基于canvas，4.0后可通过render指定渲染器是'canvas' 或 'svg' 
- 浏览器兼容IE8+，支持移动端，支持微信小程序
- 支持无障碍访问
- ECharts GL实现基础三维数据可视化
- 国内，开源，免费

---
![echart](http://echarts.baidu.com/echarts2/doc/asset/img/architecture.png)

---
### 配置项


- title：图表标题
- legend     ：图例
- dataRange  ：值域
- tooltip ：提示框
- dataZoom  ：区域缩放控制器
- grid ：网格
- categoryAxis ：类目轴
- valueAxis ：数值型坐标轴默认参数
- bar： 柱形图默认参数
- line  ：折线图默认参数
- k ： K线图默认参数
- pie  ：饼图默认参数

---
### 示例
http://echarts.baidu.com/examples/editor.html?c=pie-roseType

---

### 扩展
1. Three.js
2. AntV产品G2，G6，F2

---
### Thinking
1. 目前项目Treemap基于D3实现，是否可以考虑使用Echart？
2. 移动端K线，不考虑划线技术指标等需求，是否可以考虑使用Echart或highcharts？
3. 移动端数据可视化，使用哪个工具较好？
4. 如果开发我们自己的图表库，基于SVG或Canvas？
