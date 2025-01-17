# 前言
## Mars3D是什么

Mars3D平台 是火星科技研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于Cesium优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

Mars3D平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars3D产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。

## 相关网站

- [Mars3D 官网](http://mars3d.cn)

- [Mars3D API](http://mars3d.cn/api/Map.html)

- [Mars3D GitHub](https://github.com/marsgis/mars3d)

- [Mars3D 架构图](http://mars3d.cn/img/jiagou.jpg)

- [Cesium 架构图](http://mars3d.cn/img/jiagou-cesium.png)

# 开始

## 创建项目

该工程使用的`useful-cli`(1.0.6版本)创建， 参考[Mars3d](https://mars3d.cn/doc)官方template【[mars3d-vue-template](https://github.com/marsgis/mars3d-vue-template)】进行开发

## 集成Mars3d
1. 使用`vite-plugin-mars3d`插件加载mars3d
```
// vite.config.ts
import mars3dCesium from 'vite-plugin-mars3d'
export default defineConfig({
  plugins: [..., mars3dCesium()],
  ...
  }
})
```

2. 将 mars3d 和 Cesium 实例挂载到 globalProperties
```javascript
// @/plugins/mars3d/index.vue
import { App } from 'vue'
import 'mars3d/dist/mars3d.css'
import * as mars3d from 'mars3d'

export default {
  install: (app: App) => {
    app.config.globalProperties.mars3d = mars3d
    app.config.globalProperties.Cesium = mars3d.Cesium
  }
}

// main.js
import mars3dPlugin from '@/plugins/mars3d'
const app = createApp(App)
app.use(mars3dPlugin)
```

挂载后组件可通过如下方式获取 mars3d 和 Cesium 实例

```javascript
const instance = getCurrentInstance()
const mars3d = instance?.appContext.config.globalProperties.mars3d;
const Cesium = instance?.appContext.config.globalProperties.Cesium;
```

3. 新建div容器
```html
<div id="mars3dContainer" class="mars3d-container"></div>
```

4. 使用mars3d.Map方法创建地球
使用[Map地图类](http://mars3d.cn/api/Map.html)创建三维地图场景。
```javascript
var mapOptions = {} //支持的参数请看API文档：http://mars3d.cn/api/Map.html
var map = new mars3d.Map('mars3dContainer', mapOptions)
```


## 集成 mars3d-widget
1. 引入`mars3d-widget`依赖
```javascript
import 'mars3d-widget'
```
2. 由于`mars3d-widget`中有使用到`jquery`和`layer`库，所以需要在`index.html`的head中引入
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <!--引入jquery mars3d-widget需要 -->
    <script type="text/javascript" src="/lib/jquery/jquery-2.1.4.min.js"></script>

    <!--引入layer mars3d-widget需要 -->
    <link href="/lib/layer/theme/default/layer.css" rel="stylesheet" />
    <link href="/lib/layer/theme/retina/retina.css" rel="stylesheet" />
    <link href="/lib/layer/theme/mars/layer.css" rel="stylesheet" />
    <script type="text/javascript" src="/lib/layer/layer.js"></script>
    ...
  </head>
  ...
</html>

```
3. 使用`mars3d.widget.init`初始化widget， 参考：http://mars3d.cn/dev/guide/project/widget.html#_1-widget%E6%A8%A1%E5%9D%97%E5%8C%96%E6%9E%B6%E6%9E%84%E8%AF%B4%E6%98%8E
