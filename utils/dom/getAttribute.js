import isHTMLElement from '@/utils/types/isHTMLElement'
import isString from '@/utils/types/isString'
import { FROM_ELEMENT_TAGS } from '@/utils/dom/enum'

/**
 * 获取 DOM 元素的某个 HTML 属性的值
 * ========================================================================
 * @method getAttribute
 * @param {HTMLElement} el
 * @param {String} attr
 * @return {String|Boolean}
 */
const getAttribute = (el, attr) => {
  let tagName

  if (!isHTMLElement(el) || !isString(attr)) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  switch (attr) {
    case 'className':
      return el.getAttribute('class')
    case 'htmlFor':
      return el.getAttribute('for')
    case 'style':
      return el.style.cssText
    case 'value':
      if (FROM_ELEMENT_TAGS.indexOf(tagName) > -1) {
        return el.value
      } else {
        return el.getAttribute(attr)
      }
    default:
      return el.getAttribute(attr)
  }
}

export default getAttribute
