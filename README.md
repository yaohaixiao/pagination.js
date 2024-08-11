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
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/pagination.js/pagination.min.js"></script>
```

#### Local

```html
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


## Usage

pagination.js 有着非常丰富的配置方式，支持设置主题，支持配置导航按钮布局配置等各种灵活的配置。

### Theme

pagination.js 支持导航主题配置，目前支持 default、plain 和 bordered 3 种主题。

#### default theme

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128

new Pagination(options)
```

#### plain theme

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.theme = 'plain'

new Pagination(options)
```

#### bordered theme

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.theme = 'bordered'

new Pagination(options)
```

### Layout

pagination.js 支持配置导航按钮布局配置，支持上/下一页导航和数字导航的布局组合配置。


#### full layout

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.layout = ['prev', 'pager', 'next']

new Pagination(options)
```


#### prev & next layout only

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.layout = ['prev', 'next']

new Pagination(options)
```


#### pager layout only

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
options.layout = ['pager']

new Pagination(options)
```

### Page

pagination.js 可以配置 page 参数，用来控制导航按钮的当前页。

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
// 默认选中第5页
options.page = 5 // 默认值：1

const pagination = new Pagination(options)

// 或者通过 page() 方法设置
pagination.page(3)
```


### Size

pagination.js 可以配置 size 参数，用来控制导航按钮页数数量。

```js
import Pagination from '@yaohaixiao/pagination.js/pagination'

const options = Pagination.DEFAULTS

options.parent = '#pagination-container'
options.total = 128
// pages = Math.ceil(128/25)
options.size = 25 // 默认值：20

const pagination = new Pagination(options)

// 或者通过 size() 方法设置
pagination.size(30)
```


### Limit

pagination.js 可以配置 limit 参数，用来控制导航数字按钮的数量。

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

const pagination = new Pagination(options)

// 或者通过 limit() 方法设置
pagination.limit(7)
```


### Disabled

pagination.js 可以配置 disabled 参数，用来控制分页导航是否可用。

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


const pagination = new Pagination(options)

// 或者通过 disabled() 方法设置，启用分页导航
pagination.disabled(false)
```


### Events

pagination.js 提供丰富的定义事件订阅，目前提供的事件有 created、mounted、change、refresh、destroy 和 reload。

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