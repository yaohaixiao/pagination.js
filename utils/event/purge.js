import isString from '@/utils/types/isString'
import isHTMLElement from '@/utils/types/isHTMLElement'
import getListeners from '@/utils/event/getListeners'
import _off from '@/utils/event/_off'

/**
 * 销毁（type 类型的）代理事件绑定
 * ========================================================================
 * 1. 设置了事件类型 type，则销毁指定类型的事件绑定，否则清除所有代理事件绑定
 * 2. recurse 设置为 true，递归销毁子节点全部事件绑定
 * ========================================================================
 * @method purge
 * @param {HTMLElement|String} el - （必须）DOM 元素或者其选择器
 * @param {String|Boolean} type - （必须）事件类型
 * @param {Boolean} [recurse] - （可选）是否递归销毁子节点所有事件绑定
 */
const purge = function (el, type, recurse = false) {
  const $element = isString(el) ? document.querySelector(el) : el
  const $children = $element.childNodes
  const listeners = getListeners($element, type)

  listeners.forEach((listener) => {
    _off($element, listener.type, listener.fn)
  })

  if (
    (recurse || type === true || arguments.length === 1) &&
    $element &&
    $children
  ) {
    $children.forEach(($child) => {
      if (isHTMLElement($child)) {
        purge($child, type, recurse)
      }
    })
  }
}

export default purge
