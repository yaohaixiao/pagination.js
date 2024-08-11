import toString from '@/utils/lang/toString'

/**
 * 判断数据是否为函数类型
 * ==========================================================
 * @method isFunction
 * @param {Function} fn - 需要判断的数据
 * @return {Boolean} 返回检测结果：是函数类型，返回 true，否则返回false
 */
const isFunction = (fn) => {
  return fn && toString(fn) === '[object Function]'
}

export default isFunction
