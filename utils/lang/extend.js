import hasOwn from '@/utils/lang/hasOwn'

/**
 * 扩展对象
 * ========================================================================
 * @method extend
 * @param {Object} origin
 * @param {Object} source
 */
const extend = (origin, source) => {
  const keys = Object.keys(source)

  keys.forEach((prop) => {
    if (hasOwn(source, prop)) {
      origin[prop] = source[prop]
    }
  })
}

export default extend
