export default cloneDeep;
/**
 * 深拷贝对象函数
 * ========================================================================
 * @methods cloneDeep
 * @param {Object} obj - 深拷贝的对象
 * @returns {Array|Object|*}
 *
 * @example
 * const arr = cloneDeep([2,3,4,6])
 * => [2,3,4,6]
 */
declare function cloneDeep(obj: any): any[] | any | any;
