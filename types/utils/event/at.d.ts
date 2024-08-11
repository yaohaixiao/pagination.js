export default at;
/**
 * 绑定事件
 * ========================================================================
 * @method at
 * @param {HTMLElement|String|Object} el - （必须）绑定代理事件的 DOM 节点
 * @param {String|Function} type - （必须）事件类型或者事件处理器回调函数
 * @param {Function|Object} fn - （必须） 事件处理器回调函数或者传递给事件处理器回调函数的数据对象
 * @param {Object|Boolean} [data] - （可选）传递给事件处理器回调函数的数据对象或者事件处理器回调函数的 this 上下文指向，
 * @param {Object|Boolean} [context] - （可选）事件处理器回调函数的 this 上下文指向，或者是否仅触发一次
 * 当设置为 true 时，则事件处理器回调函数的 this 上下文指向为 data 对象
 * @param {Boolean} once - （可选）是否仅触发一次
 */
declare function at(el: HTMLElement | string | any, type: string | Function, fn: Function | any, data?: any | boolean, context?: any | boolean, once?: boolean): boolean;
