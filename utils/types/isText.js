import toString from '@/utils/lang/toString'
import isObject from '@/utils/types/isObject'

const isText = (el) => {
  return !!(
    isObject(el) &&
    (toString(el) === '[object Text]' || (el.tagName && el.nodeType === 3))
  )
}

export default isText
