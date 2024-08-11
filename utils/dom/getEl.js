import isBoolean from '@/utils/types/isBoolean'
import isHTMLElement from '@/utils/types/isHTMLElement'

/**
 * 返回与指定的选择器组匹配的文档中的 DOM 元素或者 DOM 元素列表。
 * ========================================================================
 * @method  getEl
 * @param {String} selector
 * @param {HTMLElement|Boolean} [el]
 * @param {Boolean} [multiple]
 * @return {NodeListOf<*>|HTMLElement|*}
 */
const getEl = (selector, el, multiple = false) => {
  const $el = isHTMLElement(el) ? el : document
  let isMultiple = multiple

  if (isBoolean(el)) {
    isMultiple = el
  }

  if (isMultiple) {
    return $el.querySelectorAll(selector)
  }

  return $el.querySelector(selector)
}

export default getEl
