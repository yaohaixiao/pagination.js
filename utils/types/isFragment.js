import toString from '@/utils/lang/toString'
import isObject from '@/utils/types/isObject'

const isFragment = (fragment) => {
  return !!(
    isObject(fragment) && toString(fragment) === '[object DocumentFragment]'
  )
}

export default isFragment
