export default getListeners;
/**
 * 获取 DOM 元素（type 事件类型）事件绑定信息
 * ========================================================================
 * 如果设置了事件类型 type， 则返回指定类型的事件绑定信息，否则返回所有事件绑定信息
 * ========================================================================
 * @methods getListeners
 * @param {HTMLElement} el - （必须）要获取事件绑定信息的 DOM 元素
 * @param {String} [type] - （可选）事件类型
 * @returns {Array} - 已绑定的事件信息
 */
declare function getListeners(el: HTMLElement, type?: string): any[];
