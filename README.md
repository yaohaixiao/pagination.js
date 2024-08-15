# pagination.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/pagination.js)](https://www.npmjs.com/package/@yaohaixiao/pagination.js)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/pagination.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/pagination.js)
[![npm downloads](https://img.shields.io/npm/dt/@yaohaixiao/pagination.js)](https://npmcharts.com/compare/@yaohaixiao/pagination.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/pagination.js.svg)](https://github.com/yaohaixiao/pagination.js/blob/main/LICENSE)

pagination.js - 简单好用的 JavaScript 分页导航组件库。


## Why pagination.js?

因为最近的一个开发任务需要使用原生 JavaScript 开发的分页组件，但我发现居然没有多少原生 JavaScript 编写的分页组件。那么就直接动手写了 pagination.js。


## Features

- 原生 JavaScript 开发，无任何依赖；
- 支持 UMD 模块和 ES6 模块；
- 支持 TypeScript；
- 支持配置导航按钮布局配置：支持上/下一页导航和数字导航；
- 数值导航支持快速转到下一组切换；
- 支持导航主题配置：支持 default、plain 和 bordered 3 种主题；
- 提供丰富的定义事件订阅：目前提供的事件有 created、mounted、change、refresh、destroy 和 reload；


## Install

pagination.js 支持在 Node.js 环境中使用 npm 安装，也可以在浏览器中使用 script 标签引入到页面。


### npm install

```sh
# install from npmjs.com
npm i -S @yaohaixiao/pagination.js

# install from github.com
npm i -S @yaohaixiao/pagination.js --registry=https://npm.pkg.github.com
```


### script tag

在浏览器中调用 pagination.js，可以选择调用 jsdelivr 提供的 CDN 服务中的文件，也可以使用本地的 .js 文件。


#### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yaohaixiao/pagination.js/pagination.min.css" />
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/pagination.js/pagination.min.js"></script>
```

#### Local

```html
<link rel="stylesheet" href="/path/to/pagination.min.css" />
<script src="/path/to/pagination.min.js"></script>
```


## Import module

pagination.js 支持以 UMD 模块和 ES6 模块方式导入模块。

```js
// ES6 module
import Pagination from '@yaohaixiao/pagination.js/pagination'

// UMD module
const Pagination = require('@yaohaixiao/pagination.js/pagination.min')
```


## API Documentation


### Options

pagination.js 提供了灵活而实用的配置项，以便适应不同的展示方式。


#### parent

Type: `String|Element`

* String： 选择器字符串;
* HTMLElement： DOM 元素;

必须，parent 参数用来指定显示分页导航组件的 DOM 节点或者选择器字符串。


#### total

Type: `Number`

必须，total 参数用来指定分页组件要处理的数据总量，通过它和 size 参数计算出分页导航组件的页面总数量。

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 60

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-total


#### size

Type: `Number`

Default: `20`

可选，size 参数，用来指定每页显示的数据量。用以计算分页导航按钮页数数量。

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
// pages = Math.ceil(128/25)
options.size = 25 // 默认值：20

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-size


### #limit

Type: `Number`

Default: `7`

可选，limit 参数用来控制导航数字按钮的数量。

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
// pages = Math.ceil(128/10)
// 会有 13 页
options.size = 10
// limit = 9，会显示9个数字导航按钮，
// 其中切换到不同页面，会动态计算是否显示快速到上/下一组按钮
options.limit = 9 // 默认值：7，取值范围 5~13

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-limit


#### theme

Type: `String`

Default: `'default'`

可选，theme 参数用来设置导航组件的主题样式。目前支持 default、plain 和 bordered 3 种主题。

##### default theme

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128

new Pagination(options)
```

##### plain theme

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.theme = 'plain'

new Pagination(options)
```

##### bordered theme

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.theme = 'bordered'

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-theme


#### align

Type: `String`

Default: `'default'`

可选，align 参数用来指定导航组件的对齐方式。目前支持 justify、left 和 right 3 种主题。


##### justify

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
// 默认值，不设置就是 justify 居中对齐
options.align = 'justify'
options.total = 128

new Pagination(options)
```


##### left

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.align = 'left'

new Pagination(options)
```

##### bordered theme

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.theme = 'right'

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-align



#### layout

Type: `Array`

Default: `['prev', 'pager', 'next']`

可选，layout 参数用来指定导航按钮布局显示。支持上/下一页导航加数字导航的布局组合显示。


##### full layout

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.layout = ['prev', 'pager', 'next']

new Pagination(options)
```


##### prev & next layout only

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.layout = ['prev', 'next']

new Pagination(options)
```


##### pager layout only

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.layout = ['pager']

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-layout



#### page

Type: `Number`

Default: `1`

可选，page 参数用来控制导航按钮的当前页。

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
// 默认选中第5页
options.page = 5 // 默认值：1

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-page





#### disabled

Type: `Boolean`

Default: `false`

可选，disabled 参数用来控制分页导航是否可用。

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
// pages = Math.ceil(128/10)
// 会有 13 页
options.size = 10
// limit = 9，会显示9个数字导航按钮，
// 其中切换到不同页面，会动态计算是否显示快速到上/下一组按钮
options.disabled = true // 默认值：false

new Pagination(options)
```

演示地址：https://yaohaixiao.github.io/pagination.js/#section-disabled


### Methods

pagination.js 的提供的方法如下：


#### initialize(options)

分页组件的初始化方法。


##### Parameters

###### options

Type: `Object`

（必须）options 指定分页组件初始化需要配置的 options 参数信息。详情参考 Options 参数。

#### Returns

Type: `Any`

Pagination 对象，以便实现链式调用。


#### attr([prop, value])

设置或者获取初始化时配置的 attrs 信息的。

##### Parameters

###### prop

Type: `String|Object`

（可选）attrs 中的属性名称或者要配置的 attrs 信息。

###### value

Type: `Any`

（可选）要设置的 prop 属性的值。

* 不传递任何参数：返回完整的 attrs 配置信息；
* 仅传递 prop：
    * String: 返回 attrs 配型信息中与 prop 对应的值；
    * Object: 用来设置 attrs 配置信息；
* 同时传递 prop 和 value 参数：设置 attrs 配置信息中的某个属性值；

##### Returns

Type: `Any`

Pagination 对象，以便实现链式调用。


### Events

pagination.js 提供丰富的定义事件订阅，目前提供的事件有： 

- created - 分页组件完成配置信息初始化时触发；
- mounted - 分页组件 UI 界面绘制完毕时触发；
- change - 分页组件的当前页数值发生改变时触发；
- refresh - 分页组件当前页数值改变后，会重新绘制导航按钮，重新绘制完成时触发；
- destroy - 销毁分页组件时触发；
- reload - 调用 reload() 方法，重新初始化并完成 UI 界面绘制后触发；

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const $pagination = new Pagination()

$pagination.$on('created', function() {
  console.log('$pagination created', this.attr())
})

$pagination.$on('mounted', function() {
  console.log('$pagination mounted', this.attr())
})

$pagination.$on('change', function(page) {
  console.log('$pagination change', page)
})

$pagination.$on('refresh', function() {
  console.log('$pagination refresh', this.attr())
})

$pagination.$on('destroy', function() {
  console.log('$pagination destroy', this.attr())
})

$pagination.$on('reload', function() {
  console.log('$pagination reload', this.attr())
})

$pagination.initialize({
  parent: '#pagination-nav',
  total: 187,
  page: 5,
  theme: 'bordered',
  layout: ['prev', 'pager', 'next']
})
```





## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).

API Documentation Licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)