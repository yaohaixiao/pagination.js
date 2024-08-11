export default subscribe;
/**
 * 订阅主题，并给出处理器函数
 * ==========================================================
 * @method subscribe
 * @param {String} topic - （必须）主题名称
 * @param {Function} handler - （必须）主题的处理器函数
 * @param {Object} [context] - （可选）指定 this 执行上下文
 * @return {String|Boolean} - 唯一的 token 字符串，例如：'guid-1'。
 */
declare function subscribe(topic: string, handler: Function, context?: any): string | boolean;
