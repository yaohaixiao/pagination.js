export default _delete;
/**
 * 删除 DOM 元素缓存的 _listeners 数据
 * ========================================================================
 * @method _delete
 * @param {HTMLElement} el - 要删除 listener 的 DOM 元素
 * @param {String} type - 事件类型（名称）
 * @param {Function} [fn] - 事件处理器回调函数
 */
declare function _delete(el: HTMLElement, type: string, fn?: Function): boolean;
