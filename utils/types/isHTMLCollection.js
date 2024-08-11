import toString from '@/utils/lang/toString'
import isObject from '@/utils/types/isObject'

/**
 * @method isHTMLCollection
 * @param {Object|NodeList|HTMLCollection} el
 * @return {Boolean}
 */
const isHTMLCollection = (el) => {
  return !!(isObject(el) && toString(el) === '[object NodeList]')
}

export default isHTMLCollection
