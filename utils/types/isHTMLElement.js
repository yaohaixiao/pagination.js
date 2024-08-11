import isObject from '@/utils/types/isObject'

/**
 * 检测数据是否为 HTMLElement DOM 节点
 * ========================================================================
 * @method isHTMLElement
 * @param {*} o
 * @returns {boolean}
 */
const isHTMLElement = (o) => {
  return !!(isObject(o) && o.nodeName && o.tagName && o.nodeType === 1)
}

export default isHTMLElement
