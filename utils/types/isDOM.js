import isObject from '@/utils/types/isObject'
import isHTMLElement from '@/utils/types/isHTMLElement'
import isHTMLCollection from '@/utils/types/isHTMLCollection'
import isFragment from '@/utils/types/isFragment'
import isText from '@/utils/types/isText'

const isDOM = (el) => {
  return !!(
    isObject(el) &&
    (isHTMLElement(el) || isHTMLCollection(el) || isFragment(el) || isText(el))
  )
}

export default isDOM
