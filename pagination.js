import cloneDeep from '@/utils/lang/cloneDeep'
import hasOwn from '@/utils/lang/hasOwn'
import extend from '@/utils/lang/extend'
import isBoolean from '@/utils/types/isBoolean'
import isString from '@/utils/types/isString'
import isNumber from '@/utils/types/isNumber'
import isObject from '@/utils/types/isObject'
import hasClass from '@/utils/dom/hasClass'
import addClass from '@/utils/dom/addClass'
import removeClass from '@/utils/dom/removeClass'
import getEl from '@/utils/dom/getEl'
import getAttribute from '@/utils/dom/getAttribute'
import createElement from '@/utils/dom/createElement'
import html from '@/utils/dom/html'
import text from '@/utils/dom/text'
import publish from '@/utils/observer/publish'
import subscribe from '@/utils/observer/subscribe'
import unsubscribe from '@/utils/observer/unsubscribe'
import on from '@/utils/event/on'
import off from '@/utils/event/off'
import stop from '@/utils/event/stop'

import '@/theme/pagination.less'

class Pagination {
  /**
   * 分页组件的构造函数
   * ========================================================================
   * @constructor
   * @param {Object} [options] - 可选，分页组件的初始化配置信息
   * @param {String|HTMLElement} options.parent - 必须，显分页导航的父节点或者节点选择器
   * @param {Number} options.total - 必须，数据总数量
   * @param {Number} [options.size=20] - 可选，每页显示的数量，默认值：20
   * @param {Number} [options.page=1] - 可选，当前页面，默认值：1
   * @param {Number} [options.limit=7] - 可选，页面导航数字按钮的个数，默认值：7
   * @param {String} [options.theme='default'] - 可选，主题：default（默认值）、plain 和 bordered
   * @param {String} [options.align='justify'] - 可选，导航的对齐方式：justify（默认值）、left 和 right
   * @param {Array} [options.layout=['prev','pager','next']] - 可选，导航显示的组件，默认值：['prev','pager','next']
   * @param {String} [options.prevText=''] - 可选，上一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
   * @param {String} [options.nextText=''] - 可选，下一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
   * @param {Boolean} [options.prevIcon=true] - 可选，是否用图标按钮显示上一页按钮，默认值：true
   * @param {Boolean} [options.nextIcon=true] - 可选，是否用图标按钮显示下一页按钮，默认值：true
   * @param {Boolean} [options.disabled=false] - 可选，分页导航是否禁用，默认值：false
   * @param {String} [options.customClass=''] - 可选，用于扩展的自定义导航样式，默认值：''
   * @returns {Pagination}
   */
  constructor(options) {
    this.attrs = {}
    this.$el = null

    if (options) {
      this.initialize(options)
    }

    return this
  }

  /**
   * 分页组件的默认初始化配置信息和属性的方法
   * ========================================================================
   * @returns {Pagination}
   * @private
   */
  _default() {
    const options = Pagination.DEFAULTS

    this.attr(options)
    this.$el = null

    return this
  }

  /**
   * 分页组件的初始化方法，用来初始化配置信息，渲染界面和绑定事件处理器
   * ========================================================================
   * @method initialize
   * @param {Object} options - 必须，分页组件的初始化配置信息
   * @param {String|HTMLElement} options.parent - 必须，显分页导航的父节点或者节点选择器
   * @param {Number} options.total - 必须，数据总数量
   * @param {Number} [options.size=20] - 可选，每页显示的数量，默认值：20
   * @param {Number} [options.page=1] - 可选，当前页面，默认值：1
   * @param {Number} [options.limit=7] - 可选，页面导航数字按钮的个数，默认值：7
   * @param {String} [options.theme='default'] - 可选，主题：default（默认值）、plain 和 bordered
   * @param {String} [options.align='justify'] - 可选，导航的对齐方式：justify（默认值）、left 和 right
   * @param {Array} [options.layout=['prev','pager','next']] - 可选，导航显示的组件，默认值：['prev','pager','next']
   * @param {String} [options.prevText=''] - 可选，上一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
   * @param {String} [options.nextText=''] - 可选，下一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
   * @param {Boolean} [options.prevIcon=true] - 可选，是否用图标按钮显示上一页按钮，默认值：true
   * @param {Boolean} [options.nextIcon=true] - 可选，是否用图标按钮显示下一页按钮，默认值：true
   * @param {Boolean} [options.disabled=false] - 可选，分页导航是否禁用，默认值：false
   * @param {String} [options.customClass=''] - 可选，用于扩展的自定义导航样式，默认值：''
   * @returns {Pagination}
   */
  initialize(options) {
    this._default().attr(options)

    // 添加 mounted 事件
    this.$emit('created')

    this.render().addListeners()

    return this
  }

  /**
   * 获取或者设置分页组件的配置信息：
   * 1. 不传递任何参数，用以获取所有配置信息；
   * 2. 仅传递 prop 参数：
   *    1. prop 参数为字符串类型，用来获取某个配置信息的值；
   *    2. prop 参数为对象类型，用来设置多个配置信息；
   * 3. 传递 prop 和 value 参数，用来设置某个配置信息；
   * ========================================================================
   * @method attr
   * @param {String|Object} [prop] - 可选，参数为字符串类型，希望获取的获取某个配置信息的名称；
   *                                 参数为对象类型，用来设置多个配置信息；
   * @param {String|Number|Boolean|Array} [value] - 可选，用来设置 prop 配置参数信息的值；
   * @returns {*|{}|Pagination}
   */
  attr(prop, value) {
    const attrs = this.attrs

    if (isString(prop)) {
      // 只能扩展 attrs 中已有的属性
      if (value && hasOwn(attrs, prop)) {
        // 更新单个配置信息
        attrs[prop] = value
        return this
      }

      // 只传递 prop 参数，则返回对应的属性值
      return attrs[prop]
    } else if (isObject(prop)) {
      // 批量更新配置信息
      extend(attrs, prop)

      return this
    } else if (arguments.length === 0) {
      // 不传递参数，直接返回整个
      return attrs
    }

    return this
  }

  /**
   * 用来设置 total 配置参数，或者获取 total 配置参数的值：
   * 1. 传递 total 参数，用来设置 total 配置信息的值；
   * 2. 不传递则用以获取 total 配置信息的值；
   * ========================================================================
   * @method total
   * @param {Number} [total] - 可选，传递 total 参数，用来设置 total 配置信息的值；
   *                           不传递则用以获取 total 配置信息的值；
   * @returns {Number|Pagination}
   */
  total(total) {
    if (isNumber(total) && total) {
      this.attr('total', total)
      this.refresh()
    } else {
      return this.attr('total')
    }

    return this
  }

  /**
   * 用来设置 page 配置参数，或者获取 page 配置参数的值：
   * 1. 传递 page 参数，用来设置 page 配置信息的值；
   * 2. 不传递则用以获取 page 配置信息的值；
   * ========================================================================
   * @method page
   * @param {Number} [page] - 可选，传递 page 参数，用来设置 page 配置信息的值；
   *                          不传递则用以获取 page 配置信息的值；
   * @returns {*|{}|Pagination}
   */
  page(page) {
    const total = this.total()

    if (isNumber(page) && page && page <= total) {
      this.attr('page', page)
      this.refresh()
    } else {
      return this.attr('page')
    }

    return this
  }

  /**
   * 用来设置 size 配置参数，或者获取 size 配置参数的值：
   * 1. 传递 size 参数，用来设置 size 配置信息的值；
   * 2. 不传递则用以获取 size 配置信息的值；
   * ========================================================================
   * @method size
   * @param {Number} [size] - 可选，传递 size 参数，用来设置 size 配置信息的值；
   *                          不传递则用以获取 size 配置信息的值；
   * @returns {Number|Pagination}
   */
  size(size) {
    const total = this.total()

    if (isNumber(size) && size && size <= total) {
      this.attr('size', size)
      this.refresh()
    } else {
      return this.attr('size')
    }

    return this
  }

  /**
   * 用来设置 limit 配置参数，或者获取 limit 配置参数的值：
   * 1. 传递 limit 参数，用来设置 limit 配置信息的值；
   * 2. 不传递则用以获取 limit 配置信息的值；
   * ========================================================================
   * @method limit
   * @param {Number} [limit] - 可选，传递 limit 参数，用来设置 limit 配置信息的值；
   *                           不传递则用以获取 limit 配置信息的值；
   * @returns {Number|Pagination}
   */
  limit(limit) {
    if (isNumber(limit) && limit && limit >= 5 && limit <= 13) {
      this.attr('limit', limit)
      this.refresh()
    } else {
      return this.attr('limit')
    }

    return this
  }

  /**
   * 用来设置 theme 配置参数，或者获取 theme 配置参数的值：
   * 1. 传递 theme 参数，用来设置 theme 配置信息的值；
   * 2. 不传递则用以获取 theme 配置信息的值；
   * ========================================================================
   * @method theme
   * @param {String} [theme] - 可选，传递 theme 参数，用来设置 theme 配置信息的值；
   *                           不传递则用以获取 theme 配置信息的值；
   * @returns {Number|Pagination}
   */
  theme(theme) {
    const THEMES = ['default', 'plain', 'bordered']

    if (isString(theme) && theme && THEMES.includes(theme)) {
      this.attr('theme', theme)
      this.refresh()
    } else {
      return this.attr('theme')
    }

    return this
  }

  /**
   * 用来设置 align 配置参数，或者获取 align 配置参数的值：
   * 1. 传递 align 参数，用来设置 align 配置信息的值；
   * 2. 不传递则用以获取 align 配置信息的值；
   * ========================================================================
   * @method align
   * @param {String} [align] - 可选，传递 align 参数，用来设置 align 配置信息的值；
   *                           不传递则用以获取 align 配置信息的值；
   * @returns {Number|Pagination}
   */
  align(align) {
    const ALIGNS = ['default', 'plain', 'bordered']

    if (isString(align) && align && ALIGNS.includes(align)) {
      this.attr('align', align)
      this.refresh()
    } else {
      return this.attr('align')
    }

    return this
  }

  /**
   * 通过配置参数 total 和 size 的值，计算一共有多少页
   * ========================================================================
   * @method pages
   * @returns {Number}
   */
  pages() {
    const total = this.attr('total')
    const size = this.attr('size')

    return Math.ceil(total / size)
  }

  /**
   * 用来设置 disabled 配置参数，或者获取 disabled 配置参数的值：
   * 1. 传递 disabled 参数，用来设置 disabled 配置信息的值；
   * 2. 不传递则用以获取 disabled 配置信息的值；
   * ========================================================================
   * @method disabled
   * @param {Boolean} [disabled] - 可选，传递 disabled 参数，用来设置 disabled 配置信息的值；
   *                               不传递则用以获取 disabled 配置信息的值；
   * @returns {Boolean|Pagination}
   */
  disabled(disabled) {
    if (isBoolean(disabled)) {
      this.attr('disabled', disabled)
      this.refresh()
    } else {
      return this.attr('disabled')
    }
  }

  /**
   * 通过配置参数 pages 和当前页面 page 的值，以及 limit 的值，计算当前数值按钮的显示范围
   * ========================================================================
   * @method range
   * @returns {Array}
   */
  range() {
    const pages = this.pages()
    const page = this.page()
    const limit = this.limit()
    const isQuickNextVisible = this.isQuickNextVisible()
    const range = []
    let i = 1
    let len = 0

    if (limit >= pages) {
      if (pages > 1) {
        i = 2
        len = pages
      }
    } else if (this.isQuickPrevVisible()) {
      i = page - (limit - 3) / 2

      if (i >= pages - limit + 2) {
        i = pages - limit + 2
      }

      if (isQuickNextVisible) {
        len = page + (limit - 3) / 2
      } else {
        len = pages
      }
    } else {
      if (isQuickNextVisible) {
        i = page - (limit - 3) / 2

        if (i <= 2) {
          i = 2
          len = limit - 1
        } else {
          len = page + (limit - 3) / 2
        }
      }
    }

    for (; i < len; i += 1) {
      range.push(i)
    }

    return range
  }

  /**
   * 用来获取显示分页导航的父节点
   * ========================================================================
   * @method parent
   * @returns {HTMLElement}
   */
  parent() {
    return getEl(this.attr('parent'))
  }

  /**
   * 判断分页导航组件是否需要显示上一页按钮
   * ========================================================================
   * @method hasPrev
   * @returns {Boolean}
   */
  hasPrev() {
    const layout = this.attr('layout')
    return layout.includes('prev')
  }

  /**
   * 判断分页导航组件是否需要显示数字导航按钮
   * ========================================================================
   * @method hasPager
   * @returns {Boolean}
   */
  hasPager() {
    const layout = this.attr('layout')
    return layout.includes('pager')
  }

  /**
   * 判断分页导航组件是否需要显示下一页按钮
   * ========================================================================
   * @method hasNext
   * @returns {Boolean}
   */
  hasNext() {
    const layout = this.attr('layout')
    return layout.includes('next')
  }

  /**
   * 判断分页导航组件显示的数字导航按钮中是否需要显示快速到上一组按钮
   * ========================================================================
   * @method isQuickPrevVisible
   * @returns {Boolean}
   */
  isQuickPrevVisible() {
    const page = this.page()
    const limit = this.limit()
    const pages = this.pages()

    return page - (limit - 3) / 2 > 2 && pages > limit
  }

  /**
   * 判断分页导航组件显示的数字导航按钮中是否需要显示快速到下一组按钮
   * ========================================================================
   * @method hasPager
   * @returns {Boolean}
   */
  isQuickNextVisible() {
    const page = this.page()
    const limit = this.limit()
    const pages = this.pages()

    return page + (limit - 3) / 2 < pages - 1 && pages > limit
  }

  /**
   * 用来动态生成上一页按钮
   * ========================================================================
   * @method _createPrev
   * @returns {HTMLElement}
   * @private
   */
  _createPrev() {
    const page = this.page()
    const disabled = this.disabled()
    const theme = this.attr('theme')
    const prevText = this.attr('prevText')
    const prevClassName = ['pagination__prev', `is-${theme}`]
    const prevChildren = []

    // 绘制上一页
    if (isString(prevText) && prevText) {
      // 创建文本内容
      prevClassName.push('is-textual')
      prevChildren.push(text(prevText))
    } else {
      if (isBoolean(prevText)) {
        // 上一页图标
        let iconPrev =
          '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pagination__svg svg-prev"><polygon fill-rule="evenodd" points="9.414 12 16.707 19.293 15.293 20.707 6.586 12 15.293 3.293 16.707 4.707"></polygon></svg>'

        // 创建图标内容
        prevChildren.push(html(`<i class="pagination__icon">${iconPrev}</i>`))
      }
    }

    // 动态创建完整的上一页按钮
    const $prev = createElement(
      'div',
      {
        className: prevClassName.join(' ')
      },
      prevChildren
    )

    // 设置禁用样式
    if (page === 1 || disabled) {
      addClass($prev, 'is-disabled')
    }

    return $prev
  }

  /**
   * 用来动态生成下一页按钮
   * ========================================================================
   * @method _createNext
   * @returns {HTMLElement}
   * @private
   */
  _createNext() {
    const page = this.page()
    const total = this.total()
    const disabled = this.disabled()
    const theme = this.attr('theme')
    const nextText = this.attr('nextText')
    const nextClassName = ['pagination__next', `is-${theme}`]
    const nextChildren = []

    // 绘制下一页
    if (isString(nextText) && nextText) {
      // 创建文本内容
      nextClassName.push('is-textual')
      nextChildren.push(text(nextText))
    } else {
      if (isBoolean(nextText)) {
        // 上一页图标
        let iconNext =
          '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pagination__svg svg-next"><polygon fill-rule="evenodd" points="14.586 12 7.293 4.707 8.707 3.293 17.414 12 8.707 20.707 7.293 19.293"></polygon></svg>'

        // 创建图标内容
        nextChildren.push(html(`<i class="pagination__icon">${iconNext}</i>`))
      }
    }

    // 动态创建完整的下一页按钮
    const $next = createElement(
      'div',
      {
        className: nextClassName.join(' ')
      },
      nextChildren
    )

    // 设置禁用样式
    if (page === total || disabled) {
      addClass($next, 'is-disabled')
    }

    return $next
  }

  /**
   * 用来动态生成单个数字导航按钮
   * ========================================================================
   * @method _createPager
   * @param {Number} value - 必须，按钮要显示的页数数值
   * @param {Number} current - 必须，当前按钮的页数数值
   * @param {Object} [options] - 可选，当前按钮是否为快速到下一组或者上一组按钮
   * @param {Boolean} [options.isQuickPrevVisible=false] - 可选，当前按钮是否为快速到上一组按钮，默认值：false
   * @param {Boolean} [options.isQuickNextVisible=false] - 可选，当前按钮是否为快速到下一组按钮，默认值：false
   * @returns {HTMLElement}
   * @private
   */
  _createPager(value, current, options) {
    const disabled = this.disabled()
    const theme = this.attr('theme')
    const isActive = current === value
    const isQuickPrevVisible = options && options.isQuickPrevVisible
    const isQuickNextVisible = options && options.isQuickNextVisible
    const $children = []
    let className = ['pagination__pager', `is-${theme}`]
    let $child = null

    // 设置当前页样式
    if (isActive) {
      className.push('is-active')
    }

    // 设置应用样式
    if (disabled) {
      className.push('is-disabled')
    }

    // 绘制快速到上下一组按钮
    if (isQuickPrevVisible || isQuickNextVisible) {
      // 省略号图标
      let iconMore =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pagination__svg svg-more"><path fill-rule="evenodd" d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path></svg>'

      // 上下一组快速按钮是没有边框的
      className = className.filter((name) => name !== 'is-bordered')

      if (isQuickPrevVisible) {
        // 快速到上一组图标
        let iconPrev =
          '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pagination__svg svg-quick-prev"><path fill-rule="evenodd" d="M12.7071068,17.2928932 L11.2928932,18.7071068 L4.58578644,12 L11.2928932,5.29289322 L12.7071068,6.70710678 L7.41421356,12 L12.7071068,17.2928932 Z M12.4142136,12 L17.7071068,17.2928932 L16.2928932,18.7071068 L9.58578644,12 L16.2928932,5.29289322 L17.7071068,6.70710678 L12.4142136,12 Z"></path></svg>'

        className.push('quick-prev')

        // 动态创建 快速到上一组图标 按钮
        $child = html(`<i class="pagination__icon">${iconMore}${iconPrev}</i>`)
      } else if (isQuickNextVisible) {
        // 快速到下一组图标
        let iconNext =
          '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pagination__svg svg-quick-next"><path fill-rule="evenodd" d="M11.2928932,6.70710678 L12.7071068,5.29289322 L19.4142136,12 L12.7071068,18.7071068 L11.2928932,17.2928932 L16.5857864,12 L11.2928932,6.70710678 Z M6.29289322,6.70710678 L7.70710678,5.29289322 L14.4142136,12 L7.70710678,18.7071068 L6.29289322,17.2928932 L11.5857864,12 L6.29289322,6.70710678 Z"></path></svg>'

        className.push('quick-next')

        // 动态创建 快速到下一组图标 按钮
        $child = html(`<i class="pagination__icon">${iconMore}${iconNext}</i>`)
      }
    } else {
      $child = text(value.toString())
    }

    $children.push($child)

    // 动态创建完整的数字导航按钮
    return createElement(
      'li',
      {
        className: className.join(' '),
        'data-page': value
      },
      $children
    )
  }

  /**
   * 用来动态生成所有的数字分页导航按钮
   * ========================================================================
   * @method _createPages
   * @returns {HTMLElement|null}
   * @private
   */
  _createPages() {
    const pages = this.pages()
    const page = this.page()
    const limit = this.limit()
    const range = this.range()
    const disabled = this.disabled()
    const theme = this.attr('theme')
    const isQuickPrevVisible = this.isQuickPrevVisible()
    const isQuickNextVisible = this.isQuickNextVisible()
    const $fragment = document.createDocumentFragment()

    // 绘制第1页
    if (pages > 0) {
      $fragment.appendChild(this._createPager(1, page))
    } else {
      return null
    }

    // 绘制快速到上一组按钮
    if (isQuickPrevVisible) {
      let prevPage = page - (limit - 2)

      prevPage = prevPage >= 1 ? prevPage : 1

      $fragment.appendChild(
        this._createPager(prevPage, page, { isQuickPrevVisible })
      )
    }

    // 绘制当前页面可以显示的数字按钮
    if (range.length > 0) {
      range.forEach((value, i) => {
        if (i <= range.length - 1) {
          $fragment.appendChild(this._createPager(value, page))
        }
      })
    }

    // 绘制快速到下一组按钮
    if (isQuickNextVisible) {
      let nextPage = page + (limit - 2)

      nextPage = nextPage <= pages ? nextPage : pages

      $fragment.appendChild(
        this._createPager(nextPage, page, { isQuickNextVisible })
      )
    }

    // 绘制最后1页
    if (pages > 1) {
      $fragment.appendChild(this._createPager(pages, page))
    }

    // 动态创建数字按钮的导航列表
    const $pages = createElement(
      'ul',
      {
        className: `pagination__list theme-${theme}`
      },
      [$fragment]
    )

    // 设置禁用样式
    if (disabled) {
      addClass($pages, 'is-disabled')
    }

    return $pages
  }

  /**
   * 向上翻1页
   * ========================================================================
   * @method prev
   * @returns {Pagination}
   */
  prev() {
    const disabled = this.disabled()
    let page = this.page()

    if (disabled) {
      return this
    }

    page -= 1

    if (page <= 1) {
      page = 1
    }

    this.change(page)

    return this
  }

  /**
   * 向上翻1页
   * ========================================================================
   * @method prev
   * @returns {Pagination}
   */
  next() {
    const disabled = this.disabled()
    const pages = this.pages()
    let page = this.page()

    if (disabled) {
      return this
    }

    page += 1

    if (page >= pages) {
      page = pages
    }

    this.change(page)

    return this
  }

  /**
   * 翻到第几页
   * ========================================================================
   * @method change
   * @param {Number} page - 要跳转的页面数值
   * @returns {Pagination}
   */
  change(page) {
    const pages = this.pages()
    const disabled = this.disabled()
    let current = isNumber(page) ? page : this.page()

    if (disabled) {
      return this
    }

    if (current <= 1) {
      current = 1
    } else if (current >= pages) {
      current = pages
    }

    // 添加 change 事件
    this.$emit('change', current)

    this.page(current)

    return this
  }

  /**
   * 绘制分页导航的 UI 界面
   * ========================================================================
   * @method render
   * @returns {Pagination}
   */
  render() {
    const $parent = this.parent()

    if (!$parent) {
      return this
    }

    const align = this.attr('align')
    const theme = this.attr('theme')
    const customClass = this.attr('customClass')
    const $fragment = document.createDocumentFragment()

    if (this.hasPrev()) {
      $fragment.appendChild(this._createPrev())
    }

    if (this.hasPager()) {
      $fragment.appendChild(this._createPages())
    }

    if (this.hasNext()) {
      $fragment.appendChild(this._createNext())
    }

    // 绘制完整分页组件
    const $el = createElement(
      'div',
      {
        className: `pagination theme-${theme} align_${align}`
      },
      [$fragment]
    )

    // 设置自定义样式
    if (customClass) {
      addClass($el, customClass)
    }

    // 设置禁用样式
    if (this.disabled()) {
      addClass($el, 'is-disabled')
    }

    this.$el = $el

    // 绘制完成
    $parent.appendChild($el)

    // 添加 mounted 事件
    this.$emit('mounted')

    return this
  }

  /**
   * （切换页面后）刷新分页导航的 UI 界面
   * ========================================================================
   * @method refresh
   * @returns {Pagination}
   */
  refresh() {
    const $el = this.$el
    const $prev = getEl('.pagination__prev', $el)
    const $pages = getEl('.pagination__list', $el)
    const $next = getEl('.pagination__next', $el)
    const page = this.page()
    const pages = this.pages()

    if (pages < 1) {
      return this
    }

    // 更新上一页按钮界面
    if (this.hasPrev()) {
      if (page === 1) {
        addClass($prev, 'is-disabled')
      } else {
        removeClass($prev, 'is-disabled')
      }
    } else {
      if ($prev) {
        $el.removeChild($prev)
      }
    }

    // 更新数字按钮导航列表界面
    if (this.hasPager()) {
      $el.replaceChild(this._createPages(), $pages)
    }

    // 更新下一页按钮界面
    if (this.hasNext() && pages > 1) {
      if (page === pages) {
        addClass($next, 'is-disabled')
      } else {
        removeClass($next, 'is-disabled')
      }
    } else {
      if ($next) {
        $el.removeChild($next)
      }
    }

    // 添加 refresh 事件
    this.$emit('refresh')

    return this
  }

  /**
   * 销毁界面并移除导航按钮绑定的事件处理器
   * ========================================================================
   * @method destroy
   * @returns {Pagination}
   */
  destroy() {
    const $parent = this.parent()

    this.removeListeners()

    if ($parent) {
      $parent.removeChild(this.$el)
    }

    this._default()

    // 添加 destroy 事件
    this.$emit('destroy')

    return this
  }

  /**
   * 整体重置分页导航界面
   * ========================================================================
   * @method reload
   * @param {Object} [options] - 可选，分页组件的初始化配置信息。如果不传递 options 参数，则使用之前的配置或者默认配置
   * @param {String|HTMLElement} options.parent - 必须，显分页导航的父节点或者节点选择器
   * @param {Number} options.total - 必须，数据总数量
   * @param {Number} [options.size=20] - 可选，每页显示的数量，默认值：20
   * @param {Number} [options.page=1] - 可选，当前页面，默认值：1
   * @param {Number} [options.limit=7] - 可选，页面导航数字按钮的个数，默认值：7
   * @param {String} [options.theme='default'] - 可选，主题：default（默认值）、plain 和 bordered
   * @param {String} [options.align='justify'] - 可选，导航的对齐方式：justify（默认值）、left 和 right
   * @param {Array} [options.layout=['prev','pager','next']] - 可选，导航显示的组件，默认值：['prev','pager','next']
   * @param {String} [options.prevText=''] - 可选，上一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
   * @param {String} [options.nextText=''] - 可选，下一页按钮的显示文本。如果配置文字，就用文字按钮显示，否认使用图标按钮
   * @param {Boolean} [options.prevIcon=true] - 可选，是否用图标按钮显示上一页按钮，默认值：true
   * @param {Boolean} [options.nextIcon=true] - 可选，是否用图标按钮显示下一页按钮，默认值：true
   * @param {Boolean} [options.disabled=false] - 可选，分页导航是否禁用，默认值：false
   * @param {String} [options.customClass=''] - 可选，用于扩展的自定义导航样式，默认值：''
   * @returns {Pagination}
   */
  reload(options) {
    let attrs = cloneDeep(this.attr())

    this.destroy()

    if (options) {
      this.attr(options)
      attrs = this.attr()
    }

    this.initialize(attrs)

    // 添加 reload 事件
    this.$emit('reload')

    return this
  }

  /**
   * （消息订阅发布模式）发布消息
   * ========================================================================
   * @method $emit
   * @param {String} topic - 必须，发布消息的主题名称
   * @param {*} [data] - 可选，发布消息时传递的数据
   * @returns {Pagination}
   */
  $emit(topic, data) {
    publish(topic, data)
    return this
  }

  /**
   * （消息订阅发布模式）订阅消息，并指定接受到消息后的回调处理函数
   * ========================================================================
   * @method $on
   * @param {String} topic - 必须，订阅消息的主题名称
   * @param {Function} callback - 必须，接受到消息后的回调处理函数
   * @returns {Pagination}
   */
  $on(topic, callback) {
    subscribe(topic, callback, this)
    return this
  }

  /**
   * （消息订阅发布模式）取消订阅消息
   * ========================================================================
   * @method $off
   * @param {String} topic - 必须，订阅消息的主题名称
   * @returns {Pagination}
   */
  $off(topic) {
    unsubscribe(topic)
    return this
  }

  _onPrev(evt) {
    const $prev = evt.delegateTarget

    if (hasClass($prev, 'is-disabled')) {
      return this
    }

    stop(evt)
    this.prev()

    return this
  }

  _onChange(evt) {
    const $pager = evt.delegateTarget
    const page = Number(getAttribute($pager, 'data-page'))

    if (hasClass($pager, 'is-disabled') || hasClass($pager, 'is-active')) {
      return this
    }

    stop(evt)
    this.change(page)

    return this
  }

  _onNext(evt) {
    const $next = evt.delegateTarget

    if (hasClass($next, 'is-disabled')) {
      return this
    }

    stop(evt)
    this.next()

    return this
  }

  addListeners() {
    const $el = this.$el

    if (this.hasPrev()) {
      on($el, '.pagination__prev', 'click', this._onPrev, this, true)
    }

    if (this.hasPager()) {
      on($el, '.pagination__pager', 'click', this._onChange, this, true)
    }

    if (this.hasNext()) {
      on($el, '.pagination__next', 'click', this._onNext, this, true)
    }

    return this
  }

  removeListeners() {
    const $el = this.$el

    if (this.hasPrev()) {
      off($el, 'click', this._onPrev)
    }

    if (this.hasPager()) {
      off($el, 'click', this._onChange)
    }

    if (this.hasNext()) {
      off($el, 'click', this._onNext)
    }

    return this
  }
}

Pagination.DEFAULTS = (() => {
  const OPTIONS = {
    parent: '#pagination',
    total: 0,
    size: 20,
    page: 1,
    limit: 7,
    theme: 'default',
    align: 'justify',
    layout: ['prev', 'pager', 'next'],
    prevText: false,
    nextText: false,
    disabled: false,
    customClass: ''
  }

  return cloneDeep(OPTIONS)
})()

export default Pagination
